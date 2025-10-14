# Design Guidelines: Interactive Mathematics Scrollytelling Experience

## Design Approach

**Selected Approach:** Reference-Based Editorial with Artisanal Flat Design
- Primary inspiration: Medium's editorial layouts, Kinfolk magazine aesthetics, The Pudding's data storytelling
- Goal: Create a warm, inviting educational narrative that feels like a beautifully crafted magazine article
- Principle: Organic, asymmetric layouts that guide the eye naturally through mathematical stories

## Core Design Elements

### A. Color Palette

**Dark Mode:**
- Background: 28 25% 12% (warm charcoal)
- Surface: 28 20% 16% (elevated warm gray)
- Primary: 25 85% 58% (terracotta/burnt orange)
- Accent: 45 85% 62% (warm gold)
- Text Primary: 30 15% 92%
- Text Secondary: 30 10% 68%
- Success: 145 60% 55% (sage green)
- Error: 355 75% 60% (warm red)

**Light Mode:**
- Background: 40 30% 96% (warm cream)
- Surface: 0 0% 100%
- Primary: 25 85% 48%
- Accent: 45 75% 52%
- Text Primary: 28 25% 18%
- Text Secondary: 28 15% 45%

### B. Typography

**Font Stack:**
- Display/Headers: 'Fraunces' (Google Fonts) - Elegant serif with character
- Body: 'Crimson Pro' (Google Fonts) - Readable serif for long-form
- Accents/Labels: 'DM Sans' (Google Fonts) - Clean sans for UI elements
- Math Equations: 'JetBrains Mono' - Technical clarity

**Hierarchy:**
- Hero Headline: text-5xl md:text-7xl font-bold leading-tight font-display
- Section Headers: text-3xl md:text-5xl font-bold leading-tight font-display
- Subheaders: text-xl md:text-2xl font-medium font-body
- Body Text: text-lg md:text-xl leading-relaxed font-body
- UI Labels: text-sm uppercase tracking-wide font-sans

### C. Layout System

**Broken Grid Philosophy:**
- Spacing Primitives: Tailwind units of 6, 10, 16, 24, 32, 40
- Asymmetric columns: 40/60 splits, offset grids, overlapping elements
- Organic whitespace: Varying section padding (py-24 to py-40)
- Staggered content: Images break grid boundaries, text wraps irregularly
- Z-axis layering: Content cards overlap sections with negative margins

**Container Strategy:**
- Base container: max-w-7xl with irregular internal grids
- Narrow reading: max-w-2xl offset from center
- Wide visuals: Break container bounds with -mx-4 or absolute positioning
- Asymmetric splits: grid-cols-5 with col-span-2 + col-span-3 patterns

### D. Component Library

**Hero Section:**
- Large atmospheric image: Abstract mathematical art (golden ratio spirals, Fibonacci patterns, historical manuscripts)
- Asymmetric text placement: Offset to left or right third
- Changing headline text: Rotates through mathematical quotes/concepts on scroll
- Overlay: Warm gradient (from-primary/20 via-background/60 to-background)
- Scroll indicator: Artistic line drawing or handwritten arrow

**Interactive Timeline:**
- Horizontal scroll on desktop, vertical on mobile
- Period markers: 1600s, 1700s, 1800s, 1900s, 2000s
- Inventor cards: Portrait medallions with names, dates, discoveries
- Connecting thread: Hand-drawn style line linking events
- Trivia triggers: Click cards to reveal questions about inventors

**Story-Based Case Studies (5-6 sections):**
- Irregular layout per section: Alternate between image-left, image-right, full-bleed
- Narrative structure: Historical context → Problem → Solution → Impact
- Visual elements: Mix of period illustrations, modern diagrams, artistic overlays
- Pull quotes: Large serif quotes from inventors in offset boxes
- Interactive reveals: Scroll to unveil mathematical proofs step-by-step

**Trivia Question Cards:**
- Organic shapes: Rounded-3xl with subtle shadow, not rigid rectangles
- Warm surface: bg-surface with border-primary/20 border
- Answer options: Radio buttons styled as handwritten checkboxes
- Feedback: Color-coded text reveals with inventor portraits
- Score tracker: Decorative progress bar with vintage aesthetic

**Visual Demonstrations:**
- Hand-drawn style graphs: SVG paths with organic, imperfect lines
- Equation overlays: Floating mathematical notation with paper texture
- Data cards: Stacked, slightly rotated cards showing comparisons
- Animated diagrams: Gentle fade-ins, no sharp geometric transitions

**Magazine-Style Elements:**
- Drop caps: First letter of major sections enlarged and decorated
- Sidenotes: Margin notes with smaller text, connected by ornamental brackets
- Pull statistics: Large numbers in accent color breaking into margins
- Section dividers: Artistic flourishes or mathematical symbols as ornaments

### E. Animations & Interactions

**Scroll-Triggered Effects:**
- Fade-up with gentle parallax (images move 15% slower than content)
- Staggered reveals: Text blocks appear sequentially with 200ms delays
- Timeline progression: Cards slide in from sides as timeline enters view
- Equation building: Mathematical symbols assemble piece by piece
- Vintage transitions: Subtle sepia flash or paper texture overlay

**Interactive Moments:**
- Hover: Lift with warm shadow (shadow-xl shadow-primary/10)
- Trivia feedback: Gentle bounce animation + color wash
- Timeline scrubbing: Smooth horizontal scroll with momentum
- Image reveals: Curtain effect or iris expand from center
- Hero text rotation: Cross-fade between mathematical concepts every 4 seconds

### F. Images

**Large Hero Image:**
- Full-width atmospheric background: Historical mathematical manuscript texture, golden ratio visualization, or Fibonacci spiral in nature
- Overlay: Warm gradient maintaining readability
- Style: Aged, artisanal, evokes sense of discovery

**Case Study Images:**
- Mix of historical and modern: Inventor portraits, vintage diagrams, contemporary photography
- Treatment: Subtle sepia tones or warm color grading for cohesion
- Aspect ratios: Varied (portrait for people, landscape for diagrams, square for concepts)
- Placement: Break grid intentionally - overlap text, extend into margins, cluster asymmetrically

**Timeline Portraits:**
- Circular medallion images of mathematicians
- Vintage engraving style or colorized historical photos
- Consistent size but varied positioning along timeline

**Supporting Visuals:**
- Period-appropriate illustrations for historical sections
- Modern data visualizations with vintage aesthetic (muted colors, serif labels)
- Textural elements: Paper grain, ink effects, margin doodles

## Accessibility & Dark Mode

- High contrast serif typography: Minimum 18px body for readability
- Focus indicators: 3px ring-accent with subtle glow effect
- Keyboard navigation: Tab through timeline, Enter for trivia selection
- Warm dark mode: Reduced eye strain with brown-tinted backgrounds
- Screen reader: Descriptive labels for all interactive mathematical elements
- Color-independent feedback: Icons accompany color changes for answers

## Key Differentiators

- **Editorial Warmth:** Inviting magazine aesthetic vs sterile educational interface
- **Human-Centered Math:** Stories of inventors create emotional connection to concepts
- **Broken Grid Artistry:** Organic layouts feel crafted, not templated
- **Layered Narrative:** Timeline + case studies + trivia create multi-dimensional exploration
- **Artisanal Details:** Drop caps, sidenotes, ornamental dividers add tactile quality
- **Warm Intelligence:** Sophisticated color palette makes mathematics approachable