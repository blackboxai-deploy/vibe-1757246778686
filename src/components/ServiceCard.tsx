import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price?: string
  duration?: string
  link: string
  features?: string[]
  popular?: boolean
}

export default function ServiceCard({ 
  title, 
  description, 
  image, 
  price, 
  duration, 
  link, 
  features = [],
  popular = false 
}: ServiceCardProps) {
  return (
    <Card className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm ${popular ? 'ring-2 ring-amber-500 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-xs font-semibold z-10">
          POPULAIRE
        </div>
      )}
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/400x300?text=Spa+Service+Image`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Price Badge */}
        {price && (
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {price}
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-playfair text-gray-800 group-hover:text-amber-600 transition-colors">
          {title}
        </CardTitle>
        {duration && (
          <p className="text-sm text-amber-600 font-medium">{duration}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <div className="pt-4">
          <Link href={link} className="block">
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-2 border-transparent hover:border-amber-300 transition-all duration-300">
              En savoir plus
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}