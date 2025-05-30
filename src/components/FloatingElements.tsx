
import React from 'react';
import { Heart, Sparkles, Star, Crown } from 'lucide-react';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Enhanced Floating A Monogram */}
      <div className="absolute top-20 right-20 opacity-30 animate-spin-slow">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-pink-400/30 backdrop-blur-sm border border-white/20">
          A
        </div>
      </div>

      {/* Enhanced Mouse Follower Hearts */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <Heart className="w-6 h-6 text-pink-400 opacity-70 animate-pulse drop-shadow-lg" />
      </div>

      {/* Additional mouse followers */}
      <div
        className="absolute transition-all duration-1200 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      >
        <Sparkles className="w-4 h-4 text-purple-300 opacity-50 animate-spin-slow" />
      </div>

      {/* Enhanced Random Floating Elements */}
      <div className="absolute top-1/4 left-12 animate-float-enhanced">
        <div className="relative">
          <Sparkles className="w-8 h-8 text-purple-300 opacity-60 drop-shadow-lg" />
          <div className="absolute inset-0 bg-purple-300/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-40 animate-float" style={{ animationDelay: '1s' }}>
        <div className="relative">
          <Star className="w-7 h-7 text-yellow-300 opacity-60 drop-shadow-lg" />
          <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="relative">
          <Heart className="w-6 h-6 text-pink-300 opacity-60 drop-shadow-lg" />
          <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="absolute top-3/4 right-1/3 animate-float-enhanced" style={{ animationDelay: '3s' }}>
        <div className="relative">
          <Crown className="w-7 h-7 text-yellow-400 opacity-50 drop-shadow-lg" />
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Enhanced Crown floating element */}
      <div className="absolute top-1/2 right-16 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="relative">
          <div className="text-4xl opacity-40 drop-shadow-lg">👑</div>
          <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* New floating elements */}
      <div className="absolute bottom-1/3 left-16 animate-float" style={{ animationDelay: '4s' }}>
        <div className="text-3xl opacity-30">💎</div>
      </div>

      <div className="absolute top-2/3 left-1/3 animate-float-enhanced" style={{ animationDelay: '5s' }}>
        <div className="text-2xl opacity-40">✨</div>
      </div>
    </div>
  );
};

export default FloatingElements;
