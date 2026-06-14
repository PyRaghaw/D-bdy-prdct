'use client';

import { useRef, useEffect, useState } from 'react';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';
import ShapeGrid from '@/components/ui/ShapeGrid';
import { PhoneFrame } from './ui/PhoneFrame';

const MOBILE_BREAKPOINT = 768;

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface CustomBentoCard {
  label: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  screenshot?: string;
  bullets?: string[];
  imagePosition?: string;
  glow: string;
}

export function MagicBento() {
  const isMobile = useMobileDetection();
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardData: CustomBentoCard[] = [
    {
      label: "AI Scanner",
      title: "Smart OCR Scanner",
      description: "Instantly digitize prescriptions and summaries into digital schedules.",
      icon: "📷",
      iconBg: "bg-purple-50",
      screenshot: "/screenshots/scan-bento.png",
      imagePosition: "center top",
      glow: "rgba(147, 51, 234, 0.12)" // Purple
    },
    {
      label: "Voice Assistant",
      title: "Voice-First Assistant",
      description: "Speak naturally to log medicines or query first-aid in multi-languages.",
      bullets: [
        "Hindi, English & 12+ languages",
        "Hands-free logs & quick checks",
        "Natural, low-latency audio feed"
      ],
      icon: "🎙️",
      iconBg: "bg-indigo-50",
      screenshot: "/screenshots/voice-first.png",
      imagePosition: "center 80%",
      glow: "rgba(99, 102, 241, 0.12)" // Indigo
    },
    {
      label: "Safety Checker",
      title: "Drug Interaction Checker",
      description: "Check your medications for conflicts and dangerous drug combinations instantly.",
      bullets: [
        "Cross-references multi-drug lists",
        "Identifies mild, moderate & severe interactions",
        "Provides doctor spacing guidance summaries"
      ],
      icon: "🛡️",
      iconBg: "bg-emerald-50",
      screenshot: "/screenshots/drug-interaction.png",
      imagePosition: "center top",
      glow: "rgba(16, 185, 129, 0.12)" // Emerald
    },
    {
      label: "Risk Monitor",
      title: "Live Risk Monitor",
      description: "Tracks symptoms and vital logs in real-time with risk warnings.",
      icon: "🚨",
      iconBg: "bg-rose-50",
      screenshot: "/screenshots/symptoms-bento.jpeg",
      imagePosition: "center top",
      glow: "rgba(244, 63, 94, 0.12)" // Rose
    },
    {
      label: "Emergency Hub",
      title: "Smart SOS Emergency",
      description: "Rapid tap, voice triggers, or shakes notify caregivers with location.",
      icon: "🆘",
      iconBg: "bg-red-50",
      screenshot: "/screenshots/smart-sos-bento.jpeg",
      imagePosition: "center top",
      glow: "rgba(239, 68, 68, 0.12)" // Red
    },
    {
      label: "Offline SOS",
      title: "Offline Emergency Mode",
      description: "First-aid guidance and peer location sharing function fully off-grid.",
      bullets: [
        "Local peer mesh connections",
        "Pre-downloaded offline maps",
        "First-aid database lookups"
      ],
      icon: "📴",
      iconBg: "bg-emerald-50",
      screenshot: "/screenshots/offline-emergency.png",
      imagePosition: "center 32%",
      glow: "rgba(16, 185, 129, 0.12)" // Emerald
    }
  ];

  // Auto-play timer effect (5 seconds per tab)
  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) return;
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % cardData.length);
          return 0;
        }
        return prev + 1; // Increment progress
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isPaused, cardData.length]);

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // max 8deg tilt for PhoneFrame
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  return (
    <>
      <style jsx global>{`
        .phone-screen-anim {
          animation: phoneScreenFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes phoneScreenFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.97);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        
        .progress-bar-fill {
          transition: width 0.05s linear;
        }
      `}</style>

      {/* Desktop Split Layout */}
      <div className="hidden md:flex flex-row gap-10 items-stretch justify-between w-full max-w-[76rem] mx-auto mt-4 select-none relative z-10 min-h-[580px]">
        {/* Left column - tab buttons */}
        <div 
          className="flex flex-col gap-3 w-[410px] shrink-0 justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cardData.map((card, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleTabClick(idx)}
                className={`group flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer w-full ${
                  isActive
                    ? 'border-brand/40 bg-brand-light/5 shadow-md shadow-brand/5'
                    : 'border-slate-200/60 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent pointer-events-none" />
                )}

                {/* Left Side Icon */}
                <div className={`w-[38px] h-[38px] rounded-xl flex items-center justify-center text-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.iconBg}`}>
                  {card.icon}
                </div>

                {/* Right Side Copy */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-bricolage)] font-black text-slate-900 text-[14px] leading-tight">
                      {card.title}
                    </span>
                    {isActive && (
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand px-1.5 py-0.5 rounded bg-brand/10">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed mt-1">
                    {card.description}
                  </p>
                </div>

                {/* Active progress bar filler */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-0 h-[2.5px] bg-brand progress-bar-fill"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right column - Mockup phone showcase */}
        <div className="flex-1 flex items-center justify-center relative bg-gradient-to-tr from-brand-light/20 via-slate-50 to-white rounded-[32px] border border-slate-100/80 p-8 shadow-inner overflow-hidden min-h-[580px]">
          {/* Volumetric background glow */}
          <div 
            className="absolute w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out" 
            style={{ backgroundColor: cardData[activeIdx].glow }}
          />

          {/* Perspective container */}
          <div 
            className="relative flex items-center justify-center w-full h-full"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            {/* Wrapper for 3D tilt */}
            <div 
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Premium Hero Mockup PhoneFrame */}
              <PhoneFrame size="main" premium>
                {/* Screen Content */}
                <div className="relative w-full h-[500px] bg-slate-950 overflow-hidden">
                  <img
                    key={activeIdx}
                    src={cardData[activeIdx].screenshot}
                    alt={cardData[activeIdx].title}
                    className="w-full h-full object-cover phone-screen-anim absolute inset-0 animate-fade-in"
                    style={{ objectPosition: cardData[activeIdx].imagePosition || 'center top' }}
                  />
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Swipeable Deck Layout */}
      <div className="flex md:hidden flex-col items-center gap-6 w-full px-2 select-none relative z-10">
        {/* Large centered phone mock */}
        <div className="relative w-full max-w-[270px] h-[460px] rounded-[36px] bg-gradient-to-tr from-brand-light/10 via-slate-50 to-white flex items-center justify-center border border-slate-100 p-4 shadow-sm">
          {/* Backing glow */}
          <div 
            className="absolute w-[200px] h-[200px] rounded-full blur-2xl pointer-events-none transition-all duration-700 ease-out" 
            style={{ backgroundColor: cardData[activeIdx].glow }}
          />

          {/* Phone frame matching Hero style */}
          <div className="relative transform scale-[0.82] origin-center">
            <PhoneFrame size="main" premium>
              <div className="relative w-full h-[500px] bg-slate-950 overflow-hidden">
                <img
                  key={activeIdx}
                  src={cardData[activeIdx].screenshot}
                  alt={cardData[activeIdx].title}
                  className="w-full h-full object-cover phone-screen-anim absolute inset-0"
                  style={{ objectPosition: cardData[activeIdx].imagePosition || 'center top' }}
                />
              </div>
            </PhoneFrame>
          </div>

          {/* Swipe helper buttons */}
          <button 
            type="button"
            onClick={() => handleTabClick((activeIdx - 1 + cardData.length) % cardData.length)}
            className="absolute left-2 w-8 h-8 rounded-full bg-white/95 border border-slate-100 shadow flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-50 active:scale-90"
          >
            ←
          </button>
          <button 
            type="button"
            onClick={() => handleTabClick((activeIdx + 1) % cardData.length)}
            className="absolute right-2 w-8 h-8 rounded-full bg-white/95 border border-slate-100 shadow flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-50 active:scale-90"
          >
            →
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 justify-center">
          {cardData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleTabClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === idx ? 'w-6 bg-brand' : 'w-2 bg-slate-300/80'
              }`}
            />
          ))}
        </div>

        {/* Feature Copy Card */}
        <div className="w-full bg-white border border-slate-200/60 rounded-3xl p-5 shadow-xs text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand bg-brand-light border border-brand/15 px-2.5 py-0.5 rounded-full">
            {cardData[activeIdx].label}
          </span>
          <h3 className="font-[family-name:var(--font-bricolage)] font-black text-slate-900 text-[17px] mt-3.5 tracking-tight leading-tight">
            {cardData[activeIdx].title}
          </h3>
          <p className="text-[12px] leading-relaxed text-slate-500 mt-2">
            {cardData[activeIdx].description}
          </p>

          {/* Bullets List */}
          {cardData[activeIdx].bullets && (
            <div className="w-full flex justify-center mt-4">
              <ul className="text-left space-y-1.5">
                {cardData[activeIdx].bullets.map((bullet, i) => (
                  <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5 font-normal leading-relaxed">
                    <span className="text-brand font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-[clamp(80px,10vw,130px)] px-5 md:px-12 overflow-hidden"
    >
      {/* Explicit white background at the very bottom (-z-30) */}
      <div className="absolute inset-0 bg-white -z-30 pointer-events-none" />

      {/* Honeycomb grid at -z-20 */}
      <div className="absolute inset-0 -z-20 pointer-events-none opacity-[0.6]">
        <ShapeGrid
          shape="hexagon"
          squareSize={38}
          borderColor="rgba(92, 96, 245, 0.28)"
          hoverFillColor="rgba(92, 96, 245, 0.08)"
          speed={0.18}
          direction="diagonal"
        />
      </div>

      {/* Subtle glassmorphism backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-white/10 pointer-events-none" style={{ zIndex: -15 }} />

      {/* Gradient fade */}
      <div className="absolute inset-x-0 top-0 h-32 -z-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Header: Title left | Impact stats right */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Left — Title block */}
          <Reveal className="text-left">
            <SectionHeader
              eyebrow="Core Features"
              title={
                <>
                  Six features. One platform.
                  <br />
                  <span className="text-brand">Whole-journey recovery.</span>
                </>
              }
              subtitle="Every feature was designed around a real patient need, not a boardroom checklist. Nothing is there for show."
            />
          </Reveal>

          {/* Right — Floating impact stat cards */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {/* Primary highlight card */}
            <div className="rounded-2xl bg-brand text-white px-6 py-5 shadow-lg shadow-brand/20 flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">🧠</div>
              <div>
                <p className="text-[26px] font-black font-[family-name:var(--font-bricolage)] leading-none">Zero missed doses</p>
                <p className="text-[12px] text-white/75 mt-0.5 font-medium">AI schedules, reminds & tracks every medication automatically</p>
              </div>
            </div>

            {/* Two smaller stat pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm shadow-slate-100 flex flex-col gap-1">
                <span className="text-[22px] font-black font-[family-name:var(--font-bricolage)] text-slate-900 leading-none">100%</span>
                <span className="text-[11px] text-slate-500 font-medium leading-snug">prescription-scan accuracy</span>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm shadow-slate-100 flex flex-col gap-1">
                <span className="text-[22px] font-black font-[family-name:var(--font-bricolage)] text-brand leading-none">14+</span>
                <span className="text-[11px] text-slate-500 font-medium leading-snug">languages supported</span>
              </div>
            </div>

            {/* Feature chip row */}
            <div className="flex flex-wrap gap-2 mt-1">
              {['AI Prescription Scan', 'Voice Assistant', 'Live GPS Dispatch', 'Drug Interaction Check', 'Risk Monitor', 'Smart SOS'].map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-brand">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <MagicBento />
        </Reveal>
      </div>
    </section>
  );
}
