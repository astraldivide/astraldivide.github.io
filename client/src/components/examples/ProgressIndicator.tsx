import { ProgressIndicator } from '../ProgressIndicator'
import { ThemeProvider } from '../ThemeProvider'

export default function ProgressIndicatorExample() {
  const sections = ['Origins', 'Navigation', 'Medicine', 'Climate', 'Security'];
  
  return (
    <ThemeProvider>
      <ProgressIndicator 
        sections={sections} 
        activeSection={1}
        onSectionClick={(index) => console.log('Section clicked:', index)}
      />
    </ThemeProvider>
  )
}
