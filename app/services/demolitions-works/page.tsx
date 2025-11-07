'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Award, 
  Leaf,
} from 'lucide-react'

export default function DemolitionWorksPage() {

  const whatWeDoItems = [
    {
      title: 'Onsite clearing',
      description: 'Complete site demolition and cleanup services with professional equipment',
      image: '/assets/images/demolition.png',
    },
    {
      title: 'Offcuts & shavings',
      description: 'Collection and recycling of metal offcuts, shavings, and industrial scrap',
      image: '/assets/images/scrap.jpg',
    },
    {
      title: 'Demolition Works',
      description: 'Structural demolition for commercial and industrial projects',
      image: '/assets/images/demolition4.png',
    },
    {
      title: 'Scrap collection',
      description: 'Scheduled pickups and large volume metal waste collection',
      image: '/assets/images/scrap2.jpg',
    },
  ]

  const whatWeHandleItems = [
    {
      title: 'Copper materials',
      description: 'Cables, wiring, pipes, fittings, and copper components',
      image: '/assets/images/copper.jpg',
    },
    {
      title: 'Metal structures',
      description: 'Steel beams, fencing, gates, carports, cages, and frameworks',
      image: '/assets/images/metal.jpg',
    },
    {
      title: 'Industrial metals',
      description: 'Aluminum, brass, stainless steel, and other non-ferrous metals',
      image: '/assets/images/metal2.jpg',
    },
    {
      title: 'Ship metals',
      description: 'Marine vessel components, ship parts, and maritime metal structures',
      image: '/assets/images/ship.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Demolition Works and Commodity Trading"
        subtitle="Professional demolition services and scrap metal collection since 2010"
        backgroundImage="/assets/images/demolish.jpeg"
        buttonText="Get Instant Quote"
        buttonLink="/contact"
      />

      {/* Service Overview - Licensing & Positioning */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Licensed & Experienced Demolition Experts</h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                We offer professional demolition works and scrap metal collection for projects of all sizes, serving clients across Malaysia since 2010. Fully licensed and authorized by Royal Malaysian Police (PDRM), we assure compliant, secure, and efficient operations.
              </p>
              <div className="flex items-center gap-6 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/80 border-2 border-primary/20 shadow px-3 py-1 rounded-full">
                  <Image src="/assets/images/pdrm.svg" alt="PDRM Licensed" width={32} height={32} className="object-contain" />
                  <span className="font-bold text-primary">PDRM Licensed</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white/80 border-2 border-yellow-200 px-3 py-1 rounded-full font-bold text-yellow-700 shadow">
                  <Award className="w-5 h-5" />
                  14+ years industry experience
                </span>
              </div>
              <p className="text-gray-700 max-w-xl">Our seasoned team delivers safe, well-documented project work and recycling with full regulatory compliance and transparent audit trails - trusted by demolition specialists, government agencies and industrial clients throughout Malaysia.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/demolition3.jpg"
                alt="Demolition Works"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Licensed & Experienced + Company Intro */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-block text-xs tracking-widest uppercase text-gray-500 mb-2">Nasdeem Ventures Sdn Bhd • Operating since 2010</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              <span className="text-primary">Licensed & Experienced</span> Scrap Metal Specialists
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Comprehensive scrap metal and copper solutions. Licensed and authorized by Royal Malaysian Police (PDRM).
            </p>
          </motion.div>

          {/* PDRM Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image src="/assets/images/pdrm.svg" alt="PDRM" fill className="object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black">PDRM Licensed & Authorized</p>
                <p className="text-xs text-gray-600">Royal Malaysian Police credential for compliant operations</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-green-700">
              <Award className="w-5 h-5" />
              <span className="text-sm">14+ years industry experience</span>
            </div>
          </div>

          {/* Two-column: What We Do / What We Handle */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="rounded-xl border-2 border-primary/20 shadow-lg p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">What We Do</h3>
                <p className="text-sm text-gray-600">Our core demolition and collection services</p>
              </div>
              <div className="space-y-4">
                {whatWeDoItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md bg-white transition-all"
                  >
                    <span className="relative w-48 h-48 shrink-0 rounded-lg overflow-hidden ring-2 ring-primary/30">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-primary mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-gray-700 text-center">
                  <strong className="text-primary">Professional & Licensed :</strong> All services performed with PDRM authorization and full compliance documentation
                </p>
              </div>
            </div>

            {/* What We Handle */}
            <div className="rounded-xl border-2 border-accent/20 shadow-lg p-6 lg:p-8 bg-gradient-to-br from-accent/5 to-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-2">What We Handle</h3>
                <p className="text-sm text-gray-600">Types of materials we purchase and recycle</p>
              </div>
              <div className="space-y-4">
                {whatWeHandleItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-accent/10 hover:border-accent/30 hover:shadow-md bg-white transition-all"
                  >
                    <span className="relative w-48 h-48 shrink-0 rounded-lg overflow-hidden ring-2 ring-accent/30">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-accent mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-gray-700 text-center">
                  <strong className="text-accent">Fair Pricing :</strong> Competitive rates for all metal types with transparent weighing and instant payment
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Responsibility */}
          <div className="mt-10 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base text-green-900">
                We practice compliant, environmentally friendly recycling across all operations - from onsite cutting and clearing to professional metal disposal - minimizing landfill and ensuring full documentation for audit trails.
              </p>
            </div>
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
              Call : 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}