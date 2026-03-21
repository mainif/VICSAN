import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8">
        
        {/* 3 Columnas */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Columna 1: Logo + Frase */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg width="42" height="42" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="34" height="34" stroke="white" strokeWidth="2" fill="none" rx="3"/>
                <rect x="7" y="24" width="4" height="9" fill="white" rx="1"/>
                <rect x="14" y="19" width="4" height="14" fill="white" rx="1"/>
                <rect x="21" y="14" width="4" height="19" fill="white" rx="1"/>
                <rect x="28" y="10" width="4" height="23" fill="white" rx="1"/>
                <path d="M 9 24 L 16 19 L 23 14 L 30 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="24" r="2.5" fill="white" stroke="white" strokeWidth="1"/>
                <circle cx="23" cy="14" r="2.5" fill="white" stroke="white" strokeWidth="1"/>
                <circle cx="30" cy="10" r="2.5" fill="white" stroke="white" strokeWidth="1"/>
              </svg>
              <span className="font-['Sora'] text-2xl font-bold text-white">VICSAN</span>
            </div>
            
            {/* Frase */}
            <p className="font-['Inter'] text-lg text-white/90 leading-relaxed mb-6">
              Arquitectos de tu crecimiento empresarial
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1F6D9F] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-['Sora'] text-lg font-bold text-white mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-['Inter'] text-white/80 hover:text-[#1F6D9F] transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-['Sora'] text-lg font-bold text-white mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1F6D9F] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a 
                  href="mailto:contacto@vicsanconsultores.com" 
                  className="font-['Inter'] text-white/80 hover:text-[#1F6D9F] transition-colors text-sm"
                >
                  contacto@vicsanconsultores.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1F6D9F] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <a 
                  href="tel:+51941928096" 
                  className="font-['Inter'] text-white/80 hover:text-[#1F6D9F] transition-colors text-sm"
                >
                  +51 941 928 096
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1F6D9F] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="font-['Inter'] text-white/80 text-sm">
                  Lima, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-['Inter'] text-sm text-white/60">
            © {currentYear} VICSAN Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
