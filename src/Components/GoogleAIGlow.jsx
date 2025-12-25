import React from "react";

export function GoogleAIGlow() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-[3px] z-50 overflow-hidden">
      <div className="w-full h-full animate-ai-glow bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%]" />
    </div>
  );
}
