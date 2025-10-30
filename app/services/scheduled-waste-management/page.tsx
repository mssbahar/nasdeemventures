import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Truck, FileText, Wrench, Trash2, Shield, FlaskConical } from 'lucide-react'

export default function ScheduledWasteManagementPage() {
  const wasteCategories = [
    {
      code: 'SW110',
      category: 'E-Waste',
      description: 'Waste from electrical and electronic assemblies containing components such as accumulators, mercury-switches, glass from cathode-ray tubes and other activated glass polychlorinated biphenyl-capacitors, or contaminated with cadmium, mercury, lead, nickel, chromium, copper, lithium, silver, manganese or polychlorinated biphenyl',
      industryType: 'Electronics',
      status: 'New',
      color: 'blue'
    },
    {
      code: 'SW204',
      category: 'Heavy Metal Sludges',
      description: 'Sludges containing one or several metals including chromium, copper, nickel, zinc, lead, cadmium, aluminium, tin, vanadium and beryllium',
      industryType: 'Manufacturing',
      status: 'New',
      color: 'orange'
    },
    {
      code: 'SW305',
      category: 'Spent Lubricating Oil',
      description: 'Spent lubricating oil from various industrial and automotive applications',
      industryType: 'Automotive',
      status: 'Active',
      color: 'blue'
    },
    {
      code: 'SW306',
      category: 'Spent Hydraulic Oil',
      description: 'Spent hydraulic oil from hydraulic systems and equipment',
      industryType: 'Industrial',
      status: 'Active',
      color: 'orange'
    },
    {
      code: 'SW307',
      category: 'Spent Mineral Oil-Water Emulsion',
      description: 'Spent mineral oil-water emulsion from industrial processes',
      industryType: 'Petroleum',
      status: 'Active',
      color: 'red'
    },
    {
      code: 'SW308',
      category: 'Oil Tanker Sludges',
      description: 'Oil tanker sludges from marine transportation operations',
      industryType: 'Marine',
      status: 'Active',
      color: 'teal'
    },
    {
      code: 'SW309',
      category: 'Oil-Water Mixture',
      description: 'Oil-water mixture such as ballast water from tankers and vessels',
      industryType: 'Marine',
      status: 'Active',
      color: 'teal'
    },
    {
      code: 'SW310',
      category: 'Mineral Oil Storage Tank Sludge',
      description: 'Sludge from mineral oil storage tank maintenance and operations',
      industryType: 'Petroleum',
      status: 'New',
      color: 'red'
    },
    {
      code: 'SW311',
      category: 'Waste Oil or Oily Sludge',
      description: 'Waste oil or oily sludge from various industrial processes',
      industryType: 'Industrial',
      status: 'New',
      color: 'orange'
    },
    {
      code: 'SW312',
      category: 'Automotive Workshop Oily Residue',
      description: 'Oily residue from automotive workshop, service station oil or grease interceptor',
      industryType: 'Automotive',
      status: 'New',
      color: 'blue'
    },
    {
      code: 'SW313',
      category: 'Oil Contaminated Earth',
      description: 'Oil contaminated earth from re-refining of used lubricating oil',
      industryType: 'Petroleum',
      status: 'New',
      color: 'red'
    },
    {
      code: 'SW314',
      category: 'Oil Refinery Plant Sludge',
      description: 'Oil or sludge from oil refinery plant maintenance operation',
      industryType: 'Petroleum',
      status: 'New',
      color: 'red'
    },
    {
      code: 'SW322',
      category: 'Non-Halogenated Organic Solvents',
      description: 'Waste of non-halogenated organic solvents from industrial processes',
      industryType: 'Chemical',
      status: 'New',
      color: 'purple'
    },
    {
      code: 'SW323',
      category: 'Halogenated Organic Solvents',
      description: 'Waste of halogenated organic solvents from industrial processes',
      industryType: 'Chemical',
      status: 'New',
      color: 'purple'
    },
    {
      code: 'SW324',
      category: 'Distillation Residues',
      description: 'Waste of halogenated or unhalogenated non-aqueous distillation residues arising from organic solvents recovery process',
      industryType: 'Chemical',
      status: 'New',
      color: 'purple'
    },
    {
      code: 'SW327',
      category: 'Thermal Fluids Waste',
      description: 'Waste of thermal fluids (heat transfer) such as ethylene glycol',
      industryType: 'Industrial',
      status: 'New',
      color: 'orange'
    },
    {
      code: 'SW409',
      category: 'Contaminated Containers',
      description: 'Disposed containers, bags or equipment contaminated with chemicals, pesticides, mineral oil or scheduled wastes',
      industryType: 'General',
      status: 'Active',
      color: 'gray'
    },
    {
      code: 'SW410',
      category: 'Contaminated Materials',
      description: 'Rags, plastics, papers or filters contaminated with scheduled wastes',
      industryType: 'General',
      status: 'New',
      color: 'gray'
    },
    {
      code: 'SW422',
      category: 'Mixed Waste',
      description: 'A mixture of scheduled and non-scheduled wastes',
      industryType: 'General',
      status: 'New',
      color: 'gray'
    }
  ]

  const whatWeDo = [
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: 'Consultation & Lab Sampling',
      description: 'We provide expert consultation on waste management strategies with comprehensive lab sampling to accurately identify and classify your scheduled waste codes.',
      details: [
        'On-site waste audit and assessment',
        'Lab sampling and analysis for SW code identification',
        'Regulatory compliance review and recommendations',
        'Custom waste management plans based on lab results',
        'Training and education programs for your team'
      ],
      highlight: 'Our in-house laboratory conducts detailed sampling and analysis to ensure accurate SW code classification, eliminating guesswork and ensuring proper waste categorization.'
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Documentation & DOE Compliance',
      description: 'Complete documentation and management of all waste-related paperwork, ensuring full compliance with DOE regulations and requirements.',
      details: [
        'Waste manifest preparation and submission',
        'DOE regulatory reporting and documentation',
        'Compliance documentation management',
        'Record keeping and archiving',
        'DOE audit preparation and support'
      ],
      highlight: 'We handle all DOE documentation requirements, ensuring your operations remain fully compliant and protected from regulatory violations.'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'On-Site Waste Handling',
      description: 'Professional on-site waste handling services with coordinated support from our marketing and operations teams for seamless waste reception.',
      details: [
        'Coordinated waste collection by marketing and operations teams',
        'Safe waste reception and handling at your site',
        'Proper segregation and temporary storage',
        'Safety protocol implementation',
        'Real-time communication and updates'
      ],
      highlight: 'Our marketing and operations teams work together to ensure smooth waste reception at your site, providing professional coordination and support throughout the process.'
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Own Transportation Fleet',
      description: 'Fast and efficient transportation using our own specialized tanker fleet, ensuring quick and reliable waste collection and delivery.',
      details: [
        'Own fleet of specialized tankers and transport vehicles',
        'Licensed and certified waste transporters',
        'Fast response and collection times',
        'Real-time tracking and monitoring',
        'Comprehensive insurance coverage'
      ],
      highlight: 'With our own transportation fleet including specialized tankers, we can provide faster, more reliable waste collection and transportation services.'
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'DOE-Compliant Treatment & Disposal',
      description: 'Environmentally sound treatment and disposal following strict DOE guidelines, ensuring your complete protection from regulatory issues.',
      details: [
        'Treatment at licensed DOE-approved facilities',
        'Strict adherence to DOE disposal guidelines',
        'Environmentally sound treatment methods',
        'Complete regulatory compliance documentation',
        'Protection from legal and regulatory issues'
      ],
      highlight: 'We treat and dispose of waste following strict DOE guidelines, ensuring you never have to worry about being sued or facing regulatory violations.'
    }
  ]

  const benefits = [
    {
      image: '/assets/images/lab.png',
      title: 'Lab Sampling & SW Code Identification',
      description: 'Our in-house laboratory ensures accurate waste classification, eliminating guesswork and ensuring proper categorization',
      color: 'blue'
    },
    {
      image: '/assets/images/document.jpg',
      title: 'Complete DOE Documentation',
      description: 'We handle all DOE documentation requirements, ensuring you never face regulatory violations or legal issues',
      color: 'green'
    },
    {
      image: '/assets/images/team.jpg',
      title: 'Coordinated Team Support',
      description: 'Our marketing and operations teams work together to provide seamless waste reception and handling at your site',
      color: 'purple'
    },
    {
      image: '/assets/images/transportation.png',
      title: 'Own Transportation Fleet',
      description: 'With our specialized tanker fleet, we provide faster, more reliable waste collection and transportation services',
      color: 'orange'
    },
    {
      image: '/assets/images/disposal.jpg',
      title: 'DOE-Compliant Disposal',
      description: 'Strict adherence to DOE guidelines ensures complete protection from regulatory violations and legal consequences',
      color: 'red'
    },
    {
      image: '/assets/images/service.jpg',
      title: '24/7 Emergency Service',
      description: 'Round-the-clock support and emergency waste management services when you need them most',
      color: 'yellow'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Scheduled Waste Management"
        subtitle="Comprehensive waste management solutions with full DOE compliance"
        backgroundImage="/assets/images/schedule-waste.png"
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
              <p className="text-lg text-muted-foreground mb-6 text-justify">
                We provide comprehensive scheduled waste management services for industrial 
                and commercial clients across Malaysia. Our DOE-licensed operations ensure 
                full compliance with environmental regulations while delivering cost-effective 
                solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-justify">
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
                src="/assets/images/schedule-waste2.png"
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
      <SectionWrapper id="categories" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/nasdeem.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Scheduled Waste Categories
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We handle 19 categories of scheduled wastes as defined by the Department of Environment (DOE)
            </p>
          </div>
          
          {/* Sophisticated Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-white font-bold text-sm uppercase tracking-wider">
                <div className="col-span-2">Code</div>
                <div className="col-span-3">Waste Category</div>
                <div className="col-span-4">Description</div>
                <div className="col-span-2">Industry Type</div>
                <div className="col-span-1">Status</div>
              </div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {wasteCategories.map((waste, index) => (
                <div key={waste.code} className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Code */}
                    <div className="col-span-2">
                      <span className="font-bold text-primary text-lg">{waste.code}</span>
                    </div>
                    
                    {/* Category */}
                    <div className="col-span-3">
                      <span className="font-semibold text-gray-900">{waste.category}</span>
                    </div>
                    
                    {/* Description */}
                    <div className="col-span-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{waste.description}</p>
                    </div>
                    
                    {/* Industry Type */}
                    <div className="col-span-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        waste.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        waste.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                        waste.color === 'green' ? 'bg-green-100 text-green-800' :
                        waste.color === 'red' ? 'bg-red-100 text-red-800' :
                        waste.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                        waste.color === 'gray' ? 'bg-gray-100 text-gray-800' :
                        waste.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {waste.industryType}
                      </span>
                    </div>
                    
                    {/* Status */}
                    <div className="col-span-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                        waste.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-black'
                      }`}>
                        {waste.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Summary Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-sm text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">19</div>
              <div className="text-white/80">Total Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-sm text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-white/80">Industry Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-sm text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">DOE Compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-sm text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Service Support</div>
            </div>
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
                  
                  {/* Highlight Box */}
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent p-4 rounded-r-lg mb-6">
                    <p className="text-primary font-semibold text-sm leading-relaxed">
                      <span className="text-accent font-bold">Key Advantage :</span> {service.highlight}
                    </p>
                  </div>
                  
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
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={
                        index === 0 ? '/assets/images/lab.png' :
                        index === 1 ? '/assets/images/document.jpg' :
                        index === 2 ? '/assets/images/schedule-waste2.png' :
                        index === 3 ? '/assets/images/transportation.png' :
                        '/assets/images/disposal.jpg'
                      }
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/nasdeem.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Waste Management Services
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We combine regulatory expertise with operational excellence to deliver superior waste management solutions
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-accent/20">
                  {/* Image */}
                  <div className="relative w-full h-48 rounded-2xl mb-6 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 border-2 rounded-2xl ${
                      benefit.color === 'blue' ? 'border-blue-500' :
                      benefit.color === 'green' ? 'border-green-500' :
                      benefit.color === 'purple' ? 'border-purple-500' :
                      benefit.color === 'orange' ? 'border-orange-500' :
                      benefit.color === 'red' ? 'border-red-500' :
                      'border-yellow-500'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`mt-6 w-12 h-1 rounded-full ${
                    benefit.color === 'blue' ? 'bg-blue-500' :
                    benefit.color === 'green' ? 'bg-green-500' :
                    benefit.color === 'purple' ? 'bg-purple-500' :
                    benefit.color === 'orange' ? 'bg-orange-500' :
                    benefit.color === 'red' ? 'bg-red-500' :
                    'bg-yellow-500'
                  } group-hover:w-16 transition-all duration-300`}></div>
                </div>
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
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              Contact Us
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

