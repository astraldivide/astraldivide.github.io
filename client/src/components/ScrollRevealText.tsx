import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  beforeText: string;
  afterText: string;
  highlightColor?: string;
}

export function ScrollRevealText({ beforeText, afterText, highlightColor = "text-primary" }: ScrollRevealTextProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.7;
      const end = windowHeight * 0.3;
      
      if (rect.top <= start && rect.top >= end) {
        const scrollProgress = (start - rect.top) / (start - end);
        setProgress(Math.min(Math.max(scrollProgress, 0), 1));
      } else if (rect.top < end) {
        setProgress(1);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-center leading-tight">
          <span 
            className={`inline-block transition-all duration-700 ${
              progress > 0.5 ? 'opacity-0 scale-95 line-through' : 'opacity-100'
            }`}
          >
            {beforeText}
          </span>
          <span 
            className={`inline-block transition-all duration-700 ${highlightColor} ${
              progress > 0.5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
            }`}
          >
            {afterText}
          </span>
        </h2>
      </div>
    </div>
  );
}
