'use client'
import { useEffect, useRef } from 'react';
import Image from "next/image";

interface Article {
  title: string;
  image: string;
  tags: string[];
  date: string;
}

const ArticleSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Add a small delay before removing classes to ensure smooth exit
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('in-view');
              entry.target.classList.remove('out-view');
            });
          } else {
            requestAnimationFrame(() => {
              entry.target.classList.remove('in-view');
              entry.target.classList.add('out-view');
            });
          }
        });
      },
      {
        threshold: [0.15, 0.5, 0.85], // Multiple thresholds for smoother transitions
        rootMargin: '-10% 0px' // Reduced margin for earlier trigger
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const articles: Article[] = [
    {
      title: "Menjaga Kesehatan Mental di Era Digital: Tantangan dan Solusi",
      image: "/article1.png",
      tags: ["Kesehatan", "Lifestyle"],
      date: "27 September 2024"
    },
    {
      title: "Peran Meditasi dalam Meningkatkan Kesehatan Mental: Manfaat dan Tek",
      image: "/article2.png",
      tags: ["Kesehatan", "Lifestyle"],
      date: "27 September 2024"
    },
    {
      title: "Mengatasi Stres: Strategi Efektif untuk Kesehatan Mental yang Lebih Baik",
      image: "/article3.png",
      tags: ["Kesehatan", "Lifestyle"],
      date: "27 September 2024"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="scroll-section min-h-screen bg-[#FBFBFB] relative overflow-hidden flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative z-10 max-w-[1280px]">
        {/* Header with animation */}
        <div className="text-center mb-8 sm:mb-12 header-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#C3B1E1] underline decoration-[#C3B1E1]">Artikel</span>{" "}
            <span className="text-[#2F2F2F]">Psikologi Terbaru</span>
          </h2>
        </div>

        {/* Articles Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="card-animate bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 line-clamp-3 min-h-[4rem] sm:min-h-[4.5rem] text-justify">
                  {article.title}
                </h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#EEE4FF] text-[#AA99C7] text-xs sm:text-sm font-semibold hover:bg-[#C3B1E1] hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1.5px] bg-[#D2D2D2]"></div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-[#BEBEBE] font-semibold mt-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-4 sm:w-5 h-4 sm:h-5">
                      <Image
                        src="/calendar-icon.png"
                        alt="Calendar"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {article.date}
                  </div>
                  <button className="p-1.5 sm:p-2 hover:bg-[#F3F0FF] rounded-full transition-all duration-300">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                      <Image
                        src="/share-icon.png"
                        alt="Share"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button with animation */}
        <div className="text-center">
          <a 
            href="/articles"
            className="button-animate bg-[#C3B1E1] text-[#FBFBFB] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full mt-6 sm:mt-8 text-sm sm:text-base font-bold hover:bg-[#B39FD3] transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-[0.98] shadow-sm inline-block"
          >
            Lihat Semua
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;