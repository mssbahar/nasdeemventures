import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: 'Ahmad Nasdeem',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: '15+ years experience in environmental services and waste management. Expert in regulatory compliance and business development.',
      email: 'ahmad@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Sarah Abdullah',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      bio: 'Strategic leader with extensive experience in operations management and client relations. Passionate about sustainable business practices.',
      email: 'sarah@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Dr. Lim Wei Ming',
      position: 'Marketing Advisor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Marketing strategist with 20+ years in B2B marketing. Specializes in environmental services and industrial solutions marketing.',
      email: 'lim@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Fatimah Rahman',
      position: 'Management Advisor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Operations expert with deep knowledge of waste management processes and quality assurance systems.',
      email: 'fatimah@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Datuk Ahmad Zain',
      position: 'Corporate Advisor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Senior corporate advisor with extensive experience in regulatory affairs and government relations.',
      email: 'zain@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Dr. Raj Kumar',
      position: 'Technology Advisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Technology innovator specializing in digital solutions for waste management and environmental monitoring.',
      email: 'raj@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Nurul Aisyah',
      position: 'General Manager (Strategic Marketing)',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      bio: 'Marketing leader focused on strategic planning and brand development in the environmental services sector.',
      email: 'nurul@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Hassan Ali',
      position: 'General Manager (Corporate Service)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Corporate services expert managing client relationships and service delivery excellence.',
      email: 'hassan@nasdeemventures.com',
      linkedin: '#'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Team"
        subtitle="Meet the experts behind our success"
        backgroundImage="/assets/images/team2.jpg"
        showButtons={false}
      />

      {/* Team Introduction */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our team consists of highly qualified professionals with extensive experience 
              in environmental services, waste management, and industrial solutions. Each 
              member brings unique expertise and a shared commitment to excellence and 
              environmental responsibility.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Members Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Values */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Team Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide our team and drive our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-200">We strive for the highest standards in everything we do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-200">We maintain honesty and transparency in all our dealings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-200">We work together to achieve common goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-200">We continuously seek better ways to serve our clients</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Join Our Team CTA */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented individuals who share our passion for 
            environmental responsibility and excellence. Explore career opportunities 
            with us and be part of Malaysia's leading waste management company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/career"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact HR
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

