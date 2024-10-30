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
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/mic-icon.png"
                        alt="AI Voice Mood Icon"
                        width={48}
                        height={48}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-white text-xl lg:text-3xl font-bold transition-transform duration-300 group-hover:translate-x-1">AI Voice Mood</h3>
                  </div>
                  <p className="text-white text-base lg:text-xl leading-relaxed text-justify font-semibold">
                    Muarasuara mendeteksi dan memahami emosi melalui nada suara untuk memberikan wawasan tentang suasana hati. Kamu akan mendapat rekomendasi personal yang relevan.
                  </p>
                </div>

                {/* Konseling */}
                <div className="feature-card opacity-0 group bg-[#98C7CC] p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] min-h-[200px] lg:min-h-[260px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/konseling-icon.png"
                        alt="Konseling Icon"
                        width={48}
                        height={48}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
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
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/community-icon.png"
                        alt="Community Icon"
                        width={48}
                        height={48}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
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
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src="/interactive-icon.png"
                        alt="Interactive Learning Icon"
                        width={48}
                        height={48}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                      />
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