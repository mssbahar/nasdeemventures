'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import InteractiveMap from '@/components/InteractiveMap'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Target, Eye, Users, Award, CheckCircle, ChevronDown, Play, Pause, Volume2, ChevronRight, ChevronLeft } from 'lucide-react'

export default function OurStoryPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({})

  const nextImage = (eventKey: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventKey]: ((prev[eventKey] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (eventKey: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventKey]: ((prev[eventKey] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const togglePlay = (eventKey: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [eventKey]: !prev[eventKey]
    }))
  }
  const journey = [
    {
      year: '2006',
      title: 'Company Founded',
      description: 'Began with the purchase of land and the construction of a factory, followed by investments in machinery, treatment facilities, and office equipment. The workforce expanded to 5–10 staff, forming the foundation of Nasdeem Ventures\' operations.',
      type: 'image',
      image: '/assets/images/founded.png'
    },
    {
      year: '2009',
      title: 'DOE Certification',
      description: 'Obtained DOE licenses (SW305, SW306, SW307) with a 200MT quota, expanded workforce to 10–20 staff and began serving the manufacturing industry.',
      type: 'image',
      image: '/assets/images/doelesen.png'
    },
    {
      year: '2016',
      title: 'Expanding Services',
      description: 'Applied for DOE additional licenses on SW308, SW309, and SW409, receiving approval in 2021 with a quota of 1530MT. The workforce expanded to 20–30 staff, serving both manufacturing as well as marine and shipping industries.',
      type: 'image',
      image: '/assets/images/service.jpg'
    },
    {
      year: '2022',
      title: 'Expanding Region',
      description: 'Signed an MOU with Kop Mantap Berhad and began the process of adding 10 new SW codes. Opened a new branch in the Central Region with 30–40 staff, expanding services to all industries handling oil, especially the petrochemical sector.',
      type: 'image',
      image: '/assets/images/map.png'
    },
    {
      year: '2024',
      title: 'Company Upgrade',
      description: 'Completed a full renovation of Nasdeem\'s interior design to enhance quality, comfort, and efficiency for both management and workers.',
      type: 'image',
      image: '/assets/images/nasdeem.jpg'
    },
    {
      year: '2025',
      title: 'KB19 Approval & Renovation',
      description: 'Received approval KB19 (kebenaran bertulis) for SW310, SW311, SW312, SW313, SW314, SW322, SW323, SW324, SW327, SW110, SW204, SW410, and SW422. To support this, Nasdeem carried out full facility renovations to enable operations for SW310 through SW327, ensuring compliance and readiness for expanded services.',
      type: 'image',
      image: '/assets/images/license.jpg'
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project and service we deliver.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide better solutions for our clients.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Compliance',
      description: 'We ensure full compliance with all environmental regulations.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Story"
        subtitle="From humble beginnings to industry leadership"
        backgroundImage="/assets/images/nasdeem.jpg"
        showButtons={false}
      />

      {/* Who Are We Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                Nasdeem Ventures Sdn Bhd was founded with a clear vision: to become 
                Malaysia's leading Bumiputera company in scheduled waste management and 
                industrial solutions. Our journey began with a small team of dedicated 
                professionals who believed in the importance of environmental responsibility 
                and sustainable business practices.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                Today, we have grown into a comprehensive service provider, offering 
                everything from waste management to petroleum products, demolition works, 
                and logistics solutions. Our success is built on our commitment to quality, 
                compliance, and customer satisfaction.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">DOE Certified Since 2009</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/team.jpg"
                alt="Nasdeem Ventures Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision Section */}
      <SectionWrapper className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mission & Vision Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Section - Left */}
            <div className="lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
                className="bg-accent/40 backdrop-blur-md rounded-lg border border-accent/50 shadow-lg overflow-hidden"
              >
                {/* Mission Header - Clickable */}
                <button
                  onClick={() => setActiveSection(activeSection === 'mission' ? null : 'mission')}
                  className="w-full p-6 text-left hover:bg-accent/20 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full mr-3"></div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Our Mission</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeSection === 'mission' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-8 h-8 text-white" />
                    </motion.div>
              </div>
                </button>

                {/* Mission Content - Animated */}
                <AnimatePresence>
                  {activeSection === 'mission' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-4">
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  We are committed to environmental improvements that drive a sustainable future and create social and economic benefits in communities we serve.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Through environmental mentoring and industry networking, we support growth across the schedule waste recovery sector and our related business activities.
                </p>
              </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
          </div>

            {/* Vision Section - Right */}
            <div className="lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
                className="bg-accent/40 backdrop-blur-md rounded-lg border border-accent/50 shadow-lg overflow-hidden"
              >
                {/* Vision Header - Clickable */}
                <button
                  onClick={() => setActiveSection(activeSection === 'vision' ? null : 'vision')}
                  className="w-full p-6 text-left hover:bg-accent/20 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Our Vision</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeSection === 'vision' ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-8 h-8 text-white" />
                    </motion.div>
              </div>
                </button>

                {/* Vision Content - Animated */}
                <AnimatePresence>
                  {activeSection === 'vision' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-4">
                <p className="text-xl text-white/90 leading-relaxed">
                  To contribute to the nation's future circular economy through comprehensive scheduled waste recovery.
                </p>
              </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet Our Chairman Section */}
      <SectionWrapper className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Column - Testimonial Style */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 lg:pr-12"
            >
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  Meet Dato' Haji Mohd Nasir bin Haji Mohd Kassim
                </h2>
                {/* Yellow Underline */}
                <div className="w-8 h-1.5 bg-[#FBBF24]"></div>
              </div>
              
              {/* Subtitle */}
              <p className="text-sm font-bold uppercase tracking-wider text-black">
                FOUNDER. MANAGING DIRECTOR. INDUSTRY EXPERT.
              </p>
              
              {/* Body Text 1 */}
              <p className="text-base lg:text-lg leading-relaxed text-black text-justify">
                Dato' Haji Mohd Nasir bin Haji Mohd Kassim is the Founder and Managing Director 
                of Nasdeem Ventures Sdn. Bhd., established in 2006. With more than two decades 
                of experience in the oil and waste management industry, he brings a wealth of 
                knowledge and strategic insight to the company.
              </p>
              
              {/* Body Text 2 */}
              <p className="text-base lg:text-lg leading-relaxed text-black text-justify">
                His strong leadership and deep industry expertise have been instrumental in 
                positioning Nasdeem Ventures as a respected and recognized name in the Scheduled 
                Waste Management sector in Malaysia. Under his guidance, the company continues 
                to grow and innovate, delivering reliable, compliant, and sustainable waste 
                management solutions nationwide.
              </p>
              
              {/* Quote */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FBBF24]">
                <p className="text-lg italic text-gray-800 font-medium mb-2">
                  "Leading with integrity, growing through responsibility."
                </p>
                <p className="text-sm text-gray-600">
                  ~ Dato' Haji Mohd Nasir bin Haji Mohd Kassim<br />
                  Chairman of Nasdeem Ventures Sdn. Bhd.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="mt-12">
                <Link href="/about/our-team">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FBBF24] hover:bg-[#F59E0B] text-black font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors duration-300"
                  >
                    Learn More About Our Team
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8 lg:mt-0"
            >
              <div className="relative h-[800px] lg:h-[900px] w-full">
                <Image
                  src="/assets/images/chairman.jpg"
                  alt="Dato' Haji Mohd Nasir bin Haji Mohd Kassim"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Journey Timeline - Responsive Vertical Timeline */}
      <SectionWrapper className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/bg.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Decorative Ribbon Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
              OUR STORY
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/30 hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="w-full"
                >
                  {/* CSS Grid Layout with Alternating Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Column 1: Content Card - Alternating Sides */}
                    <div className={`order-1 lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        className="bg-white rounded-lg shadow-lg border border-[#E5E5E5] p-6 hover:shadow-xl transition-all duration-300 group"
                      >
                        {/* Title */}
                        <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#FBBF24] transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-[#4B5563] text-base leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Column 2: Year Label on Timeline - Always Center */}
                    <div className="order-2 lg:order-2 lg:col-span-2 flex justify-center relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        className="bg-[#FBBF24] text-black px-3 py-1 text-sm font-bold rounded-sm shadow-lg relative z-20"
                      >
                        {item.year}
                      </motion.div>
                    </div>

                    {/* Column 3: Media Element - Alternating Sides */}
                    <div className={`order-3 lg:col-span-5 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                        className="space-y-4"
                      >
                        {item.type === 'image' && (
                          <div className="relative rounded-lg overflow-hidden">
                            <div className="relative h-64">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Service Coverage Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-primary">NASDEEM</span>{' '}
              <span className="text-primary">SERVICE</span>{' '}
              <span className="text-accent">COVERAGE</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive service coverage across Malaysia with strategic locations in both Peninsular and East Malaysia
            </p>
          </div>
          
          {/* Interactive Map Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-4 mb-12">
            <InteractiveMap />
          </div>
          
          {/* Coverage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">13</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Service Locations</h3>
              <p className="text-muted-foreground">Strategic points across Malaysia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Regions Covered</h3>
              <p className="text-muted-foreground">Peninsular & East Malaysia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Nationwide Reach</h3>
              <p className="text-muted-foreground">Complete coverage across Malaysia</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

