'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const SimpleHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slide 1 - Original Main Content */}
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/videos/welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center h-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                Proudly Malaysia's Leading Bumiputera Company in Scheduled Waste Management & Industrial Solutions
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/contact"
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-colors flex items-center space-x-2 hover-lift"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors flex items-center space-x-2 hover-lift"
                >
                  <Play className="w-5 h-5" />
                  <span>Learn Our Services</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide 2 - Raw Company Video */}
      <AnimatePresence mode="wait">
        {currentSlide === 1 && (
          <motion.div
            key="video"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Raw Video - No overlay, no text */}
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/welcome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === 0 
              ? 'bg-white scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Go to main content"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === 1 
              ? 'bg-white scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label="Go to company video"
        />
      </div>

      {/* Scroll indicator - only show on first slide */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default SimpleHeroSlider
