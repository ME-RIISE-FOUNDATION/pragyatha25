

import React from 'react';
import Snowfall from 'react-snowfall';
import ImageGallery from './components/ImageGallery';
import BlueEmbers from './components/BlueEmbers';

const Home = () => {
  const backgroundImageUrl = '/home_bg.jpg';

  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fading gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black z-0"></div>

        {/* Snowfall Animation */}
        <Snowfall
          color="#dee4f0"
          snowflakeCount={200}
        />

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
<ImageGallery/>
      {/* About Section */}
      <div id="about" className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4">
              ABOUT US
            </h1>
            <p className="text-gray-300 text-lg md:text-xl tracking-wider uppercase">
              Discover Our Story
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              
              {/* About Text */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-wider uppercase mb-6">
                  Welcome to Pragyatha '25
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
Pragyatha ’25 isn’t just an event — it’s a movement celebrating innovation, entrepreneurship, and the creative power of young minds.
The Flagship event, organized by the ME-RIISE Foundation and Malnad College of Engineering, Hassan, brings together aspiring innovators, entrepreneurs, and technologists from across the nation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">

                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300 uppercase tracking-wider">Participants</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 uppercase tracking-wider">Events</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
                  <div className="text-gray-300 uppercase tracking-wider">Days</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300 uppercase tracking-wider">Colleges</div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-cyan-400">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the premier platform that bridges the gap between academic learning
                  and real-world application, fostering innovation and excellence in technology
                  and engineering.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-cyan-400">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide students with opportunities to showcase their skills, learn from
                  industry experts, and collaborate on projects that can make a real difference
                  in the world.
                </p>
              </div>
            </div>

            {/* Event Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold tracking-wider uppercase text-center mb-12">
                Event Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 uppercase tracking-wider">Technical</h3>
                  <p className="text-gray-300 text-sm">
                    Coding competitions, hackathons, and technical challenges
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 uppercase tracking-wider">Creative</h3>
                  <p className="text-gray-300 text-sm">
                    Design contests, photography, and artistic competitions
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 uppercase tracking-wider">Robotics</h3>
                  <p className="text-gray-300 text-sm">
                    Robotics competitions and automation challenges
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 mb-6">
                Don't miss out on this incredible opportunity to showcase your talents and connect with like-minded individuals.
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
    </>
  );
};

export default Home;

