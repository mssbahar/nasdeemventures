'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Calendar, Users, Newspaper, Play, Download } from 'lucide-react'

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Cultural Events', 'Operations', 'Newsletter']

  const mediaItems = [
    {
      id: 1,
      title: 'Company Annual Dinner 2023',
      category: 'Cultural Events',
      description: 'Celebrating another successful year with our team and partners',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-12-15',
      type: 'image'
    },
    {
      id: 2,
      title: 'Waste Management Operations',
      category: 'Operations',
      description: 'Behind the scenes look at our waste management processes',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-11-20',
      type: 'video'
    },
    {
      id: 3,
      title: 'Monthly Newsletter - December 2023',
      category: 'Newsletter',
      description: 'Latest updates on our services and industry news',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-12-01',
      type: 'document'
    },
    {
      id: 4,
      title: 'Team Building Activity',
      category: 'Cultural Events',
      description: 'Our team participated in a community service project',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-10-15',
      type: 'image'
    },
    {
      id: 5,
      title: 'Safety Training Session',
      category: 'Operations',
      description: 'Regular safety training for our operations team',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-10-05',
      type: 'video'
    },
    {
      id: 6,
      title: 'Monthly Newsletter - November 2023',
      category: 'Newsletter',
      description: 'Industry insights and company updates',
      image: 'https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=500&h=300&fit=crop',
      date: '2023-11-01',
      type: 'document'
    }
  ]

  const filteredItems = activeCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Media Center"
        subtitle="Stay updated with our latest news, events, and insights"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=1920&h=1080&fit=crop"
        showButtons={false}
      />

      {/* Media Introduction */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Media Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Explore our latest news, events, operations highlights, and industry insights. 
              Stay connected with Nasdeem Ventures through our media content.
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

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {item.type === 'video' && (
                      <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {item.type === 'document' && (
                      <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter Signup */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-12 h-12 text-accent mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated</h2>
          </div>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for the latest news, industry insights, and company updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary"
            />
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact for Media */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            For media inquiries, press releases, or interview requests, please contact our media team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:marketing@nasdeemventures.com"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Contact Media Team
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
            >
              Call: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

