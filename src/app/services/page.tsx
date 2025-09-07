import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesPage() {
  const allServices = [
    {
      title: "Massage Suédois Relaxant",
      description: "Massage doux aux huiles essentielles pour une relaxation profonde et l'évacuation du stress quotidien.",
      image: "https://placehold.co/400x300?text=Swedish+relaxation+massage+with+essential+oils+in+peaceful+spa+room",
      price: "300 DH",
      duration: "60 minutes",
      link: "/massage",
      features: [
        "Huiles essentielles bio",
        "Techniques de relaxation",
        "Musique apaisante",
        "Ambiance tamisée"
      ]
    },
    {
      title: "Massage Deep Tissue",
      description: "Massage thérapeutique intense pour soulager les tensions musculaires profondes et les douleurs chroniques.",
      image: "https://placehold.co/400x300?text=Deep+tissue+therapeutic+massage+session+professional+spa+treatment",
      price: "400 DH",
      duration: "90 minutes",
      link: "/massage",
      features: [
        "Pression ferme ciblée",
        "Soulagement douleurs",
        "Récupération musculaire",
        "Consultation préalable"
      ],
      popular: true
    },
    {
      title: "Massage aux Pierres Chaudes",
      description: "Expérience unique combinant chaleur thérapeutique des pierres volcaniques et techniques de massage.",
      image: "https://placehold.co/400x300?text=Hot+stone+massage+therapy+with+volcanic+stones+luxury+spa+ambiance",
      price: "450 DH",
      duration: "75 minutes",
      link: "/massage",
      features: [
        "Pierres volcaniques chauffées",
        "Détente musculaire",
        "Amélioration circulation",
        "Équilibrage énergétique"
      ]
    },
    {
      title: "Hammam Royal",
      description: "L'expérience hammam la plus complète avec gommage, masque d'argile et relaxation dans notre salle vapeur de marbre.",
      image: "https://placehold.co/400x300?text=Luxury+royal+hammam+marble+steam+room+traditional+moroccan+spa",
      price: "350 DH",
      duration: "90 minutes",
      link: "/hammam",
      features: [
        "Salle vapeur en marbre",
        "Gommage savon noir premium",
        "Masque d'argile purifiante",
        "Thé à la menthe inclus"
      ],
      popular: true
    },
    {
      title: "Hammam Traditionnel",
      description: "Découvrez l'authentique tradition du hammam marocain avec gommage au savon noir et gant Kessa.",
      image: "https://placehold.co/400x300?text=Traditional+moroccan+hammam+authentic+black+soap+scrub+kessa+glove",
      price: "250 DH",
      duration: "60 minutes",
      link: "/hammam",
      features: [
        "Savon noir artisanal",
        "Gant Kessa authentique",
        "Rituels traditionnels",
        "Purification complète"
      ]
    },
    {
      title: "Soin Visage Anti-Âge",
      description: "Soin luxueux pour lutter contre les signes de l'âge avec des produits haut de gamme et techniques avancées.",
      image: "https://placehold.co/400x300?text=Anti+aging+facial+treatment+premium+skincare+products+luxury+spa",
      price: "400 DH",
      duration: "75 minutes",
      link: "/spa",
      features: [
        "Produits anti-âge premium",
        "Massage facial lifting",
        "Masques régénérants",
        "Consultation peau"
      ]
    },
    {
      title: "Soin Visage Purifiant",
      description: "Nettoyage en profondeur et purification de la peau pour un teint éclatant et une peau saine.",
      image: "https://placehold.co/400x300?text=Purifying+facial+deep+cleansing+treatment+healthy+glowing+skin",
      price: "300 DH",
      duration: "60 minutes",
      link: "/spa",
      features: [
        "Nettoyage en profondeur",
        "Extraction points noirs",
        "Masque purifiant",
        "Hydratation intense"
      ]
    },
    {
      title: "Package Spa Royal",
      description: "L'expérience spa ultime combinant hammam royal, massage et soin visage pour une journée de luxe absolu.",
      image: "https://placehold.co/400x300?text=Royal+spa+package+ultimate+luxury+wellness+day+complete+relaxation",
      price: "800 DH",
      duration: "4 heures",
      link: "/spa",
      features: [
        "Hammam royal complet",
        "Massage aux pierres chaudes",
        "Soin visage premium",
        "Déjeuner healthy inclus",
        "Accès espace détente"
      ],
      popular: true
    },
    {
      title: "Package Détente Couple",
      description: "Partagez un moment privilégié à deux avec nos soins en duo dans notre suite couple privée.",
      image: "https://placehold.co/400x300?text=Couples+spa+package+private+suite+romantic+wellness+experience",
      price: "1200 DH",
      duration: "3 heures",
      link: "/spa",
      features: [
        "Suite couple privée",
        "Massage synchronisé",
        "Champagne de bienvenue",
        "Collations romantiques",
        "Bain aux pétales de rose"
      ]
    }
  ]

  const massageServices = allServices.filter(service => service.link === '/massage')
  const hammamServices = allServices.filter(service => service.link === '/hammam')
  const spaServices = allServices.filter(service => service.link === '/spa')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Nos Services"
        subtitle="Découvrez Notre Gamme Complète"
        description="Des massages thérapeutiques aux rituels hammam traditionnels, en passant par nos soins spa personnalisés, trouvez le service parfait pour votre bien-être."
        backgroundImage="https://placehold.co/1920x1080?text=Spa+services+overview+luxury+treatment+rooms+professional+therapists"
        ctaText="Réserver un soin"
        ctaLink="/booking"
        secondaryCtaText="Nous contacter"
        secondaryCtaLink="/contact"
      />

      {/* Services Sections */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Massage Services */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
                Services de Massage
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nos massages thérapeutiques et relaxants prodigués par des professionnels certifiés
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {massageServices.map((service, index) => (
                <ServiceCard key={`massage-${index}`} {...service} />
              ))}
            </div>
          </section>

          {/* Hammam Services */}
          <section className="mb-16 py-16 bg-gradient-to-br from-amber-50 to-orange-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
                Hammam Traditionnel
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Plongez dans la tradition ancestrale du hammam marocain pour une purification complète
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {hammamServices.map((service, index) => (
                <ServiceCard key={`hammam-${index}`} {...service} />
              ))}
            </div>
          </section>

          {/* Spa Services */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
                Soins Spa & Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des soins visage personnalisés aux packages complets pour une expérience de luxe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaServices.map((service, index) => (
                <ServiceCard key={`spa-${index}`} {...service} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Besoin de conseils personnalisés ?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Notre équipe d'experts est à votre disposition pour vous orienter vers les soins les plus adaptés à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+212522123456" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Appelez-nous
            </a>
            <a href="https://wa.me/212522123456" target="_blank" rel="noopener noreferrer" 
               className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}