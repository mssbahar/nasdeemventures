'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MusicToggleProps {
  isScrolled: boolean
}

const MusicToggle = ({ isScrolled }: MusicToggleProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [supportsReducedMotion, setSupportsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setSupportsReducedMotion(mediaQuery.matches)
    
    // Create audio element
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = 0.25 // 25% volume for subtle background music
    audioRef.current.preload = 'auto'
    
    // Set up audio source
    audioRef.current.src = '/assets/audio/music.mp3'
    
    // Handle audio loading
    const handleAudioLoad = () => {
      setIsAudioLoaded(true)
      console.log('🎵 Audio loaded successfully:', audioRef.current?.src)
    }
    
    const handleAudioError = (error: any) => {
      console.error('❌ Audio loading failed:', error)
      console.error('Audio src:', audioRef.current?.src)
      setIsAudioLoaded(false)
    }
    
    // Add event listeners
    audioRef.current.addEventListener('canplaythrough', handleAudioLoad)
    audioRef.current.addEventListener('error', handleAudioError)
    
    // Try to load the audio
    audioRef.current.load()
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplaythrough', handleAudioLoad)
        audioRef.current.removeEventListener('error', handleAudioError)
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        // Fade out
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.01) {
            audioRef.current.volume -= 0.01
          } else {
            clearInterval(fadeOut)
            if (audioRef.current) {
              audioRef.current.pause()
              audioRef.current.volume = 0.25 // Reset volume for next play
            }
          }
        }, 50)
        setIsPlaying(false)
      } else {
        // Check if audio is loaded
        if (isAudioLoaded && audioRef.current.src) {
          console.log('Playing audio...')
          // Fade in with actual audio
          audioRef.current.volume = 0
          await audioRef.current.play()
          const fadeIn = setInterval(() => {
            if (audioRef.current && audioRef.current.volume < 0.25) {
              audioRef.current.volume += 0.01
            } else {
              clearInterval(fadeIn)
            }
          }, 50)
          setIsPlaying(true)
        } else {
          console.log('Audio not loaded yet. Loading...')
          // Try to load and play
          audioRef.current.load()
          audioRef.current.volume = 0
          await audioRef.current.play()
          const fadeIn = setInterval(() => {
            if (audioRef.current && audioRef.current.volume < 0.25) {
              audioRef.current.volume += 0.01
            } else {
              clearInterval(fadeIn)
            }
          }, 50)
          setIsPlaying(true)
        }
      }
    } catch (error) {
      console.error('Audio playback failed:', error)
      // Fallback: just toggle state without audio
      setIsPlaying(!isPlaying)
    }
  }

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
