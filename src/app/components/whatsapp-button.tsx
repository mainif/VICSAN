import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '51941928096'; // +51 941 928 096
  const message = encodeURIComponent('¡Hola! Me gustaría solicitar información sobre sus servicios de consultoría.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Glow Effect */}
      <div className="absolute -inset-2 rounded-full bg-[#25D366] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
      
      {/* Main Button */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group-hover:bg-[#20BA5A]">
        <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap">
        <div className="bg-[#1e5a7d] text-white px-4 py-2.5 rounded-xl font-['Inter'] text-sm font-semibold shadow-xl">
          ¿Necesitas ayuda? Escríbenos
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#1e5a7d] border-b-[6px] border-b-transparent" />
          </div>
        </div>
      </div>
    </a>
  );
}