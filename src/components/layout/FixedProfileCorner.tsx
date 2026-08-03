import React from 'react';

export const FixedProfileCorner: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 z-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
      
      {/* Background Profile Photo (Slightly Reduced Size, Behind Cards & Text) */}
      <div className="relative pointer-events-none">
        <img
          src="/sebin-standing-no-bg.png"
          alt="Sebin S Background Portrait"
          className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[390px] max-w-[40vw] h-auto object-contain object-right-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-70 sm:opacity-80 md:opacity-88 lg:opacity-95 filter brightness-[1.04] contrast-[1.03] pointer-events-none transform translate-y-1 transition-all duration-500"
          loading="eager"
        />
      </div>

    </div>
  );
};
