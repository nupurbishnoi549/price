import React, { useEffect, useState } from 'react';

const shayaris = [
  `zaraa sa kitabon main kam dhyaan hai,\nzyaada tere khayalon main hai,\ntujhse jo milke mazaa hai,\nkahan wo ganit ke sawaalon main hai.`,

  `rakh loon chupa ke main kahin tujhko,\nsaaya bhi tera na main doon.`,

  `aadat jaise hai tu meri,\naadatein kaise bhoolein bhala?`,

  `Take my hand,\ntake my whole life too,\nFor I can't help being with you.`
];

const ShayariSection = () => {
  const [visibleText, setVisibleText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [currentBox, setCurrentBox] = useState(0);
  const [completedShayaris, setCompletedShayaris] = useState([]);

  useEffect(() => {
    if (currentBox >= shayaris.length) return;

    const currentShayari = shayaris[currentBox];
    const words = currentShayari.split(/(\s+|\n)/);

    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setVisibleText((prev) => prev + words[wordIndex]);
        setWordIndex((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCompletedShayaris((prev) => [...prev, visibleText]);
        setCurrentBox((prev) => prev + 1);
        setVisibleText('');
        setWordIndex(0);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, currentBox]);

  return (
    <section id='timeline' className="min-h-screen py-14 px-4 bg-gradient-to-br from-[#fcefee] via-[#fff1f3] to-[#fdeee6] flex flex-col items-center justify-start space-y-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent drop-shadow-md">
        🎁 Lyrics that reminds of you ✍️💖
      </h2>

      {/* Completed Shayaris */}
      {completedShayaris.map((shayari, index) => (
        <div
          key={index}
          className="max-w-2xl w-full bg-[#3b2a4e] rounded-2xl border border-white/20 shadow-xl p-6 text-center"
        >
          <p className="text-lg md:text-2xl font-medium whitespace-pre-line text-white leading-relaxed">
            {shayari}
          </p>
        </div>
      ))}

      {/* Currently Typing Shayari */}
      {currentBox < shayaris.length && (
        <div className="max-w-2xl w-full bg-[#4c3567] rounded-2xl border border-white/25 shadow-xl p-6 text-center">
          <p className="text-lg md:text-2xl font-medium whitespace-pre-line text-white leading-relaxed">
            {visibleText}
            <span className="animate-pulse text-pink-400">|</span>
          </p>
        </div>
      )}
    </section>

  );
};

export default ShayariSection;
