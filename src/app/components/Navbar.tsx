'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Learning Journey', href: '/learning-journey' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
  ];

  const logoPath = '/assets/images/calmind.png';

  return (
    <div className={`
      fixed w-full top-0 z-[60] navbar-container transition-all duration-300
      ${isScrolled ? 'lg:p-5 lg:px-8' : 'p-0'}
    `}>
      <nav className={`
        w-full navbar-main transition-all duration-300
        ${isScrolled 
          ? 'lg:rounded-full lg:shadow-smooth lg:max-w-[90%] lg:mx-auto lg:px-4 lg:bg-[#FBFBFB]' 
          : 'lg:px-8 lg:bg-[#FBFBFB]'
        }
        bg-transparent
      `}>
        <div className="w-full">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo - Hidden on Mobile */}
            <div className="flex-none transition-transform duration-300 hidden lg:block">
              <Link href="/">
                <Image
                  src={logoPath}
                  alt="Calmind Logo"
                  width={isScrolled ? 100 : 120}
                  height={isScrolled ? 33 : 40}
                  className="object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      text-gray-800 hover:text-gray-600 nav-link relative transition-all duration-300 whitespace-nowrap
                      ${isScrolled ? 'text-sm px-2 xl:px-3' : 'text-base px-3 xl:px-4'}
                      ${pathname === item.href ? 'text-[#98C7CC] font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#98C7CC]' : ''}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button dan Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <button className={`
                  bg-[#C3B1E1] text-[#FBFBFB] font-bold rounded-full hover:opacity-90 transition-all duration-300 whitespace-nowrap
                  ${isScrolled 
                    ? 'text-sm px-4 py-2 xl:px-5 xl:py-2.5' 
                    : 'text-base px-5 py-2.5 xl:px-6 xl:py-3'
                  }
                `}>
                  Coba AI Voice Mood
                </button>
              </div>

              {/* Hamburger Menu Button - Centered on Mobile */}
              <button
                className="lg:hidden fixed right-4 p-2 rounded-lg z-[70] hover:bg-gray-100/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                  <span className={`absolute w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            lg:hidden fixed top-0 right-0 w-[80%] h-screen bg-white shadow-xl
            transition-all duration-500 ease-in-out z-[65]
            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src={'/calmind.png'}
                alt="Calmind Logo"
                width={100}
                height={33}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300
                  transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                  ${pathname === item.href 
                    ? 'text-[#98C7CC] bg-[#98C7CC]/10 font-semibold' 
                    : 'text-gray-800 hover:text-gray-600 hover:bg-gray-50'
                  }
                `}
                style={{ transitionDelay: `${150 + (index * 50)}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="w-full bg-[#C3B1E1] text-[#FBFBFB] text-base font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 mt-4 transform"
              style={{ transitionDelay: '350ms' }}
            >
              Coba AI Voice Mood
            </button>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[62] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </div>
  );
}