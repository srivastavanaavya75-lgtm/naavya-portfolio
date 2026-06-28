# Naavya Srivastava — Portfolio

A premium, cinematic, luxury portfolio hero section built with **React 18 + TypeScript + Vite + Tailwind CSS**.

## Features

- 🎯 **Cursor spotlight reveal** — a smooth 260px radial-gradient mask follows the cursor, revealing an alternate portrait image beneath
- 🎬 **Ken Burns zoom** — the base portrait slowly zooms in for a cinematic feel
- ✨ **Staggered entrance animations** — heroFadeUp with blur-to-clear, timed across all text elements
- 🧊 **Glassmorphism nav pill** — backdrop-blur pill menu with hover underline micro-interactions
- 🖱️ **Custom cursor** — small dot + trailing ring with mix-blend-mode: difference
- 📱 **Fully responsive** — mobile collapses nav, hides bottom-left paragraph, full-width bottom-right

## Setup

```bash
npm install
npm run dev
```

## Images

Place your two portrait images inside `public/images/`:

```
public/images/Base_image.png    ← always visible (Ken Burns zoom)
public/images/Reveal_image.png  ← visible only inside cursor spotlight
```

## Project Structure

```
src/
  components/
    Navbar.tsx        – Fixed glassmorphism navigation
    Hero.tsx          – Full-screen hero section, animation orchestration
    RevealLayer.tsx   – Canvas-based radial gradient mask / spotlight reveal
  App.tsx             – Root component
  main.tsx            – Entry point
  index.css           – Global styles, keyframe animations, utility classes
```

## Spotlight Logic

`RevealLayer.tsx` creates a hidden `<canvas>` element, draws a radial gradient centered on the cursor, converts it to a `dataURL`, and applies it as `mask-image` / `-webkit-mask-image` on the reveal image div. Smooth cursor tracking uses lerp (`smooth += (target - smooth) * 0.1`) inside a `requestAnimationFrame` loop.

## Design Tokens

| Token | Value |
|---|---|
| Background | `#000000` |
| Cherry deep | `#4A0010` |
| Cherry red | `#7A0019` |
| Display font | Playfair Display Italic |
| Body font | Inter |
| Spotlight radius | `260px` |
