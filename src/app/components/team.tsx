import { Linkedin } from 'lucide-react';
import sophiaImg from '../../assets/639536db615fdd2a78dda8ca9f8d1c68c9760d61.png';
import kristinaImg from '../../assets/1e52ac86b8c5a1f78e3f2bbbfe92d1742706bd58.png';
import luisImg from '../../assets/38aeb005fc78731ba4c56364a6221065eabc16a6.png';
import mariaImg from '../../assets/f5806b1b9d571c9a64c8410d2f1d1c658db7be19.png';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin: string;
  imageUrl: string;
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: 'Sophia Castañeda',
      role: 'Ingeniera Empresarial',
      description: 'Gestión de procesos y mejora continua para MYPES.',
      linkedin: 'https://pe.linkedin.com/in/sophia-castanedas',
      imageUrl: sophiaImg
    },
    {
      name: 'Luis Angeles Sánchez',
      role: 'Consultor de Cumplimiento',
      description: 'Especialista en Seguridad y Salud Ocupacional ante SUNAFIL.',
      linkedin: 'https://pe.linkedin.com/in/luis-alberto-angeles-s%C3%A1nchez-688aa262',
      imageUrl: luisImg
    },
    {
      name: 'María Moya',
      role: 'Arquitecta UX de Procesos',
      description: 'Diseño de experiencias operativas eficientes y centradas en el usuario.',
      linkedin: 'https://www.linkedin.com/in/moyamaria/',
      imageUrl: kristinaImg
    },
    {
      name: 'Carlos Mendoza',
      role: 'Consultor Financiero',
      description: 'Estratega en rentabilidad y gestión de recursos empresariales.',
      linkedin: 'https://www.linkedin.com/in/carlos-mendoza',
      imageUrl: 'https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3MwYW4lMjBjb25zdWx0YW50lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc0MDU1ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Kristina Bravo',
      role: 'Ingeniería de Negocios',
      description: 'Especialista en estrategias de transformación empresarial.',
      linkedin: 'https://www.linkedin.com/in/kristina-bravo',
      imageUrl: mariaImg
    },
    {
      name: 'Vivian Jiménez Quispe',
      role: 'Gerente General',
      description: 'Liderazgo estratégico y visión empresarial de alto impacto.',
      linkedin: 'https://www.linkedin.com/in/vivian-jimenez-quispe',
      imageUrl: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwY29uc3VsdGFudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDA1NTg1Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Santiago Neira Torres',
      role: 'Socio Fundador',
      description: 'Innovación y desarrollo de soluciones estratégicas empresariales.',
      linkedin: 'https://www.linkedin.com/in/santiago-neira-torres',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    }
  ];

  return (
    <section id="equipo" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#2A6F9B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1F6D9F]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2A6F9B]/10 to-[#1F6D9F]/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            <div className="w-3 h-3 bg-[#1F6D9F] rounded-full animate-pulse" />
            <span className="font-['Inter'] text-sm font-bold text-[#1F6D9F] uppercase tracking-wider">
              Expertise Multidisciplinario
            </span>
          </div>
          <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#1A3A47]">El equipo que</span><br className="hidden md:block" />
            <span className="text-[#1F6D9F]"> impulsa tu MYPE</span>
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Combinamos visión estratégica y ejecución técnica para garantizar resultados reales y escalables.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#2A6F9B] to-[#1F6D9F] rounded-full"></div>
            <span className="font-['Inter'] text-xs font-bold text-gray-400 uppercase tracking-widest">7 Expertos</span>
            <div className="h-1 w-16 bg-gradient-to-r from-[#1F6D9F] via-[#2A6F9B] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Mobile/Tablet: Grid vertical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:hidden">
          {team.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 hover:border-[#0C6291]/40 flex flex-col max-w-[400px] mx-auto w-full"
              style={{ animation: `fadeInScale 0.8s ease-out ${index * 0.1}s both` }}
            >
              {/* Image Section - Foto circular con marco */}
              <div className="relative p-6 pb-3">
                <div className="relative w-full aspect-square max-w-[180px] mx-auto">
                  {/* Foto circular con borde degradado */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2E6175] to-[#0C6291] p-1.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1.5">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-center rounded-full transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Badge - Flotante */}
                  <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-gradient-to-br from-[#2E6175] to-[#0C6291] flex items-center justify-center shadow-xl transform transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 z-10">
                    <Linkedin className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#0C6291]/0 group-hover:border-[#0C6291]/20 transition-all duration-500 scale-95 group-hover:scale-105" />
                </div>
              </div>

              {/* Content Section - Con descripción completa */}
              <div className="px-6 pb-6 pt-2 flex-1 flex flex-col text-center">
                {/* Nombre */}
                <h3 className="font-['Sora'] text-lg font-bold text-[#1A3A47] mb-2 leading-tight group-hover:text-[#0C6291] transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Rol - Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#2E6175]/10 to-[#0C6291]/10 text-[#0C6291] rounded-full text-xs font-bold uppercase tracking-wide">
                    {member.role}
                  </span>
                </div>

                {/* Descripción - Siempre visible */}
                <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed flex-1">
                  {member.description}
                </p>

                {/* Divider decorativo */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-1 w-6 bg-gradient-to-r from-transparent to-[#0C6291]/30 rounded-full group-hover:w-10 transition-all duration-300" />
                    <div className="w-2 h-2 bg-[#0C6291] rounded-full" />
                    <div className="h-1 w-6 bg-gradient-to-l from-transparent to-[#0C6291]/30 rounded-full group-hover:w-10 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2E6175] via-[#1D6283] to-[#0C6291] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C6291]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            </a>
          ))}
        </div>

        {/* Desktop: Carrusel automático infinito - Solo desktop */}
        <div className="hidden xl:block relative">
          <div className="overflow-hidden pb-8">
            {/* Carrusel que se mueve automáticamente */}
            <div className="flex gap-6 animate-scroll-infinite hover:pause-animation">
              {/* Duplicamos el array 3 veces para loop infinito perfecto */}
              {[...team, ...team, ...team].map((member, index) => (
                <a
                  key={`member-${index}`}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 hover:border-[#0C6291]/40 flex flex-col flex-shrink-0 w-[320px]"
                >
                  {/* Image Section - Foto circular con marco */}
                  <div className="relative p-6 pb-3">
                    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
                      {/* Foto circular con borde degradado */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2E6175] to-[#0C6291] p-1.5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1.5">
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover object-center rounded-full transition-all duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* LinkedIn Badge - Flotante */}
                      <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-gradient-to-br from-[#2E6175] to-[#0C6291] flex items-center justify-center shadow-xl transform transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 z-10">
                        <Linkedin className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>

                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-[#0C6291]/0 group-hover:border-[#0C6291]/20 transition-all duration-500 scale-95 group-hover:scale-105" />
                    </div>
                  </div>

                  {/* Content Section - Con descripción completa */}
                  <div className="px-6 pb-6 pt-2 flex-1 flex flex-col text-center">
                    {/* Nombre */}
                    <h3 className="font-['Sora'] text-xl font-bold text-[#1A3A47] mb-2 leading-tight group-hover:text-[#0C6291] transition-colors duration-300">
                      {member.name}
                    </h3>

                    {/* Rol - Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#2E6175]/10 to-[#0C6291]/10 text-[#0C6291] rounded-full text-xs font-bold uppercase tracking-wide">
                        {member.role}
                      </span>
                    </div>

                    {/* Descripción - Siempre visible */}
                    <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed flex-1">
                      {member.description}
                    </p>

                    {/* Divider decorativo */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-1 w-8 bg-gradient-to-r from-transparent to-[#0C6291]/30 rounded-full group-hover:w-12 transition-all duration-300" />
                        <div className="w-2 h-2 bg-[#0C6291] rounded-full" />
                        <div className="h-1 w-8 bg-gradient-to-l from-transparent to-[#0C6291]/30 rounded-full group-hover:w-12 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2E6175] via-[#1D6283] to-[#0C6291] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C6291]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Indicador de scroll infinito */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 bg-[#0C6291] rounded-full animate-pulse" />
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-266px * 7 - 24px * 7));
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 35s linear infinite;
        }

        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(12, 98, 145, 0.2);
          border-radius: 10px;
        }
        .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background: rgba(12, 98, 145, 0.4);
        }
      `}</style>
    </section>
  );
}