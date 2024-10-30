'use client'
import React, { useEffect } from 'react';
import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
  color: string;
  position: {
    circle: string;
    text: string;
  };
}

const WorkflowSection = () => {
  const steps: Step[] = [
    {
      number: "1",
      title: "Coba AI Voice Mood",
      description: "Ungkapkan emosimu melalui suara, dan biarkan AI menganalisis suasana hatimu.",
      color: "bg-[#9282AE]",
      position: {
        circle: "top-[50px] left-0",
        text: "2xl:top-[-80px] 2xl:left-[-130px] lg:top-[-90px] lg:left-[-100px] xl:left-[-130px] text-center"
      }
    },
    {
      number: "2",
      title: "Dapatkan Rekomendasi",
      description: "Berdasarkan hasil analisis, akses Learning Journey, sesi konseling, atau bergabung dengan komunitas.",
      color: "bg-[#BDD7B7]",
      position: {
        circle: "top-[100px] left-[400px]",
        text: "2xl:top-[-35px] 2xl:left-[280px] lg:top-[-25px] lg:left-[280px] text-center"
      }
    },
    {
      number: "3",
      title: "Mulai Interactive Learning Journey",
      description: "Ikuti modul interaktif yang dirancang untuk membantu kamu mengembangkan keterampilan emosional dan mindfulness.",
      color: "bg-[#82ADB3]",
      position: {
        circle: "top-[365px] right-[-850px]",
        text: "2xl:top-[180px] 2xl:right-[-970px] lg:top-[180px] lg:right-[-970px] text-center"
      }
    },
    {
      number: "4",
      title: "Hubungi Konselor Profesional",
      description: "Jadwalkan sesi konseling untuk mendapatkan dukungan kapan pun kamu butuh bimbingan.",
      color: "bg-[#F6C44B]",
      position: {
        circle: "top-[500px] right-[-850px]",
        text: "top-[550px] right-[-980px] text-center"
      }
    },
    {
      number: "5",
      title: "Terhubung dengan Komunitas",
      description: "Bergabung dalam komunitas untuk berbagi pengalaman dan saling memberi motivasi.",
      color: "bg-[#CA534D]",
      position: {
        circle: "top-[460px] left-[400px]",
        text: "top-[530px] left-[270px] text-center"
      }
    },
    {
      number: "6",
      title: "Pantau Progress dan Kembangkan Diri",
      description: "Lacak perkembangan emosimu dan ulangi AI Voice Mood untuk wawasan yang lebih mendalam.",
      color: "bg-[#407AD8]",
      position: {
        circle: "top-[450px] left-[-10px]",
        text: "2xl:top-[520px] 2xl:left-[-140px] lg:top-[520px] lg:left-[-90px] text-center"
      }
    }
  ];

  useEffect(() => {
    // Mobile animation setup
    const mobileObserverOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.1,
    };

    const mobileObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-0', 'translate-y-20');
        }
      });
    };

    // Desktop animation setup
    const desktopObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const desktopObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const step = entry.target as HTMLElement;
        const circle = step.querySelector('.workflow-circle') as HTMLElement;
        const text = step.querySelector('.workflow-text') as HTMLElement;

        if (entry.isIntersecting) {
          // Animate circle first
          circle.classList.remove('scale-0', 'opacity-0');
          circle.classList.add('scale-100', 'opacity-100');

          // Then animate text with a delay
          setTimeout(() => {
            text.classList.remove('-translate-y-4', 'opacity-0');
            text.classList.add('translate-y-0', 'opacity-100');
          }, 200);
        } else {
          // Reverse animations when leaving viewport
          circle.classList.add('scale-0', 'opacity-0');
          circle.classList.remove('scale-100', 'opacity-100');
          
          text.classList.add('-translate-y-4', 'opacity-0');
          text.classList.remove('translate-y-0', 'opacity-100');
        }
      });
    };

    const mobileObserver = new IntersectionObserver(mobileObserverCallback, mobileObserverOptions);
    const desktopObserver = new IntersectionObserver(desktopObserverCallback, desktopObserverOptions);
    
    // Set up mobile animations
    document.querySelectorAll('.workflow-mobile-card').forEach(card => {
      mobileObserver.observe(card);
      card.classList.add('opacity-0', 'translate-y-20', 'transition-all', 'duration-700', 'ease-out');
    });

    // Set up desktop animations
    document.querySelectorAll('.workflow-step').forEach(step => {
      desktopObserver.observe(step);
      
      // Set initial states for animation
      const circle = step.querySelector('.workflow-circle');
      const text = step.querySelector('.workflow-text');
      
      if (circle) {
        circle.classList.add('scale-0', 'opacity-0', 'transition-transform', 'duration-500', 'ease-out');
      }
      
      if (text) {
        text.classList.add('-translate-y-4', 'opacity-0', 'transition-all', 'duration-500', 'ease-out');
      }
    });

    return () => {
      mobileObserver.disconnect();
      desktopObserver.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#98C7CC] relative overflow-hidden py-16">
      <div className="container mx-auto px-4 relative z-10 max-w-[1280px] xl:max-w-6xl transition-all duration-300">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Cara</span>{" "}
            <span className="text-gray-700 underline decoration">Kerja</span>{" "}
            <span className="text-white">Muarasuara</span>
          </h2>
        </div>

        {/* Workflow Content */}
        <div className="relative mx-auto">
          {/* Mobile and Tablet View */}
          <div className="lg:hidden">
            <div className="space-y-16 py-8">
              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className="workflow-mobile-card"
                >
                  <div className="relative mx-auto max-w-sm">
                    <div 
                      className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 ${step.color} 
                        rounded-full flex items-center justify-center text-white text-xl font-bold 
                        shadow-lg z-10`}
                    >
                      {step.number}
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 pt-8 min-h-[160px]
                      shadow-lg transform transition-all duration-300 hover:bg-white/10">
                      <h3 className="text-white text-lg font-bold mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block relative h-[600px] w-full max-w-[1000px] mx-auto transform-gpu scale-100 xl:scale-100 lg:scale-[0.85] md:scale-[0.75]">
            {/* Background Line Image */}
            <div className="absolute inset-0">
              <Image
                src="/line.png"
                alt="Workflow Path"
                fill
                className="object-contain animate-fadeIn"
                priority
                sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 85vw, 75vw"
              />
            </div>

            {/* Numbered Circles and Text */}
            <div className="relative h-full">
              {steps.map((step) => (
                <div key={step.number} className="workflow-step absolute transform-gpu">
                  {/* Circle with Number */}
                  <div className={`absolute ${step.position.circle}`}>
                    <div 
                      className={`workflow-circle w-12 h-12 ${step.color} rounded-full flex items-center 
                        justify-center text-white text-xl font-bold shadow-lg transform transition-all 
                        duration-500 ease-out will-change-transform`}
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div 
                    className={`workflow-text absolute ${step.position.text} w-[280px] min-h-[120px] 
                      p-4 bg-white/5 backdrop-blur-sm rounded-lg transform transition-all duration-500 
                      ease-out will-change-transform will-change-opacity`}
                  >
                    <h3 className="text-white text-[16px] xl:text-lg font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white text-[13px] xl:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;