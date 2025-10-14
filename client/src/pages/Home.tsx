import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ScrollSection } from "@/components/ScrollSection";
import { TriviaQuestion } from "@/components/TriviaQuestion";
import { Timeline } from "@/components/Timeline";
import { SummarySection } from "@/components/SummarySection";

import navImage from "@assets/stock_images/vintage_navigation_t_52e6ae18.jpg";
import medicalImage from "@assets/stock_images/medical_history_vint_33577e01.jpg";
import climateImage from "@assets/stock_images/vintage_weather_inst_a0307d25.jpg";
import cryptoImage from "@assets/stock_images/antique_encryption_c_8d20920e.jpg";

const sections = [
  { id: "timeline", title: "Origins" },
  { id: "navigation", title: "Navigation" },
  { id: "medical", title: "Medicine" },
  { id: "climate", title: "Climate" },
  { id: "security", title: "Security" },
  { id: "summary", title: "Impact" },
];

const navTrivia = {
  question: "Who developed the mathematical models that became the foundation of GPS?",
  options: [
    {
      text: "Albert Einstein",
      correct: false,
      explanation: "While Einstein's theory of relativity is crucial for GPS accuracy, he didn't develop the system itself. His theories provided the physics foundation."
    },
    {
      text: "Gladys West",
      correct: true,
      explanation: "Correct! Gladys West, an African-American mathematician, developed the mathematical models that became the foundation of GPS technology while working at the U.S. Naval Surface Warfare Center in the 1970s-80s."
    },
    {
      text: "Steve Jobs",
      correct: false,
      explanation: "Steve Jobs brought GPS to consumer smartphones with the iPhone, but he didn't invent the underlying satellite navigation technology."
    }
  ],
  funFact: "Gladys West worked on GPS for decades, but her crucial contributions weren't widely recognized until 2018 when she was inducted into the Air Force Space and Missile Pioneers Hall of Fame!"
};

const medicalTrivia = {
  question: "Which 19th-century mathematician's work became essential for modern medical imaging?",
  options: [
    {
      text: "Isaac Newton",
      correct: false,
      explanation: "Newton's calculus is fundamental to physics, but medical imaging relies on different mathematical tools."
    },
    {
      text: "Joseph Fourier",
      correct: true,
      explanation: "Exactly! Joseph Fourier developed Fourier analysis in the 1800s to study heat flow. Two centuries later, his mathematical transforms became the foundation of MRI and CT scans, saving millions of lives."
    },
    {
      text: "Pythagoras",
      correct: false,
      explanation: "While Pythagoras contributed to geometry, medical imaging relies on Fourier's more advanced mathematical techniques."
    }
  ],
  funFact: "Fourier died in 1830, a full 142 years before the first CT scan was performed. He never knew his heat equations would one day see inside the human body!"
};

const climateTrivia = {
  question: "Who created the first mathematical climate model that could predict global warming?",
  options: [
    {
      text: "Al Gore",
      correct: false,
      explanation: "Al Gore raised awareness about climate change, but he didn't create the mathematical models."
    },
    {
      text: "Syukuro Manabe",
      correct: true,
      explanation: "Right! Syukuro Manabe developed the first sophisticated climate model in 1967, using differential equations to predict how CO₂ would warm Earth. He won the Nobel Prize in Physics for this work in 2021."
    },
    {
      text: "Greta Thunberg",
      correct: false,
      explanation: "Greta Thunberg is a climate activist who uses climate models to inform her advocacy, but didn't develop the mathematical models themselves."
    }
  ],
  funFact: "Manabe's 1967 model predicted 2°C warming from doubled CO₂—remarkably close to modern estimates, despite using a computer thousands of times weaker than your phone!"
};

