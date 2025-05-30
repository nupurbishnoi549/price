
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Crown className="w-6 h-6 text-pink-300 group-hover:text-pink-200 transition-colors animate-pulse" />
              <span className="text-white font-bold text-xl">For Anu</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About Anu', id: 'about' },
                { label: 'Memories', id: 'timeline' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Surprises', id: 'surprises' },
                { label: 'Final Word', id: 'final' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-pink-300 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <Heart className="w-6 h-6 text-pink-400 animate-pulse cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
