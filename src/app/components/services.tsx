import { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  includes: string[];
  imageUrl: string;
  featured?: boolean;
  color?: string;
}

const servicesData: Service[] = [
  {
    id: 'solucion-integral',
    title: 'Gestión Empresarial 360°',
    category: 'Solución integral',
    description: 'Acompañamos a tu empresa en toda su gestión: estrategia, cumplimiento normativo, optimización de procesos y digitalización.',
    includes: [
      'Estrategia empresarial',
      'SST',
      'Tributaria',
      'Legal',
      'Optimización de procesos',
      'Digitalización'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1764406327615-556aeeada2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc3Mzk4NTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    color: '#2E6175'
  },
  {
    id: 'digitalizacion',
    title: 'Digitalización y Transformación Operativa',
    category: 'Transformación digital',
    description: 'Implementamos herramientas digitales y soluciones automatizadas para transformar procesos manuales en sistemas eficientes y controlados.',
    includes: [
      'Digitalización de Procesos – Tipo 1',
      'Digitalización de Procesos – Tipo 2',
      'Automatización de tareas',
      'Desarrollo de aplicativos móviles',
      'Flujos automatizados'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzQxMjMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#1D6283'
  },
  {
    id: 'sunafil',
    title: 'Cumplimientos SUNAFIL',
    category: 'Seguridad y salud',
    description: 'Desarrollamos la documentación necesaria para cumplir con los requerimientos de SUNAFIL en materia de seguridad y salud en el trabajo.',
    includes: [
      'Plan de Salud Ocupacional Anual',
      'Plan de Seguridad y Salud en el Trabajo',
      'IPERC Base',
      'Evaluación de cumplimiento normativo',
      'Capacitaciones en SST'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1760025128820-1548e72b3cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwc2FmZXR5JTIwaGVsbWV0cyUyMGhhcmRoYXR8ZW58MXx8fHwxNzc0MTIzMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#0C6291'
  },
  {
    id: 'tributaria',
    title: 'Asesoría Tributaria',
    category: 'Asesoría financiera',
    description: 'Brindamos orientación tributaria y contable básica para apoyar el cumplimiento de obligaciones fiscales y el orden contable de MYPES.',
    includes: [
      'Asesoría contable y tributaria',
      'Declaraciones ante SUNAT',
      'Regularizaciones tributarias',
      'Análisis de régimen tributario adecuado',
      'Planificación fiscal'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwZG9jdW1lbnRzJTIwY2FsY3VsYXRvciUyMHRheCUyMHBhcGVyc3xlbnwxfHx8fDE3NzQxMjMzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#1D6283'
  },
  {
    id: 'gestion-procesos',
    title: 'Gestión y Optimización de Procesos',
    category: 'Mejora continua',
    description: 'Modelamos, diagnosticamos y optimizamos procesos empresariales para mejorar la eficiencia operativa y reducir costos.',
    includes: [
      'Modelado de Procesos',
      'Diagnóstico de Procesos',
      'Optimización de Procesos',
      'Estandarización de Procesos',
      'Creación del MOF'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjBnZWFycyUyMHdvcmtmbG93JTIwb3B0aW1pemF0aW9ufGVufDF8fHx8MTc3NDEyMzM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#0C6291'
  },
  {
    id: 'empresarial',
    title: 'Asesoría Empresarial',
    category: 'Consultoría estratégica',
    description: 'Apoyamos a la empresa en la definición y mejora de sus estrategias comerciales, alineando procesos y objetivos para fortalecer la gestión.',
    includes: [
      'Implementación de estrategias comerciales',
      'Planificación empresarial',
      'Optimización de recursos',
      'Gestión del cambio',
      'Desarrollo organizacional'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1758518729263-e26fb50db6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwZXhlY3V0aXZlJTIwbWVldGluZyUyMGNvcnBvcmF0ZSUyMHRlYW18ZW58MXx8fHwxNzc0MTIzNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#2E6175'
  }
];

const featuredService = servicesData.find(s => s.featured)!;
const regularServices = servicesData.filter(s => !s.featured);

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden scroll-mt-24">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1e5a7d" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E6175] mb-6 leading-tight max-w-4xl mx-auto">
            Convertimos las dificultades en aprendizaje que impulsa la mejora
          </h2>
          <p className="font-['Inter'] text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Empleamos soluciones prácticas y medibles que transforman
          </p>
          
          {/* Marquee Animado - Servicios */}
          <div className="relative overflow-hidden py-6 bg-gradient-to-r from-transparent via-[#0C6291]/5 to-transparent">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-8">
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">ASESORÍA EMPRESARIAL</span>
                  <span className="text-[#0C6291]">—</span>
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">ASESORÍA EN SST</span>
                  <span className="text-[#0C6291]">—</span>
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">ASESORÍA TRIBUTARIA</span>
                  <span className="text-[#0C6291]">—</span>
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">ASESORÍA LEGAL</span>
                  <span className="text-[#0C6291]">—</span>
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">GESTIÓN Y OPTIMIZACIÓN DE PROCESOS</span>
                  <span className="text-[#0C6291]">—</span>
                  <span className="font-['Inter'] text-sm font-bold text-[#2E6175] uppercase tracking-wider">DIGITALIZACIÓN OPERATIVA</span>
                  <span className="text-[#0C6291]">—</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED SERVICE - SOLUCIÓN INTEGRAL */}
        <div className="mb-24">
          <div className="relative group cursor-pointer" onClick={() => setSelectedService(featuredService)}>
            <div className="relative bg-gradient-to-br from-[#0a2435] via-[#1e5a7d] to-[#2a6f9b] rounded-[2.5rem] overflow-hidden min-h-[550px] shadow-2xl hover:shadow-3xl transition-all duration-700">
              
              {/* Animated Background Patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5eb3e4] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{ animation: 'float 10s ease-in-out infinite' }} />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16 items-center">
                
                {/* LEFT: Content */}
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
                    <div className="w-2 h-2 bg-[#5eb3e4] rounded-full animate-pulse" />
                    <span className="font-['Inter'] text-sm font-semibold text-white uppercase tracking-wider">Servicio completo</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-['Sora'] text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      {featuredService.title}
                    </h3>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#5eb3e4] to-transparent rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                    Integramos estrategia, cumplimiento, procesos y digitalización en un solo servicio para transformar tu empresa.
                  </p>

                  {/* Mini Includes Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {featuredService.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#5eb3e4] rounded-full" />
                        <span className="font-['Inter'] text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1e5a7d] font-['Inter'] font-bold rounded-full hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-xl">
                    Solicitar diagnóstico
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* RIGHT: Illustration SVG */}
                <div className="relative h-[400px] lg:h-full min-h-[400px]">
                  <svg className="w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="heroGlow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#5eb3e4', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>

                    {/* Central Hub */}
                    <g filter="url(#heroGlow)">
                      <circle cx="250" cy="250" r="60" fill="url(#grad1)" opacity="0.3">
                        <animate attributeName="r" values="60;70;60" dur="6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="250" r="45" fill="white" opacity="0.9">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
                      </circle>

                      {/* Gear Icon */}
                      <g transform="translate(250, 250)">
                        <path d="M -15 -20 L -10 -30 L 10 -30 L 15 -20 L 20 -15 L 30 -10 L 30 10 L 20 15 L 15 20 L 10 30 L -10 30 L -15 20 L -20 15 L -30 10 L -30 -10 L -20 -15 Z" 
                          fill="none" stroke="url(#grad1)" strokeWidth="3" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
                        </path>
                        <circle r="12" fill="url(#grad1)" opacity="0.6" />
                      </g>

                      {/* Orbiting Nodes */}
                      {[0, 72, 144, 216, 288].map((angle, idx) => {
                        const x = 250 + 140 * Math.cos((angle * Math.PI) / 180);
                        const y = 250 + 140 * Math.sin((angle * Math.PI) / 180);
                        
                        return (
                          <g key={idx}>
                            <line 
                              x1="250" y1="250" 
                              x2={x} y2={y}
                              stroke="white" 
                              strokeWidth="2.5" 
                              opacity="0.2"
                              strokeDasharray="8,4"
                            >
                              <animate 
                                attributeName="stroke-dashoffset" 
                                from="0" 
                                to="12" 
                                dur="3s" 
                                repeatCount="indefinite" 
                              />
                            </line>

                            <circle cx={x} cy={y} r="25" fill="white" opacity="0.95">
                              <animate 
                                attributeName="r" 
                                values="25;30;25" 
                                dur="5s" 
                                begin={`${idx * 0.3}s`}
                                repeatCount="indefinite" 
                              />
                            </circle>
                            
                            <circle cx={x} cy={y} r="15" fill="url(#grad1)" opacity="0.7">
                              <animate 
                                attributeName="opacity" 
                                values="0.5;1;0.5" 
                                dur="4s" 
                                begin={`${idx * 0.3}s`}
                                repeatCount="indefinite" 
                              />
                            </circle>

                            {/* Mini Icons in Nodes */}
                            <g transform={`translate(${x}, ${y})`}>
                              {idx === 0 && (
                                <path d="M -6 -6 L 6 -6 L 6 0 M -6 2 L 6 2 M -6 6 L 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                              )}
                              {idx === 1 && (
                                <circle r="5" fill="none" stroke="white" strokeWidth="2" />
                              )}
                              {idx === 2 && (
                                <path d="M -6 0 L 0 -6 L 6 0 L 0 6 Z" fill="white" />
                              )}
                              {idx === 3 && (
                                <path d="M -5 -5 L 5 5 M -5 5 L 5 -5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                              )}
                              {idx === 4 && (
                                <rect x="-5" y="-5" width="10" height="10" fill="white" />
                              )}
                            </g>
                          </g>
                        );
                      })}

                      {/* Data Flow Particles */}
                      {[...Array(12)].map((_, idx) => {
                        const angle = (idx * 30);
                        const baseRadius = 100;
                        return (
                          <circle 
                            key={`particle-${idx}`}
                            r="3" 
                            fill="#5eb3e4" 
                            opacity="0.6"
                          >
                            <animateMotion
                              path={`M ${250 + baseRadius * Math.cos((angle * Math.PI) / 180)} ${250 + baseRadius * Math.sin((angle * Math.PI) / 180)} 
                                     A ${baseRadius} ${baseRadius} 0 1 1 ${250 + baseRadius * Math.cos(((angle + 359) * Math.PI) / 180)} ${250 + baseRadius * Math.sin(((angle + 359) * Math.PI) / 180)}`}
                              dur={`${8 + idx}s`}
                              repeatCount="indefinite"
                            />
                            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
                          </circle>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5eb3e4]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            </div>

            {/* Floating Accent Bar */}
            <div className="absolute -bottom-4 left-8 right-8 h-2 bg-gradient-to-r from-transparent via-[#5eb3e4] to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {regularServices.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`group relative cursor-pointer transform hover:scale-105 transition-all duration-500 ${service.id === 'empresarial' ? 'lg:col-span-4 md:col-span-2' : ''}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card with Layered Design */}
              <div className="relative h-full bg-gradient-to-br from-white via-white to-gray-50 rounded-[2rem] overflow-visible shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-gray-100 group-hover:border-gray-200">
                
                {/* Glowing Background Effect */}
                <div 
                  className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700 -z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}40 0%, ${service.color}20 50%, transparent 100%)`
                  }}
                />

                {/* Top Gradient Header */}
                <div 
                  className="relative h-32 overflow-hidden rounded-t-[2rem]"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`
                  }}
                >
                  {/* Animated Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pattern-${idx}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="1.5" fill={service.color} opacity="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${idx})`} />
                    </svg>
                  </div>

                  {/* Floating Color Accent */}
                  <div 
                    className="absolute top-6 right-6 w-20 h-20 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                    style={{ backgroundColor: service.color }}
                  />
                  
                  {/* Color Bar Accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-500"
                    style={{ 
                      background: `linear-gradient(90deg, ${service.color} 0%, ${service.color}80 50%, transparent 100%)`
                    }}
                  />
                </div>

                {/* Icon Area - Positioned to Overlap Header */}
                <div className="relative -mt-16 px-8 pb-8">
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer Glow Ring */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundColor: service.color }}
                    />
                    
                    {/* White Background Circle */}
                    <div className="absolute inset-2 bg-white rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6" />
                    
                    {/* Colored Background */}
                    <div 
                      className="absolute inset-4 rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-500"
                      style={{ backgroundColor: service.color }}
                    />

                    {/* Custom SVG Icons per Service */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`serviceGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: service.color, stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: service.color, stopOpacity: 0.6 }} />
                          </linearGradient>
                          <filter id={`serviceGlow-${idx}`}>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Icon Based on Service - MEJORADOS CON ANIMACIONES */}
                        <g filter={`url(#serviceGlow-${idx})`}>
                          {service.id === 'digitalizacion' && (
                            <>
                              {/* Digital Transformation - Animated */}
                              <rect x="18" y="22" width="26" height="36" rx="3" fill={`url(#serviceGrad-${idx})`} opacity="0.3" />
                              <rect x="18" y="22" width="26" height="36" rx="3" fill="none" stroke={service.color} strokeWidth="2.5" />
                              <line x1="22" y1="30" x2="40" y2="30" stroke={service.color} strokeWidth="2" strokeLinecap="round">
                                <animate attributeName="x2" values="22;40;22" dur="3s" repeatCount="indefinite" />
                              </line>
                              <line x1="22" y1="36" x2="40" y2="36" stroke={service.color} strokeWidth="2" strokeLinecap="round">
                                <animate attributeName="x2" values="22;40;22" dur="3s" begin="0.5s" repeatCount="indefinite" />
                              </line>
                              <line x1="22" y1="42" x2="35" y2="42" stroke={service.color} strokeWidth="2" strokeLinecap="round">
                                <animate attributeName="x2" values="22;35;22" dur="3s" begin="1s" repeatCount="indefinite" />
                              </line>
                              <path d="M 48 35 L 56 40 L 48 45" fill="none" stroke={service.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                              </path>
                              <rect x="58" y="28" width="16" height="24" rx="3" fill={service.color} opacity="0.9" />
                              <circle cx="66" cy="48" r="1.5" fill="white" />
                              <rect x="61" y="33" width="10" height="10" rx="1" fill="white" opacity="0.3">
                                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                              </rect>
                              <circle cx="50" cy="25" r="1.5" fill={service.color}>
                                <animate attributeName="cy" values="25;20;25" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="54" cy="50" r="1.5" fill={service.color}>
                                <animate attributeName="cy" values="50;55;50" dur="2s" begin="0.5s" repeatCount="indefinite" />
                              </circle>
                            </>
                          )}
                          {service.id === 'sunafil' && (
                            <>
                              {/* Safety Shield - Animated */}
                              <path d="M 40 14 L 64 26 L 64 46 Q 64 60 40 72 Q 16 60 16 46 L 16 26 Z" fill={`url(#serviceGrad-${idx})`} opacity="0.25">
                                <animate attributeName="opacity" values="0.25;0.35;0.25" dur="3s" repeatCount="indefinite" />
                              </path>
                              <path d="M 40 14 L 64 26 L 64 46 Q 64 60 40 72 Q 16 60 16 46 L 16 26 Z" fill="none" stroke={service.color} strokeWidth="3">
                                <animate attributeName="stroke-dasharray" values="0,300;300,300" dur="3s" repeatCount="indefinite" />
                              </path>
                              <circle cx="40" cy="43" r="18" fill="white" opacity="0.4">
                                <animate attributeName="r" values="18;19;18" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <ellipse cx="40" cy="38" rx="10" ry="8" fill={service.color} opacity="0.8">
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                              </ellipse>
                              <rect x="30" y="38" width="20" height="3" fill={service.color} />
                              <path d="M 28 48 L 36 56 L 54 38" fill="none" stroke={service.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="2s" begin="1s" repeatCount="indefinite" />
                              </path>
                              <circle cx="24" cy="30" r="2" fill={service.color}>
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="56" cy="30" r="2" fill={service.color}>
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.7s" repeatCount="indefinite" />
                              </circle>
                            </>
                          )}
                          {service.id === 'tributaria' && (
                            <>
                              {/* Tax & Finance - Animated */}
                              <rect x="18" y="16" width="44" height="52" rx="4" fill={`url(#serviceGrad-${idx})`} opacity="0.2" />
                              <rect x="18" y="16" width="44" height="52" rx="4" fill="none" stroke={service.color} strokeWidth="3">
                                <animate attributeName="stroke-dasharray" values="0,200;200,200" dur="3s" repeatCount="indefinite" />
                              </rect>
                              <rect x="23" y="21" width="34" height="12" rx="2" fill={service.color} opacity="0.3" />
                              <text x="40" y="29.5" fontSize="8" fill={service.color} textAnchor="middle" fontWeight="bold">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                                $$$
                              </text>
                              <circle cx="28" cy="42" r="3.5" fill={service.color} opacity="0.6">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="40" cy="42" r="3.5" fill={service.color} opacity="0.7">
                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.3s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="52" cy="42" r="3.5" fill={service.color} opacity="0.6">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="28" cy="52" r="3.5" fill={service.color} opacity="0.7">
                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.9s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="40" cy="52" r="3.5" fill={service.color} opacity="0.8">
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" begin="1.2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="52" cy="52" r="3.5" fill={service.color} opacity="0.7">
                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="28" cy="60" r="3.5" fill={service.color} opacity="0.6">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.8s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="40" cy="60" r="3.5" fill={service.color} opacity="0.9">
                                <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" begin="2.1s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="52" cy="60" r="3.5" fill={service.color}>
                                <animate attributeName="r" values="3.5;4.5;3.5" dur="1.5s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="15" cy="28" r="3" fill={service.color} opacity="0.4">
                                <animate attributeName="cy" values="28;24;28" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="65" cy="52" r="2.5" fill={service.color} opacity="0.3">
                                <animate attributeName="cy" values="52;48;52" dur="2.5s" repeatCount="indefinite" />
                              </circle>
                            </>
                          )}
                          {service.id === 'gestion-procesos' && (
                            <>
                              {/* Workflow Process - Animated */}
                              <circle cx="40" cy="40" r="32" fill={`url(#serviceGrad-${idx})`} opacity="0.15" />
                              <circle cx="20" cy="25" r="8" fill={service.color} opacity="0.9">
                                <animate attributeName="r" values="8;9;8" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="60" cy="25" r="8" fill={service.color} opacity="0.85">
                                <animate attributeName="r" values="8;9;8" dur="2s" begin="0.5s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="40" cy="55" r="10" fill={service.color}>
                                <animate attributeName="r" values="10;11;10" dur="2s" begin="1s" repeatCount="indefinite" />
                              </circle>
                              <path d="M 20 33 L 20 47 L 32 55" stroke={service.color} strokeWidth="3" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="2s" repeatCount="indefinite" />
                              </path>
                              <path d="M 60 33 L 60 47 L 48 55" stroke={service.color} strokeWidth="3" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="2s" begin="0.5s" repeatCount="indefinite" />
                              </path>
                              <circle cx="40" cy="55" r="5" fill="white" />
                              <circle cx="40" cy="55" r="3" fill={service.color} opacity="0.5" />
                              <path d="M 17 24 L 19 26 L 23 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                              <path d="M 57 24 L 59 26 L 63 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                              <path d="M 12 68 L 28 58 L 38 62 L 50 54" stroke={service.color} strokeWidth="2.5" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="3s" begin="1s" repeatCount="indefinite" />
                              </path>
                              <path d="M 44 54 L 50 54 L 50 60" stroke={service.color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            </>
                          )}
                          {service.id === 'empresarial' && (
                            <>
                              {/* Business Strategy - Animated */}
                              <circle cx="40" cy="40" r="30" fill={`url(#serviceGrad-${idx})`} opacity="0.2" />
                              <rect x="20" y="48" width="7" height="18" rx="2" fill={service.color} opacity="0.7">
                                <animate attributeName="height" values="18;22;18" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="y" values="48;44;48" dur="2s" repeatCount="indefinite" />
                              </rect>
                              <rect x="31" y="42" width="7" height="24" rx="2" fill={service.color} opacity="0.8">
                                <animate attributeName="height" values="24;28;24" dur="2s" begin="0.3s" repeatCount="indefinite" />
                                <animate attributeName="y" values="42;38;42" dur="2s" begin="0.3s" repeatCount="indefinite" />
                              </rect>
                              <rect x="42" y="38" width="7" height="28" rx="2" fill={service.color} opacity="0.85">
                                <animate attributeName="height" values="28;32;28" dur="2s" begin="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" values="38;34;38" dur="2s" begin="0.6s" repeatCount="indefinite" />
                              </rect>
                              <rect x="53" y="32" width="7" height="34" rx="2" fill={service.color}>
                                <animate attributeName="height" values="34;38;34" dur="2s" begin="0.9s" repeatCount="indefinite" />
                                <animate attributeName="y" values="32;28;32" dur="2s" begin="0.9s" repeatCount="indefinite" />
                              </rect>
                              <path d="M 18 50 L 62 20" stroke={service.color} strokeWidth="2.5" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="3s" repeatCount="indefinite" />
                              </path>
                              <path d="M 52 20 L 62 20 L 62 30" stroke={service.color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="62" cy="20" r="4" fill={service.color}>
                                <animate attributeName="r" values="4;5;4" dur="1.5s" repeatCount="indefinite" />
                              </circle>
                              <circle cx="24" cy="22" r="6" fill={service.color} opacity="0.3">
                                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                              </circle>
                              <path d="M 24 28 L 24 32" stroke={service.color} strokeWidth="2" strokeLinecap="round" />
                            </>
                          )}
                        </g>
                      </svg>
                    </div>

                    {/* Animated Pulse Rings */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-60 group-hover:scale-125 transition-all duration-700 animate-pulse"
                      style={{ borderColor: service.color + '60' }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full border opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-1000"
                      style={{ borderColor: service.color + '40' }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="text-center mb-4">
                    <div 
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-widest shadow-md"
                      style={{ 
                        backgroundColor: service.color + '15',
                        color: service.color,
                        border: `1.5px solid ${service.color}40`
                      }}
                    >
                      {service.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Sora'] text-xl font-bold text-[#0a2435] text-center mb-6 px-2 leading-tight group-hover:text-[#1e5a7d] transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  {/* CTA with Arrow */}
                  <div className="relative">
                    <div 
                      className="flex items-center justify-center gap-2 py-3 px-6 rounded-full font-['Inter'] font-bold text-sm transition-all duration-300 group-hover:gap-3 mx-auto w-fit shadow-lg group-hover:shadow-xl"
                      style={{
                        backgroundColor: service.color + '10',
                        color: service.color,
                        border: `2px solid ${service.color}30`
                      }}
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2 rounded-b-[2rem] opacity-60 group-hover:opacity-100 group-hover:h-3 transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, ${service.color} 0%, ${service.color}60 50%, transparent 100%)`
                  }}
                />

                {/* Floating Particles */}
                <div className="absolute top-20 left-8 w-2 h-2 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-pulse" style={{ backgroundColor: service.color }} />
                <div className="absolute top-24 right-12 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-pulse" style={{ backgroundColor: service.color, animationDelay: '0.3s' }} />
                <div className="absolute bottom-32 right-8 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 animate-pulse" style={{ backgroundColor: service.color, animationDelay: '0.6s' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Dialog */}
      {selectedService && (
        <ServiceDialog 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }
      `}</style>
    </section>
  );
}

function ServiceDialog({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT SIDE - Visual Area */}
        <div className="relative md:w-1/2 overflow-hidden min-h-[400px] md:min-h-0">
          <div className="absolute inset-0">
            <img 
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d5c]/85 via-[#1e5a7d]/75 to-[#2a6f9b]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2435]/60 via-transparent to-transparent" />

          <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
            <div>
              <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                <span className="font-['Inter'] text-sm font-semibold text-white">{service.category}</span>
              </div>
            </div>

            <div>
              <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                {service.title}
              </h2>
              <div className="w-28 h-1.5 bg-gradient-to-r from-white to-[#5eb3e4] rounded-full shadow-lg" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="md:w-1/2 flex flex-col max-h-[90vh] md:max-h-none">
          <div className="flex-shrink-0 flex items-start justify-between p-8 border-b border-gray-100">
            <div className="flex-1">
              <h4 className="font-['Inter'] text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Descripción
              </h4>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 -mt-1 -mr-1"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            <div>
              <p className="font-['Inter'] text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>

            <div>
              <h4 className="font-['Inter'] text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Incluye
              </h4>
              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5eb3e4] flex-shrink-0 mt-0.5" />
                    <span className="font-['Inter'] text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-shrink-0 border-t border-gray-100 p-8">
            <button className="w-full font-['Inter'] px-8 py-4 bg-[#1e5a7d] text-white font-semibold rounded-full hover:bg-[#2a6f9b] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] duration-300">
              Solicitar consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}