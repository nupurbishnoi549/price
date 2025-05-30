
import React, { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Every Queen deserves a Kingdom – You are mine.";
  const [showCrown, setShowCrown] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowCrown(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-blue-900/50"></div>
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <Sparkles className="w-2 h-2 text-pink-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 3D Rotating Name */}
        <div className="mb-8 perspective-1000">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-pulse transform-gpu">
            <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>A</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>n</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>u</span>
          </h1>
        </div>

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-relaxed">
            The Definition of <span className="text-pink-300 font-bold">Perfect</span>
          </h2>
          
          {/* Typewriter Effect */}
          <p className="text-xl md:text-2xl text-pink-200 font-light leading-relaxed min-h-[60px]">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Floating Crown */}
        {showCrown && (
          <div className="animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 animate-spin-slow">
              <div className="text-4xl animate-pulse">👑</div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-pink-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
