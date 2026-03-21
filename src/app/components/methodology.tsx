import { Ear, ClipboardCheck, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Methodology() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Escuchamos',
      description: 'Análisis profundo de tus desafíos actuales y objetivos de negocio',
      details: 'Entrevistas con stakeholders, análisis de necesidades, identificación de pain points',
      icon: Ear,
      color: '#1F6D9F'
    },
    {
      number: '02',
      title: 'Analizamos',
      description: 'Evaluación detallada para identificar oportunidades de mejora',
      details: 'Auditoría de procesos, benchmarking, análisis de datos y KPIs actuales',
      icon: ClipboardCheck,
      color: '#1F6D9F'
    },
    {
      number: '03',
      title: 'Proponemos',
      description: 'Diseño de una hoja de ruta estratégica y digital a medida',
      details: 'Roadmap personalizado, propuesta de valor, arquitectura de soluciones',
      icon: Lightbulb,
      color: '#2A6F9B'
    },
    {
      number: '04',
      title: 'Resolvemos',
      description: 'Implementación y seguimiento para resultados sostenibles',
      details: 'Ejecución ágil, monitoreo continuo, optimización y soporte',
      icon: TrendingUp,
      color: '#0C6291'
    }
  ];

  return (
    <section id="metodologia" className="relative py-24 bg-gradient-to-br from-[#2A6F9B] via-[#1F6D9F] to-[#2A6F9B] overflow-hidden scroll-mt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C6291] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="font-['Inter'] text-sm font-bold text-white uppercase tracking-wider">
              Ingeniería de Resultados
            </span>
          </div>
          <h2 className="font-['Sora'] text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestra Metodología
          </h2>
          <p className="font-['Inter'] text-lg text-white/90 max-w-2xl mx-auto">
            Un proceso probado que transforma desafíos en resultados medibles
          </p>
        </div>

        {/* Roadmap Path */}
        <div className="relative py-16">
          {/* Curved Path - SVG Roadmap */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-12">
            <svg className="w-full h-48" viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Path gradient */}
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#1F6D9F', stopOpacity: 0.4 }} />
                  <stop offset="25%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
                  <stop offset="50%" style={{ stopColor: '#1F6D9F', stopOpacity: 0.5 }} />
                  <stop offset="75%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#1F6D9F', stopOpacity: 0.4 }} />
                </linearGradient>
                
                {/* Animated particles */}
                <linearGradient id="particleGradient">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1F6D9F', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              {/* Main wavy/curved path */}
              <path 
                d="M 0 100 Q 300 60, 400 100 T 800 100 Q 1000 120, 1200 100" 
                fill="none"
                stroke="url(#pathGradient)" 
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.8"
              />
              
              {/* Outer glow */}
              <path 
                d="M 0 100 Q 300 60, 400 100 T 800 100 Q 1000 120, 1200 100" 
                fill="none"
                stroke="white" 
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.2"
                style={{ filter: 'blur(8px)' }}
              />
              
              {/* Dashed center line */}
              <path 
                d="M 0 100 Q 300 60, 400 100 T 800 100 Q 1000 120, 1200 100" 
                fill="none"
                stroke="white" 
                strokeWidth="2"
                strokeDasharray="10 15"
                opacity="0.6"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="25" dur="2s" repeatCount="indefinite" />
              </path>
              
              {/* Animated particles traveling along path */}
              {[0, 1, 2, 3, 4].map((i) => (
                <circle key={i} r="6" fill="url(#particleGradient)" opacity="0.9">
                  <animateMotion 
                    dur="6s" 
                    begin={`${i * 1.2}s`}
                    repeatCount="indefinite"
                    path="M 0 100 Q 300 60, 400 100 T 800 100 Q 1000 120, 1200 100"
                  />
                  <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
                </circle>
              ))}
              
              {/* Milestone dots */}
              {[
                { x: 100, y: 90 },
                { x: 400, y: 100 },
                { x: 800, y: 100 },
                { x: 1100, y: 105 }
              ].map((pos, i) => (
                <g key={i}>
                  <circle cx={pos.x} cy={pos.y} r="16" fill="white" opacity="0.3" />
                  <circle cx={pos.x} cy={pos.y} r="10" fill="url(#particleGradient)">
                    <animate attributeName="r" values="8;12;8" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
          </div>

          {/* Mobile vertical path */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-[#1F6D9F] via-white to-[#1F6D9F] opacity-50 rounded-full" />
            <div className="absolute top-0 left-0 w-full h-8 bg-white/30 rounded-full animate-pulse" 
                 style={{ animation: 'slideDown 3s ease-in-out infinite' }} />
          </div>

          {/* Interactive Steps */}
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={index}
                  className="relative flex flex-col items-center cursor-pointer"
                  style={{ animation: `floatIn 0.8s ease-out ${index * 0.15}s both` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isActive ? null : index)}
                >
                  {/* Connection line to path */}
                  <div className="hidden lg:block absolute top-16 left-1/2 w-1 h-12 bg-gradient-to-b from-white/60 to-transparent -translate-x-1/2" />

                  {/* Interactive Icon Container */}
                  <div className={`relative z-10 mb-6 transition-all duration-500 ${isActive ? 'scale-125 -translate-y-4' : 'scale-100'}`}>
                    <div 
                      className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-white to-white/80 flex items-center justify-center shadow-2xl border-4 transition-all duration-500 ${
                        isActive ? 'border-white shadow-[0_0_40px_rgba(255,255,255,0.6)]' : 'border-[#0C6291]/40'
                      }`}
                      style={{ 
                        animation: isActive ? 'none' : `float 3s ease-in-out ${index * 0.5}s infinite`,
                      }}
                    >
                      {/* Icon with rotation on active */}
                      <Icon 
                        className={`w-16 h-16 text-[#0C6291] transition-all duration-500 ${isActive ? 'scale-110 rotate-12' : ''}`} 
                        strokeWidth={2.5} 
                      />
                      
                      {/* Spinning ring on active */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/60 animate-spin" style={{ animationDuration: '3s' }} />
                      )}
                      
                      {/* Number badge */}
                      <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#0C6291] to-[#1D6283] rounded-full flex items-center justify-center shadow-xl border-3 border-white transition-all duration-300 ${
                        isActive ? 'scale-125' : 'scale-100'
                      }`}>
                        <span className="font-['Sora'] text-lg font-bold text-white">
                          {step.number}
                        </span>
                      </div>

                      {/* Checkmark on active */}
                      {isActive && (
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-3 border-white shadow-lg animate-bounce">
                          <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                        </div>
                      )}

                      {/* Pulsing glow */}
                      <div 
                        className={`absolute inset-0 rounded-full transition-all duration-500 ${
                          isActive ? 'bg-[#0C6291]/30 blur-3xl scale-150' : 'bg-[#0C6291]/10 blur-2xl'
                        }`} 
                        style={{ animation: isActive ? 'none' : `glow 3s ease-in-out ${index * 0.5}s infinite` }} 
                      />
                    </div>
                  </div>

                  {/* Expandable Content Card */}
                  <div className={`relative text-center px-4 transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}>
                    <h3 className={`font-['Sora'] text-2xl font-bold text-white mb-3 leading-tight transition-all duration-300 ${
                      isActive ? 'text-[#0C6291] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/90 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    
                    {/* Expandable details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                        <p className="font-['Inter'] text-xs text-white/80 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className={`mt-4 h-1 rounded-full transition-all duration-500 ${
                    isActive ? 'w-24 bg-white' : 'w-12 bg-white/30'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive hint */}
        <div className="text-center mt-12">
          
        </div>
      </div>

      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        @keyframes slideDown {
          0% {
            top: 0;
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}