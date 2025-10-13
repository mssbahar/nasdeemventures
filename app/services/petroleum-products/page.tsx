'use client'

import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Fuel, Shield, Truck, Award, Zap, Globe, Users, BarChart3, Star, ArrowRight, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function PetroleumProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      name: 'Diesel',
      description: 'High-quality diesel fuel for industrial and commercial applications',
      icon: Fuel,
      features: ['High efficiency', 'Low emissions', 'Reliable performance']
    },
    {
      name: 'Petrol',
      description: 'Premium petrol for various industrial and commercial uses',
      icon: Zap,
      features: ['Premium grade', 'Consistent quality', 'Wide compatibility']
    },
    {
      name: 'Kerosene',
      description: 'Clean-burning kerosene for heating and industrial processes',
      icon: Globe,
      features: ['Clean burning', 'High purity', 'Versatile applications']
    },
    {
      name: 'Fuel Oil',
      description: 'Heavy fuel oil for power generation and industrial heating',
      icon: BarChart3,
      features: ['High energy content', 'Cost effective', 'Industrial grade']
    },
    {
      name: 'Lubricant Oil',
      description: 'Premium lubricating oils for machinery and equipment',
      icon: Shield,
      features: ['Superior protection', 'Extended life', 'Multi-grade options']
    }
  ]

  const trustedBrands = [
    { name: 'Shell', logo: '/assets/images/shell-logo.png' },
    { name: 'Petron', logo: '/assets/images/petron-logo.png' },
    { name: 'BH Petrol', logo: '/assets/images/bh-petrol-logo.png' },
    { name: 'Chevron', logo: '/assets/images/chevron-logo.png' }
  ]

  const fleetCapacities = [
    { capacity: '5,000L', description: 'Small deliveries' },
    { capacity: '10,000L', description: 'Medium operations' },
    { capacity: '25,000L', description: 'Large scale' },
    { capacity: '50,000L', description: 'Bulk supply' }
  ]

  const statistics = [
    { number: '1M+', label: 'Litres per shipment', icon: Truck },
    { number: '4', label: 'Trusted brands', icon: Star },
    { number: '1000L+', label: 'Minimum delivery', icon: Fuel },
    { number: 'Peninsular', label: 'Malaysia coverage', icon: Globe }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Petroleum Products"
        subtitle="Licensed wholesale supplier of premium industrial petroleum products across Peninsular Malaysia"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Our Products"
        secondaryButtonLink="#products"
      />

      {/* Credentials Section */}
      <SectionWrapper className="bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Licensed & Certified
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nasdeem Ventures Sdn Bhd is a licensed holder of <span className="font-semibold text-primary">CSA</span> and <span className="font-semibold text-primary">PDA</span>, 
              issued by the Ministry of Domestic Trade and Consumer Affairs (KPDNHEP), ensuring 
              regulatory compliance and quality assurance in all our operations.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in the wholesale supply of industrial petroleum products, 
              delivering reliable and high-quality fuel solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-accent/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveProduct(index)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Trusted Brands Section */}
      <SectionWrapper className="bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Trusted Brand Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are proud to be an authorized supplier for trusted brands, 
              delivering reliable and high-quality fuel solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedBrands.map((brand, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary">{brand.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Fleet Capabilities Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Our Fleet Capabilities
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                To ensure flexible and efficient distribution, we operate our own fleet of road tankers 
                with capacities ranging from 5,000 litres to 50,000 litres. Our logistics infrastructure 
                is capable of handling deliveries from as little as 1,000 litres up to more than 
                1 million litres per shipment.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {fleetCapacities.map((fleet, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:border-accent/20 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{fleet.capacity}</div>
                    <div className="text-muted-foreground">{fleet.description}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Truck className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold text-primary">Custom Logistics</div>
                  <div className="text-muted-foreground">Tailored to your operational needs</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Delivery Statistics</h3>
                <div className="space-y-6">
                  {statistics.map((stat, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-white/80">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper className="bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Choose Nasdeem Ventures?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For dependable, high-volume petroleum supply backed by experience and reliability, 
              choose Nasdeem Ventures as your trusted fuel partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`text-center group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Licensed & Certified</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fully licensed by KPDNHEP with CSA and PDA certifications, ensuring regulatory compliance and quality assurance.
              </p>
            </div>

            <div
              className={`text-center group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Flexible Distribution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Own fleet with capacities from 5,000L to 50,000L, handling deliveries from 1,000L to 1M+ litres per shipment.
              </p>
            </div>

            <div
              className={`text-center group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Trusted Brands</h3>
              <p className="text-muted-foreground leading-relaxed">
                Authorized supplier for Shell, Petron, BH Petrol, and Chevron, delivering premium quality fuel solutions.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for dependable, high-volume petroleum supply backed by experience and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors hover:text-yellow-500 flex items-center justify-center group"
            >
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors flex items-center justify-center group"
            >
              Call: 604-5010800
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

