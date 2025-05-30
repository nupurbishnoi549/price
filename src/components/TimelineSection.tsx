import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const memories = [
    {
      date: "First Meeting",
      title: "The Day Everything Changed",
      description: "When I first saw you, time stopped. Your smile lit up the entire room.",
      emoji: "🌟",
      color: "from-pink-400 to-rose-400"
    },
    {
      date: "22nd March",
      title: "Your First Exam Duty",
      description: "Watching you being so dedicated and professional... I smiled 100 times that day.",
      emoji: "📚",
      color: "from-purple-400 to-indigo-400"
    },
    {
      date: "Every Conversation",
      title: "Words That Matter",
      description: "Every word you speak, every laugh you share, makes my day brighter.",
      emoji: "💭",
      color: "from-blue-400 to-cyan-400"
    },
    {
      date: "Random Moments",
      title: "The Little Things",
      description: "Your way of thinking, your kindness, your presence - everything about you is magic.",
      emoji: "✨",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Sweet Moments
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">A timeline of memories that make my heart skip a beat</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>

          {memories.map((memory, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
            >
              {/* Timeline Dot */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-pink-400 z-10 animate-pulse"></div>

              {/* Content Card */}
              <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} px-4`}>
                <div
                  className={`backdrop-blur-lg bg-white/10 rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-105 ${visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    } ${index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}
                >
                  <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${memory.color} mb-4`}>
                    <span className="text-2xl">{memory.emoji}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 text-pink-300 mr-2" />
                    <span className="text-pink-300 font-medium">{memory.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{memory.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{memory.description}</p>

                  <div className="flex items-center mt-4 space-x-2">
                    <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                    <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
