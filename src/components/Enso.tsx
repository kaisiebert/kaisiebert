interface EnsoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

const Enso = ({ className = "", size = 200, animated = true }: EnsoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        className={animated ? "animate-enso" : ""}
        style={{
          transformOrigin: "center",
        }}
      />
      {/* Small opening in the circle - characteristic of Enso */}
      <path
        d="M 165 85 
           Q 175 100, 165 115"
        stroke="hsl(var(--background))"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
};

export default Enso;
