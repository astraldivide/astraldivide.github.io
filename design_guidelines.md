# Design Guidelines: Interactive Mathematics Scrollytelling Experience

## Design Approach

**Selected Approach:** Reference-Based with Interactive Storytelling Focus
- Primary inspiration: NYT Interactive Articles, Stripe's visual sophistication, Linear's clean interface
- Goal: Create an engaging educational experience that balances sophisticated design with clear information hierarchy
- Principle: Every scroll should reveal new insights with purposeful animations and interactions

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 15% 12% (elevated panels)
- Primary: 210 100% 60% (vibrant blue - represents logic and clarity)
- Accent: 280 65% 65% (purple - for mathematical discoveries)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%
- Success (correct answers): 142 76% 50%
- Error (incorrect): 0 84% 60%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 45%
- Accent: 280 65% 50%
- Text Primary: 222 15% 12%
- Text Secondary: 222 10% 40%

### B. Typography

**Font Stack:**
- Display/Headers: 'Space Grotesk' (Google Fonts) - Serif for artsy, editorial feel
- Body: 'Inter' (Google Fonts) - Clean readability for content
- Code/Math: 'JetBrains Mono' - For equations and technical content

**Hierarchy:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight
- Section Headers: text-4xl md:text-6xl font-serif font-bold tracking-tight
- Question Headers: text-2xl md:text-3xl font-serif font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Captions: text-sm text-muted-foreground
- Pull Quotes: text-3xl md:text-5xl font-serif italic leading-tight

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section Padding: py-20 md:py-32
- Content Spacing: space-y-12 or gap-12
- Component Padding: p-8 or p-12
- Micro Spacing: gap-4, space-y-4

**Container Strategy - Broken Grid/Artsy:**
- Asymmetric layouts with offset elements
- Mix of full-bleed and constrained widths
- Overlapping elements with z-index layering
- Reading content: max-w-4xl with occasional breakouts
- Use transform and translate for visual interest
- Sticky elements: Use position sticky for progress indicators

### D. Component Library

**Hero Section:**
- Full viewport (min-h-screen) with centered content
- Large, impactful headline with the assignment question
- Animated scroll indicator
- Subtle particle/grid background effect suggesting mathematical precision

**Scrollytelling Sections (5-6 Case Studies):**
- Sticky visualization on one side, scrolling content on other (desktop)
- Stack vertically on mobile
- Each section: Case study title, problem statement, mathematical solution, real-world impact
- Scroll-triggered reveal animations (fade-up, scale)

**Interactive Question Cards:**
- Elevated surface (bg-surface) with rounded-2xl border
- Multiple choice or interactive input formats
- Immediate feedback with color-coded responses
- Explanation reveals on answer
- Progress indicators showing questions completed

**Visual Demonstrations:**
- Animated graphs with smooth transitions
- Equation reveals with step-by-step breakdowns
- Data visualization cards with hover interactions
- Side-by-side before/after comparisons

**Progress Navigation:**
- Fixed top or side indicator showing scroll progress
- Section dots/numbers for quick navigation
- Smooth scroll behavior between sections

**Summary/Reflection Section:**
- Synthesize all learnings
- Final reflection question
- Call-to-action for further exploration

### E. Animations & Interactions

**Scroll-Triggered Animations:**
- Fade-up with slide (y-offset 20-40px)
- Scale from 0.95 to 1.0
- Stagger children animations (delay increments of 100-150ms)
- Use intersection observer for trigger points

**Interactive Elements:**
- Hover: subtle scale (1.02) and shadow elevation
- Question feedback: Color transition + checkmark/x icon animation
- Graph animations: Draw paths, fade in data points sequentially
- Parallax: Subtle background movement (10-20% scroll speed difference)

**Performance:** Use transform and opacity only for animations, will-change sparingly

### F. Images

**Hero Section:**
- Large background image: Abstract mathematical visualization (fractals, geometric patterns, or data visualization art)
- Overlay with gradient: from-background/80 to-background/40
- Image should be sophisticated, not literal - think artistic representation of mathematics

**Case Study Sections:**
- GPS/Navigation: Satellite visualization or map interface
- Medical Imaging: MRI/CT scan artistic representation
- Climate Modeling: Weather patterns or Earth visualization
- Cryptography: Abstract lock/encryption visualization
- Each image should be high-quality, 16:9 or square aspect ratio

**Placement:** Images positioned as sticky elements in desktop scrollytelling sections, inline on mobile

## Accessibility & Dark Mode

- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Focus indicators: 2px ring-primary ring-offset-2 ring-offset-background
- Interactive questions: keyboard navigable with Enter to select
- Screen reader announcements for answer feedback
- Consistent dark mode across all inputs, selects, and interactive elements

## Key Differentiators

- **Educational Sophistication:** Professional design typically seen in tech products applied to educational content
- **Progressive Disclosure:** Information revealed at optimal pace through scroll
- **Active Learning:** Questions integrated into narrative flow, not separated
- **Visual Clarity:** Complex mathematical concepts made accessible through clean design and thoughtful visualization
- **Narrative Flow:** Each section builds on previous, creating cohesive learning journey