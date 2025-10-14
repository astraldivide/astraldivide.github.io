import { useEffect, useRef, useState } from "react";

interface ScrollSectionProps {
  id: string;
  number: string;
  title: string;
  era: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  imageAlt: string;
  equation?: string;
  inventor?: string;
  inventorYears?: string;
  layout?: 'left' | 'right' | 'center';
}

export function ScrollSection({
  id,
  number,
  title,
  era,
  problem,
  solution,
  impact,
  image,
  imageAlt,
  equation,
  inventor,
  inventorYears,
  layout = 'left',
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

  const gridLayout = layout === 'left' 
    ? 'grid-cols-1 lg:grid-cols-5'
    : layout === 'right'
    ? 'grid-cols-1 lg:grid-cols-5'
    : 'grid-cols-1';

  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen py-24 lg:py-40"
      data-testid={`section-${id}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid ${gridLayout} gap-12 lg:gap-16`}>
          {layout === 'left' && (
            <>
              <div className="lg:col-span-2 space-y-8">
                <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-bold font-serif text-primary/20">{number}</span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-1">{era}</p>
                      <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">{title}</h2>
                    </div>
                  </div>
                  {inventor && (
                    <p className="text-sm font-sans text-accent italic">— {inventor} {inventorYears}</p>
                  )}
                </div>

                <div className={`relative ${isVisible ? 'animate-scale-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8 font-body">
                <div className={`prose prose-lg max-w-none ${isVisible ? 'animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:font-serif">
                    {problem}
                  </p>
                </div>

                <div className={`bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg ${isVisible ? 'animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <h3 className="text-sm uppercase tracking-wider font-sans text-accent mb-3">The Mathematical Breakthrough</h3>
                  <p className="text-lg leading-relaxed">{solution}</p>
                  {equation && (
                    <div className="mt-4 p-4 bg-background/50 rounded font-mono text-sm overflow-x-auto">
                      {equation}
                    </div>
                  )}
                </div>

                <div className={`${isVisible ? 'animate-fade-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <h3 className="text-sm uppercase tracking-wider font-sans text-primary mb-3">Real-World Impact</h3>
                  <p className="text-lg leading-relaxed">{impact}</p>
                </div>
              </div>
            </>
          )}

          {layout === 'right' && (
            <>
              <div className="lg:col-span-3 space-y-8 font-body lg:order-1">
                <div className={`prose prose-lg max-w-none ${isVisible ? 'animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:font-serif">
                    {problem}
                  </p>
                </div>

                <div className={`bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg ${isVisible ? 'animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <h3 className="text-sm uppercase tracking-wider font-sans text-accent mb-3">The Mathematical Breakthrough</h3>
                  <p className="text-lg leading-relaxed">{solution}</p>
                  {equation && (
                    <div className="mt-4 p-4 bg-background/50 rounded font-mono text-sm overflow-x-auto">
                      {equation}
                    </div>
                  )}
                </div>

                <div className={`${isVisible ? 'animate-fade-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <h3 className="text-sm uppercase tracking-wider font-sans text-primary mb-3">Real-World Impact</h3>
                  <p className="text-lg leading-relaxed">{impact}</p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8 lg:order-2">
                <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl md:text-6xl font-bold font-serif text-primary/20">{number}</span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-1">{era}</p>
                      <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">{title}</h2>
                    </div>
                  </div>
                  {inventor && (
                    <p className="text-sm font-sans text-accent italic">— {inventor} {inventorYears}</p>
                  )}
                </div>

                <div className={`relative ${isVisible ? 'animate-scale-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
