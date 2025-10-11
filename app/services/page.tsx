import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Scheduled Waste Management',
      description: 'Comprehensive waste management solutions for industrial and commercial clients with full compliance to DOE regulations. We handle collection, transportation, treatment, and disposal of scheduled wastes.',
      image: '/assets/images/schedule-waste.png',
      link: '/services/scheduled-waste-management',
      features: ['DOE Licensed', '19 Waste Categories', '24/7 Service', 'Full Compliance']
    },
    {
      title: 'Petroleum Products',
      description: 'Supply and distribution of high-quality petroleum products for various industrial applications. We ensure quality assurance and timely delivery to meet your operational needs.',
      image: '/assets/images/wholesale.png',
      link: '/services/petroleum-products',
      features: ['KPDNKK Licensed', 'Quality Assured', 'Bulk Supply', 'Competitive Pricing']
    },
    {
      title: 'Demolitions Works',
      description: 'Professional demolition services with safety-first approach and environmental compliance. We handle both residential and commercial demolition projects with precision.',
      image: '/assets/images/demolition.png',
      link: '/services/demolitions-works',
      features: ['CIDB Licensed', 'Safety First', 'Environmental Care', 'Complete Cleanup']
    },
    {
      title: 'Palm Oil Supply',
      description: 'Reliable palm oil supply chain management with quality assurance and timely delivery. We work with certified suppliers to ensure the highest quality products.',
      image: '/assets/images/palmoil.jpg',
      link: '/services/palm-oil-supply',
      features: ['MPOB Licensed', 'Quality Certified', 'Sustainable Sourcing', 'Flexible Supply']
    },
    {
      title: 'Transportations & Logistics',
      description: 'Complete logistics solutions including transportation, warehousing, and supply chain management. We provide end-to-end logistics support for your business needs.',
      image: '/assets/images/transportation.png',
      link: '/services/transportations-logistics',
      features: ['Fleet Management', 'Warehousing', 'Route Optimization', 'Real-time Tracking']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We assess your specific needs and requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our experts develop a comprehensive plan tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring quality and compliance at every step.'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and reporting to ensure optimal performance and results.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive industrial solutions tailored to your needs"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=1920&h=1080&fit=crop"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Services Overview */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of industrial solutions designed to meet 
              your specific needs while ensuring full compliance with environmental regulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span key={feature} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-accent hover:text-secondary font-medium transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Process */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-accent transform translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Our Services */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine industry expertise with cutting-edge technology to deliver 
                exceptional results for our clients. Our commitment to quality, compliance, 
                and customer satisfaction sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Fully Licensed & Certified</h3>
                    <p className="text-muted-foreground">All our services are fully licensed by relevant regulatory bodies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Highly qualified professionals with extensive industry experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock customer support and emergency services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Environmental Compliance</h3>
                    <p className="text-muted-foreground">Full adherence to Malaysian environmental regulations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=600&h=400&fit=crop"
                alt="Our Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today to discuss your requirements and get a customized quote for our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:604-5010800"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Call Now: 604-5010800
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

