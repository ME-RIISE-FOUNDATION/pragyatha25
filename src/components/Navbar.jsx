


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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 font-mon">
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full px-5 md:px-8 py-3 flex items-center justify-between text-white transition-all duration-300">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center space-x-3">
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
  <img
    src="/pragyatha_logo.png"
    alt="logo"
    className="object-contain w-full h-full invert brightness-0"
  />
</div>

          <h1
  className="relative font-semibold text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-t from-orange-600 via-yellow-400 to-white animate-fire"
>
  PRAGYATHA '25
  <span className="absolute inset-0 -z-10 animate-embers"></span>
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
            href="/rulebook.pdf"
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
