'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import InteractiveMap from '@/components/InteractiveMap'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Target, Eye, Users, Award, CheckCircle } from 'lucide-react'

export default function OurStoryPage() {
  const journey = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Nasdeem Ventures was established with a vision to revolutionize waste management in Malaysia.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    },
    {
      year: '2012',
      title: 'First Major Contract',
      description: 'Secured our first major industrial waste management contract with a leading manufacturing company.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    },
    {
      year: '2015',
      title: 'DOE Certification',
      description: 'Achieved full DOE certification for scheduled waste management operations.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    },
    {
      year: '2018',
      title: 'Expansion Phase',
      description: 'Expanded services to include petroleum products and transportation logistics.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced digital systems for better waste tracking and management.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as Malaysia\'s leading Bumiputera company in waste management.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
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
                Who Are We
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
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Mission Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
              className="bg-accent/40 backdrop-blur-md rounded-2xl p-12 border border-accent/50 shadow-2xl"
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-accent to-primary rounded-full mr-6"></div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Mission</h3>
              </div>
              <div className="pl-7">
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  We are committed to environmental improvements that drive a sustainable future and create social and economic benefits in communities we serve.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Through environmental mentoring and industry networking, we support growth across the schedule waste recovery sector and our related business activities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Corporate Divider */}
          <div className="flex items-center justify-center mb-24">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="mx-8 w-3 h-3 bg-white/60 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>

          {/* Vision Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
              className="bg-accent/40 backdrop-blur-md rounded-2xl p-12 border border-accent/50 shadow-2xl"
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-primary to-accent rounded-full mr-6"></div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Vision</h3>
              </div>
              <div className="pl-7">
                <p className="text-xl text-white/90 leading-relaxed">
                  To contribute to the nation's future circular economy through comprehensive scheduled waste recovery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet Our Founder Section */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-lg text-gray-200 mb-6">
                "Our journey began with a simple belief: that environmental responsibility 
                and business success can go hand in hand. We've built Nasdeem Ventures 
                on the foundation of integrity, innovation, and a deep commitment to 
                protecting Malaysia's environment for future generations."
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>15+ years in environmental services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Expert in waste management regulations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Passionate about sustainable business</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Founder"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Journey Timeline */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A timeline of our growth and achievements over the years
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent hidden lg:block" />
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">{item.year}</div>
                          <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2" />
                </div>
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
              <span className="text-blue-600">SERVICE</span>{' '}
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
                <span className="text-2xl font-bold text-primary">15</span>
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

