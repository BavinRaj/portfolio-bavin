import React, { useState, useRef } from 'react';
import { Camera, Sparkles, CheckCircle2, Code2, Server, Database, UploadCloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProfileVisual() {
  const { personal } = portfolioData;
  const [imageSrc, setImageSrc] = useState(personal.profileImage || `${import.meta.env.BASE_URL}profile.jpg`);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const cardRef = useRef(null);
  const fileInputRef = useRef(null);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10; // max 10 deg tilt
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCustomImage = (file) => {
    if (file && file.type.startsWith('image/')) {
      const newUrl = URL.createObjectURL(file);
      setImageSrc(newUrl);
      setHasError(false);
    }
  };

  const onFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleCustomImage(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleCustomImage(file);
  };

  return (
    <div className="perspective-container relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] mx-auto select-none">
      {/* Dynamic Ambient Background Glow that reacts to hover */}
      <div
        className={`absolute -inset-3 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 rounded-[32px] blur-xl transition-all duration-700 -z-10 ${
          isHovered ? 'opacity-80 scale-105 blur-2xl' : 'opacity-35 scale-100 animate-pulse'
        }`}
      />

      {/* Main 3D Tilting Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? '1.03' : '1'}, ${isHovered ? '1.03' : '1'}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full p-1.5 rounded-[28px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 shadow-2xl cursor-pointer group"
      >
        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-900 border border-slate-700/60 shadow-inner">
          {/* Main Photo Image with Zoom on Hover */}
          {!hasError ? (
            <img
              src={imageSrc}
              alt={`${personal.name} - ${personal.title}`}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            /* Fallback Avatar */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-center p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold font-mono shadow-glow-md mb-3">
                BM
              </div>
              <h3 className="text-lg font-bold text-white">{personal.name}</h3>
              <p className="text-xs text-sky-400 font-medium mt-1">{personal.title}</p>
            </div>
          )}

          {/* Drag & Drop Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-sky-950/90 border-2 border-dashed border-sky-400 flex flex-col items-center justify-center text-white z-20 animate-in fade-in duration-150">
              <UploadCloud className="w-12 h-12 text-sky-400 animate-bounce mb-2" />
              <p className="text-sm font-semibold">Drop your photo here</p>
            </div>
          )}

          {/* Interactive Light Glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-transparent via-white to-transparent"
            style={{
              transform: `translate(${tilt.y * 3}px, ${tilt.x * 3}px)`,
            }}
          />

          {/* Subtle Bottom Shadow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Hidden File Input for Custom Photo Selection */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileInputChange}
            accept="image/*"
            className="hidden"
            aria-label="Upload custom profile photo"
          />

          {/* Change Photo / Upload Overlay Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-slate-900/85 hover:bg-sky-600 text-white/90 hover:text-white border border-slate-700/70 backdrop-blur-md transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 group/btn"
            title="Click to choose your own photo (or save as public/profile.jpg)"
            aria-label="Upload your own photo"
          >
            <Camera className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </button>
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
      <div className="absolute -bottom-3.5 right-12 z-20 hidden sm:block animate-float-3 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/50 backdrop-blur-md shadow-xl">
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>React • MySQL</span>
        </div>
      </div>
    </div>
  );
}
