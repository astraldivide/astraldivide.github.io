import { useEffect, useRef, useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const events: TimelineEvent[] = [
  { year: "1637", title: "Coordinate Geometry", description: "René Descartes", icon: "📐" },
  { year: "1687", title: "Laws of Motion", description: "Isaac Newton", icon: "🍎" },
  { year: "1822", title: "Fourier Transform", description: "Joseph Fourier", icon: "🌊" },
  { year: "1905", title: "Relativity Theory", description: "Albert Einstein", icon: "⚡" },
  { year: "1977", title: "RSA Encryption", description: "Rivest, Shamir, Adleman", icon: "🔐" },
  { year: "1990", title: "GPS Goes Public", description: "U.S. Military", icon: "🛰️" },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;
      const relativeScroll = viewportMiddle - rect.top;
      const progress = Math.max(0, Math.min(1, relativeScroll / rect.height));
      const newIndex = Math.floor(progress * events.length);
      setActiveIndex(Math.min(newIndex, events.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section className="py-24 lg:py-40 bg-muted/30" data-testid="section-timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            A Timeline of Mathematical Breakthroughs
          </h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Centuries of discovery, from theory to transformation
          </p>
        </div>

        <div ref={timelineRef} className="relative min-h-[600px]">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24 md:space-y-32">
            {events.map((event, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isActive ? 'opacity-100 scale-100' : isPast ? 'opacity-50 scale-95' : 'opacity-30 scale-90'
                  }`}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="inline-block bg-card rounded-lg p-6 border border-card-border hover-elevate">
                        <div className="text-4xl mb-3">{event.icon}</div>
                        <p className="text-2xl md:text-3xl font-bold font-serif text-primary mb-2">
                          {event.year}
                        </p>
                        <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm font-sans text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10 hidden md:block"></div>
                    
                    <div className="flex-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
