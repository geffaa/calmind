'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const DownloadSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Store the current value in a variable to use in cleanup
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const elements = entry.target.querySelectorAll(
            '.animate-content, .animate-title, .animate-description, .animate-button, .animate-phone'
          );
          
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('in-view');
              entry.target.classList.remove('out-view');
              elements.forEach(el => {
                el.classList.add('in-view');
                el.classList.remove('out-view');
              });
            });
          } else {
            // Check if scrolling up or down
            if (entry.boundingClientRect.top > 0) {
              requestAnimationFrame(() => {
                entry.target.classList.add('out-view');
                entry.target.classList.remove('in-view');
                elements.forEach(el => {
                  el.classList.add('out-view');
                  el.classList.remove('in-view');
                });
              });
            }
          }
        });
      },
      {
        threshold: [0.1, 0.5], // Added multiple thresholds for smoother transitions
        rootMargin: '-5% 0px' // Adjusted rootMargin for better trigger timing
      }
    );
  
    if (currentSection) {
      observer.observe(currentSection);
    }
  
    // Cleanup function using the stored reference
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect(); // Added full cleanup
    };
  }, []); // Empty dependency array since we're using ref

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-1 bg-[#98C7CC]/30 overflow-hidden section-animate flex flex-col"
    >
  {/* Top Background Fill */}
  <div className="absolute inset-0 w-full h-full bg-[#FBFBFB]" />
  
  {/* Background Image Container */}
  <div className="relative w-full flex-1 flex items-center">
    {/* Background Image */}
    <Image
      src="/bg-download.png"
      alt="Background Download"
      fill
      className="object-cover"
      priority
    />

    {/* Mobile Background Silhouette */}
    <div className="lg:hidden absolute inset-0 w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src="/siluet-mockup.png"
          alt="Mockup Silhouette"
          fill
          className="object-contain object-right-center opacity-25 scale-150 translate-x-40 sm:translate-x-72"
        />
      </div>
    </div>

    {/* Content */}
    <div className="relative mx-auto min-h-[600px] lg:min-h-[700px] flex items-center w-full">
      {/* Left Content */}
      <div className="w-full lg:w-[45%] xl:w-1/2 py-16 px-4 sm:px-8 md:px-12 lg:pl-16 lg:pr-0">
          <div className="space-y-4 animate-content relative z-10">
          <h1 className="animate-title text-left md:text-left text-[40px] md:text-[45px] lg:text-[60px] xl:text-[48px] 2xl:text-[64px] font-bold text-[#FBFBFB] leading-[1.15] sm:max-w-[540px] lg:max-w-none">
            Siap untuk hidup lebih
            tenang, bahagia, dan {""}
            <br className="hidden sm:block" />
            percaya diri?
            </h1>
            
            <p className="animate-description text-base text-justify sm:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] text-[#FBFBFB] font-semibold leading-[1.7] sm:max-w-[540px] lg:max-w-none">
            Saatnya jaga mentalmu dengan{" "}
            <span>Muarasuara</span>. {""}
            <br className="hidden sm:block" />
            Unduh Sekarang & Mulai Perubahanmu!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a 
                href="/download"
                className="animate-button flex items-center justify-center gap-2 bg-[#FBFBFB] hover:bg-white/90 text-[#2F2F2F] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                <Image
                src="/playstore.png"
                alt="Play Store"
                width={20}
                height={20}
                className="object-contain"
                />
                <span className="font-semibold text-sm">Play Store</span>
            </a>

            <a 
                href="/download"
                className="animate-button flex items-center justify-center gap-2 bg-[#FBFBFB] hover:bg-white/90 text-[#2F2F2F] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                <Image
                src="/appstore.png"
                alt="App Store"
                width={20}
                height={20}
                className="object-contain"
                />
                <span className="font-semibold text-sm">App Store</span>
            </a>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockups (Desktop Only) */}
        <div className="hidden lg:block absolute right-0 top-12 -translate-y-1/2 w-[700px] xl:w-[800px] scale-[0.7] lg:scale-[0.65] md:w-[60%] lg:h-1/2 xl:h-1/2 xl:scale-70 2xl:scale-90 2xl:h-auto origin-center">
          <div className="relative h-[700px] w-full">
            <div className="animate-phone absolute left-[-40px] top-[370px] -translate-y-1/2 w-[280px] shadow-xl rounded-[40px]">
              <Image
                src="/screen1.png"
                alt="App Screen 1"
                width={320}
                height={650}
                className="object-contain rounded-[40px]"
              />
            </div>

            <div className="animate-phone absolute left-[200px] top-1/2 -translate-y-1/2 w-[300px] z-20 shadow-xl rounded-[40px]">
              <Image
                src="/screen2.png"
                alt="App Screen 2"
                width={320}
                height={650}
                className="object-contain rounded-[40px]"
              />
            </div>

            <div className="animate-phone absolute left-[440px] top-[370px] -translate-y-1/2 w-[280px] shadow-xl rounded-[40px]">
              <Image
                src="/screen3.png"
                alt="App Screen 3"
                width={320}
                height={650}
                className="object-contain rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DownloadSection;