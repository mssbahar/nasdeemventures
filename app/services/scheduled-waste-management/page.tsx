import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Truck, FileText, Wrench, Trash2, Shield } from 'lucide-react'

export default function ScheduledWasteManagementPage() {
  const wasteCategories = [
    'SW110 - Spent Solvents',
    'SW204 - Spent Catalysts',
    'SW305 - Spent Oils',
    'SW306 - Oil Sludge',
    'SW307 - Oil Contaminated Materials',
    'SW308 - Spent Coolants',
    'SW309 - Spent Antifreeze',
    'SW310 - Spent Brake Fluids',
    'SW311 - Spent Hydraulic Fluids',
    'SW312 - Spent Transmission Fluids',
    'SW313 - Spent Gear Oils',
    'SW314 - Spent Lubricating Oils',
    'SW322 - Spent Paint',
    'SW323 - Paint Sludge',
    'SW324 - Paint Contaminated Materials',
    'SW327 - Spent Adhesives',
    'SW409 - Spent Batteries',
    'SW410 - Battery Sludge',
    'SW422 - Spent Fluorescent Tubes'
  ]

  const whatWeDo = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Consultation',
      description: 'We provide expert consultation on waste management strategies, regulatory compliance, and best practices tailored to your specific industry needs.',
      details: [
        'Waste audit and assessment',
        'Regulatory compliance review',
        'Custom waste management plans',
        'Training and education programs'
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Documentation & Management',
      description: 'Complete documentation and management of all waste-related paperwork, ensuring full compliance with DOE regulations and requirements.',
      details: [
        'Waste manifest preparation',
        'Regulatory reporting',
        'Compliance documentation',
        'Record keeping and archiving'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Handling at Site',
      description: 'Professional on-site waste handling services with proper safety protocols and environmental protection measures.',
      details: [
        'Safe waste collection',
        'Proper segregation',
        'Temporary storage solutions',
        'Safety protocol implementation'
      ]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Transportation',
      description: 'Licensed and certified transportation of scheduled wastes using specialized vehicles and trained personnel.',
      details: [
        'Licensed waste transporters',
        'Specialized vehicles',
        'Real-time tracking',
        'Insurance coverage'
      ]
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'Treatment & Disposal',
      description: 'Environmentally sound treatment and disposal of scheduled wastes at licensed facilities, ensuring minimal environmental impact.',
      details: [
        'Licensed treatment facilities',
        'Environmentally sound methods',
        'Waste-to-energy conversion',
        'Final disposal compliance'
      ]
    }
  ]

  const benefits = [
    {
      title: 'Full DOE Compliance',
      description: 'Complete adherence to DOE regulations and requirements'
    },
    {
      title: 'Licensed Operations',
      description: 'All operations conducted under valid DOE licenses'
    },
    {
      title: 'Environmental Safety',
      description: 'Environmentally sound practices and procedures'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent cost structure'
    },
    {
      title: '24/7 Service',
      description: 'Round-the-clock support and emergency services'
    },
    {
      title: 'Expert Team',
      description: 'Highly trained and experienced professionals'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Scheduled Waste Management"
        subtitle="Comprehensive waste management solutions with full DOE compliance"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=1920&h=1080&fit=crop"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="View Categories"
        secondaryButtonLink="#categories"
      />

      {/* Service Overview */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Professional Waste Management Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We provide comprehensive scheduled waste management services for industrial 
                and commercial clients across Malaysia. Our DOE-licensed operations ensure 
                full compliance with environmental regulations while delivering cost-effective 
                solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From consultation and documentation to collection, transportation, and disposal, 
                we handle every aspect of your waste management needs with professionalism and expertise.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold text-primary">DOE Licensed</div>
                  <div className="text-muted-foreground">Fully certified operations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=600&h=400&fit=crop"
                alt="Waste Management"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Waste Categories */}
      <SectionWrapper id="categories" className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Scheduled Waste Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We handle all 19 categories of scheduled wastes as defined by the Department of Environment (DOE)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wasteCategories.map((category, index) => (
              <div key={category} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-primary font-medium">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5 Things We Do */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              5 Things We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach ensures complete waste management solutions from start to finish
            </p>
          </div>
          <div className="space-y-12">
            {whatWeDo.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=600&h=400&fit=crop&t=${index}`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Waste Management Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We combine regulatory expertise with operational excellence to deliver superior waste management solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Flow */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Waste Management Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring efficient and compliant waste management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Assessment', desc: 'Waste audit and evaluation' },
              { step: '2', title: 'Planning', desc: 'Custom management strategy' },
              { step: '3', title: 'Collection', desc: 'Safe waste collection' },
              { step: '4', title: 'Transport', desc: 'Licensed transportation' },
              { step: '5', title: 'Disposal', desc: 'Environmentally sound disposal' }
            ].map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-accent transform translate-x-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Manage Your Waste Responsibly?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a comprehensive waste management assessment and customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
            >
              Get Free Assessment
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

