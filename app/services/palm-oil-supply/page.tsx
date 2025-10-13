import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Leaf, Shield, Truck, Award } from 'lucide-react'

export default function PalmOilSupplyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Palm Oil Supply"
        subtitle="Reliable palm oil supply chain management with quality assurance"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=1920&h=1080&fit=crop"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Service Overview */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Premium Palm Oil Supply
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We provide reliable palm oil supply chain management with quality assurance 
                and timely delivery. Our MPOB-licensed operations ensure compliance with 
                Malaysian palm oil regulations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From sourcing to delivery, we maintain the highest standards of quality 
                and sustainability in our palm oil supply services.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold text-primary">MPOB Licensed</div>
                  <div className="text-muted-foreground">Fully certified operations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-10aa08e78837?w=600&h=400&fit=crop"
                alt="Palm Oil Supply"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Coming Soon */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <Leaf className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are currently developing comprehensive information about our palm oil supply 
              services. Please contact us directly for detailed information about our offerings.
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
        </div>
      </SectionWrapper>
    </div>
  )
}

