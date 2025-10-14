import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { BrokenGridSection } from "@/components/BrokenGridSection";
import { TriviaQuestion } from "@/components/TriviaQuestion";
import { SummarySection } from "@/components/SummarySection";

import gpsImage from "@assets/stock_images/gps_satellite_naviga_0b8b407f.jpg";
import medicalImage from "@assets/stock_images/medical_imaging_mri__9cd12267.jpg";
import climateImage from "@assets/stock_images/climate_modeling_ear_6d5596fe.jpg";
import cryptoImage from "@assets/stock_images/cryptography_encrypt_319d77d9.jpg";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "gps", title: "GPS" },
  { id: "medical", title: "Medical" },
  { id: "climate", title: "Climate" },
  { id: "crypto", title: "Crypto" },
  { id: "summary", title: "Summary" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (index: number) => {
    const section = sections[index];
    const element = document.getElementById(section.id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <ProgressIndicator
        sections={sections.map(s => s.title)}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <Hero />

      <div id="intro">
        <ScrollRevealText 
          beforeText="Mathematics hasn't solved any real-world problems"
          afterText="Mathematics has revolutionized our entire world"
        />
      </div>

      <BrokenGridSection
        id="gps"
        title="GPS Navigation"
        subtitle="Einstein's Theory in Your Pocket"
        content={[
          {
            fact: "GPS satellites travel at 14,000 km/h",
            detail: "At this incredible speed, time literally runs differently for the satellites than for us on Earth. Einstein predicted this over a century ago!"
          },
          {
            fact: "Without relativity math, GPS drifts 10km per day",
            detail: "The mathematical corrections are so precise that your phone can pinpoint your location within 5 meters—all thanks to equations from 1915."
          },
          {
            fact: "Each satellite has atomic clocks accurate to nanoseconds",
            detail: "These clocks tick 38 microseconds faster per day due to weaker gravity. Without correcting this, GPS would be completely useless."
          }
        ]}
        image={gpsImage}
        imageAlt="GPS satellite orbiting Earth"
        accentColor="bg-primary"
      />

      <TriviaQuestion 
        question="How much would GPS drift per day without Einstein's relativity corrections?"
        options={[
          {
            text: "About 10 meters",
            correct: false,
            funFact: "Way off! That's the accuracy GPS achieves WITH the corrections. Without relativity math, GPS would drift by about 10 kilometers every single day—making it completely unusable for navigation!"
          },
          {
            text: "About 10 kilometers",
            correct: true,
            funFact: "Exactly right! GPS satellites orbit at 20,000 km altitude traveling at 14,000 km/h. At these speeds and distances from Earth's gravity, time runs differently. Without Einstein's relativistic corrections, your GPS would be off by 10km every single day. Mathematics from 1915 powers your 2025 smartphone!"
          },
          {
            text: "GPS doesn't need relativity",
            correct: false,
            funFact: "Actually, it absolutely does! Relativity isn't just theoretical physics—it's essential engineering. Every GPS calculation includes corrections for both special relativity (speed) and general relativity (gravity). Pretty wild that Einstein's theory is in your pocket!"
          }
        ]}
        accentColor="bg-primary"
      />

      <BrokenGridSection
        id="medical"
        title="Medical Imaging"
        subtitle="Seeing Inside Without Surgery"
        content={[
          {
            fact: "Fourier transforms turn signals into images",
            detail: "MRI machines measure hydrogen atoms spinning in your body. Fourier math, invented in 1822, converts these complex signals into detailed 3D images doctors can read."
          },
          {
            fact: "One brain MRI involves millions of calculations",
            detail: "Every pixel in a brain scan requires solving mathematical equations. What looks like a simple image is actually the result of processing gigabytes of mathematical data."
          },
          {
            fact: "Medical imaging saves millions of lives yearly",
            detail: "Early cancer detection, diagnosing strokes, guiding surgeries—all made possible by 200-year-old mathematics. Math literally saves lives every single day."
          }
        ]}
        image={medicalImage}
        imageAlt="Medical MRI brain scan"
        accentColor="bg-chart-2"
        reverse
      />

      <TriviaQuestion 
        question="What 19th-century mathematical discovery powers modern MRI machines?"
        options={[
          {
            text: "Calculus",
            correct: false,
            funFact: "Close! Calculus is definitely used in medical physics, but MRI specifically relies on something more specialized. The key breakthrough was the Fourier transform!"
          },
          {
            text: "Fourier transforms",
            correct: true,
            funFact: "Brilliant! Joseph Fourier discovered in 1822 that any complex signal can be broken down into simple waves. Modern MRI machines use this 200-year-old math to convert radio signals from your body into detailed images. A French mathematician's theory from Napoleon's era now saves millions of lives!"
          },
          {
            text: "Prime numbers",
            correct: false,
            funFact: "Prime numbers are crucial for encryption and security, but medical imaging relies on Fourier analysis—a different branch of mathematics that deals with waves and frequencies."
          }
        ]}
        accentColor="bg-chart-2"
      />

      <BrokenGridSection
        id="climate"
        title="Climate Science"
        subtitle="Predicting Earth's Future"
        content={[
          {
            fact: "Climate models solve millions of equations per second",
            detail: "The atmosphere is divided into a 3D grid, with each cell governed by differential equations for temperature, pressure, humidity, and wind. Supercomputers crunch through this constantly."
          },
          {
            fact: "Weather vs climate: same math, different timescales",
            detail: "The equations are identical, but climate models run for decades or centuries instead of days. They've accurately predicted warming trends since the 1980s."
          },
          {
            fact: "Mathematics predicted climate change before we saw it",
            detail: "Arrhenius calculated in 1896 that CO₂ would warm Earth. His math was right—we're now living through exactly what the equations predicted over 100 years ago."
          }
        ]}
        image={climateImage}
        imageAlt="Earth climate visualization showing weather patterns"
        accentColor="bg-chart-3"
      />

      <TriviaQuestion 
        question="When did mathematics first predict human-caused global warming?"
        options={[
          {
            text: "1970s, during the environmental movement",
            correct: false,
            funFact: "The 1970s saw increased awareness, but the math came much earlier! Swedish scientist Svante Arrhenius calculated in 1896—yes, 1896!—that doubling CO₂ would warm the planet by 5-6°C. His Victorian-era calculations are proving remarkably accurate today."
          },
          {
            text: "1896, before cars were common",
            correct: true,
            funFact: "Absolutely right! Svante Arrhenius used differential equations in 1896 to calculate how CO₂ absorbs infrared radiation. He predicted that burning fossil fuels would warm Earth—long before climate change became obvious. Mathematics literally predicted our future over a century in advance!"
          },
          {
            text: "2000s, with modern computers",
            correct: false,
            funFact: "Modern computers have refined the models, but the core mathematics goes back to 1896! Arrhenius did his calculations by hand and got it remarkably right. We've been ignoring the math for over 125 years."
          }
        ]}
        accentColor="bg-chart-3"
      />

      <BrokenGridSection
        id="crypto"
        title="Cryptography"
        subtitle="Math Protecting Digital Life"
        content={[
          {
            fact: "Your security depends on multiplying two prime numbers",
            detail: "RSA encryption uses primes with hundreds of digits. Multiplying them takes milliseconds. Factoring the result? Even supercomputers would need millions of years. That's the power of mathematical asymmetry."
          },
          {
            fact: "Prime number theory is ancient, encryption is modern",
            detail: "Greeks studied primes 2,300 years ago. But only in the 1970s did mathematicians realize primes could secure digital data. Ancient math, modern application."
          },
          {
            fact: "Quantum computers threaten current encryption",
            detail: "New math is needed! Quantum computers could factor large numbers quickly. Mathematicians are racing to develop quantum-resistant algorithms. The cryptography war continues."
          }
        ]}
        image={cryptoImage}
        imageAlt="Abstract digital encryption and security visualization"
        accentColor="bg-chart-4"
        reverse
      />

      <TriviaQuestion 
        question="Why can't hackers just factor large numbers to break encryption?"
        options={[
          {
            text: "It's illegal",
            correct: false,
            funFact: "Ha! Being illegal doesn't stop hackers. The real reason is mathematical: factoring the product of two 300-digit prime numbers would take even the world's fastest supercomputers trillions of years. Math is the ultimate bouncer!"
          },
          {
            text: "The math is too hard—it would take trillions of years",
            correct: true,
            funFact: "Exactly! This is the genius of RSA encryption. Multiplying two huge primes is easy (takes milliseconds), but reversing it is mathematically intractable. A 600-digit number might take 300 trillion years to factor—longer than the universe has existed. Math creates a perfect one-way door!"
          },
          {
            text: "Encryption constantly changes the numbers",
            correct: false,
            funFact: "The numbers do change with each session, but that's not why it's secure. The real protection is the fundamental mathematical difficulty of factoring large numbers—a problem that's been proven to be exponentially hard."
          }
        ]}
        accentColor="bg-chart-4"
      />

      <SummarySection />
    </div>
  );
}
