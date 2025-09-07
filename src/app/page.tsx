import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Testimonials from '@/components/Testimonials'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      title: "Massage Thérapeutique",
      description: "Soulagez vos tensions et douleurs musculaires avec nos massages thérapeutiques personnalisés, prodigués par des professionnels expérimentés.",
      image: "https://placehold.co/400x300?text=Professional+therapeutic+massage+session+in+luxury+spa+setting",
      price: "À partir de 300 DH",
      duration: "60-90 minutes",
      link: "/massage",
      features: [
        "Massage deep tissue",
        "Thérapie des points de déclenchement",
        "Aromathérapie incluse",
        "Consultation personnalisée"
      ],
      popular: true
    },
    {
      title: "Hammam Traditionnel",
      description: "Plongez dans l'authentique tradition marocaine avec notre hammam traditionnel, une expérience purifiante et relaxante unique.",
      image: "https://placehold.co/400x300?text=Traditional+moroccan+hammam+steam+room+with+marble+decor",
      price: "À partir de 250 DH",
      duration: "45-60 minutes",
      link: "/hammam",
      features: [
        "Gommage au savon noir",
        "Gant Kessa traditionnel",
        "Masque d'argile",
        "Détente en salle vapeur"
      ]
    },
    {
      title: "Soins Spa Complets",
      description: "Offrez-vous une journée de bien-être complète avec nos packages spa incluant soins du visage, massage et moment détente.",
      image: "https://placehold.co/400x300?text=Luxury+spa+treatment+room+with+candles+and+premium+products",
      price: "À partir de 500 DH",
      duration: "2-4 heures",
      link: "/spa",
      features: [
        "Soins du visage personnalisés",
        "Massage relaxant",
        "Accès espace détente",
        "Thé et collations inclus"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Clin d'oeil SPA"
        subtitle="Votre Oasis de Bien-être à Casablanca"
        description="Découvrez l'art du bien-être marocain à travers nos massages thérapeutiques, hammam traditionnel et soins spa dans un cadre luxueux et apaisant."
        backgroundImage="https://placehold.co/1920x1080?text=Luxury+spa+interior+with+warm+lighting+moroccan+design+elements+and+relaxing+ambiance"
        ctaText="Réserver maintenant"
        ctaLink="/booking"
        secondaryCtaText="Découvrir nos services"
        secondaryCtaLink="/services"
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
              Nos Services Premium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de bien-être, alliant tradition marocaine et techniques modernes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-2 border-transparent hover:border-amber-300 px-8 py-3 text-lg">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
                L'Art du Bien-être à la Marocaine
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Chez Clin d'oeil SPA, nous perpétuons la tradition ancestrale du bien-être marocain en y apportant une touche moderne et luxueuse. Notre équipe de thérapeutes expérimentés vous accompagne dans un voyage sensoriel unique.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Situé au cœur de Casablanca, notre spa vous offre un havre de paix où tradition et modernité se rencontrent pour créer une expérience inoubliable de détente et de ressourcement.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">5+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  En savoir plus sur nous
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400?text=Elegant+spa+reception+area+with+moroccan+architecture+and+modern+luxury+touches"
                alt="Intérieur du spa Clin d'oeil"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400?text=Spa+Interior";
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-15"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Prêt pour votre moment de détente ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Réservez dès maintenant votre séance de bien-être et laissez-vous dorloter par nos experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 border-2 border-transparent hover:border-white px-8 py-3 text-lg font-semibold">
                Réserver en ligne
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg font-semibold">
                Nous contacter
              </Button>
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-orange-400/30">
            <p className="text-lg mb-2">Ou appelez-nous directement :</p>
            <a href="tel:+212522123456" className="text-2xl font-bold hover:text-amber-200 transition-colors">
              +212 522 123 456
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}