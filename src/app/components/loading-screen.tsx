import { useState, useEffect } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'VICSAN';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 200); // Velocidad de escritura

      return () => clearTimeout(timeout);
    } else {
      // Esperar un poco después de completar la escritura
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800); // Fade out duration
      }, 500);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#2A6F9B] via-[#1F6D9F] to-[#2A6F9B] transition-opacity duration-800 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1F6D9F]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1F6D9F]/20 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2A6F9B]/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo being typed */}
        <div className="relative inline-block">
          <h1 className="font-['Sora'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 tracking-tight">
            {displayedText}
            <span className="inline-block w-1 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-white ml-2 animate-blink" 
                  style={{ 
                    verticalAlign: 'middle',
                    opacity: currentIndex < fullText.length ? 1 : 0 
                  }} 
            />
          </h1>

          {/* Glow effect debajo del texto */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#0C6291] to-transparent blur-sm" />
        </div>

        {/* Subtitle animado que aparece cuando termina de escribir */}
        <div className={`transition-all duration-500 ${
          currentIndex >= fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-widest">
            ARQUITECTOS DE TU CRECIMIENTO
          </p>
        </div>

        {/* Loading dots */}
        <div className={`flex items-center justify-center gap-2 mt-8 transition-all duration-500 ${
          currentIndex >= fullText.length ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}
