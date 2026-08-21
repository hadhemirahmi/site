export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Delicate background grid pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-60" />

      {/* Subtle soft ambient aura - top right */}
      <div
        className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232, 76, 48, 0.08) 0%, rgba(255, 255, 255, 0) 70%)" }}
      />

      {/* Subtle soft ambient aura - center left */}
      <div
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(255, 255, 255, 0) 70%)" }}
      />

      {/* Subtle soft ambient aura - bottom right */}
      <div
        className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 74, 198, 0.06) 0%, rgba(255, 255, 255, 0) 70%)" }}
      />
    </div>
  );
}
