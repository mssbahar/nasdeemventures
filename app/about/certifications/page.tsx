'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Award, Download, ExternalLink } from 'lucide-react'

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'DOE', 'KPDNKK', 'PDRM', 'MPOB', 'CIDB']

  const certifications = [
    {
      id: 1,
      title: 'DOE Scheduled Waste Management License',
      category: 'DOE',
      description: 'Licensed for comprehensive scheduled waste management services including collection, transportation, treatment, and disposal.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-01-15',
      expiryDate: '2025-01-15',
      status: 'Active'
    },
    {
      id: 2,
      title: 'KPDNKK Petroleum Products License',
      category: 'KPDNKK',
      description: 'Authorized to supply and distribute petroleum products for industrial and commercial use.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-03-20',
      expiryDate: '2026-03-20',
      status: 'Active'
    },
    {
      id: 3,
      title: 'PDRM Security Clearance',
      category: 'PDRM',
      description: 'Security clearance for handling sensitive materials and operating in restricted areas.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-02-10',
      expiryDate: '2024-02-10',
      status: 'Active'
    },
    {
      id: 4,
      title: 'MPOB Palm Oil Supply License',
      category: 'MPOB',
      description: 'Licensed to supply and distribute palm oil products with quality assurance certification.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-04-05',
      expiryDate: '2025-04-05',
      status: 'Active'
    },
    {
      id: 5,
      title: 'CIDB Construction License',
      category: 'CIDB',
      description: 'Licensed for demolition works and construction-related services with safety compliance.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-01-30',
      expiryDate: '2026-01-30',
      status: 'Active'
    },
    {
      id: 6,
      title: 'DOE Environmental Impact Assessment',
      category: 'DOE',
      description: 'Certified to conduct environmental impact assessments for waste management projects.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2022-11-15',
      expiryDate: '2024-11-15',
      status: 'Active'
    },
    {
      id: 7,
      title: 'KPDNKK Quality Management System',
      category: 'KPDNKK',
      description: 'ISO 9001:2015 certified quality management system for petroleum products handling.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-05-10',
      expiryDate: '2026-05-10',
      status: 'Active'
    },
    {
      id: 8,
      title: 'PDRM Hazardous Materials Handling',
      category: 'PDRM',
      description: 'Specialized license for handling and transporting hazardous materials safely.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      issuedDate: '2023-03-15',
      expiryDate: '2025-03-15',
      status: 'Active'
    }
  ]

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory)

  const formatDate = (isoDate: string) =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC' }).format(new Date(isoDate))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Certifications"
        subtitle="Comprehensive regulatory compliance and industry recognition"
        backgroundImage="/assets/images/reception.png" 
        showButtons={false}
      />

      {/* Certifications Introduction */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Regulatory Compliance & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We maintain comprehensive certifications and licenses from leading regulatory 
              bodies in Malaysia, ensuring full compliance with environmental, safety, and 
              quality standards. Our certifications demonstrate our commitment to excellence 
              and regulatory adherence.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Category Filter */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-white text-primary border border-border hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {cert.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issued:</span>
                      <span className="text-primary">{formatDate(cert.issuedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expires:</span>
                      <span className="text-primary">{formatDate(cert.expiryDate)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compliance Statistics */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Compliance Excellence</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our commitment to regulatory compliance and quality assurance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">8+</div>
              <div className="text-lg text-gray-200">Active Certifications</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">5</div>
              <div className="text-lg text-gray-200">Regulatory Bodies</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg text-gray-200">Compliance Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-lg text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Quality Assurance */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Quality Assurance & Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive quality management system ensures that all our services 
                meet the highest standards of regulatory compliance and environmental safety. 
                We continuously monitor and improve our processes to maintain excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-lg">Regular compliance audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-lg">Continuous staff training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-lg">Environmental monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-lg">Safety protocol adherence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                alt="Quality Assurance"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

