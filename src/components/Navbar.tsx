import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '❤️', path: '/' },
    { label: '🫂', path: '/about' },
    { label: '🧿', path: '/love' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNav = (path) => {
    navigate(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out 
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
      backdrop-blur-2xl border-b border-white/10 
      ${isScrolled ? 'bg-black/30 shadow-xl shadow-purple-500/10' : 'bg-black/10'}
    `}>
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex flex-col items-center justify-center gap-4">

        {/* Emoji Buttons Only */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`relative px-4 py-2 rounded-2xl shadow-lg border border-white/10 backdrop-blur-lg 
                transition-all duration-300 transform group 
                ${location.pathname === item.path
                  ? 'bg-gradient-to-r from-pink-500/40 to-purple-500/40 scale-110'
                  : 'bg-white/5 hover:scale-105'}
              `}
            >
              <span className={`text-2xl md:text-3xl 
                ${location.pathname === item.path
                  ? 'drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]'
                  : 'text-white/80'}
              `}>
                {item.label}
              </span>
              <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full 
                bg-gradient-to-r from-pink-300 to-purple-400 transition-all duration-300 
                ${location.pathname === item.path ? 'w-6' : 'w-0 group-hover:w-4'}
              `}></span>
            </button>
          ))}
        </div>

        {/* Decorative Icons */}
        <div className="hidden md:flex items-center space-x-4 mt-2">
          <Heart className="w-7 h-7 text-pink-400 animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 hover:text-pink-300" />
          <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow cursor-pointer hover:scale-125 transition-transform duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
