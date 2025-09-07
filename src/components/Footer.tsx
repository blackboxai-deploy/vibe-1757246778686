import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">C</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-amber-400">Clin d'oeil SPA</h3>
                <p className="text-sm text-gray-300">Casablanca</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre havre de paix au cœur de Casablanca. Découvrez nos services de massage, hammam et spa pour une expérience de détente incomparable.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/massage" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Massage Thérapeutique
                </Link>
              </li>
              <li>
                <Link href="/massage" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Massage Relaxant
                </Link>
              </li>
              <li>
                <Link href="/hammam" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Hammam Traditionnel
                </Link>
              </li>
              <li>
                <Link href="/spa" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Soins du Visage
                </Link>
              </li>
              <li>
                <Link href="/spa" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Packages Spa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-amber-500 rounded-full flex-shrink-0"></span>
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-amber-500 rounded-full flex-shrink-0"></span>
                <span>+212 522 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-amber-500 rounded-full flex-shrink-0"></span>
                <span>contact@clindoeilspa.ma</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Horaires</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Lun - Ven</span>
                <span>9h00 - 20h00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>9h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>10h00 - 17h00</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-amber-400 mb-2">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a href="https://wa.me/212522123456" target="_blank" rel="noopener noreferrer" 
                   className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white text-xs font-bold">W</span>
                </a>
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-white text-xs font-bold">F</span>
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="text-white text-xs font-bold">I</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Clin d'oeil SPA Casablanca. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Mentions Légales
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}