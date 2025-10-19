import React from "react";

const FlameText = () => {
  const embers = Array.from({ length: 25 }); // 🔥 number of ember particles

  return (
    <div className="relative inline-block">
      {/* Main flaming text */}
      <h1 className="font-semibold text-4xl md:text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-t from-orange-700 via-yellow-400 to-white animate-fire relative z-10">
        PRAGYATHA '25
      </h1>

      {/* Floating embers */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {embers.map((_, i) => {
          const size = Math.random() * 4 + 2; // ember size (2px–6px)
          const left = Math.random() * 100; // random x position
          const delay = Math.random() * 4; // random animation delay
          const duration = 2 + Math.random() * 3; // animation speed (2s–5s)
          return (
            <span
              key={i}
              className="absolute rounded-full bg-orange-400 opacity-70 animate-rise blur-[1px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default FlameText;
