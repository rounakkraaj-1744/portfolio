"use client";

import { MoveRight, MoveLeft, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

type Carousel = {
  title: string,
  emoji: string,
  description: string,
  items: {
    tag: string,
    type: string,
    text: string,
  }[],
  tags: string[],
  github: string,
};

interface Props {
    carousels: Carousel[];
    autoplay?: boolean
}

export const AnimatedCarousel = ({ carousels, autoplay = false }:Props) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % carousels.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + carousels.length) % carousels.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, carousels.length]);

  // Deterministic rotations to prevent SSR hydration errors
  const getRotateY = (index: number) => {
    const rotations = [-6, 7, -4, 8, -3, 6, -7, 5];
    return rotations[index % rotations.length];
  };

  if(!carousels || carousels.length === 0) return null;

  return (
    <div className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-64 sm:h-80 w-full">
            <AnimatePresence>
              {carousels.map((carousel, index) => (
                <motion.div
                  key={carousel.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotateY(index),
                    zIndex: isActive(index)
                      ? 40
                      : carousels.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="h-full w-full rounded-3xl bg-gray-50 flex flex-col items-center justify-center border border-gray-200 shadow-sm overflow-hidden p-6 text-center">
                    <span className="text-6xl sm:text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">{carousel.emoji}</span>
                    <span className="text-[#111] font-bold text-lg sm:text-xl">{carousel.title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[#111] mb-2">
              {carousels[active].title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
               {carousels[active].tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#111] text-white text-[10px] uppercase font-bold tracking-wider">
                     {tag}
                  </span>
               ))}
            </div>

            <motion.p className="text-base text-gray-600 leading-relaxed mb-6">
              {carousels[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.01 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            
            {carousels[active].github && (
               <Link href={carousels[active].github} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                 <Github className="w-4 h-4" />
                 View Source Code
               </Link>
            )}
            
          </motion.div>
          <div className="flex gap-4 pt-8 md:pt-0 mt-auto">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
            >
              <MoveLeft className="h-5 w-5 text-gray-600 group-hover/button:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
            >
              <MoveRight className="h-5 w-5 text-gray-600 group-hover/button:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};