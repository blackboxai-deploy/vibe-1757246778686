import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  ctaText = "Réserver maintenant", 
  ctaLink = "/booking",
  secondaryCtaText,
  secondaryCtaLink
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {subtitle && (
          <p className="text-amber-300 font-medium text-lg md:text-xl mb-4 tracking-wide">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100 max-w-3xl mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctaLink && (
            <Link href={ctaLink}>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-2 border-transparent hover:border-amber-300 px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
                {ctaText}
              </Button>
            </Link>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink}>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-amber-300/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-orange-300/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping hidden lg:block"></div>
    </section>
  )
}