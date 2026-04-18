const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 97) % 100}%`,
  delay: `${(index * 0.7) % 8}s`,
  duration: `${10 + (index % 6)}s`,
  size: `${2 + (index % 3)}px`,
}));

const TrendingAIAnimation = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.42]"
      aria-hidden="true"
    >
      <div className="ai-aurora-layer" />

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ai-particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingAIAnimation;
