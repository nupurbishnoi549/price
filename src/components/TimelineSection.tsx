import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const memories = [
    {
      date: "19th June",
      title: "Happy Birthday Mr. Mushroom 🎂",
      description: "You don’t say much, but your presence says it all. You’re my calm, my comfort, and my favourite hello. I may not show it (but muje pta h I show 😂), but I genuinely care — deeply. You don’t try to be perfect — you’re real, and that’s what makes you rare. On your special day, just know… I’m really glad you exist. 🌸",
      emoji: "🎉",
      color: "from-yellow-400 to-orange-400"
    },
    {
      date: "Unexpected Truths",
      title: "Rare Because You're Real ✨🌿",
      description:
        "You don’t try to be perfect — you're real, and that’s what makes you rare 💫. In a world full of filters and masks 🎭, your honesty feels like magic 🪄🌸.",
      emoji: "🌿",
      color: "from-lime-400 to-green-500"
    },
    {
      date: "Unspoken Efforts",
      title: "Show-Off Nahi, Tu Hi Kaafi Hai 🫀",
      description:
        "Tere jaisa hi tu rahe 🧍‍♂️, baat kam kare 🤫, par sachcha rahe 🧡.\n" +
        "Pyaar dikhaye na sahi 💬, par mehsoos toh ho 💓.\n" +
        "Tere har silence mein ek apnapan sa ho 🤍🌌.\n\n" +
        "Tu photo na maange, theek hai 📷🚫,\n" +
        "Bas tu apni bhejta rahe ✉️😊.\n" +
        "Aur jo tu keh nahi paata 🧠💭,\n" +
        "Woh bas samajh jaau 🫂🌙.\n\n" +
        "Haan, tumhare efforts mujhse kahin zyada hain ⚡,\n" +
        "Par mere 0 nahi hain... sab bataya bhi nahi jaata 😶‍🌫️💗.\n\n" +
        "Tu bas mera rahe, yahi kaafi hai 💫🫀,\n" +
        "Show-off nahi chahiye... bas tu hi kaafi hai 🚫🎭.",
      emoji: "🪶",
      color: "from-rose-400 to-pink-500"
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
    <section id="hero" ref={sectionRef} className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            It's your day
          </h2>
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

                  <h3 className="text-[17px] font-bold text-white mb-2 ">{memory.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{memory.description}</p>

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
