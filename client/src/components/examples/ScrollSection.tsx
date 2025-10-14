import { ScrollSection } from '../ScrollSection'
import navImage from '@assets/stock_images/vintage_navigation_t_52e6ae18.jpg'

export default function ScrollSectionExample() {
  return (
    <ScrollSection
      id="navigation"
      number="01"
      title="GPS Navigation"
      era="1970s-1990s"
      problem="For centuries, sailors navigated by the stars, explorers by compass, and travelers by paper maps. Finding your exact position on Earth required specialized training, expensive equipment, and often, educated guesswork. Lives were lost to navigation errors."
      solution="Einstein's theories of relativity revealed that time passes differently for satellites orbiting Earth at high speeds and altitudes. Engineers used this insight to build GPS—satellites broadcast precise time signals, and receivers calculate position by measuring signal delays, accounting for relativistic time dilation."
      impact="Today, GPS guides billions of smartphones, emergency services, autonomous vehicles, and global supply chains. What once required years of training now happens automatically in your pocket, saving countless lives and transforming how humanity moves."
      image={navImage}
      imageAlt="Vintage navigation instruments"
      equation="Δt = (v²/2c²)t + (GM/rc²)t"
      inventor="Gladys West"
      inventorYears="(1930-present)"
      layout="left"
    />
  )
}
