import React, { useEffect, useRef, useState } from 'react';

export type RevealAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'blur-in'
  | 'rotate-in'
  | 'scale-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number;       // ms delay before animation starts
  duration?: number;    // ms animation duration
  threshold?: number;   // 0-1, how much of element must be visible
  once?: boolean;       // only animate once
  className?: string;
  as?: React.ElementType;
  staggerIndex?: number; // for staggered children (adds incremental delay)
  staggerDelay?: number; // ms between each stagger step
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 400,
  threshold = 0.08,
  once = true,
  className = '',
  as: Tag = 'div',
  staggerIndex = 0,
  staggerDelay = 45,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const totalDelay = delay + staggerIndex * staggerDelay;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as any}
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${totalDelay}ms`,
        transitionDuration: `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

/**
 * Hook version for when you need more control
 */
export function useScrollReveal(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.15, once = true } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
