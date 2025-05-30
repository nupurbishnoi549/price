
import React, { useState, useEffect } from 'react';
import { Play, Heart, Sparkles } from 'lucide-react';

const FinalSection = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const triggerFireworks = () => {
    setShowFireworks(true);
    setTimeout(() => setShowMessage(true), 1000);
  };

  return (
    <section id="final" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        {showFireworks && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              >
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                <Sparkles className="w-6 h-6 text-pink-300" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {!showMessage ? (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for the final surprise?
            </h2>
            
            <button
              onClick={triggerFireworks}
              className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full text-white font-bold text-xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              <span className="flex items-center space-x-3">
                <Play className="w-8 h-8 group-hover:animate-bounce" />
                <span>Play Our Story</span>
                <Heart className="w-8 h-8 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        ) : (
          <div className={`transition-all duration-2000 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            {/* Main Message */}
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl mb-8">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-8 animate-pulse">
                Anu
              </h1>
              
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl text-white font-light leading-relaxed">
                  You're the <span className="text-pink-300 font-bold">Best Part</span> of My Life
                </p>
                
                <div className="h-1 w-32 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                
                <p className="text-xl md:text-2xl text-pink-200 italic font-light leading-relaxed">
                  Tum ho toh Praja hai 💗✨
                </p>
              </div>
            </div>

            {/* Floating Hearts */}
            <div className="flex justify-center space-x-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-8 h-8 text-pink-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            {/* Final Quote */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 mb-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                "Some people search their whole lives for what I found in you - 
                a person who makes every day feel like a gift, every moment feel like magic, 
                and every tomorrow worth looking forward to."
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalSection;
