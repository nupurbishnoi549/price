
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const qualities = [
    { text: 'Smart', delay: '0s' },
    { text: 'Beautiful', delay: '0.2s' },
    { text: 'Queen Vibes', delay: '0.4s' },
    { text: 'Too Special to Explain', delay: '0.6s' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Image Card */}
          <div className="relative group">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-300/20 to-purple-300/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 animate-pulse"></div>
                <div className="text-8xl mb-4 relative z-10">👸</div>
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-pink-300 animate-pulse" />
                <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-purple-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                About Anu
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Some people are born to be ordinary. But then there's Anu – 
                who decided to rewrite the definition of extraordinary.
              </p>
            </div>

            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ animationDelay: quality.delay }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg font-medium text-white">{quality.text}</span>
                  <div className="flex-1"></div>
                  <span className="text-2xl">✨</span>
                </div>
              ))}
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-300/30">
              <p className="text-lg text-pink-100 italic leading-relaxed">
                "In a world full of copies, she chose to be an original masterpiece."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
