"use client"
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Truck, Shield, MapPin, Award, Package, Droplets, Car, ArrowRight, Clock } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TransportationsLogisticsPage() {
  const fleets = [
    {
      title: 'Lorries',
      subtitle: 'General scheduled waste and cargo transport',
      image: '/assets/images/lorries.jpeg',
      icon: Truck,
      badges: ['Licensed', 'Nationwide']
    },
    {
      title: 'Trailers',
      subtitle: 'Handling large-volume and bulk materials',
      image: '/assets/images/trailer.jpeg',
      icon: Package,
      badges: ['Compliant', 'Peninsular MY']
    },
    {
      title: 'Lorry Tankers',
      subtitle: 'Scheduled waste and petroleum transport',
      image: '/assets/images/tanker.jpeg',
      icon: Droplets,
      badges: ['Safety-first', 'All Malaysia']
    },
    {
      title: 'Four-Wheel Drive',
      subtitle: 'On-site support, inspection, mobility',
      image: '/assets/images/4wd.jpeg',
      icon: Car,
      badges: ['Rapid', 'On-site']
    },
    {
      title: 'Forklifts',
      subtitle: 'Efficient loading/unloading at facilities',
      image: '/assets/images/forklift.png',
      icon: Package,
      badges: ['Certified', 'Warehouse']
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Transportations & Logistics"
        subtitle="Complete logistics solutions for your business needs"
        backgroundImage="/assets/images/transportation.png"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Service Overview */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Complete Logistics Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We provide comprehensive transportation and logistics services including 
                fleet management, warehousing, and supply chain optimization. Our services 
                are designed to meet your specific business requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From local deliveries to nationwide distribution, we ensure reliable and 
                efficient transportation solutions for all your logistics needs.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold text-primary">Licensed Operations</div>
                  <div className="text-muted-foreground">Fully certified services</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/transportation.png"
                alt="Transportation & Logistics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Fleet Section - Side Nav Layout */}
      <SectionWrapper className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/images/nasdeem.jpg" alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Fleet</h2>
            <p className="text-sm text-white/90">Modern, licensed and compliant equipment for logistics and scheduled waste</p>
          </div>

          {/* Quick Stats */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 flex items-center justify-center gap-3 shadow-sm">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Coverage: Peninsular Malaysia</span>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 flex items-center justify-center gap-3 shadow-sm">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Availability: 24/7 Dispatch</span>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 flex items-center justify-center gap-3 shadow-sm">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Licensed & Compliant</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Vertical Nav */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {fleets.map((f, idx) => {
                  const Icon = f.icon
                  const active = idx === activeIndex
                  return (
                    <button
                      key={f.title}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-xl border transition-all ${active ? 'bg-white text-primary border-white shadow' : 'bg-white/10 text-white border-white/20 hover:bg-white/15'}`}
                    >
                      <div className="flex items-center gap-3 p-4">
                        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${active ? 'bg-primary/10' : 'bg-white/10'}`}>
                          <Icon className={`w-5 h-5 ${active ? 'text-primary' : 'text-white'}`} />
                        </span>
                        <div>
                          <p className={`font-semibold ${active ? 'text-primary' : 'text-white'}`}>{f.title}</p>
                          <p className={`text-xs ${active ? 'text-primary/70' : 'text-white/80'}`}>{f.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: Content Panel */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black">{fleets[activeIndex].title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{fleets[activeIndex].subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {fleets[activeIndex].badges.map((b) => (
                        <span key={b} className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-96">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={fleets[activeIndex].image}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image src={fleets[activeIndex].image} alt={fleets[activeIndex].title} fill className="object-cover" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

