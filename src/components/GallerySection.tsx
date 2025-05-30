import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCaption, setShowCaption] = useState<number | null>(null);
  const [showFeeling, setShowFeeling] = useState(false); // New state for modal

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
    <section id="gallery" className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Gallery of Feelings
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Every moment captured, every feeling remembered
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative mb-10">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-pink-300/20 to-purple-300/20 flex items-center justify-center group">
              <div className="text-6xl sm:text-8xl md:text-9xl transform group-hover:scale-110 transition-transform duration-500">
                {images[currentImage].emoji}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 sm:px-6 py-4 sm:py-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {images[currentImage].caption}
                </h3>
                <p className="text-sm sm:text-base text-pink-200 italic">
                  {images[currentImage].feeling}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 overflow-x-auto pb-6 pt-5">
          {images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => setShowCaption(index)}
              onMouseLeave={() => setShowCaption(null)}
              onClick={() => setCurrentImage(index)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-xl sm:text-2xl backdrop-blur-sm ${currentImage === index
                ? 'ring-4 ring-pink-400 bg-white/20'
                : 'bg-white/10 hover:bg-white/20'
                }`}
            >
              {image.emoji}

              {showCaption === index && (
                <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap z-10">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowFeeling(true)}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold text-base sm:text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="flex items-center justify-center space-x-1 sm:space-x-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              <span>Click to Know What I Felt</span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>

      {/* Sweet Modal */}
      {showFeeling && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl relative border-4 border-pink-300">
            <button
              onClick={() => setShowFeeling(false)}
              className="absolute top-3 right-3 text-pink-500 hover:text-pink-700 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-5xl sm:text-6xl mb-4 animate-pulse">{images[currentImage].emoji}</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-3">{images[currentImage].caption}</h3>
            <p className="text-base sm:text-lg text-gray-700 italic">{images[currentImage].feeling}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
