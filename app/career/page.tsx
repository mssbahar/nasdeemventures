'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Briefcase, Users, MapPin, Clock, Send, ChevronRight } from 'lucide-react'

export default function CareerPage() {
  const [activeCategory, setActiveCategory] = useState('Job Openings')

  const categories = ['Job Openings', 'Employee Stories']

  const jobOpenings = [
    {
      id: 1,
      title: 'Waste Management Specialist',
      department: 'Operations',
      location: 'Penang',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced waste management specialist to join our operations team.',
      requirements: [
        'Degree in Environmental Science or related field',
        '3+ years experience in waste management',
        'Knowledge of DOE regulations',
        'Strong communication skills'
      ]
    },
    {
      id: 2,
      title: 'Transportation Coordinator',
      department: 'Logistics',
      location: 'Kuala Lumpur',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our logistics team as a transportation coordinator to manage our fleet operations.',
      requirements: [
        'Diploma in Logistics or related field',
        '2+ years experience in transportation',
        'Valid driving license',
        'Good organizational skills'
      ]
    },
    {
      id: 3,
      title: 'Environmental Consultant',
      department: 'Consulting',
      location: 'Penang',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Provide environmental consulting services to our clients and ensure compliance.',
      requirements: [
        'Master\'s degree in Environmental Science',
        '5+ years consulting experience',
        'Professional certification preferred',
        'Excellent analytical skills'
      ]
    },
    {
      id: 4,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Johor',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Drive sales growth by building relationships with new and existing clients.',
      requirements: [
        'Degree in Business or related field',
        '2+ years sales experience',
        'Strong networking skills',
        'Target-oriented mindset'
      ]
    }
  ]

  const employeeStories = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      position: 'Senior Waste Management Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      story: 'I joined Nasdeem Ventures 5 years ago and have grown tremendously in my career. The company provides excellent opportunities for professional development and the work environment is very supportive.',
      tenure: '5 years'
    },
    {
      id: 2,
      name: 'Sarah Lim',
      position: 'Environmental Consultant',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      story: 'Working at Nasdeem Ventures has been a rewarding experience. The company values innovation and encourages us to think creatively to solve environmental challenges.',
      tenure: '3 years'
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      story: 'The leadership team at Nasdeem Ventures is very supportive and provides clear direction. I have learned a lot about environmental compliance and waste management best practices.',
      tenure: '4 years'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Career Opportunities"
        subtitle="Join our team and build a rewarding career in environmental services"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
        showButtons={false}
      />

      {/* Career Introduction */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Build Your Career With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Join our team of dedicated professionals and contribute to Malaysia's environmental 
              sustainability. We offer competitive benefits, professional development opportunities, 
              and a supportive work environment.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Category Tabs */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'text-primary hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          {activeCategory === 'Job Openings' && (
            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Apply Now</span>
                    </button>
                  </div>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Employee Stories */}
          {activeCategory === 'Employee Stories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {employeeStories.map((employee) => (
                <div key={employee.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                  <div className="relative h-64">
                    <Image
                      src={employee.image}
                      alt={employee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{employee.name}</h3>
                    <p className="text-accent font-medium mb-3">{employee.position}</p>
                    <p className="text-sm text-muted-foreground mb-4">Tenure: {employee.tenure}</p>
                    <p className="text-muted-foreground italic">"{employee.story}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Why Work With Us */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We offer more than just a job - we provide a career path with growth opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
              <p className="text-gray-200">Opportunities for advancement and professional development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Team</h3>
              <p className="text-gray-200">Work with talented and supportive colleagues</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-200">Flexible working arrangements and competitive benefits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-200">Make a positive impact on Malaysia's environment</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Apply Now CTA */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't see a position that matches your skills? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hr.department@nasdeemventures.com"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Send Resume
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
            >
              Call HR: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

