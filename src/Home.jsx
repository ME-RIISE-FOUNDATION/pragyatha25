import React from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  // --- BACKGROUND IMAGE ---
  // Replace the URL below with the link to your desired background image.
  const backgroundImageUrl = 'public/home_bg.jpg';

  return (<>
    <Navbar/>
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
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Content */}
  <main className="relative z-10 px-4">
    {/* Title */}
    <h1
      className="
        font-got text-gray-200
        text-4xl sm:text-9xl md:text-7xl lg:text-8xl
        drop-shadow-lg tracking-widest
      "
    >
      PRAGYATHA'25
    </h1>

    {/* Subtitle */}
    <p
      className="
        mt-4 uppercase
        text-sm sm:text-base md:text-lg lg:text-xl
        tracking-widest text-gray-300
      "
    >
      Proclaim Your Potential
    </p>
  </main>
</div>

    </>
  );
};

export default Home;

