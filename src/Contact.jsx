import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

const Contact = () => {
  // We are now generating the wind streaks directly in the component.
  const windStreakCount = 80; 
  
  const windStreaks = Array.from({ length: windStreakCount }).map((_, i) => {
    const verticalPosition = Math.random() * 100; // Random vertical starting point
    const style = {
      top: `${verticalPosition}vh`,
      width: `${Math.random() * 75 + 50}px`, // Random length for streaks
      height: `${Math.random() * 1.5 + 0.5}px`, // Random thickness
      animationDuration: `${Math.random() * 2 + 1.5}s`, // Fast whistle (1.5s to 3.5s)
      animationDelay: `${Math.random() * 5}s`, // Staggered start times (0s to 5s)
    };
    return <div key={i} className="wind-streak" style={style}></div>;
  });

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-900 text-gray-100 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {windStreaks}
      </div>

      <style>{`
        .wind-streak {
          position: absolute;
          left: -150px; /* Start from off-screen to the left */
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15));
          border-radius: 50%;
          opacity: 0;
          animation-name: whistle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes whistle {
          0% {
            transform: translateX(0) translateY(0) scaleX(0.1);
            opacity: 0;
          }
          15% {
             transform: translateX(15vw) translateY(-2px) scaleX(0.7);
             opacity: 0.8;
          }
          50% {
             transform: translateX(50vw) translateY(2px) scaleX(1);
             opacity: 1;
          }
          85% {
             transform: translateX(85vw) translateY(-1px) scaleX(0.7);
             opacity: 0.8;
          }
          100% {
            transform: translateX(105vw) translateY(0) scaleX(0.1);
            opacity: 0;
          }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info */}
          <div className="text-center md:text-left">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Get In touch <br /> with our Organizers!
            </h1>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8">
               Have questions or ideas? We'd love to hear from you. Follow our social channels to stay updated or contact our organizers directly.
            </p>
            {/* Social Media */}
            <div className="mt-8">
  <h2 className="text-lg font-semibold tracking-wider mb-4 uppercase text-slate-400">
    Follow Us
  </h2>
  <div className="flex justify-center md:justify-start space-x-4">
    <a
      href="https://www.instagram.com/me_riise?igsh=MXZxcm1tem1oYjBxaA=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-pink-500/30 hover:border-pink-500 transition-all duration-300"
    >
      <FaInstagram className="text-pink-400 text-2xl" />
    </a>

    <a
      href="https://youtube.com/@me-riise1750?si=b-mFz6kHMJV6wyVn"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-red-500/30 hover:border-red-500 transition-all duration-300"
    >
      <FaYoutube className="text-red-500 text-2xl" />
    </a>

    <a
      href="https://www.linkedin.com/company/meriisefoundation/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-600 transition-all duration-300"
    >
      <FaLinkedin className="text-blue-500 text-2xl" />
    </a>
    <a
      href="https://www.meriise.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-white-600/30 hover:border-white-600 transition-all duration-300"
    >
      <FaGlobe className="text-white-500 text-2xl" />
    </a>

  </div>
</div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="bg-gray-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Organizer Contacts
            </h2>
            <div className="space-y-8">
              {/* Organizer 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-400 text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Aviksha Kavya Gowda</h3>
                  <a href="tel:+917353097151" className="text-gray-300 hover:text-blue-400 transition">
  +91 7353097151
</a>

                </div>
              </div>

              {/* Organizer 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-400 text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Bilvateja H Y</h3>
                  <a href="tel:+917353097151" className="text-gray-300 hover:text-blue-400 transition">
  +91 8123820375
</a>

                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-400 text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Venue</h3>
                  <p className="text-gray-300">
                  Malnad College of Engineering <br />
                    ME-RIISE FOUNDATION <br />
                    Hassan , Karnatake  - 573201
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

