'use client'

import SimpleHeroSlider from '@/components/SimpleHeroSlider'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import { CheckCircle, Award, Users, Clock, Shield, Star, Truck } from 'lucide-react'
import { motion, useMotionValue, animate, useTransform } from 'framer-motion'

export default function Home() {
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

  const trustedBy = [
    { name: 'DOE', logo: '/assets/images/doe.svg', website: 'https://www.doe.gov.my' },
    { name: 'KPDNKK', logo: '/assets/images/kpdnkk.svg', website: 'https://www.kpdnkk.gov.my' },
    { name: 'PDRM', logo: '/assets/images/polis.png', website: 'https://www.rmp.gov.my' },
    { name: 'MPOB', logo: '/assets/images/mpob.svg', website: 'https://www.mpob.gov.my' },
    { name: 'CIDB', logo: '/assets/images/cidb.svg', website: 'https://www.cidb.gov.my' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <SimpleHeroSlider />

      {/* Who Are We Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                Nasdeem Ventures Sdn Bhd is a leading Bumiputera company specializing in 
                scheduled waste management and industrial solutions. With 20 years of experience 
                and a commitment to excellence, we provide comprehensive services that meet 
                the highest standards of quality and environmental compliance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-justify">
                Our team of experts works tirelessly to ensure that our clients receive 
                the best possible service while maintaining strict adherence to Malaysian 
                environmental regulations and international best practices.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">DOE </span>
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">KPDNKK </span>
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">PDRM </span>
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">MPOB </span>
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-primary">CIDB</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/team.jpg"
                alt="Who Are We"
                width={600}
                height={400}
                unoptimized
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Services Section */}
      <SectionWrapper>
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

      {/* Our Values Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
          </div>
          
          {/* Values Cards - Full Width */}
          <div className="relative h-[500px] w-full">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide h-full px-2 justify-center">
              {[
                {
                  letter: 'N',
                  title: 'Novelty',
                  description: 'We embrace new ideas and innovative solutions to drive progress and stay ahead',
                  image: '/assets/images/lab2crop.png'
                },
                {
                  letter: 'A',
                  title: 'Accountability',
                  description: 'We take ownership of our actions and deliver on our commitments with responsibility',
                  image: '/assets/images/team.jpg'
                },
                {
                  letter: 'S',
                  title: 'Safety',
                  description: 'We protect our staff, contractors and community where we operate',
                  image: '/assets/images/sampling1.png'
                },
                {
                  letter: 'D',
                  title: 'Dedication',
                  description: 'We commit ourselves fully to excellence and work with unwavering determination',
                  image: '/assets/images/schedule-waste.png'
                },
                {
                  letter: 'E',
                  title: 'Excellence',
                  description: 'We strive for the highest standards in everything we do, delivering quality results',
                  image: '/assets/images/doelesen.png'
                },
                {
                  letter: 'E',
                  title: 'Environment',
                  description: 'Committed to sustainable practices and protecting our planet for future generations',
                  image: '/assets/images/environment.jpg'
                },
                {
                  letter: 'M',
                  title: 'Mutual Respect',
                  description: 'We value every individual and work together as one unified team',
                  image: '/assets/images/raya.jpeg'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex-shrink-0 w-64 h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ marginLeft: index > 0 ? '-20px' : '0' }}
                >
                  {/* Background Image */}
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Decorative Letter */}
                    <div className="absolute top-4 left-4">
                      <span className="text-8xl font-black text-white/40 group-hover:text-[#FBBF24]/60 transition-colors duration-300 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                        {value.letter}
                      </span>
                    </div>
                    
                    {/* Value Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FBBF24] transition-colors duration-300 drop-shadow-lg">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300 drop-shadow-md">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trusted By Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Trusted By
            </h2>
            <p className="text-lg text-muted-foreground">
              We are proud to be certified and recognized by leading regulatory bodies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {trustedBy.map((org) => (
              <div key={org.name} className="flex justify-center">
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                >
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={120}
                    height={60}
                    className="transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

