import { ReactNode } from "react";

interface CosmicCardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

export function CosmicCard({
  children,
  className = "",
  highlight = false,
}: CosmicCardProps) {
  return (
    <div
      className={`rounded-[20px] border-2 border-[#223056] p-6 relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(180deg, #111A33 0%, #0E1530 100%)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
      }}
    >
      {highlight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(42,245,165,0.15) 0%, rgba(225,75,240,0.15) 100%)",
            mixBlendMode: "screen",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
