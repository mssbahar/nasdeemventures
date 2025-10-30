'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Award, Users, Clock, Shield, Star, Truck } from 'lucide-react'
import Link from 'next/link'
import { motion, useMotionValue, animate, useTransform } from 'framer-motion'

export default function ServicesPage() {
  function RollingNumber({ target, suffix = '', delay = 0 }: { target: number; suffix?: string; delay?: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const display = useTransform(rounded, (latest) => `${latest}${suffix}`)
    
    return (
      <motion.span
        className="block text-6xl lg:text-7xl font-extrabold text-secondary drop-shadow mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          animate(count, target, { duration: 1.4, delay, ease: 'easeOut' })
        }}
      >
        <motion.span>{display}</motion.span>
      </motion.span>
    )
  }

  const services = [
    {
      title: 'Scheduled Waste Management',
      description: 'Comprehensive waste management solutions for industrial and commercial clients with full compliance to DOE regulations.',
      image: '/assets/images/schedule-waste.png',
      link: '/services/scheduled-waste-management'
    },
    {
      title: 'Petroleum Products',
      description: 'Supply and distribution of high-quality petroleum products for various industrial applications.',
      image: '/assets/images/wholesale.png',
      link: '/services/petroleum-products'
    },
    {
      title: 'Demolitions Works',
      description: 'Professional demolition services with safety-first approach and environmental compliance.',
      image: '/assets/images/demolition.png',
      link: '/services/demolitions-works'
    },
    {
      title: 'Palm Oil Supply',
      description: 'Reliable palm oil supply chain management with quality assurance and timely delivery.',
      image: '/assets/images/palmoil.jpg',
      link: '/services/palm-oil-supply'
    },
    {
      title: 'Transportations & Logistics',
      description: 'Complete logistics solutions including transportation, warehousing, and supply chain management.',
      image: '/assets/images/transportation.png',
      link: '/services/transportations-logistics'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Excellence',
      description: 'DOE, KPDNKK, PDRM, MPOB, and CIDB certified operations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency services'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance First',
      description: 'Full adherence to Malaysian environmental regulations'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Years of successful project delivery and client satisfaction'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive industrial solutions tailored to your needs"
        backgroundImage="/assets/images/service.jpg"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Our Services Section */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-justify">
              We offer a comprehensive range of industrial solutions designed to meet 
              your specific needs while ensuring full compliance with environmental regulations.
            </p>
          </div>
          <div className="max-w-18xl mx-auto">
            {/* Top row - 3 services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center mb-8">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                  index={index}
                />
              ))}
            </div>
            {/* Bottom row - 2 services centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center w-full">
              {services.slice(3, 5).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                  index={index + 3}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Nasdeem Section */}
      <SectionWrapper className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">
        {/* Decorative gradient glow */}
        <div className="pointer-events-none absolute -top-20 -right-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Nasdeem Ventures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver 
              exceptional results for our clients.
            </p>
          </div>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <RollingNumber target={20} suffix="" delay={0.1} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-white"
              >
                Years Experience
              </motion.p>
            </div>
            <div className="text-center group">
              <RollingNumber target={300} suffix="+" delay={0.3} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-white"
              >
                Satisfied Clients
              </motion.p>
            </div>
            <div className="text-center group">
              <RollingNumber target={50} suffix="+" delay={0.5} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-white"
              >
                Experienced Workers
              </motion.p>
            </div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Fully Licensed</h3>
              <p className="text-gray-300">DOE, KPDNKK, PDRM, MPOB & CIDB certified</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Truck className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Own Transport Fleet</h3>
              <p className="text-gray-300">Reliable, fast delivery nationwide</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Clock className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">24/7 Service</h3>
              <p className="text-gray-300">Emergency support available</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your requirements and get a customized quote for our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call Now: 604-5010800
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

