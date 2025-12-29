const Logo = ({ className = "", inverted = false }: { className?: string; inverted?: boolean }) => {
  const color = inverted ? "#ffffff" : "#DC2626";
  
  return (
    <svg 
      viewBox="0 0 280 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lotus/Flame Icon */}
      <g transform="translate(0, 5)">
        {/* Outer lotus shape */}
        <path
          d="M25 45 Q25 20, 40 10 Q55 20, 55 45 Q55 65, 40 75 Q25 65, 25 45"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        {/* Inner flame */}
        <path
          d="M40 25 Q35 35, 40 45 Q45 35, 40 25 M35 50 Q40 55, 45 50"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Small diamond */}
        <path
          d="M38 60 L40 65 L42 60 L40 55 Z"
          fill={color}
        />
        {/* Decorative curves at bottom */}
        <path
          d="M30 48 Q40 42, 50 48"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
      </g>
      
      {/* SMINKUP Text */}
      <text
        x="70"
        y="55"
        fontFamily="'Playfair Display', serif"
        fontSize="32"
        fontWeight="500"
        letterSpacing="2"
        fill={color}
      >
        SMINKUP
      </text>
      
      {/* Embracing Beauty tagline */}
      <text
        x="70"
        y="75"
        fontFamily="'Montserrat', sans-serif"
        fontSize="11"
        fontWeight="300"
        letterSpacing="4"
        fill={color}
      >
        Embracing Beauty
      </text>
    </svg>
  );
};

export default Logo;
