import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, Sparkles, Crown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '♥️', path: '/' },
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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
    >
      <div
        className={`backdrop-blur-2xl transition-all duration-500 ${isScrolled
            ? 'bg-black/20 border-white/10 shadow-2xl shadow-purple-500/10'
            : 'bg-white/5 border-white/5'
          } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Crown className="w-8 h-8 text-pink-300 group-hover:text-pink-200 transition-colors animate-pulse" />
              <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-white font-bold text-2xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              For Mashroom
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`text-white/90 text-2xl transition-all duration-300 hover:scale-125 relative group ${location.pathname === item.path ? 'text-pink-300' : 'hover:text-pink-300'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transition-all duration-300 group-hover:w-4 rounded-full ${location.pathname === item.path ? 'w-4' : ''
                  }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-pink-300 transition"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Heart className="w-7 h-7 text-pink-400 animate-pulse cursor-pointer hover:scale-125 transition-transform duration-300 hover:text-pink-300" />
            <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow cursor-pointer hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-6 pt-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`text-white text-3xl font-medium transition ${location.pathname === item.path ? 'text-pink-300' : 'hover:text-pink-300'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
