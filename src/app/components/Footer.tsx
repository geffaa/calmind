'use client'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] px-4 sm:px-8 md:px-12 lg:px-24 py-6 sm:py-8">
      {/* Mobile Layout - Stack vertically */}
      <div className="sm:hidden flex flex-col items-center gap-4 text-center">
        <div className="flex justify-center">
          <Image
            src="/muarasuara.png"
            alt="Muara Suara Logo"
            width={100}
            height={33}
            className="object-contain"
          />
        </div>
        <p className="text-[#6F6C90] text-sm font-semibold">
          Copyright © 2024 Calmind | All Rights Reserved
        </p>
      </div>

      {/* Tablet and Desktop Layout */}
      <div className="hidden sm:flex w-full justify-between items-center max-w-full mx-auto">
        <div className="transition-transform duration-300 hover:scale-105">
          <Image
            src="/muarasuara.png"
            alt="Muara Suara Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>
        <p className="text-[#6F6C90] text-sm sm:text-base font-semibold whitespace-nowrap">
          Copyright © 2024 Muarasuara | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer