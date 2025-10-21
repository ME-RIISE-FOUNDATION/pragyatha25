import React, { Suspense, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { Link } from 'react-router-dom';
// import BlueEmbers from "./components/BlueEmbers"; // ❌ Removed: This component was imported but not used.

// ✅ LAZY-LOADING: This ensures the ImageGallery component code
// is only downloaded by the browser when it's needed,
// speeding up your initial page load.
const ImageGallery = React.lazy(() => import("./components/ImageGallery"));

const Home = () => {
  const backgroundImageUrl = "/home_bg.jpg";
  const [snowflakeCount, setSnowflakeCount] = useState(70);

  // ✅ This logic is already optimal.
  // It correctly sets an event listener on mount
  // and cleans it up on unmount.
  useEffect(() => {
    const updateSnowflakeCount = () => {
      const width = window.innerWidth;
      if (width < 480) setSnowflakeCount(25);
      else if (width < 768) setSnowflakeCount(40);
      else setSnowflakeCount(70);
    };

    updateSnowflakeCount();
    window.addEventListener("resize", updateSnowflakeCount);
    return () => window.removeEventListener("resize", updateSnowflakeCount);
  }, []); // Empty dependency array is correct here.

  return (
    <div className="relative overflow-hidden">
      {/* ❄ Optimized Snowfall Layer */}
      <Suspense fallback={null}>
        <div className="fixed inset-0 pointer-events-none z-20 will-change-transform">
          <Snowfall
            color="#dee4f0"
            snowflakeCount={snowflakeCount}
            speed={[0.5, 2]}
          />
        </div>
      </Suspense>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>

        {/* Content */}
        <main className="relative z-10 px-2 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
          <h1
            className="font-got text-gray-200 drop-shadow-lg text-center whitespace-nowrap
    tracking-[0.25em] sm:tracking-[0.35em]
    text-[clamp(1.8rem,7vw,6rem)] leading-tight
    scale-x-[0.85] sm:scale-x-100 ocean-flicker"
          >
            PRAGYATHA'25
          </h1>

          <p className="font-mon mt-4 uppercase text-xs sm:text-sm md:text-lg lg:text-xl tracking-widest text-gray-400 text-center">
            Proclaim Your Potential
          </p>

          <style>{`
    /* Ocean flickering glow animation */
    @keyframes ocean-flicker {
      0%, 100% {
        text-shadow:
          0 0 5px rgba(0, 150, 255, 0.25),
          0 0 10px rgba(0, 200, 255, 0.15),
          0 0 20px rgba(0, 255, 255, 0.1);
        color: rgba(210, 240, 255, 0.9);
      }
      20% {
        text-shadow:
          0 0 8px rgba(0, 150, 255, 0.5),
          0 0 15px rgba(0, 220, 255, 0.3),
          0 0 25px rgba(0, 255, 255, 0.2);
      }
      40% {
        text-shadow:
          0 0 6px rgba(0, 180, 255, 0.4),
          0 0 18px rgba(0, 240, 255, 0.3),
          0 0 30px rgba(0, 255, 255, 0.25);
      }
      60% {
        text-shadow:
          0 0 4px rgba(0, 130, 255, 0.2),
          0 0 10px rgba(0, 190, 255, 0.15),
          0 0 15px rgba(0, 240, 255, 0.1);
      }
      80% {
        text-shadow:
          0 0 7px rgba(0, 170, 255, 0.35),
          0 0 20px rgba(0, 230, 255, 0.25),
          0 0 28px rgba(0, 255, 255, 0.15);
      }
    }

    .ocean-flicker {
      animation: ocean-flicker 4s ease-in-out infinite;
      color: #e6faff;
    }
  `}</style>
        </main>
      </section>

      {/* GALLERY (Lazy Loaded) */}
      <Suspense
        fallback={
          <div className="text-center text-gray-400 py-10 animate-pulse">
            Loading Gallery...
          </div>
        }
      >
        <ImageGallery />
      </Suspense>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen bg-black text-white py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <header className="text-center mb-14 sm:mb-16">
            <h1
              className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4"
              style={{
                textShadow:
                  "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)",
              }}
            >
              ABOUT US
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl tracking-wider uppercase">
              Discover Our Story
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 font-mon">
              {/* About Text */}
              <div className="space-y-5 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-wider uppercase mb-4">
                  Welcome to Pragyatha '25
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Pragyatha ’25 isn’t just an event — it’s a movement celebrating
                  innovation, entrepreneurship, and the creative power of young
                  minds. Organized by the ME-RIISE Foundation and Malnad College of
                  Engineering, Hassan, it unites innovators, entrepreneurs, and
                  technologists from across the nation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: "500+", label: "Participants" },
                  { value: "5+", label: "Events" },
                  { value: "3", label: "Days" },
                  { value: "10+", label: "Colleges" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  title: "Our Vision",
                  text: `To engender industry ready graduates possessing magnificent skills
                  in the arena of innovation and technological development of products/
                  services.`,
                },
                {
                  title: "Our Mission",
                  text: `To provide students with opportunities to showcase their skills,
                  learn from industry experts, and collaborate on projects that make a
                  real difference in the world.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 font-mon transition-all duration-300 hover:bg-white/10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3 text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6 sm:p-10 font-mon">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 mb-5 text-sm sm:text-base max-w-2xl mx-auto">
                Don't miss out on this incredible opportunity to showcase your talents
                and connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    to="/events"
    className="px-6 sm:px-8 py-3 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm sm:text-base"
  >
    View Events
  </Link>

  <Link
    to="/contact"
    className="px-6 sm:px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase text-sm sm:text-base"
  >
    Contact Us
  </Link>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ❌ Removed React.memo().
// React.memo() is for optimizing components when their *props* change.
// This component's only re-render is caused by its *internal state* (snowflakeCount),
// so memo() provides no performance benefit and just adds a small, unnecessary check.
export default Home;