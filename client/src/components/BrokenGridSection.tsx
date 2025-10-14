import { useEffect, useRef, useState } from "react";

interface BrokenGridSectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: {
    fact: string;
    detail: string;
  }[];
  image: string;
  imageAlt: string;
  accentColor?: string;
  reverse?: boolean;
}

export function BrokenGridSection({
  id,
  title,
  subtitle,
  content,
  image,
  imageAlt,
  accentColor = "bg-primary",
  reverse = false,
}: BrokenGridSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
      data-testid={`section-${id}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content - Broken Grid */}
          <div className={`lg:col-span-7 ${reverse ? 'lg:col-start-6' : ''} space-y-8`}>
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className={`inline-block px-4 py-2 mb-4 ${accentColor}/10 rounded-full`}>
                <span className={`text-sm font-medium ${accentColor.replace('bg-', 'text-')}`}>
                  {subtitle}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-none mb-6">
                {title}
              </h2>
            </div>

            <div className="space-y-6">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={`${isVisible ? 'animate-fade-up opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}
                  style={{ 
                    animationDelay: `${200 + index * 150}ms`,
                    marginLeft: index % 2 === 1 ? '2rem' : '0',
                  }}
                >
                  <h3 className={`text-xl md:text-2xl font-serif font-semibold mb-2 ${accentColor.replace('bg-', 'text-')}`}>
                    {item.fact}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Offset & Elevated */}
          <div 
            className={`lg:col-span-5 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''} ${
              isVisible ? 'animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'
            }`}
          >
            <div className="relative" style={{ 
              transform: reverse ? 'translateY(-3rem)' : 'translateY(3rem)',
            }}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${accentColor}/20 mix-blend-multiply`}></div>
              </div>
              {/* Decorative element */}
              <div className={`absolute -z-10 w-full h-full ${accentColor}/10 rounded-2xl`}
                style={{
                  top: '-1rem',
                  left: reverse ? '1rem' : '-1rem',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
