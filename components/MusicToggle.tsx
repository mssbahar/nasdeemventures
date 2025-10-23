'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMusic } from './MusicContext'

interface MusicToggleProps {
  isScrolled: boolean
}

const MusicToggle = ({ isScrolled }: MusicToggleProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [supportsReducedMotion, setSupportsReducedMotion] = useState(false)
  const { isPlaying, toggleMusic, isAudioLoaded } = useMusic()

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setSupportsReducedMotion(mediaQuery.matches)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleMusic()
    }
  }

  const EqualizerBar = ({ delay = 0, height = 12 }: { delay?: number; height?: number }) => {
    const animation = supportsReducedMotion 
      ? {} 
      : {
          height: [height, height * 0.3, height],
          transition: {
            duration: 0.6,
            delay,
            repeat: Infinity,
            repeatType: 'reverse' as const,
            ease: 'easeInOut'
          }
        }

    return (
      <motion.div
        className="bg-current rounded-sm"
        style={{ width: '3px' }}
        animate={isPlaying ? animation : { height: height * 0.3 }}
        transition={supportsReducedMotion ? { duration: 0.2 } : undefined}
      />
    )
  }

  const currentColor = isHovered || isPlaying ? '#FBBF24' : '#6B7280'
  const textColor = isScrolled ? 'text-primary' : 'text-white'

  return (
    <motion.button
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 ${
        isScrolled
          ? 'hover:text-accent'
          : 'hover:text-secondary'
      }`}
      onClick={toggleMusic}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? 'Turn off background music' : 'Turn on background music'}
      role="button"
      tabIndex={0}
    >
      {/* Equalizer Icon */}
      <div 
        className="flex items-end space-x-1 h-4"
        style={{ color: currentColor }}
        title={isAudioLoaded ? 'Audio ready' : 'Loading audio...'}
      >
        <EqualizerBar delay={0} height={12} />
        <EqualizerBar delay={0.1} height={16} />
        <EqualizerBar delay={0.2} height={10} />
        <EqualizerBar delay={0.3} height={14} />
      </div>
    </motion.button>
  )
}

export default MusicToggle
