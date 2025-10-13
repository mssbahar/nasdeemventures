'use client'

import { useState } from 'react'
import Image from 'next/image'

interface StateData {
  id: string
  name: string
  x: number // percentage from left
  y: number // percentage from top
  width: number // percentage width
  height: number // percentage height
}

const malaysiaStates: StateData[] = [
  // Peninsular Malaysia States
  { id: 'johor', name: 'Johor', x: 35, y: 75, width: 5, height: 5 },
  { id: 'kedah', name: 'Kedah', x: 19, y: 15, width:5, height: 5 },
  { id: 'kelantan', name: 'Kelantan', x: 27, y: 25, width: 5, height: 5 },
  { id: 'malacca', name: 'Malacca', x: 27, y: 70, width: 5, height: 5 },
  { id: 'negeri-sembilan', name: 'Negeri Sembilan', x: 23, y: 57, width: 5, height: 5 },
  { id: 'pahang', name: 'Pahang', x: 30, y: 50, width: 5, height: 5 },
  { id: 'penang', name: 'Penang', x: 15, y: 25, width: 5, height: 5 },
  { id: 'perak', name: 'Perak', x: 20, y: 35, width: 5, height: 5 },
  { id: 'perlis', name: 'Perlis', x: 16, y: 10, width: 5, height: 5 },
  { id: 'selangor', name: 'Selangor', x: 27, y: 65, width: 5, height: 5 },
  { id: 'terengganu', name: 'Terengganu', x: 33, y: 33, width: 5, height: 5 },
  
  // East Malaysia States
  { id: 'sabah', name: 'Sabah', x: 70, y: 40, width: 5, height: 5 },
  { id: 'sarawak', name: 'Sarawak', x: 60, y: 65, width: 5, height: 5 },
  
]

interface InteractiveMapProps {
  className?: string
}

export default function InteractiveMap({ className = '' }: InteractiveMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (state: StateData, event: React.MouseEvent) => {
    setHoveredState(state.id)
    const rect = event.currentTarget.getBoundingClientRect()
    const container = event.currentTarget.parentElement?.getBoundingClientRect()
    if (container) {
      setTooltipPosition({
        x: rect.left - container.left + rect.width / 2,
        y: rect.top - container.top - 10
      })
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredState) {
      const rect = event.currentTarget.getBoundingClientRect()
      const container = event.currentTarget.parentElement?.getBoundingClientRect()
      if (container) {
        setTooltipPosition({
          x: rect.left - container.left + rect.width / 2,
          y: rect.top - container.top - 10
        })
      }
    }
  }

  const handleMouseLeave = () => {
    setHoveredState(null)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Map Image */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/assets/images/mapreference.png"
          alt="Malaysia Service Coverage Map"
          fill
          className="object-contain rounded-xl"
          unoptimized
        />
        
        {/* Interactive State Areas */}
        {malaysiaStates.map((state) => (
          <div
            key={state.id}
            className="absolute cursor-pointer transition-all duration-200 hover:bg-accent/20"
            style={{
              left: `${state.x}%`,
              top: `${state.y}%`,
              width: `${state.width}%`,
              height: `${state.height}%`,
            }}
            onMouseEnter={(e) => handleMouseEnter(state, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        ))}
        
        {/* Tooltip */}
        {hoveredState && (
          <div
            className="absolute z-10 bg-white text-black px-3 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none transform -translate-x-1/2 -translate-y-full border border-gray-300"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            {malaysiaStates.find(s => s.id === hoveredState)?.name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        )}
        
        {/* Title Overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-accent/30">
            <span className="text-lg font-bold text-primary">NASDEEM SERVICE COVERAGE</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-accent/30">
            <div className="flex items-center space-x-2">
              <Image src="/assets/images/nasdeeemloc.svg" alt="Flag" width={16} height={16} />
              <span className="text-sm font-medium text-primary">Service Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
