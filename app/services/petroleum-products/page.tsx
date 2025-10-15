'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Fuel, Shield, Truck, Award, Zap, Globe, BarChart3, Star, ArrowRight, ChevronRight, Droplets, Gauge, Wrench, Building2, MapPin, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PetroleumProductsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      name: 'Diesel',
      description: 'High-quality diesel fuel for industrial and commercial applications',
      icon: Fuel,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Petrol',
      description: 'Premium petrol for various industrial and commercial uses',
      icon: Zap,
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Kerosene',
      description: 'Clean-burning kerosene for heating and industrial processes',
      icon: Droplets,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Fuel Oil',
      description: 'Heavy fuel oil for power generation and industrial heating',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Lubricant Oil',
      description: 'Premium lubricating oils for machinery and equipment',
      icon: Wrench,
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
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            alt="Petroleum Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* KPDNHEP Badge */}
            <div className="inline-flex items-center justify-center bg-[#FBBF24] text-black px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Award className="w-5 h-5 mr-2" />
              Ministry of Domestic Trade and Consumer Affairs (KPDNHEP) Licensed
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Industrial Petroleum Products
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#FBBF24]">
              Licensed Wholesale Supplier - CSA & PDA Certified
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Reliable Fuel Solutions Across Peninsular Malaysia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#FBBF24] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F59E0B] transition-colors uppercase tracking-wide"
              >
                Request Quote
              </a>
              <a
                href="#products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors uppercase tracking-wide"
              >
                Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Company Introduction Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Professional Excellence in Petroleum Supply
              </h2>
              <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
                Nasdeem Ventures Sdn Bhd stands as a distinguished licensed holder of <span className="font-bold text-black">CSA</span> and <span className="font-bold text-black">PDA</span> certifications, 
                issued by the Ministry of Domestic Trade and Consumer Affairs (KPDNHEP). Our commitment to regulatory compliance 
                and quality assurance drives every aspect of our operations.
              </p>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                With years of industry expertise, we deliver comprehensive petroleum solutions that meet the highest standards 
                of quality, safety, and environmental responsibility across Peninsular Malaysia.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-[#FBBF24]" />
                  <span className="text-lg font-semibold text-black">CSA Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-[#FBBF24]" />
                  <span className="text-lg font-semibold text-black">PDA Certified</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 shadow-xl border border-[#E5E5E5]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">KPDNHEP Licensed</h3>
                  <p className="text-[#4B5563] leading-relaxed">
                    Fully certified and compliant with all Malaysian regulatory requirements for petroleum product distribution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper className="bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Products
            </h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              We specialize in the wholesale supply of industrial petroleum products, delivering reliable and high-quality fuel solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-[#E5E5E5] hover:border-[#FBBF24] hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#FBBF24] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {product.description}
                </p>
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

      {/* Logistics & Fleet Section */}
      <SectionWrapper className="bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Logistics Infrastructure
              </h2>
              <p className="text-xl text-[#4B5563] mb-8 leading-relaxed">
                To ensure flexible and efficient distribution, we operate our own fleet of road tankers 
                with capacities ranging from 5,000 litres to 50,000 litres. Our logistics infrastructure 
                is capable of handling deliveries from as little as 1,000 litres up to more than 
                1 million litres per shipment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Own Fleet Operations</h3>
                    <p className="text-[#4B5563]">Reliable, fast delivery nationwide</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Peninsular Malaysia Coverage</h3>
                    <p className="text-[#4B5563]">Complete geographic reach</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">Flexible Capacity</h3>
                    <p className="text-[#4B5563]">From 1,000L to 1M+ litres per shipment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8 text-center">Fleet Capabilities</h3>
                <div className="space-y-6">
                  {statistics.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#FBBF24]">{stat.number}</div>
                        <div className="text-gray-300">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Statistics Section */}
      <SectionWrapper className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Industry Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven capabilities and extensive experience in petroleum product distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#FBBF24] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call-to-Action Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              For Dependable, High-Volume Petroleum Supply
            </h2>
            <p className="text-xl text-[#4B5563] mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose Nasdeem Ventures as Your Trusted Fuel Partner
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-[#FBBF24] text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-[#F59E0B] transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="tel:604-5010800"
                className="border-2 border-black text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-black hover:text-white transition-colors uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Call: 604-5010800
              </a>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

