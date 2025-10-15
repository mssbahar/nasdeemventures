import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: 'Nur Farah Azlin',
      position: 'Management Advisor',
      location: 'Penang',
      image: '/assets/images/farah1.jpg',
      imageHover: '/assets/images/farah2.jpg',
      bio: 'I provide strategic management guidance to optimize our operational processes and ensure regulatory compliance across all waste management services.',
      email: 'farah@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Nashrul Azwan',
      position: 'Marketing Advisor',
      location: 'Penang',
      image: '/assets/images/nashrul.jpg',
      imageHover: '/assets/images/nashrul.jpg',
      bio: 'I develop strategic marketing initiatives that position Nasdeem Ventures as the leading environmental services provider in Malaysia.',
      email: 'nashrul@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Haslida Abdul Ghani',
      position: 'CEO',
      location: 'Penang',
      image: '/assets/images/ida.jpg',
      imageHover: '/assets/images/ida.jpg',
      bio: 'I lead our strategic vision and drive organizational excellence across all operations, ensuring sustainable growth and environmental responsibility.',
      email: 'haslida@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Mohd Faritdzul',
      position: 'General Manager (Strategic Marketing)',
      location: 'Penang',
      image: '/assets/images/faritdzul.jpg',
      imageHover: '/assets/images/faritdzul.jpg',
      bio: 'I oversee our strategic marketing operations and develop comprehensive marketing strategies to expand our market presence and client base.',
      email: 'faritdzul@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Dr. Shazlina Abd Hamid',
      position: 'General Manager (Corporate Service)',
      location: 'Penang',
      image: '/assets/images/shazlina.jpg',
      imageHover: '/assets/images/shazlina.jpg',
      bio: 'I lead our corporate services division, ensuring operational excellence and regulatory compliance across all our waste management operations.',
      email: 'shazlina@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Syahirah Razi',
      position: 'Licensing Executive',
      location: 'Penang',
      image: '/assets/images/ira.jpg',
      imageHover: '/assets/images/ira.jpg',
      bio: 'I manage our licensing portfolio and ensure we maintain all necessary permits for sustainable waste management operations.',
      email: 'syahirah@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Abdul Alim',
      position: 'Finance Executive',
      location: 'Penang',
      image: '/assets/images/alim.jpg',
      imageHover: '/assets/images/alim.jpg',
      bio: 'I oversee our financial operations and ensure sustainable growth through strategic financial planning and resource management.',
      email: 'alim@nasdeemventures.com',
      linkedin: '#'
    },
    {
      name: 'Areena',
      position: 'HR Executive',
      location: 'Penang',
      image: '/assets/images/areena.jpg',
      imageHover: '/assets/images/areena.jpg',
      bio: 'I manage our human resources operations, ensuring we attract and retain top talent while fostering a positive workplace culture.',
      email: 'areena@nasdeemventures.com',
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

      {/* Team Introduction & Members Grid */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group">
                <div className="relative mb-6">
                  <div className="relative w-full h-80 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                      src={member.imageHover}
                      alt={`${member.name} - Hover`}
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute inset-0"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-[#FBBF24] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.position}, {member.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="pt-2">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-sm text-[#FBBF24] hover:text-[#F59E0B] transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Contact HR
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

