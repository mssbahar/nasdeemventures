'use client'

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'

interface MusicContextType {
  isPlaying: boolean
  toggleMusic: () => void
  isAudioLoaded: boolean
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}

interface MusicProviderProps {
  children: ReactNode
}

export const MusicProvider = ({ children }: MusicProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [supportsReducedMotion, setSupportsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setSupportsReducedMotion(mediaQuery.matches)
    
    // Create audio element only once
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.loop = true
      audioRef.current.volume = 0.25
      audioRef.current.preload = 'auto'
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
    }
    
    return () => {
      // Don't clean up audio on unmount - keep it playing across pages
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        // Fade out and reset
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.01) {
            audioRef.current.volume -= 0.01
          } else {
            clearInterval(fadeOut)
            if (audioRef.current) {
              audioRef.current.pause()
              audioRef.current.currentTime = 0 // Reset to beginning
              audioRef.current.volume = 0.25 // Reset volume for next play
            }
          }
        }, 50)
        setIsPlaying(false)
      } else {
        // Check if audio is loaded
        if (isAudioLoaded && audioRef.current.src) {
          console.log('Playing audio...')
          // Reset to beginning and fade in
          audioRef.current.currentTime = 0
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
          audioRef.current.currentTime = 0
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

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, isAudioLoaded }}>
      {children}
    </MusicContext.Provider>
  )
}
