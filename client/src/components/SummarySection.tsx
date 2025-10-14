import { useEffect, useRef, useState } from "react";
import { Lightbulb, TrendingUp, Globe, Lock, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const innovations = [
  {
    icon: Globe,
    title: "GPS Navigation",
    description: "Relativity theory enables precise positioning",
  },
  {
    icon: Activity,
    title: "Medical Imaging",
    description: "Fourier transforms create life-saving scans",
  },
  {
    icon: TrendingUp,
    title: "Climate Modeling",
    description: "Differential equations predict our future",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description: "Prime numbers protect our digital world",
  },
];

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
      className="min-h-screen py-20 md:py-32 bg-muted/30"
      data-testid="section-summary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Mathematics: Shaping Tomorrow
            </h2>
          </div>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
            From guiding us across the globe to protecting our digital lives, mathematics is the invisible force behind modern innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {innovations.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover-elevate ${isVisible ? `animate-fade-up opacity-0 [animation-fill-mode:forwards]` : 'opacity-0'}`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className={`p-8 bg-card ${isVisible ? 'animate-scale-in [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold mb-4">Final Reflection</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mathematics isn't just about numbers and equations—it's a powerful tool for understanding and transforming our world. Every time you use your phone's GPS, receive a medical diagnosis, check the weather forecast, or send a secure message, you're benefiting from mathematical innovations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The real-world applications we've explored represent just a fraction of mathematics' impact. As we face new challenges—from climate change to artificial intelligence—mathematical thinking will continue to be essential for creating solutions and driving innovation.
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="font-medium text-primary">
              What new problem could mathematics help solve in your lifetime?
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
