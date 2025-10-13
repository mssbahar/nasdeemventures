'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
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
      answer: 'We are certified by DOE, KPDN, PDRM, MPOB, and CIDB for various aspects of our operations.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for all your environmental service needs"
        backgroundImage="/assets/images/contact.png"
        showButtons={false}
      />

      {/* Email Addresses */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact Our Departments
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Reach out to the right department for faster assistance. Each email is monitored by our specialized teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* General Inquiry */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">General Inquiry</h3>
              </div>
              <a 
                href="mailto:general@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                general@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For general questions, information requests, and general business inquiries.
              </p>
            </div>

            {/* Sales */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Sales & Quotations</h3>
              </div>
              <a 
                href="mailto:sales@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                sales@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For service quotes, pricing inquiries, and new business opportunities.
              </p>
            </div>

            {/* One Stop Centre */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">One Stop Centre</h3>
              </div>
              <a 
                href="mailto:onestopcentre@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                onestopcentre@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For comprehensive service requests and integrated solutions.
              </p>
            </div>

            {/* Marketing */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Marketing & Media</h3>
              </div>
              <a 
                href="mailto:marketing@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                marketing@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For marketing partnerships, media inquiries, and promotional activities.
              </p>
            </div>

            {/* Human Resources */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Human Resources</h3>
              </div>
              <a 
                href="mailto:hr.department@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                hr.department@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For job applications, career inquiries, and HR-related matters.
              </p>
            </div>

            {/* Accounts */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Accounts & Finance</h3>
              </div>
              <a 
                href="mailto:accounts@nasdeemventures.com"
                className="text-accent hover:text-secondary font-medium mb-2 block"
              >
                accounts@nasdeemventures.com
              </a>
              <p className="text-muted-foreground text-sm">
                For billing inquiries, payment matters, and financial documentation.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

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
                    className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

