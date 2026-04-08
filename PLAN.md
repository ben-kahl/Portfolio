# Persona 3 Reload Portfolio — Implementation Plan

## Context
The portfolio site is inspired by Persona 3 Reload's bold, geometric UI. The home page is mostly built but has a moon scaling bug (absolute positioning with mixed units breaks on resize). Projects/About pages are empty stubs. Contact has basic content but poor styling. The user wants all pages done together with full P3R-style animations.

## Phase 1: Foundation

### 1. Update `src/app/globals.css`
- Add CSS custom properties for the P3R color palette (`--p3r-blue`, `--p3r-navy`, `--p3r-cyan`, `--p3r-pink`, `--p3r-light-blue`, `--p3r-mid-blue`)
- Change `overflow: hidden` to `overflow-x: hidden` on html/body (subpages may need vertical scroll)

### 2. Create `src/app/components/HamburgerNav.tsx` + `.module.css`
- Client component: hamburger icon (fixed top-right), full-screen dark overlay with nav links, X close button
- Slide-in animation (`translateX(100%)` → `0`), 0.3s ease-out
- Used on all pages

### 3. Create `src/app/components/SubpageLayout.tsx` + `.module.css`
- Wrapper for Projects/About/Contact: blue background, HamburgerNav, diagonal decorative overlays
- Diagonal overlays via `clip-path: polygon()` on absolutely-positioned divs with `pointer-events: none`
- Page entry animation: clip-path wipe reveal (0.6s)
- Staggered stripe slide-in animations (0.5s with delays)

### 4. Create `src/app/components/PageTitle.tsx` + `.module.css`
- Reusable large vertical background text (writing-mode: vertical-rl, low opacity, positioned left)
- Fade+slide entry animation

## Phase 2: Fix Home Page

### 5. Restructure `src/app/page.tsx`
- Wrap both circles in a `.moonContainer` div for proper relative positioning
- Add HamburgerNav import

### 6. Rewrite circle positioning in `src/app/page.module.css`
- `.moonContainer`: `position: absolute; top: 50%; right: 0; transform: translateY(-50%); margin-right: -35vw` with `vw`-based sizing
- Both circles positioned relative to this container instead of the page
- `.links` uses percentage positioning relative to foreground circle (`left: 35%; top: 55%`)
- Add hover transitions on links (color 0.2s, transform 0.2s, scale bump on active)

### 7. Fix `src/app/components/HomeText.module.css`
- Replace fixed `1370px × 964px` with `width: 60vw; height: auto`

### 8. Fix `src/app/components/Selector.module.css`
- Add slide-in animation (opacity 0 + translateX → visible)
- Fix positioning to be relative to `li` instead of magic `127px` offset

## Phase 3: Build Subpages

### 9. Projects page (`src/app/projects/page.tsx` + `.module.css`)
- Wrap in SubpageLayout, add PageTitle "PROJECTS"
- Project items in angular white panels using `clip-path` + `skewX(-3deg)` with counter-skew on content
- Staggered entry animations on project panels

### 10. Contact page (`src/app/contact/page.tsx` + `.module.css`)
- Wrap in SubpageLayout, add PageTitle "CONTACT"
- White angular panel with contact rows (email, github, linkedin icons)
- Remove the broken global `body` style (CSS Modules don't scope bare element selectors — this currently leaks globally)
- Rotated header text, contact row hover effects

### 11. About page (`src/app/about/page.tsx` + `.module.css`)
- Wrap in SubpageLayout, add PageTitle "ABOUT"
- "Ben Kahl" name prominent, bio text, placeholder image area
- Angular panel layout with clip-path

## Phase 4: Polish
- Delete unused `Nav.tsx` / `Nav.module.css` / `Footer.tsx` if not needed
- Test at 1280, 1440, 1920 viewport widths
- Add media queries for < 1024px
- Tweak animation timing/easing

## Phase 5: Housekeeping
- Update `CLAUDE.md` with new architecture info (SubpageLayout, color variables, animation patterns)
- Create `MEMORY.md` and relevant memory files

## Key Technical Decisions
- **CSS animations over framer-motion**: no new deps, CSS keyframes for all transitions
- **`clip-path: polygon()` for decorative overlays**: precise angles, no child layout impact
- **SubpageLayout component over route group layout**: avoids restructuring file tree, easy to promote later
- **Contact page body fix**: the current `body { background-color }` in CSS Modules leaks globally — must move to SubpageLayout wrapper

## Verification
1. `npm run dev` — check all 4 pages render correctly
2. Resize browser from 1024px to 1920px wide — moon and layouts should scale smoothly
3. Test hamburger nav on every page (open, navigate, close)
4. Verify page entry animations fire on navigation
5. `npm run build` — ensure no build errors
