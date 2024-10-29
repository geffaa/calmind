'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const cards = section?.querySelectorAll('.feature-card');
          
          if (entry.isIntersecting) {
            cards?.forEach((card, index) => {
              card.classList.remove('feature-slide-up');
              (card as HTMLElement).style.opacity = '0';
              void (card as HTMLElement).offsetWidth;
              setTimeout(() => {
                card.classList.add('feature-slide-up');
              }, index * 200);
            });
          } else {
            cards?.forEach(card => {
              (card as HTMLElement).style.opacity = '0';
              card.classList.remove('feature-slide-up');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#FBFBFB] relative overflow-hidden">
      {/* Background Feature */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg-feature.png"
          alt="Background Feature"
          fill
          className="object-cover lg:object-fill transition-all duration-500"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-10 sm:py-16 lg:py-20">
          {/* Features Grid */}
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                {/* AI Voice Mood */}
                <div className="feature-card opacity-0 group bg-[#98C7CC] p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] min-h-[200px] lg:min-h-[320px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl lg:text-3xl font-bold transition-transform duration-300 group-hover:translate-x-1">AI Voice Mood</h3>
                  </div>
                  <p className="text-white text-base lg:text-xl leading-relaxed text-justify font-semibold">
                    Calmind mendeteksi dan memahami emosi melalui nada suara untuk memberikan wawasan tentang suasana hati. Kamu akan mendapat rekomendasi personal yang relevan.
                  </p>
                </div>

                {/* Konseling */}
                <div className="feature-card opacity-0 group bg-[#98C7CC] p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] min-h-[200px] lg:min-h-[260px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl lg:text-3xl font-bold transition-transform duration-300 group-hover:translate-x-1">Konseling</h3>
                  </div>
                  <p className="text-white text-base lg:text-xl leading-relaxed text-justify font-semibold">
                    Terhubung langsung dengan konselor profesional untuk mendapatkan dukungan emosional dan solusi.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                {/* Komunitas */}
                <div className="feature-card opacity-0 group bg-[#98C7CC] p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] min-h-[200px] lg:min-h-[220px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl lg:text-3xl font-bold transition-transform duration-300 group-hover:translate-x-1">Komunitas</h3>
                  </div>
                  <p className="text-white text-base lg:text-xl leading-relaxed text-justify font-semibold">
                    Temukan teman perjalanan dan bangun rasa kebersamaan dalam lingkungan yang aman dan positif.
                  </p>
                </div>

                {/* Interactive Learning Journey */}
                <div className="feature-card opacity-0 group bg-[#98C7CC] p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] min-h-[200px] lg:min-h-[360px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl lg:text-3xl font-bold transition-transform duration-300 group-hover:translate-x-1">Interactive Learning Journey</h3>
                  </div>
                  <p className="text-white text-base lg:text-xl leading-relaxed text-justify font-semibold">
                    Jelajahi perjalanan pembelajaran interaktif tentang kesehatan mental melalui modul yang disesuaikan dengan kebutuhanmu. Setiap langkah dirancang untuk membantu pengembangan keterampilan manajemen emosi dan mindfulness. Pantau progresmu secara berkala dan raih pencapaian untuk tetap termotivasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}