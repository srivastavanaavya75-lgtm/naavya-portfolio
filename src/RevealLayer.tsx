import { useMemo } from 'react';

interface RevealLayerProps {
  mousePos: {
    x: number;
    y: number;
  };
}

export default function RevealLayer({
  mousePos,
}: RevealLayerProps) {
  const maskImage = useMemo(
    () =>
      `radial-gradient(
        circle 400px at ${mousePos.x}px ${mousePos.y}px,
        rgba(255,255,255,1) 0%,
        rgba(255,255,255,0.95) 50%,
        rgba(255,255,255,0.6) 75%,
        rgba(255,255,255,0) 100%
      )`,
    [mousePos]
  );

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        backgroundImage: "url('/images/Reveal_image.png')",

        backgroundSize: 'cover',
        backgroundPosition: 'center 60',
        backgroundRepeat: 'no-repeat',

        maskImage,
        WebkitMaskImage: maskImage,

        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',

        filter: 'brightness(1.05) saturate(1.15)',
      }}
    />
  );
}