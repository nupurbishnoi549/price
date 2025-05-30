
import React, { useState } from 'react';
import { Gift, Heart, Sparkles, Star } from 'lucide-react';

const SurprisesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [currentCompliment, setCurrentCompliment] = useState(0);

  const surprises = [
    {
      title: "Why You're Irreplaceable",
      frontEmoji: "💎",
      backContent: "Because in a world of trends, you remained a classic. Your authenticity is your superpower.",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      title: "Your Special Power",
      frontEmoji: "🌟",
      backContent: "You have this magical ability to make everyone around you feel special and valued.",
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      title: "What Makes You Unique",
      frontEmoji: "🦋",
      backContent: "Your kindness isn't just an act - it's who you are. That's what makes you extraordinary.",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "My Favorite Thing",
      frontEmoji: "💖",
      backContent: "The way you think before you speak, the way you care before you act - pure elegance.",
      gradient: "from-emerald-400 to-teal-400"
    }
  ];

  const compliments = [
    "You're the reason the word 'beautiful' was invented",
    "Smart is an understatement for you",
    "Your smile could end wars",
    "You make ordinary moments feel magical",
    "Intelligence looks stunning on you",
    "You're poetry in human form",
    "Your presence is a present to everyone around you"
  ];

  const getRandomCompliment = () => {
    let newCompliment;
    do {
      newCompliment = Math.floor(Math.random() * compliments.length);
    } while (newCompliment === currentCompliment);
    setCurrentCompliment(newCompliment);
  };

  return (
    <section id="surprises" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Surprises for You
          </h2>
          <p className="text-xl text-gray-300">Little gifts wrapped in words</p>
        </div>

        {/* Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {surprises.map((surprise, index) => (
            <div
              key={index}
              className="group h-64 perspective-1000 cursor-pointer"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${surprise.gradient} p-6 flex flex-col items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl`}>
                  <div className="text-6xl mb-4">{surprise.frontEmoji}</div>
                  <h3 className="text-white font-bold text-lg text-center">{surprise.title}</h3>
                  <Gift className="w-6 h-6 text-white/80 mt-4 animate-bounce" />
                </div>
                
                {/* Back */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br ${surprise.gradient} p-6 flex items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl`}>
                  <p className="text-white text-center leading-relaxed font-medium">
                    {surprise.backContent}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Random Compliment Generator */}
        <div className="text-center">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-pink-300 mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Random Compliment Generator</h3>
              <Sparkles className="w-8 h-8 text-pink-300 ml-3 animate-pulse" />
            </div>
            
            <div className="min-h-[80px] flex items-center justify-center mb-6">
              <p className="text-xl text-pink-200 italic text-center leading-relaxed">
                "{compliments[currentCompliment]}"
              </p>
            </div>
            
            <button
              onClick={getRandomCompliment}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <Star className="w-5 h-5 group-hover:animate-spin" />
                <span>Unlock Another Compliment</span>
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Because you deserve to hear these things every day ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurprisesSection;
