'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = {
    address: '1033, Lengkok Perindustrian Bukit Minyak 2, Taman Perindustrian Bukit Minyak, 14100 Simpang Ampat, Pulau Pinang',
    phones: ['604-5010800', '604-5010801', '604-5010802'],
    emails: [
      'general@nasdeemventures.com',
      'sales@nasdeemventures.com',
      'onestopcentre@nasdeemventures.com',
      'marketing@nasdeemventures.com',
      'hr.department@nasdeemventures.com',
      'accounts@nasdeemventures.com'
    ],
    businessHours: {
      weekdays: 'Mon–Fri: 8:30 AM–5:30 PM',
      saturday: 'Sat: 8:00 AM–1:00 PM',
      sunday: 'Sun: Closed'
    }
  }

  const faqs = [
    {
      question: 'What types of waste do you handle?',
      answer: 'We handle all 19 categories of scheduled wastes as defined by the Department of Environment (DOE), including spent solvents, oils, batteries, and more.'
    },
    {
      question: 'Are you licensed by DOE?',
      answer: 'Yes, we are fully licensed by the Department of Environment (DOE) for scheduled waste management operations.'
    },
    {
      question: 'Do you provide emergency services?',
      answer: 'Yes, we offer 24/7 emergency waste management services for urgent situations.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide services throughout Malaysia, with our main operations based in Penang.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'You can contact us through our contact form, email, or phone to request a free quote for our services.'
    },
    {
      question: 'What certifications do you have?',
      answer: 'We are certified by DOE, KPDNKK, PDRM, MPOB, and CIDB for various aspects of our operations.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for all your environmental service needs"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=1920&h=1080&fit=crop"
        showButtons={false}
      />

      {/* Contact Form & Info */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="waste-management">Scheduled Waste Management</option>
                      <option value="petroleum-products">Petroleum Products</option>
                      <option value="demolitions">Demolitions Works</option>
                      <option value="palm-oil">Palm Oil Supply</option>
                      <option value="logistics">Transportations & Logistics</option>
                      <option value="general">General Inquiry</option>
                      <option value="career">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              
              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      {contactInfo.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone}`}
                          className="block text-muted-foreground hover:text-accent transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Email Addresses</h3>
                    <div className="space-y-1">
                      {contactInfo.emails.map((email, index) => (
                        <a
                          key={index}
                          href={`mailto:${email}`}
                          className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{contactInfo.businessHours.weekdays}</p>
                      <p>{contactInfo.businessHours.saturday}</p>
                      <p>{contactInfo.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-muted rounded-lg p-4">
                <h3 className="text-lg font-semibold text-primary mb-4">Our Location</h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=5.2952836,100.4494416&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nasdeem Ventures Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

