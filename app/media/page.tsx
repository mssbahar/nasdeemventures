'use client'

import { useState, useEffect, useRef } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { ImageIcon, ExternalLink, X, ChevronLeft, ChevronRight, Linkedin, Facebook, Play, Pause, Star, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[] | { src: string, caption: string }[], title: string, description: string } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoScroll, setIsAutoScroll] = useState(false)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  const categories = ['All', 'Social Activities', 'Operations', 'Newsletter']

  const mediaItems = [
    // Featured Event - Photo Nasdeem
    {
      id: 0,
      title: 'Majlis Perasmian Nasdeem Ventures Sdn Bhd',
      description: 'A collection of memorable moments and events showcasing our company activities, team gatherings, and special occasions.',
      date: '2006-01-01',
      category: 'social' as const,
      coverImage: '/assets/images/ucapan.jpg',
      images: [
        '/assets/images/rasmi.jpg',
        '/assets/images/Photo Nasdeem-253.jpg',
        '/assets/images/Photo Nasdeem-281.jpg',
        '/assets/images/Photo Nasdeem-288.jpg',
        '/assets/images/Photo Nasdeem-313.jpg',
        '/assets/images/Photo Nasdeem-323.jpg',
        '/assets/images/Photo Nasdeem-327.jpg',
        '/assets/images/Photo Nasdeem-33.jpg',
        '/assets/images/Photo Nasdeem-331.jpg',
        '/assets/images/Photo Nasdeem-339.jpg',
        '/assets/images/Photo Nasdeem-355.jpg',
        '/assets/images/Photo Nasdeem-402.jpg',
        '/assets/images/Photo Nasdeem-419.jpg',
        '/assets/images/Photo Nasdeem-437.jpg',
        '/assets/images/Photo Nasdeem-446.jpg',
        '/assets/images/Photo Nasdeem-463.jpg',
        '/assets/images/Photo Nasdeem-476.jpg',
        '/assets/images/Photo Nasdeem-480.jpg',
        '/assets/images/Photo Nasdeem-514.jpg',
        '/assets/images/Photo Nasdeem-525.jpg',
        '/assets/images/Photo Nasdeem-540.jpg',
        '/assets/images/Photo Nasdeem-554.jpg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    // Social Activities
    {
      id: 1,
      title: 'Majlis Buka Puasa 2025',
      description: 'Annual breaking of fast event bringing together our team and community in a spirit of unity and celebration during the holy month of Ramadan.',
      date: '2025-03-15',
      category: 'social' as const,
      coverImage: '/assets/images/raya.jpeg',
      images: [
        '/assets/images/raya.jpeg',
        '/assets/images/raya2.jpeg',
        '/assets/images/raya3.jpeg',
        '/assets/images/raya4.jpeg',
        '/assets/images/raya5.jpeg',
        '/assets/images/raya6.jpeg',
        '/assets/images/raya7.jpeg',
        '/assets/images/raya8.jpeg',
        '/assets/images/puasa1.jpg',
        '/assets/images/puasa2.jpg',
        '/assets/images/puasa3.jpg',
        '/assets/images/puasa4.jpg',
        '/assets/images/puasa5.jpg',
        '/assets/images/puasa6.jpg',
        '/assets/images/puasa7.jpg',
        '/assets/images/puasa8.jpg',
        '/assets/images/puasa9.jpg',
        '/assets/images/puasa10.jpg',
        '/assets/images/puasa11.jpg',
        '/assets/images/puasa12.jpg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 2,
      title: 'Majlis Perasmian Masjid Pekan Permatang Pauh',
      description: 'Alhamdulillah, on April 24, 2025 corresponding to 25 Syawal 1446H, the Opening Ceremony of Masjid Pekan Permatang Pauh was held with full gratitude and blessings.',
      date: '2025-04-24',
      category: 'social' as const,
      coverImage: '/assets/images/masjid.jpg',
      images: [
        '/assets/images/masjid.jpg',
        '/assets/images/masjid2.jpeg',
        '/assets/images/masjid3.jpeg',
        '/assets/images/masjid4.jpeg',
        '/assets/images/masjid5.jpeg',
        '/assets/images/masjid6.jpeg',
        '/assets/images/masjid7.jpeg',
        '/assets/images/masjid8.jpeg',
        '/assets/images/masjid9.jpeg',
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 3,
      title: 'Mission Slimpossible Nasdeem Ventures',
      description: 'A health and wellness initiative encouraging our team members to lead healthier lifestyles through fitness challenges and healthy living programs.',
      date: '2025-02-01',
      category: 'social' as const,
      coverImage: '/assets/images/slim1.jpeg',
      images: [
        '/assets/images/slim1.jpeg',
        '/assets/images/slim2.jpeg',
        '/assets/images/slim3.jpeg',
        '/assets/images/slim4.jpeg',
        '/assets/images/slim5.jpeg',
        '/assets/images/slim6.jpeg',
        '/assets/images/slim7.jpeg',
        '/assets/images/slim8.jpeg',
        '/assets/images/slim9.jpeg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 4,
      title: 'Company Visit to Krabi, Thailand',
      description: 'An exciting company visit to Krabi, Thailand, fostering team bonding and cultural exchange while exploring the beautiful landscapes and experiencing Thai hospitality.',
      date: '2024-11-15',
      category: 'social' as const,
      coverImage: '/assets/images/thai.jpeg',
      images: [
        '/assets/images/thai.jpeg',
        '/assets/images/thai2.jpeg',
        '/assets/images/thai3.jpeg',
        '/assets/images/thai4.jpeg',
        '/assets/images/thai6.jpeg',
        '/assets/images/thai7.jpeg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 16,
      title: 'Company Trip to Hat Yai, Thailand',
      description: 'An unforgettable company trip to Hat Yai, Thailand, strengthening team relationships and enjoying the vibrant culture, delicious cuisine, and memorable experiences together.',
      date: '2025-01-20',
      category: 'social' as const,
      coverImage: '/assets/images/hatyai.jpeg',
      images: [
        '/assets/images/hatyai.jpeg',
        '/assets/images/hatyai2.jpeg',
        '/assets/images/hatyai3.jpeg',
        '/assets/images/hatyai4.jpeg',
        '/assets/images/hatyai5.jpeg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    // Operations
    {
      id: 5,
      title: 'Internal Meetings & Discussion',
      description: 'Regular internal meetings and strategic discussions to ensure smooth operations and continuous improvement.',
      date: '2024-01-15',
      category: 'operations' as const,
      coverImage: '/assets/images/meeting.jpg',
      images: [
        '/assets/images/meeting.jpg',
        '/assets/images/meeting2.png',
        '/assets/images/meeting3.png'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 6,
      title: 'Loading & Unloading Schedule Waste',
      description: 'Professional handling of scheduled waste during loading and unloading operations, ensuring safety and compliance.',
      date: '2024-01-20',
      category: 'operations' as const,
      coverImage: '/assets/images/schedule-waste2.png',
      images: [
        '/assets/images/schedule-waste2.png',
        '/assets/images/whoarewe.png',
        '/assets/images/loading.png'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 7,
      title: 'Technical Check & Schedule Waste Sampling',
      description: 'Comprehensive technical checks and sampling procedures to ensure proper waste classification and handling.',
      date: '2024-01-25',
      category: 'operations' as const,
      coverImage: '/assets/images/sampling1.png',
      images: [
        '/assets/images/sampling1.png',
        '/assets/images/sampling2.png',
        '/assets/images/schedule-waste.png'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 8,
      title: 'Processing & Recovery of Schedule Waste',
      description: 'Advanced processing and recovery operations for scheduled waste, maximizing resource recovery and environmental compliance.',
      date: '2024-02-01',
      category: 'operations' as const,
      coverImage: '/assets/images/process.png',
      images: [
        '/assets/images/process.png'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 9,
      title: 'Laboratory Sampling, Testing and Analysis',
      description: 'Detailed laboratory sampling, testing and analysis procedures to ensure accurate waste characterization and compliance.',
      date: '2024-02-05',
      category: 'operations' as const,
      coverImage: '/assets/images/lab.png',
      images: [
        '/assets/images/lab.png',
        '/assets/images/lab2.png',
        '/assets/images/lab3.jpeg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 10,
      title: 'Oil Spillage Training',
      description: 'Comprehensive oil spillage training sessions for our team, ensuring preparedness and proper response procedures.',
      date: '2024-02-10',
      category: 'operations' as const,
      coverImage: '/assets/images/oilspillagecover.jpeg',
      images: [
        '/assets/images/oilspillagecover.jpeg',
        '/assets/images/oilspillage.jpeg',
        '/assets/images/oilspillage2.png',
        '/assets/images/oilspillage3.png',
        '/assets/images/pump.png',
        '/assets/images/oilspillage4.jpeg',
        '/assets/images/oilspillage5.jpeg',
        '/assets/images/oilspillage6.jpeg',
        '/assets/images/oilspillage7.jpeg',
        '/assets/images/oilspillage8.jpeg',
        '/assets/images/oilspillage9.jpeg'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    {
      id: 11,
      title: 'Cleaning Tank & Oil Receptors',
      description: 'Thorough cleaning and maintenance of tanks and oil receptors to ensure optimal performance and environmental safety.',
      date: '2024-02-15',
      category: 'operations' as const,
      coverImage: '/assets/images/clean1.png',
      images: [
        '/assets/images/clean1.png',
        '/assets/images/clean2.png',
        '/assets/images/clean3.png'
      ],
      thumbnailImage: undefined,
      externalLink: undefined,
      linkType: undefined
    },
    // Newsletter - Social Media Posts
    {
      id: 12,
      title: 'Nasdeem Ventures - Penerima Anugerah Majikan Terbaik 2025 KWSP',
      description: 'Nasdeem Ventures Sdn. Bhd. proudly receives recognition as Best Employer 2025 from EPF Malaysia (KWSP) for outstanding commitment to employee welfare and EPF contribution compliance. Award ceremony held on October 29, 2025 at The Light Hotel, Penang.',
      date: '2025-10-27',
      category: 'newsletter' as const,
      coverImage: undefined,
      images: [],
      thumbnailImage: '/assets/images/kwsp.jpeg',
      externalLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7391370042396839937',
      linkType: 'linkedin' as const
    },
    {
      id: 17,
      title: 'Majlis Perasmian Masjid Pekan Permatang Pauh',
      description: 'Alhamdulillah, on April 24, 2025 corresponding to 25 Syawal 1446H, the Opening Ceremony of Masjid Pekan Permatang Pauh was held with full gratitude and blessings.',
      date: '2025-04-27',
      category: 'newsletter' as const,
      coverImage: undefined,
      images: [],
      thumbnailImage: '/assets/images/masjid.jpg',
      externalLink: 'https://www.facebook.com/share/p/1CRvDKmBqm/',
      linkType: 'facebook' as const
    },
    {
      id: 13,
      title: 'Seminar Akta Kualiti Alam Sekeliling (Pindaan) 2024',
      description: 'For the first time, Nasdeem Ventures Sdn. Bhd. participated in the Environmental Quality Act (Amendment) 2024 Seminar, Impact & Implications for Industry at Bertam Resort & Water Park Penang on January 15, 2025.',
      date: '2024-12-15',
      category: 'newsletter' as const,
      coverImage: undefined,
      images: [],
      thumbnailImage: '/assets/images/marketing.jpg',
      externalLink: 'https://www.facebook.com/share/p/1733TAWAnQ/',
      linkType: 'facebook' as const
    },
    {
      id: 14,
      title: 'SOP Training for Collection BT & Oil Spill Handling',
      description: 'Standard Operating Procedure (SOP) training for Collection BT & Oil Spill Handling for all Nasdeem staff on September 27, 2025.',
      date: '2025-09-27',
      category: 'newsletter' as const,
      coverImage: undefined,
      images: [],
      thumbnailImage: '/assets/images/oilspillage.jpeg',
      externalLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7379014857326505984',
      linkType: 'linkedin' as const
    },
    {
      id: 15,
      title: 'RAMADAN BARAKAH, JAMBATAN UKHUWAH - Majlis Buka Puasa 2025',
      description: 'On March 17, 2025, Nasdeem Ventures Sdn. Bhd. with gratitude organized a breaking of fast event in conjunction with the blessed month of Ramadan in collaboration with Hilnas Sdn. Bhd. at Amari Spice Hotel, Penang.',
      date: '2025-03-17',
      category: 'newsletter' as const,
      coverImage: undefined,
      images: [],
      thumbnailImage: '/assets/images/raya.jpeg',
      externalLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7309054712908066816',
      linkType: 'linkedin' as const
    },
  ]

  const filteredItems = activeCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => {
      if (activeCategory === 'Social Activities') return item.category === 'social'
      if (activeCategory === 'Operations') return item.category === 'operations'
      if (activeCategory === 'Newsletter') return item.category === 'newsletter'
      return true
    })

  const openGallery = (images: string[] | { src: string, caption: string }[], title: string, description: string) => {
    setSelectedGallery({ images, title, description })
    setCurrentImageIndex(0)
  }

  // Helper function to get image source
  const getImageSrc = (image: string | { src: string, caption: string }): string => {
    return typeof image === 'string' ? image : image.src
  }

  // Helper function to get image caption
  const getImageCaption = (image: string | { src: string, caption: string }): string | null => {
    return typeof image === 'string' ? null : image.caption
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      )
    }
  }

  const toggleAutoScroll = () => {
    setIsAutoScroll(!isAutoScroll)
  }

  const startAutoScroll = () => {
    if (selectedGallery && selectedGallery.images.length > 1) {
      autoScrollRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedGallery.images.length - 1 ? 0 : prev + 1
        )
      }, 3000) // Change image every 3 seconds
    }
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedGallery) return
    
    switch (e.key) {
      case 'Escape':
        closeGallery()
        break
      case 'ArrowLeft':
        prevImage()
        break
      case 'ArrowRight':
        nextImage()
        break
    }
  }

  useEffect(() => {
    if (selectedGallery) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      stopAutoScroll()
      setIsAutoScroll(false)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
      stopAutoScroll()
    }
  }, [selectedGallery])

  useEffect(() => {
    if (isAutoScroll) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [isAutoScroll, selectedGallery])

  const getCategoryBadge = (category: string) => {
    const categoryMap = {
      'social': 'Social Activities',
      'operations': 'Operations',
      'newsletter': 'Newsletter'
    }
    return categoryMap[category as keyof typeof categoryMap] || category
  }

  const handleItemClick = (item: any) => {
    if (item.category === 'newsletter' && item.externalLink) {
      if (item.linkType === 'internal') {
        // Handle internal links - redirect to new page
        window.location.href = item.externalLink
      } else {
        // Handle external links - open in new tab
        window.open(item.externalLink, '_blank')
      }
    } else if (item.images && item.images.length > 0) {
      openGallery(item.images, item.title, item.description)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Media Center"
        subtitle="Stay updated with our latest news, events, and insights"
        backgroundImage="/assets/images/media.jpg"
        showButtons={false}
      />

      {/* Special Featured Event - Photo Nasdeem */}
      <SectionWrapper className="relative overflow-hidden">
        {/* Animated Background with Black Filter */}
        <div className="absolute inset-0 bg-black/80">
          <div className="absolute inset-0 bg-[url('/assets/images/bg.png')] opacity-20"></div>
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Special Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border-2 border-white/30">
              <span className="text-white font-bold text-sm uppercase tracking-wider">A Moment to Remember</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  Majlis Perasmian Nasdeem Ventures Sdn Bhd
                </h3>
              </div>
              <div className="w-83 h-1.5 bg-white mb-4"></div>
              <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                A momentous milestone in our company's history. The official opening ceremony 
                that marked the beginning of our journey towards excellence in scheduled waste 
                management and industrial solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const photoItem = mediaItems.find(item => 
                    item.id === 0 || 
                    item.title.toLowerCase().includes('photo nasdeem')
                  )
                  if (photoItem && photoItem.images && photoItem.images.length > 0) {
                    openGallery(photoItem.images, photoItem.title, photoItem.description)
                  } else if (photoItem && photoItem.externalLink) {
                    window.open(photoItem.externalLink, '_blank')
                  }
                }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50"
              >
                View Photo Gallery
              </motion.button>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 bg-black/20">
                <Image
                  src="/assets/images/ucapan.jpg"
                  alt="Photo Nasdeem"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white/50 rounded-lg"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-white/50 rounded-lg"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-2xl"
              >
                <Award className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 h-1 bg-white/30"
          />
        </div>
      </SectionWrapper>

      {/* Media Introduction & Category Filter */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Media Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
              Explore our latest news, events, operations highlights, and industry insights. 
              Stay connected with Nasdeem Ventures through our media content.
            </p>
            
            {/* Corporate Video */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">Corporate Introduction Video</h3>
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                <div className="relative w-full h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.youtube.com/embed/nBSsb7u1SDQ?si=qLDxbxBw48OJr4As&autoplay=0&rel=0&modestbranding=1"
                    title="Nasdeem Ventures Corporate Video"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#FBBF24] text-black shadow-lg'
                    : 'bg-white text-primary border-2 border-gray-300 hover:border-[#FBBF24]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.coverImage || item.thumbnailImage || '/assets/images/team.jpg'}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    {item.category === 'newsletter' ? (
                      <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        {item.linkType === 'linkedin' ? (
                          <Linkedin className="w-5 h-5 text-white" />
                        ) : item.linkType === 'facebook' ? (
                          <Facebook className="w-5 h-5 text-white" />
                        ) : (
                          <ExternalLink className="w-5 h-5 text-white" />
                        )}
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-[#FBBF24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  {item.category === 'newsletter' && (
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        {item.linkType === 'facebook' ? (
                          <Facebook className="w-4 h-4" />
                        ) : item.linkType === 'linkedin' ? (
                          <Linkedin className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span className="capitalize">{item.linkType}</span>
                      </span>
                    </div>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Enhanced Image Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center space-x-4 flex-1 mr-4">
                <div className="w-2 h-8 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] rounded-full shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{selectedGallery.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{selectedGallery.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Auto-scroll Toggle Button */}
                {selectedGallery.images.length > 1 && (
                  <button
                    onClick={toggleAutoScroll}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isAutoScroll 
                        ? 'bg-[#FBBF24] text-black hover:bg-[#F59E0B]' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {isAutoScroll ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {isAutoScroll ? 'Pause' : 'Auto'}
                    </span>
                  </button>
                )}
                
                {/* Close Button */}
                <button
                  onClick={closeGallery}
                  className="group w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Main Image Container - Fixed Size */}
            <div className="relative flex-1 flex items-center justify-center p-4">
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 z-10 group w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedGallery.images.length <= 1}
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 z-10 group w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedGallery.images.length <= 1}
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              {/* Main Image - Fixed Size Container */}
              <div className="relative w-full h-full max-w-4xl flex flex-col items-center justify-center group">
                <div className="relative w-full flex-1 max-h-[55vh] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-all duration-500">
                  <Image
                    src={getImageSrc(selectedGallery.images[currentImageIndex])}
                    alt={`${selectedGallery.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Image Caption */}
                {getImageCaption(selectedGallery.images[currentImageIndex]) && (
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 max-w-2xl"
                  >
                    <p className="text-white text-center text-sm lg:text-base font-medium">
                      {getImageCaption(selectedGallery.images[currentImageIndex])}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Footer with Thumbnails and Controls */}
            <div className="bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Image Counter and Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium">
                      {currentImageIndex + 1} of {selectedGallery.images.length}
                    </span>
                  </div>
                  <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] transition-all duration-300"
                      style={{ width: `${((currentImageIndex + 1) / selectedGallery.images.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Auto-scroll Status */}
                {selectedGallery.images.length > 1 && (
                  <div className="flex items-center space-x-2 text-white/60 text-xs">
                    <div className={`w-2 h-2 rounded-full ${isAutoScroll ? 'bg-[#FBBF24] animate-pulse' : 'bg-white/40'}`}></div>
                    <span>{isAutoScroll ? 'Auto-scrolling' : 'Manual mode'}</span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Strip */}
              {selectedGallery.images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
                  {selectedGallery.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'ring-2 ring-[#FBBF24] scale-110 shadow-lg'
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={getImageSrc(image)}
                        alt={`Thumbnail ${index + 1}`}
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-[#FBBF24]/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated</h2>
          </div>
          <p className="text-xl text-black mb-8">
            Subscribe to our newsletter for the latest news, industry insights, and company updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary border-2 border-black focus:border-black focus:outline-none"
            />
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors border-2 border-black">
              Subscribe
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

