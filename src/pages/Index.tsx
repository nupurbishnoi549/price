import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import TimelineSection from '../components/TimelineSection';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      <FloatingElements mousePosition={mousePosition} />
      <Navbar />
      <div className="pt-20"> {/* padding top so content doesn't go behind navbar */}
        <Outlet /> {/* shows Timeline / About / Hero based on route */}
      </div>
    </div>
  );
};

export default Index;
