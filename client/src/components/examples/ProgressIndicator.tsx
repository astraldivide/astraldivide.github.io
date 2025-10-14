import { ProgressIndicator } from '../ProgressIndicator'
import { ThemeProvider } from '../ThemeProvider'

export default function ProgressIndicatorExample() {
  const sections = ['GPS', 'Medical', 'Climate', 'Crypto', 'Summary'];
  
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
