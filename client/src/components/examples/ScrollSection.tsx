import { ScrollSection } from '../ScrollSection'
import gpsImage from '@assets/stock_images/gps_satellite_naviga_0b8b407f.jpg'

export default function ScrollSectionExample() {
  return (
    <ScrollSection
      id="gps"
      title="GPS Navigation"
      subtitle="Case Study 1"
      problem="Before GPS, navigation relied on maps and landmarks. Finding precise locations was time-consuming and error-prone."
      solution="Einstein's theory of relativity combined with precise atomic clocks and triangulation algorithms enable satellites to calculate your exact position on Earth."
      impact="GPS revolutionized navigation, enabling billions of smartphones, emergency services, and autonomous vehicles to know exactly where they are within meters."
      image={gpsImage}
      imageAlt="GPS satellite visualization"
      equation="Δt = (v²/2c²) × t"
    />
  )
}
