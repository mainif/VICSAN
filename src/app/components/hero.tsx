import { useState, useEffect } from 'react';
import heroImage from '../../assets/ee12fe336677c073f8b80a8b7c31c5d5afa0dba8.png';

export function Hero () {
  const contentBlocks = [
    {
      main: 'TRANSFORMAMOS',
      highlight: 'EL CAOS EN PROCESOS',
      subtitle: 'Especialistas en ordenar, estructurar y mejorar la gestión empresarial'
    },
    {
      main: 'ARQUITECTOS DE',
      highlight: 'TU CRECIMIENTO',
      subtitle: 'Brindamos asesoría empresarial integral para empresas en crecimiento'
    },
    {
      main: 'CONVERTIMOS',
      highlight: 'EL CAOS EN PROCESOS EFICIENTES',
      subtitle: 'Optimización y digitalización operativa para tu empresa'
    },
    {
      main: 'SOLUCIONES',
      highlight: 'EMPRESARIALES INTEGRALES',
      subtitle: 'Gestión, cumplimiento SUNAFIL, asesoría tributaria y más'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contentBlocks.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = contentBlocks[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A3A47]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Professional consulting team meeting"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay - NUEVA PALETA VICSAN - Optimizado para móvil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A47]/85 via-[#2E6175]/70 to-[#1D6283]/75 sm:from-[#1A3A47]/75 sm:via-[#2E6175]/60 sm:to-[#1D6283]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A47]/60 via-transparent to-transparent sm:from-[#1A3A47]/40" />
      </div>

      {/* Business Process Flow Animations - Solo desktop */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glowing effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Arrow markers con colores de paleta */}
          <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#0C6291" opacity="0.8" />
          </marker>
          <marker id="flowArrowBright" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M 0 0 L 12 6 L 0 12 Z" fill="#1D6283" opacity="0.9" />
          </marker>
        </defs>

        {/* Espiral de procesos - Top Left */}
        <g opacity="0.4" filter="url(#glow)">
          <circle cx="120" cy="180" r="8" fill="#2E6175" stroke="#0C6291" strokeWidth="2">
            <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <path d="M 128 180 Q 180 160 220 180 T 280 200" stroke="#2E6175" strokeWidth="3" fill="none" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </path>
          
          <circle cx="280" cy="200" r="6" fill="#1D6283" stroke="#0C6291" strokeWidth="2">
            <animate attributeName="fill" values="#1D6283;#0C6291;#1D6283" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Líneas onduladas conectadas - Top Right */}
        <g opacity="0.35" filter="url(#glow)">
          <path d="M 1200 150 Q 1250 120 1300 150 Q 1350 180 1400 150" stroke="#2E6175" strokeWidth="3" fill="none" strokeDasharray="10,5">
            <animate attributeName="d" values="M 1200 150 Q 1250 120 1300 150 Q 1350 180 1400 150;M 1200 150 Q 1250 180 1300 150 Q 1350 120 1400 150;M 1200 150 Q 1250 120 1300 150 Q 1350 180 1400 150" dur="4s" repeatCount="indefinite" />
          </path>
          
          <circle cx="1200" cy="150" r="7" fill="#0C6291" stroke="#1D6283" strokeWidth="2">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1400" cy="150" r="7" fill="#1D6283" stroke="#0C6291" strokeWidth="2">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Órbitas circulares - Right Side */}
        <g opacity="0.38" filter="url(#glow)">
          <circle cx="1350" cy="280" r="50" fill="none" stroke="#2E6175" strokeWidth="2" strokeDasharray="15,8">
            <animate attributeName="stroke-dashoffset" from="0" to="23" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="50;55;50" dur="4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1350" cy="280" r="30" fill="none" stroke="#1D6283" strokeWidth="2" strokeDasharray="10,5">
            <animate attributeName="stroke-dashoffset" from="23" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1350" cy="280" r="10" fill="#0C6291">
            <animate attributeName="r" values="10;13;10" dur="2s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#0C6291;#1D6283;#0C6291" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Partículas orbitales */}
          <circle cx="1400" cy="280" r="5" fill="#2E6175">
            <animateTransform attributeName="transform" type="rotate" from="0 1350 280" to="360 1350 280" dur="6s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1320" cy="230" r="4" fill="#1D6283">
            <animateTransform attributeName="transform" type="rotate" from="120 1350 280" to="480 1350 280" dur="5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Red de conexiones - Bottom Left */}
        <g opacity="0.4" filter="url(#glow)">
          <circle cx="100" cy="600" r="8" fill="#2E6175" stroke="#0C6291" strokeWidth="2" />
          <circle cx="220" cy="580" r="6" fill="#1D6283" stroke="#2E6175" strokeWidth="2" />
          <circle cx="180" cy="650" r="7" fill="#0C6291" stroke="#1D6283" strokeWidth="2" />
          
          <line x1="100" y1="600" x2="220" y2="580" stroke="#2E6175" strokeWidth="2" strokeDasharray="6,3">
            <animate attributeName="stroke-dashoffset" from="0" to="9" dur="2s" repeatCount="indefinite" />
          </line>
          
          <line x1="100" y1="600" x2="180" y2="650" stroke="#1D6283" strokeWidth="2" strokeDasharray="6,3">
            <animate attributeName="stroke-dashoffset" from="0" to="9" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </line>
          
          <line x1="220" y1="580" x2="180" y2="650" stroke="#0C6291" strokeWidth="2" strokeDasharray="6,3">
            <animate attributeName="stroke-dashoffset" from="0" to="9" dur="2s" begin="1s" repeatCount="indefinite" />
          </line>
          
          <circle cx="100" cy="600" r="8" fill="none" stroke="#0C6291" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Curvas de flujo - Bottom Right */}
        <g opacity="0.42" filter="url(#glow)">
          <path d="M 1100 650 Q 1200 620 1280 650 Q 1360 680 1450 650" stroke="#2E6175" strokeWidth="3" fill="none" strokeDasharray="12,6" markerEnd="url(#flowArrow)">
            <animate attributeName="stroke-dashoffset" from="0" to="18" dur="2.5s" repeatCount="indefinite" />
          </path>
          
          <circle cx="1100" cy="650" r="9" fill="#1D6283" stroke="#0C6291" strokeWidth="2">
            <animate attributeName="cy" values="650;645;650" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1280" cy="650" r="7" fill="#0C6291" stroke="#2E6175" strokeWidth="2">
            <animate attributeName="cy" values="650;645;650" dur="2s" begin="0.7s" repeatCount="indefinite" />
            <animate attributeName="r" values="7;10;7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="1450" cy="650" r="9" fill="#2E6175" stroke="#1D6283" strokeWidth="2">
            <animate attributeName="cy" values="650;645;650" dur="2s" begin="1.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Hexágonos flotantes - Center */}
        <g opacity="0.35" filter="url(#glow)">
          <polygon points="750,350 770,360 770,380 750,390 730,380 730,360" fill="none" stroke="#2E6175" strokeWidth="2">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 750 370" to="360 750 370" dur="20s" repeatCount="indefinite" />
          </polygon>
          
          <polygon points="850,420 870,430 870,450 850,460 830,450 830,430" fill="none" stroke="#1D6283" strokeWidth="2">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="1s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 850 440" to="-360 850 440" dur="18s" repeatCount="indefinite" />
          </polygon>
          
          <circle cx="750" cy="370" r="4" fill="#0C6291">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="850" cy="440" r="4" fill="#2E6175">
            <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Puntos brillantes dispersos */}
        <g opacity="0.5">
          <circle cx="300" cy="450" r="3" fill="#0C6291">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="950" cy="250" r="2.5" fill="#1D6283">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="320" r="3" fill="#2E6175">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="1250" cy="480" r="2" fill="#0C6291">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" begin="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-20 sm:py-28 md:py-36 lg:py-48 pt-28 sm:pt-36 md:pt-40">
        <div className="max-w-4xl">
          {/* Rotating Complete Text Blocks */}
          <div className={`transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
          }`}>
            <h1 className="font-['Sora'] text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              {currentContent.main}
            </h1>
            <h2 className="font-['Sora'] text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 sm:mb-6 md:mb-7 tracking-tight text-[#ffffff]">
              {currentContent.highlight}
            </h2>
            <p className="font-['Inter'] text-[0.95rem] leading-[1.6] sm:text-lg md:text-xl text-white/95 max-w-2xl sm:leading-relaxed">
              {currentContent.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}