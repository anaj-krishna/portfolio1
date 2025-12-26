import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Light semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-slate-900/25 to-slate-950/30" />
      
      {/* Clean Google RGB lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Google Blue orb */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#4285F4]/40 rounded-full blur-[150px] animate-pulse-slow" />
        
        {/* Google Red orb */}
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#EA4335]/40 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Google Yellow orb */}
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FBBC05]/35 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Google Green orb */}
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#34A853]/35 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Rotating Google color particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-spin-very-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#4285F4] rounded-full blur-[2px] shadow-[0_0_30px_#4285F4,0_0_60px_#4285F4]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#EA4335] rounded-full blur-[2px] shadow-[0_0_30px_#EA4335,0_0_60px_#EA4335]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#34A853] rounded-full blur-[2px] shadow-[0_0_30px_#34A853,0_0_60px_#34A853]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FBBC05] rounded-full blur-[2px] shadow-[0_0_30px_#FBBC05,0_0_60px_#FBBC05]" />
        </div>
        
        {/* Floating Google color particles */}
        <div className="absolute top-[20%] left-[25%] w-4 h-4 bg-[#4285F4] rounded-full blur-[2px] animate-float-glow shadow-[0_0_30px_#4285F4]" />
        <div className="absolute top-[30%] right-[20%] w-4 h-4 bg-[#EA4335] rounded-full blur-[2px] animate-float-glow shadow-[0_0_30px_#EA4335]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-[#34A853] rounded-full blur-[2px] animate-float-glow shadow-[0_0_30px_#34A853]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[60%] right-[30%] w-4 h-4 bg-[#FBBC05] rounded-full blur-[2px] animate-float-glow shadow-[0_0_30px_#FBBC05]" style={{ animationDelay: '4.5s' }} />
        
        {/* Sparkles */}
        <div className="absolute top-[35%] left-[45%] w-2 h-2 bg-white rounded-full animate-sparkle shadow-[0_0_20px_rgba(255,255,255,1)]" />
        <div className="absolute top-[55%] right-[40%] w-2 h-2 bg-white rounded-full animate-sparkle shadow-[0_0_20px_rgba(255,255,255,1)]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[40%] left-[50%] w-2 h-2 bg-white rounded-full animate-sparkle shadow-[0_0_20px_rgba(255,255,255,1)]" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] drop-shadow-[0_4px_15px_rgba(0,0,0,1)]">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block ml-3 drop-shadow-[0_0_50px_var(--primary)] drop-shadow-[0_0_100px_var(--primary)] drop-shadow-[0_6px_20px_rgba(0,0,0,1)]">
              Anaj
            </span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2 inline-block drop-shadow-[0_0_50px_rgba(168,85,247,0.7)] drop-shadow-[0_0_100px_rgba(168,85,247,0.5)] drop-shadow-[0_6px_20px_rgba(0,0,0,1)]">
              Krishna
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 drop-shadow-[0_0_30px_rgba(0,0,0,1)] leading-relaxed">
            AI and Machine Learning specialist with a strong foundation in Data Science, focused on building smart, 
            full stack applications. Experienced in turning data-driven insights into scalable, real-world solutions with clean, efficient code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button relative group">
              {/* Google rainbow glow */}
              <span className="absolute -inset-6 bg-gradient-to-r from-[#4285F4]/30 via-[#EA4335]/30 to-[#34A853]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full animate-pulse-slow" />
              <span className="absolute -inset-4 bg-gradient-to-r from-[#4285F4]/40 via-[#FBBC05]/40 to-[#34A853]/40 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative">View My Work</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-sm text-white/80 mb-3 animate-pulse drop-shadow-[0_0_15px_rgba(0,0,0,1)]">Scroll</span>
        <div className="relative">
          {/* Google rainbow glow layers */}
          <div className="absolute inset-0 rounded-full bg-[#4285F4]/50 blur-2xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-[#EA4335]/40 blur-xl animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute inset-0 rounded-full bg-[#FBBC05]/40 blur-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="absolute inset-0 rounded-full bg-[#34A853]/40 blur-md animate-pulse" style={{ animationDelay: '0.9s' }} />
          <ArrowDown className="relative h-5 w-5 text-white animate-bounce drop-shadow-[0_0_20px_#4285F4]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-glow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(-20px, -30px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translate(15px, -20px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translate(-10px, -35px) scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }
        
        @keyframes spin-very-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-float-glow {
          animation: float-glow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};