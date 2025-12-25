import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Semi-transparent background overlay - 50% opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-900/40 to-slate-950/50" />
      
      {/* Epic lighting system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive pulsing orbs with color variation */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-blue-600/40 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/40 via-pink-500/30 to-purple-600/40 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-t from-emerald-500/30 via-teal-500/20 to-emerald-600/30 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Rotating light rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-spin-very-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full blur-sm shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full blur-sm shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-sm shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>
        
        {/* Vertical light beams with color */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-beam" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-beam" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-beam" style={{ animationDelay: '2s' }} />
        
        {/* Diagonal light rays */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent rotate-12 animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -rotate-12 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
        {/* Enhanced floating light particles */}
        <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-blue-400 rounded-full blur-sm animate-float-glow shadow-[0_0_30px_rgba(59,130,246,1)]" />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-purple-400 rounded-full blur-sm animate-float-glow shadow-[0_0_25px_rgba(168,85,247,1)]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[25%] left-[15%] w-4 h-4 bg-emerald-400 rounded-full blur-sm animate-float-glow shadow-[0_0_30px_rgba(52,211,153,1)]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] right-[25%] w-3.5 h-3.5 bg-cyan-400 rounded-full blur-sm animate-float-glow shadow-[0_0_28px_rgba(34,211,238,1)]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[45%] left-[12%] w-3 h-3 bg-pink-400 rounded-full blur-sm animate-float-glow shadow-[0_0_25px_rgba(236,72,153,1)]" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[40%] right-[18%] w-2.5 h-2.5 bg-yellow-400 rounded-full blur-sm animate-float-glow shadow-[0_0_22px_rgba(250,204,21,1)]" style={{ animationDelay: '5s' }} />
        <div className="absolute top-[70%] left-[30%] w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-float-glow shadow-[0_0_25px_rgba(129,140,248,1)]" style={{ animationDelay: '6s' }} />
        
        {/* Sparkle effects */}
        <div className="absolute top-[30%] left-[40%] w-1 h-1 bg-white rounded-full animate-sparkle shadow-[0_0_10px_rgba(255,255,255,1)]" />
        <div className="absolute top-[55%] right-[35%] w-1 h-1 bg-white rounded-full animate-sparkle shadow-[0_0_10px_rgba(255,255,255,1)]" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-[35%] left-[45%] w-1 h-1 bg-white rounded-full animate-sparkle shadow-[0_0_10px_rgba(255,255,255,1)]" style={{ animationDelay: '2.4s' }} />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.3)_100%)]" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in text-slate-50 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block ml-3 drop-shadow-[0_0_50px_var(--primary)] drop-shadow-[0_0_100px_var(--primary)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Anaj
            </span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2 inline-block drop-shadow-[0_0_50px_rgba(168,85,247,0.7)] drop-shadow-[0_0_100px_rgba(168,85,247,0.5)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Krishna
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] leading-relaxed">
            AI and Machine Learning specialist with a strong foundation in Data Science, focused on building smart, 
            full stack applications. Experienced in turning data-driven insights into scalable, real-world solutions with clean, efficient code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button relative group">
              {/* Multiple glow layers */}
              <span className="absolute -inset-6 bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full animate-pulse-slow" />
              <span className="absolute -inset-4 bg-primary/40 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative">View My Work</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-sm text-slate-300 mb-3 animate-pulse drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Scroll</span>
        <div className="relative">
          {/* Triple glow layers with different colors */}
          <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-2xl animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-purple-400/40 blur-xl animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute inset-0 rounded-full bg-primary/50 blur-md animate-pulse" style={{ animationDelay: '0.6s' }} />
          <ArrowDown className="relative h-5 w-5 text-primary animate-bounce drop-shadow-[0_0_20px_var(--primary)] drop-shadow-[0_0_40px_var(--primary)]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-glow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          20% {
            transform: translate(-25px, -40px) scale(1.3);
            opacity: 1;
          }
          40% {
            transform: translate(20px, -25px) scale(0.8);
            opacity: 0.8;
          }
          60% {
            transform: translate(-15px, -45px) scale(1.2);
            opacity: 0.95;
          }
          80% {
            transform: translate(18px, -30px) scale(0.9);
            opacity: 0.85;
          }
        }
        
        @keyframes beam {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
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
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
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
        
        .animate-beam {
          animation: beam 10s linear infinite;
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