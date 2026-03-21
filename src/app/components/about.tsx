import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      title: 'Nuestra Misión',
      description: 'Acompañar a MYPES y PYMES en su transformación hacia una gestión eficiente y competitiva.',
      icon: Target,
      color: 'from-[#2A6F9B] to-[#2A6F9B]'
    },
    {
      title: 'Nuestra Visión',
      description: 'Ser el aliado estratégico líder en consultoría empresarial en el Perú.',
      icon: Eye,
      color: 'from-[#2A6F9B] to-[#1F6D9F]'
    },
    {
      title: 'Nuestros Valores',
      description: 'Excelencia, compromiso, innovación y transparencia en cada proyecto.',
      icon: Heart,
      color: 'from-[#1F6D9F] to-[#2A6F9B]'
    }
  ];

  return (
    <section id="quienes-somos" className="relative py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Layout 2 Columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* IZQUIERDA - Texto Corto */}
          <div>
            <h2 className="font-['Sora'] text-5xl md:text-6xl font-bold text-[#2A6F9B] mb-6 leading-tight">
              Quiénes Somos
            </h2>
            <p className="font-['Inter'] text-xl text-gray-700 leading-relaxed mb-8">
              Somos <span className="font-bold text-[#1F6D9F]">VICSAN Consultores</span>, una firma de asesoría empresarial especializada en transformar la gestión de MYPES y PYMES.
            </p>
            <p className="font-['Inter'] text-lg text-gray-600 leading-relaxed">
              Convertimos el caos en procesos eficientes, brindando soluciones integrales en gestión, cumplimiento normativo y digitalización.
            </p>

            {/* Decorative Element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] rounded-full" />
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F6D9F] to-transparent rounded-full" />
            </div>
          </div>

          {/* DERECHA - 3 Cards */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1F6D9F]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Icon Circle */}
                  <div className={`absolute -left-6 top-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <div className="pl-14">
                    <h3 className="font-['Sora'] text-xl font-bold text-[#2A6F9B] mb-3">
                      {value.title}
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}