'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Award, 
  Truck, 
  Recycle, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  Scissors,
  Leaf,
  ChevronDown,
  Building,
  Trash2,
  HardHat,
  Wrench,
} from 'lucide-react'

export default function DemolitionsWorksPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  const services = [
    {
      name: 'Onsite Demolition',
      description: 'Professional demolition services for buildings, structures, and industrial facilities with complete site clearance and waste management.',
      image: '/assets/images/demolition.png',
      icon: Building,
      features: ['Heavy machinery operation', 'Safety compliance', 'Complete site clearance', 'Waste management']
    },
    {
      name: 'Metal Cutting',
      description: 'Precision metal cutting services for steel structures, pipes, and industrial equipment with specialized cutting tools.',
      image: '/assets/images/process.png',
      icon: Scissors,
      features: ['Precision cutting', 'Specialized equipment', 'Safety protocols', 'Quality assurance']
    },
    {
      name: 'Scrap Collection',
      description: 'Comprehensive scrap metal collection services from various sources including industrial, commercial, and residential properties.',
      image: '/assets/images/team.jpg',
      icon: Truck,
      features: ['Scheduled pickups', 'Flexible timing', 'Large volume handling', 'Free estimates']
    },
    {
      name: 'Waste Disposal',
      description: 'Environmentally responsible disposal and recycling of demolition waste and scrap materials with proper documentation.',
      image: '/assets/images/wholesale.png',
      icon: Trash2,
      features: ['Eco-friendly processing', 'Documentation provided', 'Licensed operations', 'Compliance assurance']
    },
    {
      name: 'Site Preparation',
      description: 'Complete site preparation services including clearing, leveling, and preparation for new construction or development.',
      image: '/assets/images/clean1.png',
      icon: HardHat,
      features: ['Site clearing', 'Leveling services', 'Safety preparation', 'Construction ready']
    }
  ]

  const thingsWeDo = [
    {
      title: 'Professional Demolition Services',
      description: 'We provide comprehensive demolition services for buildings, structures, and industrial facilities. Our experienced team uses state-of-the-art equipment to ensure safe and efficient demolition while maintaining strict safety standards.',
      image: '/assets/images/demolition.png',
      features: ['Heavy machinery operation', 'Safety compliance', 'Complete site clearance', 'Waste management'],
      highlight: '14+ Years Experience'
    },
    {
      title: 'Metal Cutting & Processing',
      description: 'Our precision metal cutting services handle steel structures, pipes, and industrial equipment. We use specialized cutting tools and techniques to ensure clean, precise cuts while maintaining material integrity.',
      image: '/assets/images/process.png',
      features: ['Precision cutting', 'Specialized equipment', 'Safety protocols', 'Quality assurance'],
      highlight: 'PDRM Licensed'
    },
    {
      title: 'Scrap Metal Collection',
      description: 'We offer comprehensive scrap metal collection services from various sources. Our flexible scheduling and professional handling ensure convenient and reliable collection of all types of scrap materials.',
      image: '/assets/images/team.jpg',
      features: ['Scheduled pickups', 'Flexible timing', 'Large volume handling', 'Free estimates'],
      highlight: '24/7 Service'
    },
    {
      title: 'Environmental Disposal',
      description: 'Our environmentally responsible disposal and recycling services ensure that all demolition waste and scrap materials are processed according to environmental regulations and best practices.',
      image: '/assets/images/wholesale.png',
      features: ['Eco-friendly processing', 'Documentation provided', 'Licensed operations', 'Compliance assurance'],
      highlight: '100% Compliant'
    },
    {
      title: 'Site Preparation & Clearing',
      description: 'Complete site preparation services including clearing, leveling, and preparation for new construction. We ensure your site is ready for the next phase of development.',
      image: '/assets/images/clean1.png',
      features: ['Site clearing', 'Leveling services', 'Safety preparation', 'Construction ready'],
      highlight: 'Complete Service'
    }
  ]

  const benefits = [
    {
      title: 'Licensed & Certified',
      description: 'Fully PDRM licensed with 14+ years of experience in demolition and metal recycling',
      image: '/assets/images/cidb.png',
      icon: Award,
      color: 'border-yellow-500'
    },
    {
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and environmental regulations in all operations',
      image: '/assets/images/doe.svg',
      icon: Shield,
      color: 'border-green-500'
    },
    {
      title: 'Environmental Care',
      description: 'Committed to responsible recycling and environmental protection in all our services',
      image: '/assets/images/environment.jpg',
      icon: Leaf,
      color: 'border-blue-500'
    },
    {
      title: 'Professional Equipment',
      description: 'State-of-the-art machinery and tools for efficient and safe demolition operations',
      image: '/assets/images/lab.png',
      icon: Wrench,
      color: 'border-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Demolition Works & Metal Recycling"
        subtitle="Professional demolition services and scrap metal collection since 2010"
        backgroundImage="/assets/images/demolition.png"
        buttonText="Get Instant Quote"
        buttonLink="/contact"
      />

      {/* Service Overview Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Professional Demolition & Metal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 14 years of experience, we provide comprehensive demolition services, metal cutting, and scrap collection. 
              Our PDRM-licensed operations ensure safety, compliance, and environmental responsibility in every project.
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Demolition Services</h3>
              <p className="text-gray-600">Professional demolition of buildings, structures, and industrial facilities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-white" />
          </div>
              <h3 className="text-xl font-bold text-black mb-2">Metal Cutting</h3>
              <p className="text-gray-600">Precision cutting services for steel structures and industrial equipment</p>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
          </div>
              <h3 className="text-xl font-bold text-black mb-2">Scrap Collection</h3>
              <p className="text-gray-600">Comprehensive collection and recycling of all types of scrap metal</p>
        </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Accordion Section */}
      <SectionWrapper id="services" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/demolition.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Demolition Services
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We specialize in comprehensive demolition and metal recycling services, delivering safe and efficient solutions
            </p>
          </div>
          
          {/* Services Accordion - Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, index) => (
          <motion.div
                key={service.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
                className="self-start bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg overflow-hidden"
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-4 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center space-y-3">
                    {/* Service Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Service Info */}
                <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {service.name}
                      </h3>
        </div>
                    
                    {/* Chevron Icon */}
                <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
                  </div>
                </button>

                {/* Service Content - Animated Dropdown */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-white/20">
                        <div className="pt-3">
                          <p className="text-white/90 text-sm leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-white/80 text-xs">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
            </div>
          </div>
          </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready for Professional Demolition Services?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a comprehensive demolition assessment and customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              Contact Us
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}