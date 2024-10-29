'use client'
import Image from "next/image";

export default function FeatureSection() {
 return (
   <section className="h-screen bg-[#FBFBFB] relative overflow-hidden">
     {/* Background Hero */}
     <div className="absolute inset-0 w-full h-full">
       <Image
         src="/bg-hero.png"
         alt="Background hero"
         fill
         className="object-cover"
         priority
       />
     </div>

     {/* Main Content */}
     <div className="max-w-full h-full pl-40 relative z-10">
       <div className="flex items-center h-full relative">
         {/* Hero Content */}
         <div className="w-full pt-20">
           <h1 className="font-['Open_Sans'] font-bold text-[96px] text-[#2F2F2F] leading-tight">
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
           <p className="text-[#2F2F2F] text-xl mt-8 mb-8 max-w-3xl font-semibold">
             Biarkan Calmind memahami emosimu dan memberi rekomendasi tepat
             <br />
             untuk suasana hati lebih baik. Jelajahi Learning Journey,
             <br />
             dapatkan dukungan konselor, dan temukan kekuatan bersama komunitas positif.
           </p>

           {/* Buttons */}
           <div className="flex gap-4">
             <button className="bg-[#98C7CC] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
               Unduh Aplikasi Calmind
             </button>
             <button className="bg-[#C3B1E1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
               Coba AI Voice Mood
             </button>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
}