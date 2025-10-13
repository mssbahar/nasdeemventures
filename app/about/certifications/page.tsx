'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Award, Eye, X } from 'lucide-react'

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = ['All', 'DOE', 'KPDN', 'PDRM', 'MPOB', 'CIDB']

  const certifications = [
    {
      id: 1,
      title: 'DOE - Kemudahan Permerolehan Kembali Luar Tapak',
      category: 'DOE',
      description: 'Licensed for comprehensive scheduled waste management services including collection, transportation, treatment, and disposal.',
      image: '/assets/images/doe1.png',
      issuedDate: '2023-01-15',
      expiryDate: '2025-01-15',
      status: 'Active'
    },
    {
      id: 2,
      title: 'DOE - Pembawa Yang Ditetapkan Buangan Terjadual',
      category: 'DOE',
      description: 'Certified to conduct environmental impact assessments for waste management projects.',
      image: '/assets/images/doe2.png',
      issuedDate: '2022-11-15',
      expiryDate: '2024-11-15',
      status: 'Active'
    },
    {
      id: 3,
      title: 'KPDN - Berniaga Jual Borong Diesel & Petrol',
      category: 'KPDN',
      description: 'Authorized to supply and distribute petroleum products for industrial and commercial use.',
      image: '/assets/images/kpdnkk1.png',
      issuedDate: '2023-03-20',
      expiryDate: '2026-03-20',
      status: 'Active'
    },
    {
      id: 4,
      title: 'KPDN - Berniaga Jual Borong Minyak Masak',
      category: 'KPDN',
      description: 'ISO 9001:2015 certified quality management system for petroleum products handling.',
      image: '/assets/images/kpdnkk2.png',
      issuedDate: '2023-05-10',
      expiryDate: '2026-05-10',
      status: 'Active'
    },
    {
      id: 5,
      title: 'KPDN - Memasar & Mengedar Secara Borong',
      category: 'KPDN',
      description: 'Licensed for distribution of petroleum products across Malaysia.',
      image: '/assets/images/kpdnkk3.png',
      issuedDate: '2023-04-15',
      expiryDate: '2025-04-15',
      status: 'Active'
    },
    {
      id: 6,
      title: 'KPDN - Perkhidmatan Pengangkutan Melalui Lori Tangki',
      category: 'KPDN',
      description: 'Commercial license for petroleum products trading and distribution.',
      image: '/assets/images/kpdnkk4.png',
      issuedDate: '2023-06-01',
      expiryDate: '2026-06-01',
      status: 'Active'
    },
    {
      id: 7,
      title: 'PDRM - Lesen Untuk Berniaga Barang-Barang Sekendhend',
      category: 'PDRM',
      description: 'Security clearance for handling sensitive materials and operating in restricted areas.',
      image: '/assets/images/polis1.png',
      issuedDate: '2023-02-10',
      expiryDate: '2024-02-10',
      status: 'Active'
    },
    {
      id: 8,
      title: 'PDRM - Sijil Pengecualian',
      category: 'PDRM',
      description: 'Specialized license for handling and transporting hazardous materials safely.',
      image: '/assets/images/polis2.png',
      issuedDate: '2023-03-15',
      expiryDate: '2025-03-15',
      status: 'Active'
    },
    {
      id: 9,
      title: 'MOPB - Lesen Pemprosesan Minyak Sawit',
      category: 'MPOB',
      description: 'Licensed to supply and distribute palm oil products with quality assurance certification.',
      image: '/assets/images/mpob.png',
      issuedDate: '2023-04-05',
      expiryDate: '2025-04-05',
      status: 'Active'
    },
    {
      id: 10,
      title: 'CIDB - Perakuan Pendaftaran',
      category: 'CIDB',
      description: 'Licensed for demolition works and construction-related services with safety compliance.',
      image: '/assets/images/cidb.png',
      issuedDate: '2023-01-30',
      expiryDate: '2026-01-30',
      status: 'Active'
    }
  ]

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory)

  const formatDate = (isoDate: string) =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC' }).format(new Date(isoDate))

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Certifications"
        subtitle="Comprehensive regulatory compliance and industry recognition"
        backgroundImage="/assets/images/reception.png" 
        showButtons={false}
      />

      {/* Certifications Introduction & Filter */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
              Regulatory Compliance & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              We maintain comprehensive certifications and licenses from leading regulatory 
              bodies in Malaysia, ensuring full compliance with environmental, safety, and 
              quality standards. Our certifications demonstrate our commitment to excellence 
              and regulatory adherence.
            </p>
          </div>
          
          {/* Category Filter */}
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
              <div key={cert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group cursor-pointer" onClick={() => openImageModal(cert.image)}>
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
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">{cert.title}</h3>

                  <button className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-colors hover:text-yellow-500 flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Certificate"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

