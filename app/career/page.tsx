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
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Penang/Selangor/Johor',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are looking for a creative and dynamic Marketing Executive to join our team and drive our marketing initiatives across multiple locations.',
      requirements: [
        'Degree in Marketing, Business, or related field',
        '2+ years experience in marketing or digital marketing',
        'Strong communication and presentation skills',
        'Proficiency in social media and digital marketing tools',
        'Creative thinking and problem-solving abilities'
      ]
    },
    {
      id: 2,
      title: 'Senior Account Executive',
      department: 'Sales',
      location: 'Penang',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our sales team as a Senior Account Executive to manage key client relationships and drive business growth.',
      requirements: [
        'Degree in Business, Sales, or related field',
        '5+ years experience in sales or account management',
        'Strong relationship-building skills',
        'Experience in B2B sales environment',
        'Target-oriented and results-driven mindset'
      ]
    },
    {
      id: 3,
      title: 'HR & Admin Officer',
      department: 'Human Resources',
      location: 'Penang',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Support our human resources and administrative functions to ensure smooth operations and employee satisfaction.',
      requirements: [
        'Degree in Human Resources, Business Administration, or related field',
        '2+ years experience in HR and administrative roles',
        'Knowledge of Malaysian labor laws and regulations',
        'Strong organizational and communication skills',
        'Proficiency in HR software and Microsoft Office'
      ]
    },
    {
      id: 4,
      title: 'Operation Executive',
      department: 'Operations',
      location: 'Penang',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Manage daily operations and ensure efficient delivery of our environmental services to clients.',
      requirements: [
        'Degree in Operations Management, Environmental Science, or related field',
        '3+ years experience in operations management',
        'Knowledge of environmental regulations and compliance',
        'Strong leadership and problem-solving skills',
        'Experience in waste management or environmental services preferred'
      ]
    }
  ]

  const employeeStories = [
    {
      id: 1,
      name: 'Dr Shazlina',
      position: 'General Manager - Corporate Service',
      image: '/assets/images/shazlina.jpg',
      story: 'Leading the corporate services division at Nasdeem Ventures has been incredibly fulfilling. I oversee strategic initiatives and ensure our corporate operations align with environmental compliance standards. The company\'s commitment to sustainability makes every day meaningful.',
      tenure: '2+ years'
    },
    {
      id: 2,
      name: 'Syahirah Razi',
      position: 'Licensing Executive',
      image: '/assets/images/ira.jpg',
      story: 'Managing our licensing portfolio with DOE, KPDN, PDRM, and other regulatory bodies has taught me so much about environmental compliance. Nasdeem Ventures provides excellent support for professional development in regulatory affairs.',
      tenure: '3+ years'
    },
    {
      id: 3,
      name: 'Abdul Alim',
      position: 'Finance Executive',
      image: '/assets/images/alim.jpg',
      story: 'Working in finance at an environmental services company has given me unique insights into sustainable business practices. I handle financial planning and ensure our operations remain profitable while maintaining environmental standards.',
      tenure: '3+ years'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Career Opportunities"
        subtitle="Join our team and build a rewarding career in environmental services"
        backgroundImage="/assets/images/meeting.jpg"
        showButtons={false}
      />

      {/* Career Introduction & Category Tabs */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Build Your Career With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              Join our team of dedicated professionals and contribute to Malaysia's environmental 
              sustainability. We offer competitive benefits, professional development opportunities, 
              and a supportive work environment.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#FBBF24] text-black'
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
                    <button className="mt-4 lg:mt-0 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors hover:text-yellow-500 flex items-center space-x-2">
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
                  <div className="relative h-[500px]">
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
      <SectionWrapper className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/nasdeem.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How would you describe the Nasdeem Ventures team?</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-4">
              Nasdeem Ventures is an equal opportunity employer that has the awesome opportunity to add teammates from across Malaysia! We're united by our environmental values, and we celebrate our unique differences.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              What kind of people work at Nasdeem Ventures? All kinds! We hire talented teammates from a wide variety of backgrounds and experiences, and we're committed to a work environment of respect and kindness.
            </p>
          </div>
          
          {/* Auto-scrolling Image Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* Duplicate images for seamless loop - using 3 sets for smoother transition */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-6 flex-shrink-0">
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/team.jpg"
                      alt="Nasdeem Ventures Team"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/media.jpg"
                      alt="Team Collaboration"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/oilspillage2.png"
                      alt="Career Development"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/raya.jpeg"
                      alt="Work Environment"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/oilspillage.jpeg"
                      alt="Environmental Mission"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-96 h-72 rounded-xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/10">
                    <Image
                      src="/assets/images/marketing.jpg"
                      alt="Company Culture"
                      width={384}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
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
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              Send Resume
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call HR: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

