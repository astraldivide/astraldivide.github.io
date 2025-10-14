import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

interface ProgressIndicatorProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
}

export function ProgressIndicator({ sections, activeSection, onSectionClick }: ProgressIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="h-1 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-serif text-lg font-bold">Math Matters</span>
            <div className="hidden md:flex items-center gap-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => onSectionClick(index)}
                  data-testid={`button-section-${index}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeSection 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover-elevate'
                  }`}
                  aria-label={`Go to ${section}`}
                />
              ))}
            </div>
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
