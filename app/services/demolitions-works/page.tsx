'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion'
import { 
  Award, 
  Truck, 
  Recycle, 
  Zap, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Star,
  TrendingUp,
  Factory,
  Wrench,
  Scissors,
  Scale,
  DollarSign,
  Leaf,
  Users,
  Building2,
  Car,
  Hammer,
  Cog
} from 'lucide-react'

export default function DemolitionsWorksPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineData = [
    { year: '2010', title: 'Company Founded', description: 'Started as a small scrap metal collection service' },
    { year: '2012', title: 'PDRM License', description: 'Obtained official PDRM licensing for metal trading' },
    { year: '2015', title: 'Service Expansion', description: 'Added demolition and onsite cutting services' },
    { year: '2018', title: 'Copper Specialization', description: 'Became leading copper and brass specialist' },
    { year: '2020', title: 'Digital Integration', description: 'Launched online quoting and tracking system' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top metal recycling company' }
  ]

  const purchaseFrom = [
    { 
      title: 'General Public', 
      icon: Users, 
      description: 'Individuals with scrap metal',
      delay: 0.1,
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      title: 'Licensed Metal Dealers', 
      icon: Award, 
      description: 'Authorized metal trading partners',
      delay: 0.2,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      title: 'Auto Wreckers', 
      icon: Car, 
      description: 'Automotive scrap and parts',
      delay: 0.3,
      color: 'from-red-400 to-red-600'
    },
    { 
      title: 'Demolition Companies', 
      icon: Hammer, 
      description: 'Construction and demolition waste',
      delay: 0.4,
      color: 'from-gray-400 to-gray-600'
    },
    { 
      title: 'Farmers', 
      icon: Factory, 
      description: 'Agricultural equipment and machinery',
      delay: 0.5,
      color: 'from-green-400 to-green-600'
    },
    { 
      title: 'Manufacturers', 
      icon: Cog, 
      description: 'Industrial production waste',
      delay: 0.6,
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const metalTypes = [
    { 
      name: 'Ferrous Metals', 
      description: 'Iron and steel materials',
      icon: Building2,
      color: 'from-gray-300 to-gray-600',
      price: 'RM 0.80-1.20/kg'
    },
    { 
      name: 'Non-Ferrous Metals', 
      description: 'Aluminum, copper, brass',
      icon: Zap,
      color: 'from-yellow-300 to-yellow-600',
      price: 'RM 2.50-8.00/kg'
    },
    { 
      name: 'Copper & Brass', 
      description: 'Premium copper materials',
      icon: Star,
      color: 'from-orange-300 to-orange-600',
      price: 'RM 15.00-25.00/kg'
    },
    { 
      name: 'Aluminum', 
      description: 'Lightweight aluminum scrap',
      icon: Shield,
      color: 'from-blue-300 to-blue-600',
      price: 'RM 3.50-5.50/kg'
    },
    { 
      name: 'Stainless Steel', 
      description: 'High-grade stainless steel',
      icon: Award,
      color: 'from-slate-300 to-slate-600',
      price: 'RM 4.00-6.50/kg'
    },
    { 
      name: 'Industrial Scrap', 
      description: 'Mixed industrial materials',
      icon: Factory,
      color: 'from-indigo-300 to-indigo-600',
      price: 'RM 1.50-3.00/kg'
    }
  ]

  const services = [
    {
      title: 'Onsite Cutting & Clearing',
      description: 'Professional demolition and metal cutting services at your location',
      icon: Scissors,
      features: ['Heavy machinery operation', 'Safety compliance', 'Waste management', 'Site cleanup'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Collection Services',
      description: 'Convenient pickup of scrap metal from your premises',
      icon: Truck,
      features: ['Scheduled pickups', 'Flexible timing', 'Large volume handling', 'Free estimates'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Metal Disposal & Recycling',
      description: 'Environmentally responsible metal processing and recycling',
      icon: Recycle,
      features: ['Eco-friendly processing', 'Documentation provided', 'Fair pricing', 'Licensed operations'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const structures = [
    {
      title: 'Fencing',
      description: 'Chain link, barbed wire, and metal fencing materials',
      details: 'We accept all types of metal fencing including chain link, barbed wire, and decorative metal fences. Clean, rust-free materials fetch higher prices.',
      image: '/assets/images/demolition.png',
      specifics: ['Chain link fencing', 'Barbed wire', 'Decorative metal fences', 'Fence posts and rails']
    },
    {
      title: 'Carports & Cages',
      description: 'Metal structures and protective enclosures',
      details: 'Carports, storage cages, and metal enclosures are valuable sources of scrap metal. We handle disassembly and removal.',
      image: '/assets/images/team.jpg',
      specifics: ['Steel carports', 'Storage cages', 'Metal enclosures', 'Support structures']
    },
    {
      title: 'Offcuts & Metal Shavings',
      description: 'Manufacturing waste and metal remnants',
      details: 'Clean metal offcuts and shavings from manufacturing processes. These materials are highly valuable for recycling.',
      image: '/assets/images/process.png',
      specifics: ['Steel offcuts', 'Aluminum shavings', 'Copper remnants', 'Brass filings']
    },
    {
      title: 'Copper Materials',
      description: 'Premium copper and brass components',
      details: 'Copper pipes, wires, and brass fittings are among our highest-paying materials. Clean, separated copper commands top prices.',
      image: '/assets/images/wholesale.png',
      specifics: ['Copper pipes', 'Electrical wire', 'Brass fittings', 'Copper sheets']
    }
  ]

  const processSteps = [
    { step: 1, title: 'Contact/Quote', icon: Phone, description: 'Call or email for instant pricing' },
    { step: 2, title: 'Assessment', icon: Scale, description: 'Onsite evaluation and weighing' },
    { step: 3, title: 'Collection', icon: Truck, description: 'Professional pickup service' },
    { step: 4, title: 'Weighing', icon: Scale, description: 'Accurate weight documentation' },
    { step: 5, title: 'Payment', icon: DollarSign, description: 'Immediate payment processing' },
    { step: 6, title: 'Recycling', icon: Recycle, description: 'Responsible metal processing' }
  ]

  const stats = [
    { number: 5000, suffix: '+', label: 'Tons Recycled Annually', icon: Recycle },
    { number: 15000, suffix: '+', label: 'CO2 Emissions Saved (kg)', icon: Leaf },
    { number: 14, suffix: '+', label: 'Years of Experience', icon: Award },
    { number: 100, suffix: '%', label: 'PDRM Licensed', icon: Shield }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const metallicText = {
    background: 'linear-gradient(45deg, #FBBF24, #F59E0B, #D97706, #FBBF24)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s ease-in-out infinite'
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.6); }
        }
        
        .metallic-text {
          background: linear-gradient(45deg, #FBBF24, #F59E0B, #D97706, #FBBF24);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Hero Section - Split Screen with Parallax */}
      <section ref={heroRef} className="relative h-screen flex overflow-hidden">
        {/* Left Side - Dark Background with Content */}
        <motion.div 
          className="relative w-3/5 bg-slate-900 flex items-center justify-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-2xl px-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl font-bold mb-4">
                <span className="metallic-text">Scrap Metal</span>
                <br />
                <span className="metallic-text">& Copper Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Since 2010 | PDRM Licensed & Authorized
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="floating glow-effect inline-block"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg">
                <Award className="inline w-6 h-6 mr-2" />
                PDRM Licensed
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Get Instant Quote
                <ArrowRight className="inline w-6 h-6 ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Background Image with Parallax */}
        <motion.div 
          className="relative w-2/5"
          style={{ 
            x: useTransform(x, [-300, 300], [-50, 50]),
            y: useTransform(y, [-300, 300], [-30, 30])
          }}
        >
          <Image
            src="/assets/images/demolition.png"
            alt="Metal Recycling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900/20 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Experience Timeline - Horizontal Scroll */}
      <section className="bg-slate-900 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Our <span className="metallic-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">14 years of excellence in metal recycling</p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 transform -translate-y-1/2" />
            
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-yellow-400 font-bold text-2xl mb-2">{item.year}</div>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "We Purchase From" - Animated Icon Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">
              We Purchase From
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with a diverse range of suppliers to ensure a steady supply of quality scrap metal
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {purchaseFrom.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-400 group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-orange-50">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-black text-center mb-3 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Metal Types - 3D Carousel */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Metal <span className="metallic-text">Types</span>
            </h2>
            <p className="text-xl text-gray-300">We accept all types of scrap metal at competitive prices</p>
          </motion.div>

          <div className="relative h-96 flex items-center justify-center">
            {metalTypes.map((metal, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  transform: `rotateY(${index * 60}deg) translateZ(300px)`,
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{ scale: 1.2, z: 100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-64 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-yellow-400/30 shadow-2xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${metal.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <metal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold text-center mb-2">{metal.name}</h3>
                  <p className="text-gray-300 text-sm text-center mb-4">{metal.description}</p>
                  <div className="text-yellow-400 font-bold text-center">{metal.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Section - Animated Tabs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive metal recycling solutions</p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 flex">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl"
          >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className={`w-20 h-20 bg-gradient-to-r ${services[activeTab].color} rounded-2xl flex items-center justify-center mb-6`}>
                  {React.createElement(services[activeTab].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">{services[activeTab].title}</h3>
                <p className="text-lg text-gray-600 mb-6">{services[activeTab].description}</p>
                <ul className="space-y-3">
                  {services[activeTab].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                  {React.createElement(services[activeTab].icon, { className: "w-32 h-32 text-yellow-400" })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Metal Structures - Interactive Cards */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">Metal Structures We Handle</h2>
            <p className="text-xl text-gray-600">Click on cards to see details</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {structures.map((structure, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  hoveredCard === index ? 'shadow-2xl' : ''
                }`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={structure.image}
                      alt={structure.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{structure.title}</h3>
                      <p className="text-sm opacity-90">{structure.description}</p>
                    </div>
                  </div>
                  
                  <motion.div
                    className="p-6"
                    animate={{
                      height: hoveredCard === index ? 'auto' : 'auto'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mb-4">{structure.details}</p>
                        <ul className="space-y-2">
                          {structure.specifics.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    
                    <div className={`h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 ${
                      hoveredCard === index ? 'w-full' : 'w-0'
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. License & Compliance - Badge Showcase */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-96 h-96 border border-yellow-400/20 rounded-full" />
              <div className="w-80 h-80 border border-yellow-400/30 rounded-full" />
              <div className="w-64 h-64 border border-yellow-400/40 rounded-full" />
            </motion.div>

            <div className="relative z-10">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.3)',
                    '0 0 40px rgba(251, 191, 36, 0.6)',
                    '0 0 20px rgba(251, 191, 36, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <Award className="w-24 h-24 text-black" />
              </motion.div>

              <h2 className="text-4xl font-bold text-white mb-4">
                PDRM Licensed & Authorized
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fully compliant with all Malaysian regulations for metal trading and recycling
              </p>
              
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">14+</div>
                  <div className="text-gray-300">Years Licensed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-gray-300">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-gray-300">Service</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Process Flow - Animated Infographic */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and efficient</p>
          </motion.div>

            <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <step.icon className="w-10 h-10 text-black" />
                  </motion.div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Environmental Commitment - Animated Statistics */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/environment.jpg"
            alt="Environment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Environmental <span className="metallic-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-300">Making a difference through responsible recycling</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-12 h-12 text-black" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-yellow-400 mb-2"
                >
                  {stat.number.toLocaleString()}{stat.suffix}
                </motion.div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call-to-Action - Magnetic Button */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-black mb-6">
              Ready to Recycle Your <span className="metallic-text">Scrap Metal?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Get a competitive quote today and join thousands of satisfied customers
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{
                x: useTransform(x, [-300, 300], [-10, 10]),
                y: useTransform(y, [-300, 300], [-5, 5])
              }}
            >
              Get Instant Quote
              <ArrowRight className="inline w-8 h-8 ml-3" />
            </motion.button>
            
            <div className="mt-8 flex justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                604-5010800
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                general@nasdeemventures.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}