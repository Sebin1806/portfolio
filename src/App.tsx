import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebGLOceanBackground } from "@/components/WebGLOceanBackground";
import Index from "./pages/Index";
import Certificates from "./pages/Certificates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const loadingText = "Loading...";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#080312] flex items-center justify-center">
      <div className="loader-wrapper">
        <div className="loader" />
        <div className="letter-wrapper">
          {loadingText.split("").map((char, i) => (
            <span key={i} className="loader-letter text-white text-lg font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {loading && <Loader onFinish={() => setLoading(false)} />}
        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <WebGLOceanBackground />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
