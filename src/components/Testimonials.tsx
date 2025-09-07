"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: "Fatima Zahra",
    location: "Casablanca",
    rating: 5,
    text: "Une expérience exceptionnelle ! Le hammam traditionnel était exactement ce dont j'avais besoin pour me détendre. L'équipe est très professionnelle et accueillante.",
    service: "Hammam Traditionnel"
  },
  {
    name: "Mohammed Alami",
    location: "Rabat",
    rating: 5,
    text: "Les massages thérapeutiques de Clin d'oeil SPA sont remarquables. Après plusieurs séances, mes douleurs de dos ont considérablement diminué.",
    service: "Massage Thérapeutique"
  },
  {
    name: "Aicha Benali",
    location: "Casablanca",
    rating: 5,
    text: "Le spa package complet était parfait pour célébrer mon anniversaire. Ambiance relaxante, soins de qualité, je recommande vivement !",
    service: "Package Spa Complet"
  },
  {
    name: "Youssef Cherkaoui",
    location: "Mohammedia",
    rating: 5,
    text: "Service impeccable et cadre magnifique. Le personnel est à l'écoute et très professionnel. C'est devenu mon spa de référence !",
    service: "Soins du Visage"
  },
  {
    name: "Laila Bennani",
    location: "Casablanca",
    rating: 5,
    text: "Le massage aux huiles essentielles était divin. Je me suis sentie complètement détendue et ressourcée. Une véritable bulle de bien-être.",
    service: "Massage Relaxant"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
            Témoignages de nos clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience chez Clin d'oeil SPA
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 min-h-[300px]">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-amber-400 rounded-full mx-1"></div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-playfair font-semibold text-amber-600">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-amber-600 font-medium">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors"
          >
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors"
          >
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}