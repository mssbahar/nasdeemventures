'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Fuel, Shield, Truck, Award, Zap, Globe, BarChart3, Star, ArrowRight, ChevronRight, Droplets, Gauge, Wrench, Building2, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PetroleumProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(new Set())

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleProduct = (index: number) => {
    setExpandedProducts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const products = [
    {
      name: 'Diesel',
      description: 'High-quality diesel fuel for industrial and commercial applications',
      image: '/assets/images/pump.png',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Petrol',
      description: 'Premium petrol for various industrial and commercial uses',
      image: '/assets/images/wholesale.png',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Kerosene',
      description: 'Clean-burning kerosene for heating and industrial processes',
      image: '/assets/images/palmoil.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Fuel Oil',
      description: 'Heavy fuel oil for power generation and industrial heating',
      image: '/assets/images/transportation.png',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Lubricant Oil',
      description: 'Premium lubricating oils for machinery and equipment',
      image: '/assets/images/schedule-waste.png',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const trustedBrands = [
    { name: 'Shell', logo: '/assets/images/shell.png', website: 'https://www.shell.com.my' },
    { name: 'Petronas', logo: '/assets/images/petronas.png', website: 'https://www.petronas.com' },
    { name: 'Petron', logo: '/assets/images/petron.png', website: 'https://www.petron.com.my' },
    { name: 'BHPetrol', logo: '/assets/images/BHPetrol.png', website: 'https://www.bhpetrol.com.my' },
    { name: 'Chevron', logo: '/assets/images/chevron.png', website: 'https://www.chevron.com' }
  ]

  const statistics = [
    { number: '5,000L - 50,000L', label: 'Tanker Capacity Range', icon: Truck },
    { number: '1,000,000L+', label: 'Maximum Per Shipment', icon: Gauge },
    { number: 'Peninsular Malaysia', label: 'Coverage Area', icon: MapPin },
    { number: '24/7', label: 'Service Availability', icon: Clock }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Industrial Petroleum Products"
        subtitle="Licensed Wholesale Supplier - CSA & PDA Certified"
        backgroundImage="/assets/images/wholesale.png"
        showButtons={true}
        buttonText="Request Quote"
        buttonLink="/contact"
        secondaryButtonText="Our Products"
        secondaryButtonLink="#products"
      />

      {/* Service Overview */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Professional Petroleum Supply Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                We provide comprehensive petroleum product supply services for industrial 
                and commercial clients across Malaysia. Our CSA and PDA licensed operations ensure 
                full compliance with regulatory requirements while delivering high-quality 
                fuel solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-justify">
                From wholesale distribution to logistics management, 
                we handle every aspect of your petroleum supply needs with professionalism and expertise.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold text-primary">CSA & PDA Licensed</div>
                  <div className="text-muted-foreground">Fully certified operations</div>
                </div>
              </div>
                  </div>
            <div className="relative">
              <Image
                src="/assets/images/wholesale.png"
                alt="Petroleum Supply"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper id="products" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/nasdeem.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Petroleum Products
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We specialize in the wholesale supply of industrial petroleum products, delivering reliable and high-quality fuel solutions
            </p>
          </div>

          {/* Products Accordion - Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="self-start bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg overflow-hidden"
              >
                {/* Product Header - Clickable */}
                <button
                  onClick={() => toggleProduct(index)}
                  className="w-full p-4 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center space-y-3">
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                </div>
                    
                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-1">
                  {product.name}
                </h3>
                    </div>
                    
                    {/* Chevron Icon */}
                    <motion.div
                      animate={{ rotate: expandedProducts.has(index) ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </button>

                {/* Product Content - Animated Dropdown */}
                <AnimatePresence>
                  {expandedProducts.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-white/20">
                        <div className="pt-3">
                          <p className="text-white/90 text-sm leading-relaxed">
                            {product.description}
                          </p>
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

      {/* Authorized Brands Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Authorized Supplier For
            </h2>
            <h3 className="text-2xl text-[#4B5563] mb-8">
              Trusted Petroleum Brands
            </h3>
            <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
              We are proud to be an authorized supplier for leading petroleum brands, ensuring quality and reliability in every delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {trustedBrands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex justify-center"
              >
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="transition-all duration-300 group-hover:brightness-130"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready for Reliable Petroleum Supply?
            </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a comprehensive petroleum supply assessment and customized solution
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

