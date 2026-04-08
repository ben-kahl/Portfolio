# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Agent Instructions
* Planning: Use Opus for architectural decisions, task decomposition, and creating a detailed plan.md
* Implementation: Delegate all command execution and file edits to sonnet subagents, ensuring they follow Opus generated plan exactly.
* Workflow: If requirements are ambiguous, escalate to Opus immediately and get approval from user.

## Project Overview

Personal portfolio website for Ben Kahl, built with Next.js 15 (App Router) using React 19 and TypeScript. No testing framework, linting config (beyond default Next.js), or CI is currently set up.

## Commands

- `npm run dev` — Start dev server with Turbopack (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run Next.js linter

## Architecture

- **Next.js App Router** with all pages under `src/app/`. Uses CSS Modules for styling (`.module.css` files co-located with components/pages).
- **Design language**: Persona 3 Reload-inspired — bold geometric shapes, angular clip-path panels, deep blue palette, staggered CSS animations.
- **Pages**: Home (`/`), Projects (`/projects`), About (`/about`), Contact (`/contact`).
- **Home page** (`src/app/page.tsx`) is a client component with a large moon (two overlapping circles) positioned right via `.moonContainer`. Hover-based nav links inside the moon. Uses `HomeText` (large SVG "HOME" text) and `Selector` (triangle indicator with slide-in animation).
- **Subpages** all wrap content in `SubpageLayout` which provides: blue background, diagonal decorative stripe overlays (clip-path), page wipe-reveal animation, and `HamburgerNav`. Each subpage also uses `PageTitle` for large vertical background text on the left.
- **Shared components** in `src/app/components/`:
  - `HamburgerNav` — fixed hamburger icon (top-right), full-screen slide-in overlay with nav links. Accepts `color` prop for icon fill.
  - `SubpageLayout` — blue bg wrapper with 3 animated diagonal stripes and page entry animation.
  - `PageTitle` — large vertical text (writing-mode: vertical-rl) for page background decoration.
  - `HomeText` — SVG "HOME" text for the index page.
  - `Selector` — triangle SVG indicator for hovered nav links on home page.
- **CSS custom properties** (in `globals.css`): `--p3r-blue`, `--p3r-navy`, `--p3r-cyan`, `--p3r-pink`, `--p3r-light-blue`, `--p3r-mid-blue` for the P3R color palette.
- **Fonts**: Geist Sans, Geist Mono, and Lalezar loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`, `--font-lalezar`). Lalezar is the primary display font.
- **Path alias**: `@/*` maps to `./src/*`.
- **Animations**: All CSS keyframes, no JS animation libraries. Patterns: `pageReveal` (clip-path wipe), `stripeSlide` (translateX stagger), `panelSlideIn` (opacity + translateX), `selectorSlide` (hover indicator).
- `overflow-x: hidden` is set globally on html/body.
