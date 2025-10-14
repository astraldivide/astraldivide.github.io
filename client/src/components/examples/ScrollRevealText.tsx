import { ScrollRevealText } from '../ScrollRevealText'

export default function ScrollRevealTextExample() {
  return (
    <div className="min-h-screen">
      <div className="h-screen"></div>
      <ScrollRevealText 
        beforeText="Mathematics hasn't solved any real-world problems"
        afterText="Mathematics has revolutionized our entire world"
      />
      <div className="h-screen"></div>
    </div>
  )
}
