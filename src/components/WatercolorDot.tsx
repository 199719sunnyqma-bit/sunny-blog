interface WatercolorDotProps {
  color?: string;
  size?: number;
  opacity?: number;
  className?: string;
}

export default function WatercolorDot({
  color = '#F4A261',
  size = 200,
  opacity = 0.15,
  className = '',
}: WatercolorDotProps) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: 'blur(60px)',
      }}
    />
  );
}
