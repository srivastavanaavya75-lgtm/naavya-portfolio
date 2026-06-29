import { useState, useEffect, useRef, useCallback } from 'react';
import RevealLayer from './RevealLayer';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

const [smoothMousePos, setSmoothMousePos] = useState({
  x: -9999,
  y: -9999,
});

const [isHeroActive, setIsHeroActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Custom cursor refs
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const cursorRafRef = useRef<number>(0);

  const animateCursor = useCallback(() => {
    if (dotRef.current) {
      dotRef.current.style.left = `${cursorPos.current.x}px`;
      dotRef.current.style.top = `${cursorPos.current.y}px`;
    }
    if (ringRef.current) {
      ringPos.current.x += (cursorPos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (cursorPos.current.y - ringPos.current.y) * 0.22;
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top = `${ringPos.current.y}px`;
    }
    cursorRafRef.current = requestAnimationFrame(animateCursor);
  }, []);

  useEffect(() => {
    cursorRafRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(cursorRafRef.current);
  }, [animateCursor]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };

      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          setMousePos({ x: -9999, y: -9999 });
        }
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
    
  }, []);
  useEffect(() => {
  let frame: number;

  const animate = () => {
    setSmoothMousePos(prev => ({
      x: prev.x + (mousePos.x - prev.x) * 0.15,
      y: prev.y + (mousePos.y - prev.y) * 0.15,
    }));

    frame = requestAnimationFrame(animate);
  };

  animate();

  return () => cancelAnimationFrame(frame);
}, [mousePos]);

  // Stagger mount
  useEffect(() => {
    const t = setTimeout(() => setIsHeroActive(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Custom cursor (desktop only) ── */}
      <div ref={dotRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />

      {/* ── Hero ── */}
      <section
  ref={heroRef}
  className="relative w-full min-h-[100svh] overflow-hidden"
>
        {/* Layer 1 – Base portrait with Ken Burns */}
       <div className="absolute inset-0 z-0">
  <div
    className="w-full h-full"
   style={{
  backgroundImage: 'url(/images/Base_image.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '60',
  backgroundColor: '#000',
}}
  />
</div>

        {/* Layer 2 – Reveal image (spotlight mask) */}
        <RevealLayer mousePos={smoothMousePos} />
<div
  className="hero-red-glow absolute inset-0 pointer-events-none"
  style={{ zIndex: 15 }}
/>
        {/* Directional gradient overlays */}
        <div className="hero-gradient-overlay absolute inset-0 z-20 pointer-events-none" />
        <div className="hero-gradient-bottom absolute inset-0 z-20 pointer-events-none" />

        {/* Very subtle red vignette near bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-80 h-80 z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(74,0,16,0.28) 0%, transparent 70%)',
          }}
        />

        {/* ─────────────────────────────────────────── */}
        {/* Layer 3 – Main text content                 */}
        {/* ─────────────────────────────────────────── */}
       <div
  className="
    absolute
    z-30
    flex
    flex-col
    justify-center

    left-6
    md:left-[5vw]

    top-[18%]
    md:top-0
    md:bottom-0
  "
>
          {/* "I'm" */}
          <p
            className={`font-playfair italic text-white leading-none mb-1
              text-[3rem] sm:text-7xl md:text-8xl
              ${isHeroActive ? 'anim-fade-up delay-250' : 'opacity-0'}`}
            style={{ fontWeight: 500 }}
          >
            I&apos;m
          </p>

          {/* NAAVYA */}
          <h1
            className={`font-inter font-bold text-white leading-[0.9] uppercase
              text-[3.5rem] sm:text-7xl md:text-8xl
              red-glow
              ${isHeroActive ? 'anim-fade-up delay-420' : 'opacity-0'}`}
            style={{ letterSpacing: '-0.08em' }}
          >
            NAAVYA
          </h1>

          {/* Subtitle */}
          <p
            className={`font-playfair italic text-white/90 mt-4
              text-base sm:text-lg md:text-xl
              ${isHeroActive ? 'anim-fade-up delay-580' : 'opacity-0'}`}
            style={{ fontWeight: 500 }}
          >
            Frontend Developer
          </p>
        </div>

        {/* ── Bottom-left description (desktop only) ── */}
        <div
          className={`absolute z-30 hidden lg:block
            ${isHeroActive ? 'anim-fade-up delay-700' : 'opacity-0'}`}
          style={{ left: 'clamp(28px, 5.5vw, 100px)', bottom: '3.5rem', maxWidth: '320px' }}
        >
          <p className="font-inter text-white/50 text-sm leading-relaxed font-light">
            I craft modern digital experiences with React, AI tools, and creative
            development. Passionate about building products that look beautiful and
            feel effortless.
          </p>
        </div>

        {/* ── Bottom-right description ── */}
       <div
  className={`
    absolute
    z-30

    left-6
    right-6
    bottom-32

    md:left-auto
    md:right-10
    md:bottom-14

    md:max-w-[260px]

    ${isHeroActive ? 'anim-fade-up delay-850' : 'opacity-0'}
  `}
>
          <div className="w-6 h-px bg-white/30 mb-3" />
          <p className="font-inter text-white/55 text-sm md:text-xs leading-relaxed font-light text-center md:text-right">
            Frontend developer who blends design and code. Building premium interfaces,
            AI-powered projects, and memorable digital experiences.
          </p>
        </div>

        {/* ── Scroll hint ── */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5
            ${isHeroActive ? 'anim-fade-up delay-850' : 'opacity-0'}`}
        >
          <span className="font-inter text-white/30 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>
    </>
  );
}
