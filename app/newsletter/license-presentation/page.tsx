'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Calendar, MapPin, Users, Award, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LicensePresentationPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const eventDetails = {
    title: 'Majlis Penyerahan Lesen Premis yang Ditetapkan (Buangan Terjadual)',
    date: '15 January 2025',
    location: 'Nasdeem Ventures Sdn. Bhd., Penang',
    organizer: 'Department of Environment Malaysia (DOE)',
    recipient: 'Nasdeem Ventures Sdn. Bhd.'
  }

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Important Achievement',
      description: 'Receiving the designated premises license marks official recognition of Nasdeem\'s capabilities in scheduled waste management'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description: 'This license demonstrates Nasdeem\'s commitment to full compliance with Malaysian environmental regulations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Operational Expansion',
      description: 'With this license, Nasdeem can expand scheduled waste management operations throughout Malaysia'
    }
  ]

  const licenseDetails = [
    {
      category: 'License Type',
      details: 'Designated Premises License (Scheduled Waste)',
      description: 'Special license for scheduled waste management operations at designated premises'
    },
    {
      category: 'Scheduled Waste Codes',
      details: 'SW305, SW306, SW307, SW308, SW309, SW409',
      description: 'License covers 6 approved scheduled waste codes'
    },
    {
      category: 'Annual Quota',
      details: '1,530 MT',
      description: 'Approved scheduled waste management capacity for annual operations'
    },
    {
      category: 'Valid Period',
      details: '5 Years',
      description: 'License valid for 5 years with possibility of renewal'
    }
  ]

  const timeline = [
    {
      date: '2022',
      title: 'Initial Application',
      description: 'Nasdeem initiated the application process for designated premises license'
    },
    {
      date: '2023',
      title: 'Environmental Impact Assessment (EIA)',
      description: 'Conducted comprehensive EIA study to ensure environmental compliance'
    },
    {
      date: '2024',
      title: 'Facilities & Infrastructure',
      description: 'Construction and modification of facilities to meet DOE standards'
    },
    {
      date: '2025',
      title: 'Approval & Handover',
      description: 'Received official approval and license handover by Department of Environment'
    }
  ]

  const achievements = [
    'Largest Bumiputera Islamic company in Penang for scheduled waste management',
    'Specialized expertise in oil disposal with 6 SW codes',
    'Expanding business with 13 new scheduled waste codes',
    'Bulk business operations through petroleum-based products',
    'Ferrous and non-ferrous metal trading services',
    'Demolishing and dismantling services for old buildings/factories'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Majlis Penyerahan Lesen Premis yang Ditetapkan (Buangan Terjadual)"
        subtitle="Important milestone in Nasdeem Ventures' scheduled waste management operations"
        backgroundImage="/assets/images/license.jpg"
        showButtons={false}
      />

      {/* Event Overview */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/media"
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Media Center
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Event Overview
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                On January 15, 2025, Nasdeem Ventures Sdn. Bhd. received the designated premises 
                license for scheduled waste from the Department of Environment Malaysia (DOE). 
                This historic event marks an important milestone in the company's journey 
                as a leader in the scheduled waste management industry in Malaysia.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-justify">
                This license enables Nasdeem to handle 6 scheduled waste codes with 
                an annual quota of 1,530 MT, strengthening the company's position as 
                the largest Bumiputera Islamic company in Penang in this field.
              </p>
              
              {/* Event Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Date: <strong className="text-primary">{eventDetails.date}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Location: <strong className="text-primary">{eventDetails.location}</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Organizer: <strong className="text-primary">{eventDetails.organizer}</strong></span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/license.jpg"
                alt="License Presentation Ceremony"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Highlights */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Key Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This achievement brings significant impact to Nasdeem Ventures' operations and future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* License Details */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              License Details
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed information about the received designated premises license
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {licenseDetails.map((detail, index) => (
              <motion.div
                key={detail.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-accent"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{detail.category}</h3>
                <p className="text-xl font-semibold text-accent mb-3">{detail.details}</p>
                <p className="text-muted-foreground">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
