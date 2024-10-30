'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    // Initial animation classes
    const section = sectionRef.current;
    if (section) {
      section.classList.add('animate-fade-in');
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const elementsToAnimate = section?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#FBFBFB] relative overflow-hidden opacity-0">
      {/* Background Hero */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg-hero.png"
          alt="Background hero"
          fill
          className="object-cover lg:object-fill"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-full h-screen px-4 sm:px-8 md:px-16 lg:pl-40 relative z-10">
        <div className="flex lg:items-center h-full">
          {/* Content Container with 50vh positioning on mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 lg:relative lg:top-0 lg:translate-y-0 w-full">
            {/* Hero Content */}
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-full">
              <h1 className="animate-on-scroll font-['Open_Sans'] font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-[#2F2F2F] leading-tight transition-all duration-300 opacity-0">
                Suaramu, Langkah Awal
                <br />
                Menuju <span className="relative inline-block">
                  {/* Oval Layer */}
                  <div className="absolute -inset-4 animate-scale-in opacity-0 delay-400" style={{ zIndex: -1 }}>
                    <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                      <ellipse 
                        cx="50%" 
                        cy="50%" 
                        rx="48%" 
                        ry="45%" 
                        fill="none" 
                        stroke="#98C7CC" 
                        strokeWidth="3"
                        className="animate-draw"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                  {/* Text Layer */}
                  <span className="relative text-[#98C7CC] animate-scale-in opacity-0 delay-600" style={{ zIndex: 1 }}>Ketenangan</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="animate-on-scroll text-[#2F2F2F] text-base sm:text-lg md:text-xl mt-4 sm:mt-6 lg:mt-8 mb-6 lg:mb-8 w-[340px] sm:w-[500px] md:w-[650px] lg:w-[800px] font-semibold transition-all duration-300 text-justify leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] opacity-0">
                Biarkan Muarasuara memahami emosimu dan memberi rekomendasi tepat untuk suasana hati lebih baik. Jelajahi Learning Journey, dapatkan dukungan konselor, dan temukan kekuatan bersama komunitas positif.
              </p>

              {/* Buttons */}
              <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[90%] sm:max-w-none transition-all duration-300 opacity-0">
                <button className="bg-[#98C7CC] text-white px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto whitespace-nowrap">
                  Unduh Aplikasi Muarasuara
                </button>
                <button className="bg-[#C3B1E1] text-white px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto whitespace-nowrap">
                  Coba AI Voice Mood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}