import logo from "fuzzfloral/src/assets/fuzzfloral-logo.png";

const Flower = ({ style, delay }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="flower"
      style={{
        ...style,
        animationDelay: delay,
      }}
    >
      {/* center */}
      <circle cx="50" cy="50" r="6" fill="#b72a2a" />

      {/* petals */}
      <g
        stroke="#b72a2a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      >
        <ellipse cx="50" cy="20" rx="14" ry="16" />
        <ellipse cx="80" cy="50" rx="16" ry="14" />
        <ellipse cx="50" cy="80" rx="14" ry="16" />
        <ellipse cx="20" cy="50" rx="16" ry="14" />
      </g>
    </svg>
  );
};

export default function LogoBloom() {
  const flowers = [
    { style: { top: "-15%", left: "15%" }, delay: "0.2s" },
    { style: { top: "10%", right: "-15%" }, delay: "0.4s" },
    { style: { bottom: "-10%", left: "20%" }, delay: "0.6s" },
    { style: { bottom: "10%", right: "-15%" }, delay: "0.8s" },
  ];

  return (
    <div className="logo-container">
      
      {/* ✅ YOUR PNG LOGO */}
      <img src={logo} alt="FuzzFloral logo" className="logo" />

      {/* 🌸 FLOWERS */}
      {flowers.map((f, i) => (
        <Flower key={i} style={f.style} delay={f.delay} />
      ))}
    </div>
  );
}
