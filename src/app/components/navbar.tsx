import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Equipo", href: "#equipo" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Quiénes somos", href: "#quienes-somos" }
  ];

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 pointer-events-auto">
          <div className="relative h-[100px]">
            <svg 
              className="absolute block w-full h-full drop-shadow-lg" 
              fill="none" 
              preserveAspectRatio="none" 
              viewBox="0 0 812.047 104.391"
            >
              <g clipPath="url(#clip0_navbar)">
                <path 
                  d="M0 0L29.0017 78.293C32.8685 85.5917 38.3361 91.1914 45.4037 94.6914C52.4713 98.1914 58.1537 95.6914 63.8037 95.6914H748.243C753.893 95.6914 759.5754 98.1914 766.643 94.6914C773.7106 91.1914 779.1782 85.5917 783.045 78.293L812.047 0Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_navbar">
                  <rect fill="white" height="104.391" width="812.047" />
                </clipPath>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-between px-16 lg:px-24 py-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="34" height="34" stroke="#2E6175" strokeWidth="2" fill="none" rx="3"/>
                    <rect x="7" y="24" width="4" height="9" fill="#2E6175" rx="1"/>
                    <rect x="14" y="19" width="4" height="14" fill="#2E6175" rx="1"/>
                    <rect x="21" y="14" width="4" height="19" fill="#2E6175" rx="1"/>
                    <rect x="28" y="10" width="4" height="23" fill="#2E6175" rx="1"/>
                    <path d="M 9 24 L 16 19 L 23 14 L 30 10" stroke="#0C6291" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="24" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                    <circle cx="23" cy="14" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                    <circle cx="30" cy="10" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="font-['Sora'] text-xl lg:text-2xl font-bold text-[#2E6175] tracking-tight">
                  VICSAN
                </span>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-8 lg:gap-12 flex-1 justify-center font-['Inter']">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium text-gray-700 hover:text-[#0C6291] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* CTA Button - Gradiente */}
              <button 
                onClick={scrollToContact}
                className="px-6 lg:px-8 py-2.5 lg:py-3 bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] text-white font-['Inter'] font-semibold text-sm rounded-full hover:shadow-lg transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="34" height="34" stroke="#2E6175" strokeWidth="2" fill="none" rx="3"/>
                  <rect x="7" y="24" width="4" height="9" fill="#2E6175" rx="1"/>
                  <rect x="14" y="19" width="4" height="14" fill="#2E6175" rx="1"/>
                  <rect x="21" y="14" width="4" height="19" fill="#2E6175" rx="1"/>
                  <rect x="28" y="10" width="4" height="23" fill="#2E6175" rx="1"/>
                  <path d="M 9 24 L 16 19 L 23 14 L 30 10" stroke="#0C6291" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="24" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                  <circle cx="23" cy="14" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                  <circle cx="30" cy="10" r="2.5" fill="white" stroke="#2E6175" strokeWidth="2"/>
                </svg>
                <span className="font-['Sora'] text-lg font-bold text-[#2E6175] tracking-tight">
                  VICSAN
                </span>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#2E6175] hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1F6D9F] hover:bg-gray-50 rounded-lg transition-colors font-['Inter']"
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#2A6F9B] to-[#1F6D9F] text-white font-['Inter'] font-semibold text-sm rounded-full hover:shadow-lg transition-all"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}