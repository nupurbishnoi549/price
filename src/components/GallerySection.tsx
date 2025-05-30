
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCaption, setShowCaption] = useState<number | null>(null);

  const images = [
    {
      emoji: "🌸",
      caption: "Your smile makes flowers jealous",
      feeling: "The moment I realized what happiness looks like"
    },
    {
      emoji: "🌟",
      caption: "Shining brighter than any star",
      feeling: "When you laugh, the whole world lights up"
    },
    {
      emoji: "🦋",
      caption: "Grace in every movement",
      feeling: "Watching you just being yourself is poetry in motion"
    },
    {
      emoji: "🌙",
      caption: "Peaceful like moonlight",
      feeling: "Your presence brings calm to my chaotic world"
    },
    {
      emoji: "🌈",
      caption: "You bring color to my world",
      feeling: "Before you, everything was in black and white"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Gallery of Feelings
          </h2>
          <p className="text-xl text-gray-300">Every moment captured, every feeling remembered</p>
        </div>

        {/* Main Gallery */}
        <div className="relative mb-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-pink-300/20 to-purple-300/20 flex items-center justify-center group">
              <div className="text-9xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {images[currentImage].emoji}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{images[currentImage].caption}</h3>
                <p className="text-pink-200 italic">{images[currentImage].feeling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => setShowCaption(index)}
              onMouseLeave={() => setShowCaption(null)}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                currentImage === index
                  ? 'ring-4 ring-pink-400 bg-white/20'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center text-2xl backdrop-blur-sm rounded-xl">
                {image.emoji}
              </div>
              
              {showCaption === index && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center space-x-2">
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
              <span>Click to Know What I Felt</span>
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
