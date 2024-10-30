import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { useEffect } from 'react';

interface Session {
  time: string;
  isHighlighted: boolean;
}

interface Counselor {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  experience: string;
  specialties: string[];
  sessions: Session[];
  image: string;
  verified: boolean;
}

interface CounselorCardProps {
  counselor: Counselor;
  onPrev: () => void;
  onNext: () => void;
}

const CounselorCard: React.FC<CounselorCardProps> = ({ counselor, onPrev, onNext }) => {
  const isTimeOver = (timeString: string): boolean => {
    const now = new Date();
    const [hours, minutes] = timeString.split(':').map(Number);
    const sessionTime = new Date(now);
    sessionTime.setHours(hours, minutes, 0);
    return now > sessionTime;
  };

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      onNext();
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [onNext]);

  return (
    <div className="bg-white rounded-[32px] shadow-md overflow-hidden animate-fade-in w-full lg:w-[600px]">
      <div className="flex flex-col md:flex-row h-auto md:h-[420px]">
        {/* Image container with adjusted mobile height */}
        <div className="w-full md:w-[280px] md:shrink-0">
          <div className="relative w-full h-[280px] md:h-[420px]">
            <Image
              src={counselor.image}
              alt={counselor.name}
              fill
              className="object-cover object-[center_25%]"
              priority
            />
          </div>
        </div>

        {/* Content container */}
        <div className="flex-1 min-w-0 flex flex-col relative bg-white">
          <div className="p-5 lg:p-6 flex-1 overflow-y-auto custom-scrollbar">
            {/* Name and Verification */}
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-gray-800 truncate">
                {counselor.name}
              </h3>
              {counselor.verified && (
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src="/verif.png"
                    alt="Verified"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Rating and Experience */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400 w-4 h-4" />
                <span className="text-sm text-gray-700">
                  {counselor.rating} ({counselor.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoTimeOutline className="text-gray-500 w-4 h-4" />
                <span className="text-sm text-gray-700">{counselor.experience}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex items-center gap-2 mb-5 overflow-x-auto whitespace-nowrap pb-2 specialties-container">
              {counselor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-[#EEE4FF] text-[#AA99C7] px-4 py-1.5 font-semibold rounded-full text-sm flex-shrink-0 hover:bg-[#E5DEFF] transition-all duration-300"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Available Sessions */}
            <div>
              <h4 className="font-bold text-base mb-3 text-gray-800">
                Sesi Tersedia Terdekat
              </h4>
              <div className="flex flex-wrap gap-2">
                {counselor.sessions.map((session, index) => {
                  const isPassed = isTimeOver(session.time);
                  return (
                    <span
                      key={index}
                      className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300
                        ${isPassed 
                          ? 'border-red-500 text-red-500 hover:bg-red-50' 
                          : 'border-[#90AA8B] text-[#90AA8B] hover:bg-[#F0F4EF]'
                        }`}
                    >
                      Hari ini • {session.time}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="p-5 lg:p-6 bg-white border-t border-gray-100">
            <div className="flex justify-end gap-2">
              <button
                onClick={onPrev}
                className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-[#D2D2D2] hover:bg-gray-50 transition-all duration-300"
                aria-label="Previous counselor"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className="w-5 h-5">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="#D2D2D2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-[#D2D2D2] hover:bg-gray-50 transition-all duration-300"
                aria-label="Next counselor"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#D2D2D2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorCard;