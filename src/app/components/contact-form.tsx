import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const services = [
  'Modelado y Gestión de Procesos',
  'Diagnóstico Empresarial',
  'Optimización y Digitalización de Procesos',
  'Digitalización de Procesos',
  'Cumplimiento SUNAFIL',
  'Asesoría Tributaria'
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    dni: '',
    email: '',
    company: '',
    phone: '',
    service: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        dni: '',
        email: '',
        company: '',
        phone: '',
        service: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* CTA FINAL - Mejorado con gradiente y texto emocional */}
      <section id="contacto" className="relative py-20 bg-gradient-to-br from-[#2A6F9B] via-[#2A6F9B] to-[#1F6D9F] overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F6D9F] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Sora'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para ordenar tu empresa y crecer?
          </h2>
          <p className="font-['Inter'] text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos transformar tu negocio
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-['Inter'] px-12 py-5 bg-white text-[#2A6F9B] font-bold text-lg rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 duration-300"
          >
            Agendar Diagnóstico Gratis
          </button>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO - Layout 2 columnas simple */}
      <section id="contacto" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Layout 2 Columnas */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* IZQUIERDA - Frase simple */}
            <div>
              <h2 className="font-['Sora'] text-5xl md:text-6xl font-bold text-[#2E6175] mb-6 leading-tight">
                Hablemos de tu empresa
              </h2>
              <p className="font-['Inter'] text-xl text-gray-600 mb-8 leading-relaxed">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>

              {/* Decorative Element */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-1 w-24 bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F6D9F] to-transparent rounded-full" />
              </div>

              {/* Quick Contact Info - Minimalista */}
              <div className="space-y-4 text-gray-600">
                <p className="font-['Inter'] text-sm">
                  📧 <a href="mailto:contacto@vicsanconsultores.com" className="hover:text-[#1F6D9F] transition-colors">contacto@vicsanconsultores.com</a>
                </p>
                <p className="font-['Inter'] text-sm">
                  📱 <a href="tel:+51941928096" className="hover:text-[#1F6D9F] transition-colors">+51 941 928 096</a>
                </p>
                <p className="font-['Inter'] text-sm">
                  📍 Lima, Perú
                </p>
              </div>
            </div>

            {/* DERECHA - Formulario */}
            <div className="relative">
              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 text-center border border-green-200 shadow-xl">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-['Sora'] text-2xl font-bold text-green-900 mb-3">
                    Solicitud Enviada
                  </h4>
                  <p className="font-['Inter'] text-green-700">
                    Nos pondremos en contacto contigo pronto
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-10 shadow-xl border border-gray-200">
                  <div className="space-y-6">
                    {/* Nombre */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>

                    {/* DNI */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        DNI
                      </label>
                      <input
                        type="text"
                        name="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                        placeholder="12345678"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                        placeholder="+51 941 928 096"
                      />
                    </div>

                    {/* Servicio */}
                    <div>
                      <label className="font-['Inter'] text-sm font-semibold text-gray-700 mb-2 block">
                        Servicio de interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl font-['Inter'] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1F6D9F] focus:border-transparent transition-all"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full font-['Inter'] px-8 py-5 bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] duration-300 flex items-center justify-center gap-3"
                    >
                      Enviar solicitud
                      <Send className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}