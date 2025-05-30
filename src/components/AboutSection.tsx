import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Sparkles, Crown, Heart } from 'lucide-react';

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const qualities = [
    { text: 'Brilliantly Smart', delay: '0s', icon: '🧠' },
    { text: 'Breathtakingly Beautiful', delay: '0.2s', icon: '✨' },
    { text: 'Royal Queen Vibes', delay: '0.4s', icon: '👑' },
    { text: 'Too Special to Explain', delay: '0.6s', icon: '💎' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

          {/* Enhanced Image Card */}
          <div className="relative group">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-700 hover:shadow-pink-500/20">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-blue-300/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 animate-pulse"></div>

                {/* Floating elements around the image */}
                <div className="absolute top-6 right-6">
                  <Crown className="w-8 h-8 text-yellow-300 animate-bounce" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
                </div>
                <div className="absolute top-6 left-6">
                  <Sparkles className="w-7 h-7 text-purple-300 animate-spin-slow" />
                </div>

                {/* 🖼️ Anu's Image */}
                <img
                  src="public/anu.png"
                  alt="Anu"
                  className="w-[250px] h-96 object-contain rounded-xl border-4 border-pink-300 shadow-xl z-10 animate-pulse"
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                About Anu
              </h2>
              <p className="text-2xl text-gray-200 leading-relaxed font-light">
                Some people are born to be ordinary. But then there's Anu –
                who decided to rewrite the definition of <span className="text-pink-300 font-semibold">extraordinary</span>.
              </p>
            </div>

            <div className="space-y-6">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-6 backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 transform transition-all duration-700 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20 group cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ animationDelay: quality.delay }}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {quality.icon}
                  </div>
                  <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="text-xl font-medium text-white flex-1">{quality.text}</span>
                  <Sparkles className="w-6 h-6 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 border border-pink-300/20 hover:border-pink-300/40 transition-colors duration-500 group">
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-4xl opacity-30">"</div>
                <p className="text-xl text-pink-100 italic leading-relaxed font-light pl-6">
                  In a world full of copies, she chose to be an original masterpiece.
                </p>
                <div className="absolute -bottom-2 -right-2 text-4xl opacity-30 rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
