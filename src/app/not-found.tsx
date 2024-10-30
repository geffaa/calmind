'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.body.style.backgroundColor = '#98C7CC'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#B0E0E6] overflow-hidden relative">
      <div className="max-w-[800px] w-full text-center space-y-8 animate-fade-in relative z-10">
        <div className="relative w-full aspect-[16/9] animate-float">
          <Image
            src="/404.png"
            alt="404 Not Found"
            fill
            className="object-contain scale-125"
            priority
          />
        </div>
        <p className="text-lg sm:text-xl text-[#B085D1] font-medium leading-relaxed">
          Sepertinya kamu tersesat di pikiran yang tak terjangkau. Jangan khawatir,
          bahkan pikiran pun kadang butuh waktu untuk{" "}
          <Link 
            href="/" 
            className="text-[#7B4CAF] font-bold hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            Kembali
          </Link>{" "}
          fokus!
        </p>
      </div>

      {/* Enhanced Bubbles with different animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large slow-moving bubbles */}
        <div className="bubble w-32 h-32 top-20 left-[10%] opacity-20 bubble-combo" />
        <div className="bubble w-24 h-24 bottom-32 right-[15%] opacity-15 bubble-rotate" />
        
        {/* Medium bubbles with different animations */}
        <div className="bubble w-16 h-16 top-[40%] left-[20%] opacity-30 bubble-sway" />
        <div className="bubble w-20 h-20 bottom-[30%] right-[25%] opacity-25" />
        <div className="bubble w-14 h-14 top-[30%] right-[40%] opacity-35 bubble-combo" />
        
        {/* Small faster bubbles */}
        <div className="bubble w-8 h-8 top-[60%] left-[40%] opacity-40 bubble-rotate" />
        <div className="bubble w-6 h-6 bottom-[40%] left-[30%] opacity-45 bubble-sway" />
        <div className="bubble w-10 h-10 top-[20%] right-[35%] opacity-35" />
        
        {/* Tiny background bubbles */}
        <div className="bubble w-4 h-4 top-[45%] left-[15%] opacity-50 bubble-combo" />
        <div className="bubble w-5 h-5 bottom-[25%] right-[45%] opacity-40 bubble-rotate" />
        <div className="bubble w-3 h-3 top-[75%] right-[10%] opacity-60 bubble-sway" />
    </div>
    </main>
  )
}