'use client'
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FBFBFB] relative overflow-hidden">
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
              <h1 className="font-['Open_Sans'] font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] text-[#2F2F2F] leading-tight transition-all duration-300">
                Suaramu, Langkah Awal
                <br />
                Menuju <span className="relative inline-block">
                  {/* Oval Layer - Lowest z-index */}
                  <div className="absolute -inset-4" style={{ zIndex: -1 }}>
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
                  {/* Text Layer - Highest z-index */}
                  <span className="relative text-[#98C7CC]" style={{ zIndex: 1 }}>Ketenangan</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-[#2F2F2F] text-base sm:text-lg md:text-xl mt-4 sm:mt-6 lg:mt-8 mb-6 lg:mb-8 w-[340px] sm:w-[500px] md:w-[650px] lg:w-[800px] font-semibold transition-all duration-300 text-justify leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]">
                Biarkan Calmind memahami emosimu dan memberi rekomendasi tepat untuk suasana hati lebih baik. Jelajahi Learning Journey, dapatkan dukungan konselor, dan temukan kekuatan bersama komunitas positif.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[90%] sm:max-w-none transition-all duration-300">
                <button className="bg-[#98C7CC] text-white px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto whitespace-nowrap">
                  Unduh Aplikasi Calmind
                </button>
                <button className="bg-[#C3B1E1] text-white px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto whitespace-nowrap">
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