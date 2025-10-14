import { useEffect, useRef, useState } from "react";

interface ScrollSectionProps {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  imageAlt: string;
  equation?: string;
  reverse?: boolean;
}

export function ScrollSection({
  id,
  title,
  subtitle,
  problem,
  solution,
  impact,
  image,
  imageAlt,
  equation,
  reverse = false,
}: ScrollSectionProps) {
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
      id={id}
      ref={sectionRef}
      className="min-h-screen py-20 md:py-32"
      data-testid={`section-${id}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={`space-y-8 ${reverse ? 'md:order-2' : ''}`}>
            <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {subtitle}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">
                {title}
              </h2>
            </div>

            <div className={`space-y-6 ${isVisible ? 'animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent-foreground">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">{problem}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">The Mathematical Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{solution}</p>
                {equation && (
                  <div className="mt-4 p-4 bg-muted rounded-lg font-mono text-sm overflow-x-auto">
                    {equation}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-chart-3">Real-World Impact</h3>
                <p className="text-muted-foreground leading-relaxed">{impact}</p>
              </div>
            </div>
          </div>

          <div className={`${reverse ? 'md:order-1' : ''} ${isVisible ? 'animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
