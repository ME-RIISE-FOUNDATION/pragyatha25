import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 text-white py-8 font-mon">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/pragyatha_logo.png"
                  alt="Pragyatha Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-xl tracking-widest">
                PRAGYATHA '25
              </h3>
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left max-w-xs">
              Proclaim Your Potential - A celebration of innovation, creativity, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-lg tracking-wider uppercase">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Events
              </Link>
              <Link to="/gallery" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Pragyatha. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button 
              onClick={() => alert('Privacy Policy page coming soon!')}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert('Terms of Service page coming soon!')}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
