
import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Floating A Monogram */}
      <div className="absolute top-20 right-20 opacity-20 animate-spin-slow">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-2xl">
          A
        </div>
      </div>

      {/* Mouse Follower Hearts */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      >
        <Heart className="w-5 h-5 text-pink-400 opacity-60 animate-pulse" />
      </div>

      {/* Random Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-purple-300 opacity-40" />
      </div>
      
      <div className="absolute top-1/3 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="w-5 h-5 text-yellow-300 opacity-40" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-4 h-4 text-pink-300 opacity-40" />
      </div>

      {/* Crown floating element */}
      <div className="absolute top-1/2 right-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="text-3xl opacity-30">👑</div>
      </div>
    </div>
  );
};

export default FloatingElements;
