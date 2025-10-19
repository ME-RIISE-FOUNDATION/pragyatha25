import React from 'react';
import Snowfall from 'react-snowfall';
import ImageGallery from './components/ImageGallery';
import BlueEmbers from './components/BlueEmbers';

const Home = () => {
  const backgroundImageUrl = '/home_bg.jpg';

  return (
    <div className="relative overflow-hidden">
      {/* ❄ Global Snowfall Effect (covers entire page) */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <Snowfall color="#dee4f0" snowflakeCount={100} />
      </div>

      {/* Hero Section */}
      <div
        id="home"
        className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fading gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black z-0"></div>

        {/* Content */}
        <main className="relative z-10 px-4">
          <h1 className="font-got text-gray-200 text-4xl sm:text-9xl md:text-7xl lg:text-8xl drop-shadow-lg tracking-widest">
            PRAGYATHA'25
          </h1>
          <p className="mt-4 uppercase text-sm sm:text-base md:text-lg lg:text-xl tracking-widest text-gray-300">
            Proclaim Your Potential
          </p>
        </main>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* About Section */}
      <div id="about" className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4"
              style={{
                textShadow:
                  '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)',
              }}
            >
              ABOUT US
            </h1>
            <p className="text-gray-300 text-lg md:text-xl tracking-wider uppercase">
              Discover Our Story
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 font-mon">
              {/* About Text */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-wider uppercase mb-6">
                  Welcome to Pragyatha '25
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Pragyatha ’25 isn’t just an event — it’s a movement celebrating
                  innovation, entrepreneurship, and the creative power of young minds.
                  The flagship event, organized by the ME-RIISE Foundation and Malnad
                  College of Engineering, Hassan, brings together aspiring innovators,
                  entrepreneurs, and technologists from across the nation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '500+', label: 'Participants' },
                  { value: '5+', label: 'Events' },
                  { value: '3', label: 'Days' },
                  { value: '10+', label: 'Colleges' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
                    <div className="text-gray-300 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 font-mon">
                <h3 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-cyan-400">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed font-mon">
                  To engender industry ready graduates possessing magnificent skills in
                  the arena of innovation and technological development of products/
                  services.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 font-mon">
                <h3 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-cyan-400">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed font-mon">
                  To provide students with opportunities to showcase their skills, learn
                  from industry experts, and collaborate on projects that can make a real
                  difference in the world.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 font-mon">
              <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 mb-6">
                Don't miss out on this incredible opportunity to showcase your talents and
                connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events"
                  className="px-8 py-3 bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase"
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
      </div>
    </div>
  );
};

export default Home;
