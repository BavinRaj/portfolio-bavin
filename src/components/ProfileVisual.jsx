import React, { useState, useRef } from 'react';
import { Sparkles, CheckCircle2, Code2, Server, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';
import avatarPhoto from '../assets/avatar.jpg';

export default function ProfileVisual() {
  const { personal } = portfolioData;
  const [imageSrc, setImageSrc] = useState(profilePhoto);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardRef = useRef(null);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-container relative w-72 h-[390px] sm:w-80 sm:h-[430px] lg:w-[350px] lg:h-[460px] mx-auto select-none">
      {/* Dynamic Ambient Background Glow that reacts to hover */}
      <div
        className={`absolute -inset-3 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 rounded-[32px] blur-xl transition-all duration-700 -z-10 ${
          isHovered ? 'opacity-85 scale-105 blur-2xl' : 'opacity-40 scale-100 animate-pulse-slow'
        }`}
      />

      {/* Main 3D Tilting Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? '1.02' : '1'}, ${isHovered ? '1.02' : '1'}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full p-1.5 rounded-[28px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 shadow-2xl group overflow-hidden"
      >
        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-900 border border-slate-700/60 shadow-inner">
          {/* Main Photo Image - Office Black Suit Portrait with IT Badge */}
          <img
            src={imageSrc}
            alt={`${personal.name} - ${personal.title}`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Interactive Light Glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent"
            style={{
              transform: `translate(${tilt.y * 3}px, ${tilt.x * 3}px)`,
            }}
          />

          {/* Subtle Bottom Shadow Gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

          {/* Optional View Switcher Pill (Office / Studio) */}
          <div className="absolute bottom-3 right-3 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setImageSrc((prev) => (prev === profilePhoto ? avatarPhoto : profilePhoto));
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-sky-600 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-lg text-xs font-mono font-medium flex items-center gap-1.5 group/btn cursor-pointer"
              title="Click to toggle between Office portrait and Studio headshot"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover/btn:text-white" />
              <span>{imageSrc === profilePhoto ? 'Studio View' : 'Office View'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Open to Work (Top Right) */}
      <div className="absolute -top-3.5 -right-3.5 z-20 animate-float-1 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-emerald-400 text-xs font-semibold border border-emerald-500/50 backdrop-blur-md shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Open to Work</span>
        </div>
      </div>

      {/* Floating Badge 2: Java & Spring Boot (Bottom Left) */}
      <div className="absolute -bottom-3.5 -left-3.5 z-20 hidden sm:block animate-float-2 pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/95 text-sky-300 text-xs font-mono font-medium border border-sky-500/50 backdrop-blur-md shadow-xl">
          <Server className="w-4 h-4 text-sky-400" />
          <span>Java • Spring Boot</span>
        </div>
      </div>

      {/* Floating Badge 3: React & MySQL (Bottom Right) */}
      <div className="absolute -bottom-3.5 right-4 z-20 hidden sm:block animate-float-3 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/50 backdrop-blur-md shadow-xl">
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>React • MySQL</span>
        </div>
      </div>
    </div>
  );
}
