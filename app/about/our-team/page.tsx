'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { Linkedin, Mail, MapPin, Briefcase, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OurTeamPage() {

  // All team members organized by groups
  const teamGroups = [
    {
      title: 'Management',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-black to-gray-800',
      bgColor: 'bg-black',
      members: [
        {
          name: 'Ts. Nurfarah Azlin Binti Mohd Nasir',
          position: 'Management Advisor',
          location: 'Penang',
          image: '/assets/images/farah.jpg',
          bio: 'Strategic management guidance to optimize operational processes.',
          email: 'farah@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Muhammad Nashrul Azwan Bin Mohd Nasir',
          position: 'Marketing Advisor',
          location: 'Penang',
          image: '/assets/images/nashrul.jpg',
          bio: 'Developing strategic marketing initiatives for market leadership.',
          email: 'nashrul@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Haslida Binti Abdul Ghani',
          position: 'CEO',
          location: 'Penang',
          image: '/assets/images/ida.jpg',
          bio: 'Leading strategic vision and driving organizational excellence.',
          email: 'haslida@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Dr. Shazlina Binti Abd Hamid',
          position: 'GM - Corporate Service',
          location: 'Penang',
          image: '/assets/images/shazlina.jpeg',
          bio: 'Leading corporate services division with operational excellence.',
          email: 'shazlina@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Mohd Faritdzul Bin Mohd Nassim',
          position: 'Strategic Marketing',
          location: 'Penang',
          image: '/assets/images/faritdzul.jpg',
          bio: 'Overseeing strategic marketing operations and expansion.',
          email: 'faritdzul@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Kartini Binti Mohd Noor',
          position: 'HR & Admin',
          location: 'Penang',
          image: '/assets/images/kartini.jpeg',
          bio: 'Managing human resources and administrative operations.',
          email: 'kartini@nasdeemventures.com',
          linkedin: '#'
        }
      ]
    },
    {
      title: 'Executive',
      icon: <Users className="w-6 h-6" />,
      color: 'from-black to-gray-800',
      bgColor: 'bg-black',
      members: [
        {
          name: 'Nur Syahirah Binti Mohd Razi',
          position: 'Licensing',
          location: 'Penang',
          image: '/assets/images/ira.jpg',
          bio: 'Managing licensing portfolio and regulatory compliance.',
          email: 'syahirah@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Abdul Alim Bin Abd Hamid',
          position: 'Finance',
          location: 'Penang',
          image: '/assets/images/alim.jpg',
          bio: 'Overseeing financial operations and strategic planning.',
          email: 'alim@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Nur Areena Binti Mohd Saad',
          position: 'HR',
          location: 'Penang',
          image: '/assets/images/areena.jpg',
          bio: 'Supporting administrative operations across all departments.',
          email: 'areena@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Rohana Binti Rodzali',
          position: 'Operation',
          location: 'Penang',
          image: '/assets/images/ana.jpg',
          bio: 'Managing daily operations and service delivery.',
          email: 'rohana@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Mohd Adib Zakuan Bin Osman',
          position: 'Marketing Manager - Northern',
          location: 'Northern Malaysia',
          image: '/assets/images/adib.jpg',
          bio: 'Leading marketing operations in Northern Malaysia.',
          email: 'adib@nasdeemventures.com',
          linkedin: '#'
        },
        {
          name: 'Muhamad Suhail Bin Mazlan',
          position: 'Marketing Manager - Central',
          location: 'Central Malaysia',
          image: '/assets/images/mm-central.jpg',
          bio: 'Leading marketing operations in Central Malaysia.',
          email: 'mm.central@nasdeemventures.com',
          linkedin: '#'
        }
      ]
    }
  ]

  // Team card component
  const TeamCard = ({ member, delay = 0 }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group h-full"
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#FBBF24] h-full flex flex-col">
          {/* Image */}
          <div className="relative w-full h-96 overflow-hidden bg-gray-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Content */}
          <div className="p-4 flex flex-col">
            <h3 className="text-base font-bold text-black mb-1 group-hover:text-[#FBBF24] transition-colors">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-[#FBBF24] mb-2">
              {member.position}
            </p>
            {member.location && (
              <div className="flex items-center text-xs text-gray-600 mb-2">
                <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                <span>{member.location}</span>
              </div>
            )}
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              {member.bio}
            </p>
            
            {/* Contact Icons */}
            <div className="flex items-center gap-3">
              <a 
                href={member.linkedin} 
                className="flex items-center justify-center w-9 h-9 bg-[#FBBF24] rounded-full hover:bg-[#F59E0B] transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Our Team"
        subtitle="Meet the professionals driving our success"
        backgroundImage="/assets/images/team2.jpg"
        showButtons={false}
      />

      {/* Main Content - Centralized and Merged */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our team consists of highly qualified professionals with extensive experience 
              in environmental services, waste management, and industrial solutions. Each 
              member brings unique expertise and a shared commitment to excellence.
            </p>
          </motion.div>

          {/* All Team Groups - Merged in One Section */}
          <div className="space-y-16">
            {teamGroups.map((group, groupIndex) => (
              <div key={`${group.title}-${groupIndex}`}>
                {/* Group Header */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-10"
                >
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${group.color} text-white px-8 py-4 rounded-full shadow-lg`}>
                    {group.icon}
                    <div className="text-left">
                      <h2 className="text-2xl font-bold">{group.title}</h2>
                    </div>
                  </div>
                </motion.div>
                
                {/* Team Cards Grid */}
                <div className={`grid gap-6 ${
                  group.members.length === 6 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : group.members.length === 10
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                    : group.members.length === 5 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                    : group.members.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center lg:place-items-stretch'
                    : group.members.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {group.members.map((member, index) => (
                    <TeamCard key={member.email} member={member} delay={index * 0.1} />
                  ))}
                </div>

                {/* Divider line between groups (except last) */}
                {groupIndex < teamGroups.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                  />
                )}
              </div>
            ))}
          </div>

          

        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented individuals who share our passion for 
            environmental responsibility and excellence. Explore career opportunities with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/career"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              View Open Positions
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call : 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
