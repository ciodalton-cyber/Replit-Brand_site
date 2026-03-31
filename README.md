# Dalton Grant Jr. — Brand Site

Professional personal brand website for a Writer/Director with 20+ years in feature animation.

## Credits
Pixar · DreamWorks · Disney · Paramount · Amazon · Mango TV

## Stack
- React + Vite
- Tailwind CSS
- IBM Plex Mono / Inter / Source Serif 4
- Swiss Grid System (Müller-Brockmann)

## Design System
Logo Concept #3 — The Action Line. Built on the golden ratio (y = 61.8%) with a strict 20px modular grid.

## Pages
1. **Intro** — Full-screen atmospheric page with TapNow video background placeholder
2. **Services & Connect** — Four services, Redbook link, WeChat QR modal, footer

## To insert your TapNow video
Replace the placeholder div in `src/pages/Intro.tsx` with:
```jsx
<video autoPlay muted loop playsInline style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}>
  <source src="/your-clip.mp4" type="video/mp4" />
</video>
```

## Contact
ciodalton@gmail.com

