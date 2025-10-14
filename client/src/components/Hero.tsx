import { ChevronDown } from "lucide-react";
import heroImage from "@assets/stock_images/abstract_mathematica_0d2b5b84.jpg";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-up text-foreground">
          How is maths used to solve real-world problems?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Discover where mathematics has created something new or solved an important issue
        </p>
        
        <button
          onClick={scrollToContent}
          data-testid="button-scroll-start"
          className="animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm uppercase tracking-wider">Begin Journey</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
