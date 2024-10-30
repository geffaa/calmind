'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
    {
      id: 1,
      name: "Anita Wijaya",
      image: "/anitawijaya.png",
      rating: 5,
      text: "AI Voice Mood Detection sangat akurat mendeteksi perubahan mood saya. Ditambah dengan konselor yang profesional, saya jadi lebih memahami pola emosi dan cara mengelolanya.",
      role: "Pekerja Kantoran, 28 tahun",
      position: 0
    },
    {
      id: 2,
      name: "Rama Putra",
      image: "/ramaputra.png",
      rating: 5,
      text: "Sebagai mahasiswa tingkat akhir, anxiety sering mengganggu. MuaraSuara membantu saya mengelola stress dengan baik melalui fitur mood tracking dan sesi konseling yang fleksibel.",
      role: "Mahasiswa, 22 tahun",
      position: 1
    },
    {
      id: 3,
      name: "Diana Kusuma",
      image: "/dianakusuma.png",
      rating: 5,
      text: "Fitur Sleep Stories dan Guided Meditation sangat membantu mengatasi insomnia saya. Analisis AI Voice juga membantu psikolog memahami kondisi saya lebih baik.",
      role: "Content Creator, 25 tahun",
      position: 2
    },
    {
      id: 4,
      name: "Budi Santoso",
      image: "/budisantoso.png",
      rating: 4,
      text: "Journal Mood dengan AI yang bisa menganalisis emosi dari catatan harian sangat membantu. Saya jadi lebih aware dengan kesehatan mental dan mood swings yang saya alami.",
      role: "Entrepreneur, 32 tahun",
      position: 3
    },
    {
      id: 5,
      name: "Sari Indah",
      image: "/sariindah.png",
      rating: 5,
      text: "Awalnya ragu konsultasi online, tapi MuaraSuara mengubah pandangan saya. AI Voice Analysis membantu konselor langsung memahami kondisi saya, dan sesi terapinya sangat efektif.",
      role: "Guru, 30 tahun",
      position: 4
    },
    {
      id: 6,
      name: "Rafi Ahmad",
      image: "/rafiahmad.png",
      rating: 5,
      text: "Aplikasi yang lengkap untuk mental health. Dari meditation timer, mood tracker, sampai konseling online. AI Voice-nya juga akurat mendeteksi anxiety dari suara saya.",
      role: "Developer, 27 tahun",
      position: 5
    },
    {
      id: 7,
      name: "Maya Putri",
      image: "/mayaputri.png",
      rating: 5,
      text: "Suka banget sama fitur Daily Mental Check-up yang pakai AI. Bisa deteksi early signs of depression, dan langsung dihibungin ke psikolog kalau ada tanda yang mengkhawatirkan.",
      role: "Marketing Executive, 29 tahun",
      position: 6
    },
    {
      id: 8,
      name: "Denny Pratama",
      image: "/denypratama.png",
      rating: 4,
      text: "Sebagai pekerja shift malam, sering mengalami mood swing. Fitur AI Voice Mood dan konseling 24/7 sangat membantu saya mengelola stress dan pola tidur yang tidak teratur.",
      role: "Perawat, 26 tahun",
      position: 7
    }
  ];

  const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);
  
    useEffect(() => {
      const currentRef = sectionRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);
  
    const handleNext = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    };
  
    const handlePrev = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    };
  
    return (
      <section 
        ref={sectionRef}
        className={`relative min-h-screen bg-[#FBFBFB] py-20 transition-all duration-1000 transform 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Main Container */}
        <div className={`max-w-[1400px] mx-auto px-4 transition-all duration-1000 delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold inline-flex items-center justify-center gap-2">
              Apa Kata <span className="text-[#AA99C7]  underline decoration-[#C3B1E1]">Mereka</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Dengarkan cerita perjalanan mereka bersama MuaraSuara dalam mencapai ketenangan
            </p>
          </div>
  
          {/* Testimonial Card Container */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Profile Images Carousel */}
            <div className="relative w-full flex justify-center mb-8">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#AA99C7] transition-colors duration-300 group z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
  
              {/* Profile Images */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden opacity-60">
                  <Image
                    src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                    alt="Previous"
                    fill
                    className="object-cover"
                  />
                </div>
  
                <div className="relative">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    <p className="text-sm font-medium">{testimonials[currentIndex].name}</p>
                  </div>
                </div>
  
                <div className="w-16 h-16 relative rounded-full overflow-hidden opacity-60">
                  <Image
                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                    alt="Next"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
  
              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#AA99C7] transition-colors duration-300 group z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
  
            {/* Testimonial Content */}
            <div className={`w-full max-w-2xl mx-auto text-center transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
              <p className="text-[#AA99C7] text-lg mb-4">{testimonials[currentIndex].role}</p>
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
  
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;