import { TrendingUp, Target, Shield, Zap, Users, Award, Briefcase, Lightbulb } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: 'Incrementa tu Productividad',
      description: 'Optimiza procesos y aumenta la eficiencia operativa de tu empresa de forma exponencial.',
      icon: TrendingUp,
      gradient: 'from-[#2A6F9B] to-[#1F6D9F]',
      bgColor: 'from-[#2A6F9B]/10 to-[#1F6D9F]/15',
      stat: 'Elite'
    },
    {
      title: 'Soluciones Estratégicas',
      description: 'Planificación integral y ejecución efectiva para alcanzar tus objetivos empresariales.',
      icon: Target,
      gradient: 'from-[#1F6D9F] to-[#2A6F9B]',
      bgColor: 'from-[#1F6D9F]/10 to-[#2A6F9B]/15',
      stat: 'Pro'
    },
    {
      title: 'Cumplimiento Garantizado',
      description: 'Mantén tu empresa alineada con normativas SUNAFIL y tributarias sin preocupaciones.',
      icon: Shield,
      gradient: 'from-[#2A6F9B] to-[#1F6D9F]',
      bgColor: 'from-[#2A6F9B]/10 to-[#1F6D9F]/15',
      stat: 'Total'
    },
    {
      title: 'Resultados Inmediatos',
      description: 'Implementación ágil con impacto visible y transformación efectiva de tu negocio.',
      icon: Zap,
      gradient: 'from-[#1F6D9F] via-[#2A6F9B] to-[#1F6D9F]',
      bgColor: 'from-[#2A6F9B]/10 to-[#1F6D9F]/25',
      stat: 'Fast'
    },
    {
      title: 'Equipo Especializado',
      description: 'Profesionales certificados con experiencia probada en consultoría empresarial de alto nivel.',
      icon: Users,
      gradient: 'from-[#1F6D9F] to-[#2A6F9B]',
      bgColor: 'from-[#1F6D9F]/10 to-[#2A6F9B]/15',
      stat: 'Expert'
    },
    {
      title: 'Excelencia Certificada',
      description: 'Calidad premium y estándares internacionales en cada proyecto que desarrollamos.',
      icon: Award,
      gradient: 'from-[#2A6F9B] to-[#1F6D9F]',
      bgColor: 'from-[#2A6F9B]/10 to-[#1F6D9F]/15',
      stat: 'Premium'
    },
    {
      title: 'Gestión Empresarial',
      description: 'Administración integral de procesos clave para maximizar el potencial de tu organización.',
      icon: Briefcase,
      gradient: 'from-[#1F6D9F] to-[#2A6F9B]',
      bgColor: 'from-[#1F6D9F]/10 to-[#2A6F9B]/15',
      stat: 'Plus+'
    },
    {
      title: 'Innovación Continua',
      description: 'Soluciones creativas y disruptivas que posicionan tu empresa a la vanguardia del mercado.',
      icon: Lightbulb,
      gradient: 'from-[#2A6F9B] to-[#1F6D9F]',
      bgColor: 'from-[#2A6F9B]/10 to-[#1F6D9F]/15',
      stat: 'Next'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background - Completamente diferente al CTA */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#2A6F9B]/20 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#1F6D9F]/20 to-transparent rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#1F6D9F]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(to right, #2E6175 1px, transparent 1px),
          linear-gradient(to bottom, #2E6175 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Diseño premium */}
        <div className="text-center mb-24">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full mb-8 shadow-2xl border border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-[#2A6F9B] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#1F6D9F] rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-[#2A6F9B] rounded-full animate-pulse delay-150" />
            </div>
            <span className="font-['Inter'] text-sm font-bold text-[#1A3A47] uppercase tracking-widest">
              Ventajas Competitivas
            </span>
          </div>

          {/* Título principal */}
          <h2 className="font-['Sora'] text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[#1A3A47]">Beneficios que</span><br />
            <span className="bg-gradient-to-r from-[#2A6F9B] via-[#1F6D9F] to-[#2A6F9B] bg-clip-text text-transparent">
              transforman tu empresa
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="font-['Inter'] text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Resultados medibles que impulsan el crecimiento sostenible de tu negocio
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#2A6F9B] to-[#1F6D9F] rounded-full" />
            <div className="w-3 h-3 bg-gradient-to-br from-[#2A6F9B] to-[#1F6D9F] rounded-full rotate-45" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#1F6D9F] via-[#2A6F9B] to-transparent rounded-full" />
          </div>
        </div>

        {/* Grid 4x2 - Cards premium con animaciones de iconos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Glow effect de fondo */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
                
                {/* Card principal */}
                <div className={`relative h-full bg-gradient-to-br ${benefit.bgColor} backdrop-blur-sm rounded-3xl p-8 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}>

                  {/* Icon Circle - Con animaciones múltiples */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-500 group-hover:rotate-[-12deg]" strokeWidth={2.5} />
                    </div>
                    
                    {/* Animated rings múltiples */}
                    <div className={`absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[#1F6D9F]/30 transition-all duration-500 scale-110 group-hover:scale-125 w-20 h-20`} />
                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2A6F9B]/20 transition-all duration-700 scale-125 group-hover:scale-150 w-20 h-20`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-['Sora'] text-xl font-bold text-[#1A3A47] mb-4 leading-tight relative z-10 group-hover:text-[#1F6D9F] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed relative z-10">
                    {benefit.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-6 flex items-center gap-2 relative z-10">
                    <div className={`h-1 flex-1 bg-gradient-to-r ${benefit.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                    <div className={`w-2 h-2 bg-gradient-to-br ${benefit.gradient} rounded-full group-hover:animate-ping`} />
                  </div>

                  {/* Particle effects en hover - más partículas */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r ${benefit.gradient} rounded-full animate-float`} />
                    <div className={`absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r ${benefit.gradient} rounded-full animate-float-slow`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-2 h-2 bg-gradient-to-r ${benefit.gradient} rounded-full animate-float-slower`} />
                    <div className={`absolute top-1/2 left-1/3 w-1 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full animate-float delay-300`} />
                  </div>

                  {/* Shimmer effect en hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}