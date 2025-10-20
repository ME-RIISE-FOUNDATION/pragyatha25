import React, { Suspense, useMemo } from 'react';
import Snowfall from 'react-snowfall';
import ImageGallery from './components/ImageGallery';
import BlueEmbers from './components/BlueEmbers';

const Home = () => {
  const backgroundImageUrl = '/home_bg.jpg';

  // ✅ Reduce snowflake count dynamically based on screen width
  const snowflakeCount = useMemo(() => {
    if (typeof window === 'undefined') return 60;
    if (window.innerWidth < 480) return 25;
    if (window.innerWidth < 768) return 40;
    return 70;
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* ❄ Optimized Snowfall (wrapped in Suspense, lower z-index, fewer flakes) */}
      <Suspense fallback={null}>
        <div className="fixed inset-0 pointer-events-none z-20 will-change-transform">
          <Snowfall color="#dee4f0" snowflakeCount={snowflakeCount} speed={[0.5, 2]} />
        </div>
      </Suspense>

      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* ✅ Simplified overlay for better GPU performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>

        {/* Content */}
        <main className="relative z-10 px-4">
          <h1 className="font-got text-gray-200 text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg tracking-widest">
            PRAGYATHA'25
          </h1>
          <p className="mt-4 uppercase text-sm sm:text-base md:text-lg lg:text-xl tracking-widest text-gray-300">
            Proclaim Your Potential
          </p>
        </main>
      </div>

      {/* Lazy Load Gallery to improve first paint */}
      <Suspense fallback={<div className="text-center text-gray-400 py-10">Loading Gallery...</div>}>
        <ImageGallery />
      </Suspense>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <header className="text-center mb-16">
            <h1
              className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4"
              style={{
                textShadow:
                  '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)',
              }}
            >
              ABOUT US
            </h1>
            <p className="text-gray-300 text-lg md:text-xl tracking-wider uppercase">
              Discover Our Story
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 font-mon">
              {/* About Text */}
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold tracking-wider uppercase mb-4">
                  Welcome to Pragyatha '25
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Pragyatha ’25 isn’t just an event — it’s a movement celebrating
                  innovation, entrepreneurship, and the creative power of young minds.
                  Organized by the ME-RIISE Foundation and Malnad College of Engineering,
                  Hassan, it unites innovators, entrepreneurs, and technologists from
                  across the nation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Participants' },
                  { value: '5+', label: 'Events' },
                  { value: '3', label: 'Days' },
                  { value: '10+', label: 'Colleges' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
                    <div className="text-gray-300 uppercase tracking-wider text-sm">
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
                  title: 'Our Vision',
                  text: `To engender industry ready graduates possessing magnificent skills
                  in the arena of innovation and technological development of products/
                  services.`,
                },
                {
                  title: 'Our Mission',
                  text: `To provide students with opportunities to showcase their skills,
                  learn from industry experts, and collaborate on projects that make a
                  real difference in the world.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 font-mon transition-all duration-300 hover:bg-white/10"
                >
                  <h3 className="text-2xl font-semibold tracking-wider uppercase mb-3 text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6 font-mon">
              <h2 className="text-2xl font-semibold tracking-wider uppercase mb-3">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 mb-5">
                Don't miss out on this incredible opportunity to showcase your talents and
                connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events"
                  className="px-8 py-3 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase"
                >
                  View Events
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Home);
