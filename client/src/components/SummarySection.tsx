import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

export function SummarySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="summary"
      ref={sectionRef}
      className="min-h-screen py-24 lg:py-40"
      data-testid="section-summary"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className={`space-y-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
              Mathematics isn't just abstract theory
            </h2>
            <p className="text-2xl md:text-3xl font-body text-muted-foreground italic">
              It's the invisible architecture of our modern world
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
            <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg">
              <h3 className="text-xl font-serif font-bold mb-4">From Theory to Reality</h3>
              <p className="font-body text-lg leading-relaxed">
                Fourier's harmonic analysis, developed to study heat flow, now powers every medical scan. Einstein's "useless" relativity theory guides billions to their destinations daily.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-lg">
              <h3 className="text-xl font-serif font-bold mb-4">Hidden in Plain Sight</h3>
              <p className="font-body text-lg leading-relaxed">
                Every secure website, weather forecast, medical diagnosis, and GPS direction relies on mathematical innovations—often centuries old—working silently behind the scenes.
              </p>
            </div>
          </div>

          <div className={`relative bg-card p-12 rounded-2xl border-2 border-card-border ${isVisible ? 'animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <blockquote className="relative z-10 mt-8">
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-6">
                "Mathematics is the language in which God has written the universe."
              </p>
              <footer className="text-lg font-sans text-muted-foreground">
                — Galileo Galilei
              </footer>
            </blockquote>
          </div>

          <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl font-body leading-relaxed max-w-3xl mx-auto">
              The next time someone asks "when will I ever use this?"—remember: mathematicians have been solving tomorrow's problems for centuries. Their work saves lives, connects continents, and shapes the future in ways we're only beginning to understand.
            </p>
            
            <div className="pt-8">
              <p className="text-lg font-sans text-primary font-medium">
                What mathematical breakthrough will change your world next?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