const cryptoTrivia = {
  question: "The RSA encryption algorithm is named after its three inventors. Which mathematician is the 'R'?",
  options: [
    {
      text: "René Descartes",
      correct: false,
      explanation: "Descartes lived in the 1600s, long before computer encryption existed."
    },
    {
      text: "Ron Rivest",
      correct: true,
      explanation: "Correct! Ron Rivest, along with Adi Shamir and Leonard Adleman, invented RSA encryption in 1977. The algorithm uses prime number mathematics to protect virtually all online security today."
    },
    {
      text: "Ramanujan",
      correct: false,
      explanation: "Srinivasa Ramanujan was a brilliant mathematician, but he died in 1920, long before computer encryption was needed."
    }
  ],
  funFact: "The team spent an entire evening trying to break their own algorithm before they convinced themselves it was secure. That evening's work now protects trillions of dollars in transactions!"
};

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

      <Timeline />

      <ScrollSection
        id="navigation"
        number="01"
        title="Navigating the Globe"
        era="1970s-1990s"
        problem="For centuries, sailors navigated by the stars, explorers by compass, and travelers by paper maps. Finding your exact position on Earth required specialized training, expensive equipment, and often, educated guesswork. Navigation errors cost lives, delayed cargo, and limited human exploration. How could humanity achieve precise, global positioning available to everyone?"
        solution="Einstein's theories of relativity revealed that time passes differently for satellites orbiting Earth at high speeds and altitudes. Engineers combined this insight with advanced mathematics to build GPS—satellites broadcast precise time signals, and receivers calculate position by measuring signal delays, accounting for relativistic time dilation down to the nanosecond."
        impact="Today, GPS guides billions of smartphones, emergency services finding accident victims, autonomous vehicles, farmers optimizing crops, and global supply chains. What once required years of training and expensive instruments now happens automatically in your pocket, fundamentally transforming how humanity moves and connects."
        image={navImage}
        imageAlt="Vintage navigation instruments including sextant and compass"
        equation="Δt = (v²/2c²)t + (GM/rc²)t"
        inventor="Gladys West & Team"
        inventorYears="(1956-present)"
        layout="left"
      />

      <TriviaQuestion {...navTrivia} />

      <ScrollSection
        id="medical"
        number="02"
        title="Seeing the Invisible"
        era="1800s-1970s"
        problem="For most of human history, diagnosing internal injuries and diseases required invasive surgery or dangerous exploratory procedures. Doctors desperately needed a way to see inside the living human body without cutting it open. X-rays offered glimpses, but revealed only bones and dense tissues, missing crucial soft tissue details that could mean the difference between life and death."
        solution="In the 1800s, Joseph Fourier developed mathematical transforms to analyze heat flow. Nearly two centuries later, engineers discovered his equations could convert complex radio signals and magnetic resonance into detailed images. MRI and CT scanners capture waves passing through the body, then use Fourier analysis to mathematically reconstruct every layer of tissue into viewable slices."
        impact="Medical imaging has revolutionized healthcare, enabling early cancer detection, diagnosing brain injuries, guiding surgical procedures, and monitoring treatment effectiveness. What once required risky surgery now happens safely in minutes, saving millions of lives annually and transforming medicine from educated guesswork to precise science."
        image={medicalImage}
        imageAlt="Vintage medical imaging and anatomical illustrations"
        equation="F(ω) = ∫ f(t)e^(-iωt) dt"
        inventor="Joseph Fourier"
        inventorYears="(1768-1830)"
        layout="right"
      />

      <TriviaQuestion {...medicalTrivia} />

      <ScrollSection
        id="climate"
        number="03"
        title="Predicting Our Future"
        era="1960s-Present"
        problem="Earth's climate involves countless interconnected variables—temperature, humidity, wind patterns, ocean currents, ice coverage, and greenhouse gases. Understanding how these systems interact and predicting future changes seemed impossibly complex. Scientists needed to model the entire planet's atmosphere, but how do you simulate something so vast and chaotic?"
        solution="Climate scientists developed systems of differential equations—mathematical tools that describe how things change over time. These equations model how heat, moisture, and air move through the atmosphere, how oceans absorb carbon, and how ice reflects sunlight. Supercomputers solve millions of these equations simultaneously, simulating decades of climate evolution in hours to reveal what's coming."
        impact="Climate models have revealed the reality and urgency of human-caused warming, predicted rising sea levels with remarkable accuracy, and guided international climate policy. They've transformed climate science from observation to prediction, helping humanity understand our impact on Earth and make informed decisions about our future."
        image={climateImage}
        imageAlt="Vintage weather and meteorological instruments"
        equation="∂T/∂t = -v·∇T + κ∇²T + Q"
        inventor="Syukuro Manabe & Team"
        inventorYears="(1931-present)"
        layout="left"
      />

      <TriviaQuestion {...climateTrivia} />

      <ScrollSection
        id="security"
        number="04"
        title="Securing Our Digital Lives"
        era="1970s-Present"
        problem="In the digital age, we constantly send sensitive information—passwords, bank details, medical records, state secrets—across networks that anyone could intercept. Traditional locks and keys don't work in cyberspace where information is just numbers. How could we create mathematical locks that are easy to close but virtually impossible to pick?"
        solution="RSA encryption exploits a beautiful asymmetry in number theory: multiplying two large prime numbers is trivial, but factoring their product back into those primes is astronomically difficult. The encryption uses public keys (the product) to lock messages, while only the private keys (the original primes) can unlock them. Breaking this code would require factoring numbers so large it would take all computers on Earth millions of years."
        impact="Every secure website (HTTPS), online payment, encrypted message, digital signature, and blockchain transaction relies on mathematical cryptography. It protects trillions of dollars in transactions daily, safeguards privacy for billions of people, and enables the digital economy. Without these mathematical discoveries, modern internet commerce and communication would be impossible."
        image={cryptoImage}
        imageAlt="Antique encryption and cipher machines"
        equation="c = m^e mod n"
        inventor="Rivest, Shamir & Adleman"
        inventorYears="(1977)"
        layout="right"
      />

      <TriviaQuestion {...cryptoTrivia} />

      <SummarySection />
    </div>
  );
}
