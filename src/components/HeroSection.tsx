
import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

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
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-blue-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-purple-900/30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {i % 3 === 0 ? (
                <Sparkles className="w-3 h-3 text-pink-300/60" />
              ) : i % 3 === 1 ? (
                <Star className="w-2 h-2 text-purple-300/60" />
              ) : (
                <Heart className="w-2 h-2 text-pink-400/60" />
              )}
            </div>
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Enhanced 3D Name */}
        <div className="mb-12 perspective-1000">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            <span 
              className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer" 
              style={{ 
                animationDelay: '0s',
                textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
              }}
            >
              A
            </span>
            <span 
              className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer" 
              style={{ 
                animationDelay: '0.1s',
                textShadow: '0 0 30px rgba(147, 51, 234, 0.3)'
              }}
            >
              n
            </span>
            <span 
              className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer" 
              style={{ 
                animationDelay: '0.2s',
                textShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              u
            </span>
          </h1>
        </div>

        {/* Premium Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl mb-12 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-pink-500/20 hover:shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-relaxed relative z-10">
            The Definition of <span className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text font-bold">Perfect</span>
          </h2>
          
          {/* Enhanced Typewriter Effect */}
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl text-pink-100 font-light leading-relaxed min-h-[80px] flex items-center justify-center">
              {text}
              <span className="animate-pulse text-pink-300 ml-1">|</span>
            </p>
          </div>
        </div>

        {/* Enhanced Floating Crown */}
        {showCrown && (
          <div className="animate-fade-in">
            <div className="inline-block p-6 rounded-full bg-gradient-to-r from-yellow-400/80 to-pink-400/80 backdrop-blur-sm animate-spin-slow hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg shadow-yellow-400/30">
              <div className="text-5xl animate-pulse">👑</div>
            </div>
            <p className="text-pink-200 mt-4 text-lg italic">Your Crown Awaits</p>
          </div>
        )}

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-0.5 h-16 bg-gradient-to-b from-pink-400 via-purple-400 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
