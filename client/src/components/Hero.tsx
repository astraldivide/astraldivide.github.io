import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/stock_images/golden_ratio_fibonac_b945c3c4.jpg";

const heroTexts = [
  { myth: '"You never use maths in real life!"', reality: "You use maths every single day." },
  { myth: '"Maths is just numbers!"', reality: "Maths is the language of the universe." },
  { myth: '"When will I ever need this?"', reality: "It's already saved your life." },
];

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: scrolled ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-20">
        <div className="max-w-3xl ml-auto">
          <div className="mb-12 transition-all duration-700">
            <p className={`text-xl md:text-2xl font-body italic text-muted-foreground mb-4 transition-opacity duration-500 ${scrolled ? 'opacity-30' : 'opacity-100'}`}>
              {heroTexts[textIndex].myth}
            </p>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-tight transition-all duration-700 ${scrolled ? 'text-primary' : 'text-foreground'}`}>
              {heroTexts[textIndex].reality}
            </h1>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="h-px bg-border flex-1"></div>
            <button
              onClick={scrollToContent}
              data-testid="button-scroll-start"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to content"
            >
              <span className="text-sm uppercase tracking-wider font-sans">Explore</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
