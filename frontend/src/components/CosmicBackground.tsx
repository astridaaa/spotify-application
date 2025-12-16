export function CosmicBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, 
            #000000 0%, 
            #2D149F 12.5%, 
            #020258 25%, 
            #1A0136 37.5%, 
            #3A016C 50%, 
            #89157E 62.5%, 
            #2E0490 75%, 
            #2D149F 87.5%, 
            #020258 100%)`,
          backgroundSize: "200% 200%",
          animation: "bgShift 26s infinite alternate",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-conic-gradient(
            from 0deg,
            white 0deg 1deg,
            transparent 1deg 2deg
          )`,
          backgroundSize: "4px 4px",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Starfield Layer 1 - small twinkling stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 85%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent),
            radial-gradient(1px 1px at 25% 15%, white, transparent),
            radial-gradient(1px 1px at 85% 90%, white, transparent),
            radial-gradient(1px 1px at 45% 25%, white, transparent),
            radial-gradient(1px 1px at 10% 45%, white, transparent),
            radial-gradient(1px 1px at 75% 65%, white, transparent),
            radial-gradient(1px 1px at 40% 80%, white, transparent),
            radial-gradient(1px 1px at 95% 35%, white, transparent),
            radial-gradient(1px 1px at 5% 75%, white, transparent)`,
          backgroundSize: "200% 200%",
          animation:
            "starsDrift1 60s linear infinite, starsTwinkle 2s ease-in-out infinite",
        }}
      />

      {/* Starfield Layer 2 - medium twinkling stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 40% 20%, white, transparent),
            radial-gradient(2px 2px at 80% 80%, white, transparent),
            radial-gradient(2px 2px at 25% 55%, white, transparent),
            radial-gradient(2px 2px at 65% 35%, white, transparent),
            radial-gradient(2px 2px at 10% 90%, white, transparent),
            radial-gradient(1px 1px at 55% 45%, white, transparent),
            radial-gradient(1px 1px at 30% 70%, white, transparent),
            radial-gradient(1px 1px at 88% 22%, white, transparent),
            radial-gradient(1px 1px at 12% 33%, white, transparent),
            radial-gradient(2px 2px at 72% 58%, white, transparent)`,
          backgroundSize: "300% 300%",
          animation:
            "starsDrift2 80s linear infinite, starsTwinkle 3s ease-in-out infinite 0.5s",
        }}
      />

      {/* Starfield Layer 3 - larger twinkling stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 30% 45%, rgba(255,255,255,0.95), transparent),
            radial-gradient(2px 2px at 70% 25%, rgba(255,255,255,0.95), transparent),
            radial-gradient(2px 2px at 85% 75%, rgba(255,255,255,0.95), transparent),
            radial-gradient(2px 2px at 45% 90%, rgba(255,255,255,0.95), transparent),
            radial-gradient(1px 1px at 18% 62%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 92% 48%, rgba(255,255,255,0.9), transparent),
            radial-gradient(2px 2px at 62% 12%, rgba(255,255,255,0.95), transparent)`,
          backgroundSize: "400% 400%",
          animation:
            "starsDrift3 100s linear infinite, starsTwinkle 4s ease-in-out infinite 1s",
        }}
      />

      {/* Extra twinkling layer - bright stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 15% 20%, rgba(0,238,255,0.6), transparent),
            radial-gradient(2px 2px at 82% 42%, rgba(125,92,255,0.6), transparent),
            radial-gradient(1px 1px at 48% 68%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 35% 88%, rgba(0,238,255,0.5), transparent),
            radial-gradient(2px 2px at 68% 15%, rgba(125,92,255,0.5), transparent),
            radial-gradient(1px 1px at 8% 52%, rgba(255,255,255,0.7), transparent)`,
          backgroundSize: "350% 350%",
          animation:
            "starsDrift2 70s linear infinite, starsTwinkle 2.5s ease-in-out infinite 1.5s",
        }}
      />

      {/* Meteors */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[80px]"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)",
              animation: `meteor ${5 + i * 2}s linear infinite`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at bottom, rgba(10,6,60,0.65), transparent 70%),
            linear-gradient(to top, rgba(10,6,60,0.4), transparent 50%)`,
        }}
      />
    </div>
  );
}
