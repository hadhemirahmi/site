export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Paper grain texture overlay */}
      <div className="absolute inset-0 bg-paper-grain opacity-100" />

      {/* Coral Orb — Top Right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse-glow"
        style={{ backgroundColor: "color-mix(in oklab, #e84c30 6%, transparent)" }}
      />

      {/* Acid Green Orb — Bottom Left */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] animate-pulse-glow"
        style={{
          backgroundColor: "color-mix(in oklab, #2d9c6b 4%, transparent)",
          animationDelay: "2s",
        }}
      />

      {/* Violet Orb — Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] animate-pulse-glow"
        style={{
          backgroundColor: "color-mix(in oklab, #7c4fff 3%, transparent)",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
