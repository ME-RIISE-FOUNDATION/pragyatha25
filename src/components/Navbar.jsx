// import React, { useState } from 'react';

// const MenuIcon = ({ className }) => (
//   <svg
//     className={className}
//     stroke="currentColor"
//     fill="none"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <line x1="3" y1="12" x2="21" y2="12" />
//     <line x1="3" y1="6" x2="21" y2="6" />
//     <line x1="3" y1="18" x2="21" y2="18" />
//   </svg>
// );

// const XIcon = ({ className }) => (
//   <svg
//     className={className}
//     stroke="currentColor"
//     fill="none"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <line x1="18" y1="6" x2="6" y2="18" />
//     <line x1="6" y1="6" x2="18" y2="18" />
//   </svg>
// );

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navLinks = [
//     { href: '#home', text: 'HOME' },
//     { href: '#events', text: 'EVENTS' },
//     { href: '#about', text: 'ABOUT US' },
//     { href: '#contact', text: 'CONTACT' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl border-b border-white/10 text-white z-50 transition-all duration-300">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo + Rulebook */}
//         <a
//           href="/Rulebook.pdf"
//           download
//           className="flex items-center space-x-3 group"
//         >
//           {/* Logo */}
//           <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/50 shadow-lg shadow-cyan-500/10 overflow-hidden">
//             <img
//               src="/pragyatha_logo.png"
//               alt="Logo"
//               className="w-full h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-125"
//             />
//           </div>

//           {/* Divider Line */}
//           <div className="h-6 w-[1px] bg-white/50"></div>

//           {/* Rulebook Text */}
//           <span className="text-lg font-semibold tracking-wider text-white group-hover:text-cyan-400 transition-all duration-300">
//             RULEBOOK
//           </span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.text}
//               href={link.href}
//               className="relative text-sm font-medium tracking-widest uppercase text-white/90 hover:text-cyan-400 transition-all duration-300 group"
//             >
//               {link.text}
//               <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} aria-label="Toggle Menu">
//             {isMenuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-16 left-0 w-full bg-black/70 backdrop-blur-2xl border-t border-white/10 transform transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
//         }`}
//       >
//         <div className="container mx-auto px-6 py-5 flex flex-col items-center space-y-5">
//           {navLinks.map((link) => (
//             <a
//               key={link.text}
//               href={link.href}
//               className="text-base font-medium tracking-widest uppercase text-white hover:text-cyan-400 transition-all duration-300"
//               onClick={toggleMenu}
//             >
//               {link.text}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50">
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full px-5 md:px-8 py-3 flex items-center justify-between text-white transition-all duration-300">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center overflow-hidden">
            <img
              src="/pragyatha_logo.png"
              alt="logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="font-semibold text-lg tracking-widest">
            PRAGYATHA '25
          </h1>
        </Link>

        {/* CENTER — LINKS */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-sm tracking-widest font-medium uppercase hover:text-cyan-400 transition duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT — RULEBOOK */}
        <a
          href="/Rulebook.pdf"
          download
          className="hidden md:block px-5 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          RULEBOOK
        </a>

        {/* HAMBURGER (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden mt-3 backdrop-blur-2xl bg-black/70 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${
          open
            ? "max-h-80 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-5">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium uppercase tracking-widest text-white hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-4/5 border-t border-white/20"></div>
          <a
            href="/Rulebook.pdf"
            download
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            RULEBOOK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
