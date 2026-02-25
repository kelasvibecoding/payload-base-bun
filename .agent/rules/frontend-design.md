---
trigger: always_on
glob: "**/*"
---

# Distinctive Frontend Design (Anti-Generic)

Follow these rules to create production-grade frontend interfaces that avoid generic "AI aesthetics" and "AI slop".

## 1. Unified Aesthetic & Intentionality
Your design should feel cohesive between the **Payload Admin Panel** and the **Custom Frontend**, but avoid "generic SaaS" aesthetics.
- **Aesthetic Intentionality**: Before coding, commit to a bold direction from the [Theme Profiles](./theme-profiles.md) (e.g., Editorial, Brutalist, Tech Innovation).
- **Admin Consistency**: Use deep, rich grays (Slate/Zinc) and consistent border radiuses matching the Admin UI for internal tools.
- **Visual Texture**: Avoid solid flat backgrounds. Use grain overlays, noise, or gradient meshes to create depth.
- **Dynamic Response**: Implement micro-interactions (hover states, spring animations) that feel alive.

## 2. Aesthetic Directions
Choose an extreme to anchor your design:
- **Brutalist Raw**: Unfinished, bold typography, loud borders.
- **Editorial Magazine**: High contrast, distinctive serif fonts, large negative space.
- **Retro-Futuristic**: 80s/90s tech inspiration, neon accents, CRT noise.
- **Organic & Natural**: Soft shadows, claymorphism, earth tones, bionic curves.
- **Luxury Refined**: High-end materials, gold/silver accents, ultra-thin lines, serif pairings.
- **Industrial Utilitarian**: Monospace fonts, blueprint-like grids, high-density data.

## 3. Typography Rules
- **NEVER** use: Inter, Roboto, Arial, or standard system fonts as the primary display choice.
- **ALWAYS**: Choose a "hero" font with personality for headings. Pair it with a highly legible, refined body font.
- **ACTION**: Look for fonts like *Outfit, Syne, Cabinet Grotesk, Bricolage Grotesque, Cl Clash* or distinctive Google Fonts that carry character.

## 4. Visual Texture & Depth
- **Zero Solid Backgrounds**: Avoid flat, solid color backgrounds.
- **Texture**: Add subtle grain overlays, noise textures, or paper-like textures.
- **Gradients**: Use complex gradient meshes or blurred radial spots rather than simple linear transitions.
- **Translucency**: Use layered glassmorphism with backdrop-blur and border-highlighting.

## 5. Movement & Storytelling
- **Staggered Reveals**: Use `animation-delay` for staggered entry of elements (fade-up, slide-in).
- **CSS-Only First**: Prioritize high-performance CSS animations for transitions.
- **Motion Library**: Use Framer Motion/Motion for complex React interactions (scroll transforms, layout transitions).
- **High Impact**: Focus on one or two "hero" animations (e.g., a sophisticated loader or a parallax scroll effect) rather than many small, distracting ones.

## 6. Spatial Composition
- **Break the Grid**: Allow elements to overlap or spill out of their containers.
- **Asymmetry**: Use intentional asymmetry to create visual interest.
- **Asymmetry**: Use intentional asymmetry to create visual interest.
- **Diagonal Flow**: Use slanted sections or diagonal element placements to guide the eye.

## 7. Icon Standardization
- **Library**: ALWAYS use `lucide-react`.
- **Sizing**: 
  - `h-4 w-4`: Inline text, small buttons.
  - `h-5 w-5`: Navigation links, standard buttons.
  - `h-6 w-6`: Cards, section headers, features.
  - `h-12 w-12`: Hero features or large card accents.
- **Styling**: Use semantic colors (`text-primary`, `text-muted-foreground`) or specific brand tints. Avoid solid black or random hex codes.
- **Stroke**: Keep stroke-width at 2px (default) unless a "light/luxury" approach is chosen (1.5px).

## 8. Anti-Slop Checklist
- [ ] Are we using "Inter" or a system font? (If yes, CHANGE IT).
- [ ] Is there a "purple gradient on white" background? (If yes, EXPLORE OTHER PALETTES).
- [ ] Does it look like a standard dashboard template? (If yes, PIVOT to a specific aesthetic).
- [ ] Is the layout predictable? (If yes, ADD ASYMMETRY or OVERLAP).
