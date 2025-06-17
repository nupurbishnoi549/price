import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = `So there is this boy... Maybe it was your smile, Or maybe it was your voice. To be honest, I don’t know what it was—
But I fell pretty hard. Never thought I’d fall for someone like this.🫂 I wasn’t even looking for love... But then I met you. Talking to you makes my day. You are my favourite notification. 💬❤️ I’m here for you, My love is for you. And deep down, I just wish it’s the same from your side too.🧿🌸
Wishing you a very Happy Birthday ❣️🌸 May your day be as special as you are.`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] justify-center overflow-hidden font-['Yantramanav']">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Dreamy Gradient */}
        <div className="absolute inset-0  bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] opacity-80 mix-blend-lighten"></div>

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
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Sparkles className="w-3 h-3 text-pink-300/60" />
              ) : i % 3 === 1 ? (
                <Star className="w-2 h-2 text-purple-300/60" />
              ) : (
                <Heart className="w-2 h-2 text-rose-300/60" />
              )}
            </div>
          ))}
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-rose-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto">
        {/* Name */}
        <div className="mb-12 perspective-1000">
          <h1 className="text-7xl md:text-[8rem] font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-red-200 bg-clip-text text-transparent drop-shadow-2xl">
            <span className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">A</span>
            <span className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.1s' }}>n</span>
            <span className="inline-block animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.2s' }}>u</span>
          </h1>
        </div>

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl mb-12 transition-all duration-700 hover:scale-[1.02] hover:shadow-pink-400/40 group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/5 to-purple-300/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h2 className="text-[28px] md:text-5xl font-light text-[#ffe4ec] mb-8 leading-relaxed relative z-10">
            Not enough but all From the <span className="text-transparent bg-gradient-to-r from-pink-300 to-red-200 bg-clip-text font-bold">core of heart</span>
          </h2>

          <p className="text-base md:text-xl lg:text-2xl text-[#fef9f9] font-light leading-relaxed whitespace-pre-line min-h-[240px] text-center px-4 md:px-0">
            {text}
            <span className="animate-pulse text-pink-200 ml-1">|</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center ">
            <div className="w-0.5 h-16 bg-gradient-to-b from-pink-400 via-rose-400 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
