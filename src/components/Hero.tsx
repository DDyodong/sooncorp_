import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스크롤에 따라 높이 줄어듦 (최소 200px)
  const heroHeight = Math.max(200, 500 - scrollY * 0.5);

  return (
    <motion.section
      className="relative w-full flex items-center justify-center text-center"
      style={{
        height: heroHeight,
        backgroundImage: `url('/img/background.jpg')`, // 이미지 경로
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax 느낌
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* 중앙 텍스트 */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to SOON Corporation
        </h1>
        <p className="text-xl text-gray-200">
          We are a manufacturer and exporter specialized in piping components,
          providing the best quality products and services to customers worldwide.
        </p>
      </div>
    </motion.section>
  );
}

export default Hero;