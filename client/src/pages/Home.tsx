import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ScrollSection } from "@/components/ScrollSection";
import { InteractiveQuestion } from "@/components/InteractiveQuestion";
import { SummarySection } from "@/components/SummarySection";

import gpsImage from "@assets/stock_images/gps_satellite_naviga_0b8b407f.jpg";
import medicalImage from "@assets/stock_images/medical_imaging_mri__9cd12267.jpg";
import climateImage from "@assets/stock_images/climate_modeling_ear_6d5596fe.jpg";
import cryptoImage from "@assets/stock_images/cryptography_encrypt_319d77d9.jpg";

const sections = [
  { id: "gps", title: "GPS Navigation" },
  { id: "medical", title: "Medical Imaging" },
  { id: "climate", title: "Climate Modeling" },
  { id: "crypto", title: "Cryptography" },
  { id: "summary", title: "Summary" },
];

const gpsQuestion = {
  question: "How does GPS use mathematics to find your location?",
  options: [
    {
      text: "GPS uses simple addition and subtraction",
      correct: false,
      explanation: "GPS actually relies on advanced mathematics including Einstein's theory of relativity and complex algorithms.",
    },
    {
      text: "GPS combines relativity theory with triangulation algorithms",
      correct: true,
      explanation: "Correct! GPS satellites must account for time dilation from both special and general relativity, while using triangulation to pinpoint your location.",
    },
    {
      text: "GPS only needs one satellite to work",
      correct: false,
      explanation: "GPS requires at least four satellites to determine your 3D position and time accurately.",
    },
  ],
};

const medicalQuestion = {
  question: "What mathematical tool is essential for MRI and CT scans?",
  options: [
    {
      text: "Basic algebra",
      correct: false,
      explanation: "While algebra is important, medical imaging requires more sophisticated mathematics.",
    },
    {
      text: "Fourier transforms",
      correct: true,
      explanation: "Exactly! Fourier transforms convert complex signals into frequency data, allowing doctors to see inside the human body without surgery.",
    },
    {
      text: "Geometry only",
      correct: false,
      explanation: "Geometry plays a role, but Fourier analysis is the key mathematical technique that makes medical imaging possible.",
    },
  ],
};

const climateQuestion = {
  question: "How do climate models predict future weather patterns?",
  options: [
    {
      text: "They use historical data alone",
      correct: false,
      explanation: "Climate models do use historical data, but they rely heavily on mathematical equations to simulate future conditions.",
    },
    {
      text: "Through differential equations modeling atmospheric physics",
      correct: true,
      explanation: "Correct! Climate scientists use complex systems of differential equations to model how heat, moisture, and air move through the atmosphere over time.",
    },
    {
      text: "By making random guesses",
      correct: false,
      explanation: "Climate models are based on rigorous mathematical and physical principles, not guesswork.",
    },
  ],
};

const cryptoQuestion = {
  question: "What makes modern encryption mathematically secure?",
  options: [
    {
      text: "It uses very large prime numbers that are hard to factor",
      correct: true,
      explanation: "Precisely! Modern encryption like RSA relies on the mathematical difficulty of factoring the product of two very large prime numbers—a problem that would take even supercomputers millions of years to solve.",
    },
    {
      text: "It randomly scrambles data",
      correct: false,
      explanation: "Encryption appears random but is actually based on precise mathematical algorithms using prime numbers and modular arithmetic.",
    },
    {
      text: "It uses simple passwords",
      correct: false,
      explanation: "Strong encryption relies on complex mathematical problems, not just passwords. The mathematics makes it computationally infeasible to break.",
    },
  ],
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

      <ScrollSection
        id="gps"
        title="GPS Navigation"
        subtitle="Case Study 1"
        problem="Before GPS, navigation relied on paper maps and landmarks. Finding precise locations was time-consuming, error-prone, and often impossible in unfamiliar territory or during emergencies."
        solution="GPS uses Einstein's theory of relativity combined with atomic clocks and triangulation algorithms. Satellites broadcast time signals, and receivers calculate distances by measuring signal delays. Because satellites move at high speeds and are far from Earth's gravity, both special and general relativity corrections are essential for accuracy."
        impact="GPS revolutionized navigation, enabling billions of smartphones, emergency services, autonomous vehicles, and delivery systems to pinpoint locations within meters. It has saved countless lives and transformed global logistics."
        image={gpsImage}
        imageAlt="GPS satellite orbiting Earth"
        equation="Δt = (v²/2c²) × t  (time dilation correction)"
      />

      <InteractiveQuestion {...gpsQuestion} />

      <ScrollSection
        id="medical"
        title="Medical Imaging"
        subtitle="Case Study 2"
        problem="Diagnosing internal injuries and diseases once required invasive surgery or risky exploratory procedures. Doctors needed a way to see inside the human body without cutting it open."
        solution="Fourier transforms, a mathematical technique developed in the 1800s, became the foundation of modern medical imaging. MRI and CT scanners capture complex signals from inside the body, then use Fourier analysis to convert these signals into detailed 2D and 3D images."
        impact="Medical imaging has saved millions of lives by enabling early cancer detection, diagnosing brain injuries, and guiding surgeries. What once required dangerous procedures now happens safely in minutes."
        image={medicalImage}
        imageAlt="Medical MRI brain scan"
        equation="F(ω) = ∫ f(t)e^(-iωt) dt  (Fourier transform)"
        reverse
      />

      <InteractiveQuestion {...medicalQuestion} />

      <ScrollSection
        id="climate"
        title="Climate Modeling"
        subtitle="Case Study 3"
        problem="Understanding and predicting climate change requires analyzing countless variables: temperature, humidity, wind patterns, ocean currents, and greenhouse gases. The complexity is overwhelming without mathematical tools."
        solution="Climate scientists use systems of differential equations to model how energy and matter flow through Earth's atmosphere and oceans. These equations, solved by supercomputers running millions of calculations, simulate decades or centuries of climate evolution in hours."
        impact="Climate models have revealed the reality of human-caused warming, predicted rising sea levels, and guided international climate policy. They help us understand our planet's future and make informed decisions about our environment."
        image={climateImage}
        imageAlt="Earth climate visualization"
        equation="∂T/∂t = -v·∇T + κ∇²T  (heat diffusion equation)"
      />

      <InteractiveQuestion {...climateQuestion} />

      <ScrollSection
        id="crypto"
        title="Cryptography"
        subtitle="Case Study 4"
        problem="In the digital age, we send sensitive information—passwords, bank details, medical records—across networks that could be intercepted by anyone. How do we keep this data secure?"
        solution="Modern encryption relies on number theory, particularly the difficulty of factoring large numbers into primes. RSA encryption uses two large prime numbers (hundreds of digits long) whose product is easy to compute but nearly impossible to reverse—creating a mathematical 'one-way door' that protects our data."
        impact="Every secure website (HTTPS), online payment, encrypted message, and digital signature relies on mathematical cryptography. It protects trillions of dollars in transactions and safeguards privacy for billions of people daily."
        image={cryptoImage}
        imageAlt="Digital encryption and security"
        equation="c = m^e mod n  (RSA encryption)"
        reverse
      />

      <InteractiveQuestion {...cryptoQuestion} />

      <SummarySection />
    </div>
  );
}
