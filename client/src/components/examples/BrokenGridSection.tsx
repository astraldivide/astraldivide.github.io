import { BrokenGridSection } from '../BrokenGridSection'
import gpsImage from '@assets/stock_images/gps_satellite_naviga_0b8b407f.jpg'

export default function BrokenGridSectionExample() {
  const content = [
    {
      fact: "GPS satellites travel at 14,000 km/h",
      detail: "At this speed, Einstein's relativity causes their clocks to tick differently than ours on Earth."
    },
    {
      fact: "Without relativity math, GPS would drift 10km per day",
      detail: "The mathematical corrections are so precise that GPS can locate you within 5 meters."
    }
  ];

  return (
    <BrokenGridSection
      id="gps"
      title="GPS Magic"
      subtitle="Relativity in Action"
      content={content}
      image={gpsImage}
      imageAlt="GPS satellite"
      accentColor="bg-primary"
    />
  )
}
