'use client'
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
      color: "bg-[#9B7CB9]",
      position: {
        circle: "top-[50px] left-0",
        text: "top-[40px] left-[40px]"
      }
    },
    {
      number: "2",
      title: "Dapatkan Rekomendasi",
      description: "Berdasarkan hasil analisis, akses Learning Journey, sesi konseling, atau bergabung dengan komunitas.",
      color: "bg-[#BAD0B5]",
      position: {
        circle: "top-[100px] left-[400px]",
        text: "top-[40px] left-[320px]"
      }
    },
    {
      number: "3",
      title: "Mulai Interactive Learning Journey",
      description: "Ikuti modul interaktif yang dirancang untuk membantu kamu mengembangkan keterampilan emosional dan mindfulness.",
      color: "bg-[#A8B6B9]",
      position: {
        circle: "top-[365px] right-[-850px]",
        text: "top-[40px] right-[40px]"
      }
    },
    {
      number: "4",
      title: "Hubungi Konselor Profesional",
      description: "Jadwalkan sesi konseling untuk mendapatkan dukungan kapan pun kamu butuh bimbingan.",
      color: "bg-[#F4CE7A]",
      position: {
        circle: "bottom-[-550px] right-[-850px]",
        text: "bottom-[40px] right-[40px]"
      }
    },
    {
      number: "5",
      title: "Terhubung dengan Komunitas",
      description: "Bergabung dalam komunitas untuk berbagi pengalaman dan saling memberi motivasi.",
      color: "bg-[#E57F84]",
      position: {
        circle: "bottom-[-500px] left-[400px]",
        text: "bottom-[40px] left-[320px]"
      }
    },
    {
      number: "6",
      title: "Pantau Progress dan Kembangkan Diri",
      description: "Lacak perkembangan emosimu dan ulangi AI Voice Mood untuk wawasan yang lebih mendalam.",
      color: "bg-[#4B77BE]",
      position: {
        circle: "bottom-[-500px] left-[-5px]",
        text: "bottom-[40px] left-[40px]"
      }
    }
  ];

  return (
    <section className="min-h-screen bg-[#98C7CC] relative overflow-hidden py-16">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Cara</span>{" "}
            <span className="text-gray-700 underline decoration-4">Kerja</span>{" "}
            <span className="text-white">Muarasuara</span>
          </h2>
        </div>

        {/* Workflow Content */}
        <div className="relative mx-auto">
          {/* Mobile and Tablet View */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="text-center p-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white text-sm leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block relative h-[600px] w-full max-w-[1000px] mx-auto">
            {/* Background Line Image */}
            <div className="absolute inset-0">
              <Image
                src="/line.png"
                alt="Workflow Path"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>

            {/* Numbered Circles and Text */}
            <div className="relative h-full">
              {steps.map((step) => (
                <div key={step.number} className="absolute">
                  {/* Circle with Number */}
                  <div className={`absolute ${step.position.circle}`}>
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-110`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className={`absolute ${step.position.text} max-w-[240px] text-center`}>
                    <h3 className="text-white text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-white text-sm leading-relaxed">
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