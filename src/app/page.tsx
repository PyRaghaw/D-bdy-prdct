'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  FileText, 
  Upload, 
  Check, 
  Calendar, 
  MessageSquare, 
  ChevronRight, 
  ShieldAlert, 
  Heart, 
  Clock, 
  ArrowDown, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Apple,
  Play,
  Volume2,
  Mic,
  Camera,
  Home as HomeIcon,
  ShieldCheck
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- 2D MASCOT & CHARACTER VECTOR COMPONENTS ---

// Mr. Meddy Mascot - White Bear with Purple Ears, Paws, Rosy cheeks
function MrMeddy({ state, className }: { state: 'waving' | 'concerned' | 'pointing' | 'sleeping' | 'happy', className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft shadow */}
      <ellipse cx="50" cy="92" rx="25" ry="4" fill="#cbd5e1" opacity="0.5" />
      
      {/* Body */}
      <rect x="28" y="46" width="44" height="38" rx="18" fill="white" stroke="#e2e8f0" strokeWidth="2.5" />
      {/* Belly patch */}
      <ellipse cx="50" cy="65" rx="14" ry="12" fill="#f8fafc" />
      
      {/* Head */}
      <circle cx="50" cy="38" r="24" fill="white" stroke="#e2e8f0" strokeWidth="2.5" />
      
      {/* Ears */}
      <circle cx="28" cy="18" r="8" fill="#5c60f5" />
      <circle cx="28" cy="18" r="4" fill="#eef2ff" />
      <circle cx="72" cy="18" r="8" fill="#5c60f5" />
      <circle cx="72" cy="18" r="4" fill="#eef2ff" />
      
      {/* Eyes */}
      {state === 'sleeping' ? (
        <>
          <path d="M38 38 Q42 41 46 38" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M54 38 Q58 41 62 38" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      ) : state === 'concerned' ? (
        <>
          <ellipse cx="41" cy="37" rx="2.5" ry="3.5" fill="#0f172a" />
          <ellipse cx="59" cy="37" rx="2.5" ry="3.5" fill="#0f172a" />
          <path d="M38 31 Q41 33 44 32" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M62 31 Q59 33 56 32" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <circle cx="41" cy="37" r="3" fill="#0f172a" />
          <circle cx="59" cy="37" r="3" fill="#0f172a" />
          <circle cx="42" cy="36" r="1" fill="white" />
          <circle cx="60" cy="36" r="1" fill="white" />
        </>
      )}
      
      {/* Rosy Cheeks */}
      <circle cx="34" cy="43" r="3.5" fill="#fca5a5" opacity="0.6" />
      <circle cx="66" cy="43" r="3.5" fill="#fca5a5" opacity="0.6" />
      
      {/* Nose & Mouth */}
      <ellipse cx="50" cy="41" rx="3" ry="2" fill="#5c60f5" />
      {state === 'concerned' ? (
        <path d="M48 46 Q50 44 52 46" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      ) : state === 'sleeping' ? (
        <circle cx="50" cy="47" r="1.5" fill="#475569" />
      ) : (
        <path d="M47 45 Q50 48 53 45" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      )}
      
      {/* Arms */}
      {state === 'waving' ? (
        <>
          {/* Left arm waving */}
          <path d="M28 56 Q16 43 14 32" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="14" cy="32" r="4.5" fill="#5c60f5" />
          {/* Right arm down */}
          <path d="M72 56 Q82 64 80 72" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="80" cy="72" r="4.5" fill="#5c60f5" />
        </>
      ) : state === 'pointing' ? (
        <>
          {/* Left arm pointing right */}
          <path d="M28 58 Q38 58 48 53" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="48" cy="53" r="4.5" fill="#5c60f5" />
          {/* Right arm down */}
          <path d="M72 56 Q82 64 80 72" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="80" cy="72" r="4.5" fill="#5c60f5" />
        </>
      ) : state === 'happy' ? (
        <>
          {/* Both arms up */}
          <path d="M28 54 Q15 44 18 34" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="18" cy="34" r="4.5" fill="#5c60f5" />
          <path d="M72 54 Q85 44 82 34" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="82" cy="34" r="4.5" fill="#5c60f5" />
        </>
      ) : (
        <>
          {/* Default Arms */}
          <path d="M28 56 Q18 64 20 72" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="20" cy="72" r="4.5" fill="#5c60f5" />
          <path d="M72 56 Q82 64 80 72" stroke="#5c60f5" strokeWidth="7" strokeLinecap="round" />
          <circle cx="80" cy="72" r="4.5" fill="#5c60f5" />
        </>
      )}
      
      {/* Feet */}
      <circle cx="36" cy="85" r="6" fill="#5c60f5" />
      <circle cx="64" cy="85" r="6" fill="#5c60f5" />
    </svg>
  );
}

// Recovering Patient Character - Friendly 2D style
function PatientCharacter({ emotion, className }: { emotion: 'tired' | 'confused' | 'worried' | 'happy' | 'waving', className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft shadow */}
      <ellipse cx="50" cy="92" rx="20" ry="3" fill="#cbd5e1" opacity="0.6" />
      
      {/* Hair back */}
      <path d="M36 32 C36 18, 64 18, 64 32 Z" fill="#475569" />
      
      {/* Neck */}
      <rect x="47" y="42" width="6" height="8" fill="#fbcfe8" />
      
      {/* Face */}
      <circle cx="50" cy="32" r="13" fill="#fbcfe8" />
      
      {/* Hair front/bangs */}
      <path d="M37 28 C42 22, 58 22, 63 28 C64 32, 60 27, 50 27 C40 27, 36 32, 37 28 Z" fill="#475569" />
      
      {/* Face details */}
      {emotion === 'worried' || emotion === 'tired' ? (
        <>
          <ellipse cx="46" cy="32" rx="1.5" ry="2" fill="#1e293b" />
          <ellipse cx="54" cy="32" rx="1.5" ry="2" fill="#1e293b" />
          <path d="M43 28 Q46 29 49 27" stroke="#475569" strokeWidth="1" fill="none" />
          <path d="M57 28 Q54 29 51 27" stroke="#475569" strokeWidth="1" fill="none" />
          <path d="M47 38 Q50 36 53 38" stroke="#1e293b" strokeWidth="1" fill="none" />
        </>
      ) : emotion === 'confused' ? (
        <>
          <circle cx="45" cy="32" r="1.5" fill="#1e293b" />
          <circle cx="55" cy="32" r="1.5" fill="#1e293b" />
          <path d="M43 27 Q46 26 49 27" stroke="#475569" strokeWidth="1.2" fill="none" />
          <path d="M57 28 Q54 29 51 29" stroke="#475569" strokeWidth="1.2" fill="none" />
          <line x1="47" y1="38" x2="53" y2="38" stroke="#1e293b" strokeWidth="1.2" />
        </>
      ) : (
        <>
          {/* Happy / Waving */}
          <circle cx="46" cy="32" r="1.5" fill="#1e293b" />
          <circle cx="54" cy="32" r="1.5" fill="#1e293b" />
          <path d="M43 28 Q46 27 48 28" stroke="#475569" strokeWidth="1.2" fill="none" />
          <path d="M57 28 Q54 27 52 28" stroke="#475569" strokeWidth="1.2" fill="none" />
          <path d="M46 36 Q50 40 54 36" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </>
      )}
      
      {/* Cheeks */}
      <circle cx="42" cy="34" r="1.5" fill="#fca5a5" opacity="0.8" />
      <circle cx="58" cy="34" r="1.5" fill="#fca5a5" opacity="0.8" />
      
      {/* Clothes / Body */}
      <path d="M33 50 C38 48, 62 48, 67 50 L64 85 L36 85 Z" fill="#a5b4fc" />
      
      {/* Collar */}
      <path d="M46 50 Q50 54 54 50" fill="#fbcfe8" />
      
      {/* Arms & Hands */}
      {emotion === 'waving' ? (
        <>
          <path d="M34 52 Q24 40 22 28" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="22" cy="28" r="3" fill="#fbcfe8" />
          <path d="M66 52 Q72 62 70 75" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="70" cy="75" r="3" fill="#fbcfe8" />
        </>
      ) : emotion === 'confused' ? (
        <>
          <path d="M34 52 Q22 45 28 30 Q33 24 37 27" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="37" cy="27" r="3" fill="#fbcfe8" />
          <path d="M66 52 Q70 60 76 60" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="76" cy="60" r="3" fill="#fbcfe8" />
        </>
      ) : emotion === 'tired' ? (
        <>
          <path d="M34 52 Q28 65 29 78" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="29" cy="78" r="3" fill="#fbcfe8" />
          <path d="M66 52 Q72 65 71 78" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="71" cy="78" r="3" fill="#fbcfe8" />
        </>
      ) : (
        <>
          <path d="M34 52 Q28 62 30 72" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="72" r="3" fill="#fbcfe8" />
          <path d="M66 52 Q72 62 70 72" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="70" cy="72" r="3" fill="#fbcfe8" />
        </>
      )}
      
      {/* Legs & Shoes */}
      <rect x="39" y="85" width="4" height="6" fill="#475569" />
      <rect x="57" y="85" width="4" height="6" fill="#475569" />
      <path d="M37 91 L44 91 L44 93 L37 93 Z" fill="#1e293b" />
      <path d="M55 91 L62 91 L62 93 L55 93 Z" fill="#1e293b" />
    </svg>
  );
}

// Doctor Character - Friendly 2D style with scrubs, white coat, stethoscope, and glasses
function DoctorCharacter({ action, className }: { action: 'talking' | 'pointing' | 'waving' | 'smiling', className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft shadow */}
      <ellipse cx="50" cy="92" rx="20" ry="3" fill="#cbd5e1" opacity="0.6" />
      
      {/* Hair back */}
      <path d="M35 30 C35 15, 65 15, 65 30 Z" fill="#334155" />
      
      {/* Neck */}
      <rect x="47" y="42" width="6" height="8" fill="#ffedd5" />
      
      {/* Face */}
      <circle cx="50" cy="32" r="13" fill="#ffedd5" />
      
      {/* Hair front */}
      <path d="M36 28 C42 21, 58 21, 64 28 C62 25, 38 25, 36 28 Z" fill="#334155" />
      
      {/* Glasses */}
      <circle cx="45" cy="32" r="3.2" stroke="#475569" strokeWidth="1" fill="none" />
      <circle cx="55" cy="32" r="3.2" stroke="#475569" strokeWidth="1" fill="none" />
      <line x1="48.2" y1="32" x2="51.8" y2="32" stroke="#475569" strokeWidth="1" />
      
      {/* Eyes */}
      <circle cx="45" cy="32" r="1" fill="#1e293b" />
      <circle cx="55" cy="32" r="1" fill="#1e293b" />
      
      {/* Cheeks */}
      <circle cx="40" cy="35" r="1" fill="#fca5a5" opacity="0.6" />
      <circle cx="60" cy="35" r="1" fill="#fca5a5" opacity="0.6" />
      
      {/* Mouth (Smile) */}
      <path d="M47 36 Q50 38.5 53 36" stroke="#1e293b" strokeWidth="1" strokeLinecap="round" fill="none" />
      
      {/* Doctor Coat / Scrubs */}
      {/* Teal Scrubs */}
      <path d="M33 50 C38 48, 62 48, 67 50 L64 85 L36 85 Z" fill="#0d9488" />
      
      {/* White Coat overlay */}
      <path d="M33 50 L38 52 L38 85 L33 85 Z" fill="#f8fafc" />
      <path d="M67 50 L62 52 L62 85 L67 85 Z" fill="#f8fafc" />
      
      {/* Coat Collars */}
      <path d="M38 50 L46 62 L46 50 Z" fill="#f1f5f9" />
      <path d="M62 50 L54 62 L54 50 Z" fill="#f1f5f9" />
      
      {/* Stethoscope */}
      <path d="M44 45 Q44 54 50 54 Q56 54 56 45" stroke="#475569" strokeWidth="1.2" fill="none" />
      <path d="M50 54 L50 61" stroke="#475569" strokeWidth="1.2" />
      <circle cx="50" cy="62.5" r="1.8" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
      
      {/* Arms & Hands */}
      {action === 'pointing' ? (
        <>
          {/* Left arm holding clipboard */}
          <path d="M34 52 Q28 65 30 75" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="75" r="3" fill="#ffedd5" />
          {/* Clipboard */}
          <rect x="23" y="62" width="12" height="15" rx="1" fill="#b45309" />
          <rect x="25" y="65" width="8" height="11" fill="white" />
          <rect x="27" y="67" width="4" height="1" fill="#475569" />
          <rect x="27" y="70" width="4" height="1" fill="#475569" />
          
          {/* Right arm pointing */}
          <path d="M66 52 Q76 48 85 45" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="85" cy="45" r="3" fill="#ffedd5" />
        </>
      ) : action === 'waving' ? (
        <>
          {/* Left arm down */}
          <path d="M34 52 Q28 62 30 72" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="72" r="3" fill="#ffedd5" />
          {/* Right arm waving */}
          <path d="M66 52 Q76 40 78 28" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="78" cy="28" r="3" fill="#ffedd5" />
        </>
      ) : (
        <>
          {/* Default Arms */}
          <path d="M34 52 Q28 62 30 72" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="72" r="3" fill="#ffedd5" />
          <path d="M66 52 Q72 62 70 72" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
          <circle cx="70" cy="72" r="3" fill="#ffedd5" />
        </>
      )}
      
      {/* Legs & Shoes */}
      <rect x="39" y="85" width="4" height="6" fill="#0f172a" />
      <rect x="57" y="85" width="4" height="6" fill="#0f172a" />
      <path d="M37 91 L44 91 L44 93 L37 93 Z" fill="#1e293b" />
      <path d="M55 91 L62 91 L62 93 L55 93 Z" fill="#1e293b" />
    </svg>
  );
}

// Bedroom Scene SVG
function BedsideScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="120" rx="8" fill="#1e1b4b" />
      <rect x="15" y="10" width="35" height="45" rx="3" fill="#0f172a" stroke="#312e81" strokeWidth="2" />
      <line x1="32.5" y1="10" x2="32.5" y2="55" stroke="#312e81" strokeWidth="1.5" />
      <line x1="15" y1="32.5" x2="50" y2="32.5" stroke="#312e81" strokeWidth="1.5" />
      
      <circle cx="23" cy="20" r="0.8" fill="white" />
      <circle cx="44" cy="16" r="0.8" fill="white" />
      <circle cx="40" cy="26" r="0.6" fill="white" />
      <path d="M26 15 A2 2 0 0 0 28 17 A1.5 1.5 0 0 1 27.5 16 A1.5 1.5 0 0 0 26 15" fill="#fef08a" />
      
      <rect x="110" y="70" width="30" height="40" rx="2" fill="#7c2d12" />
      <line x1="110" y1="88" x2="140" y2="88" stroke="#451a03" strokeWidth="1.5" />
      <circle cx="125" cy="79" r="1.5" fill="#e2e8f0" />
      <circle cx="125" cy="97" r="1.5" fill="#e2e8f0" />
      
      <path d="M125 70 L125 60" stroke="#d97706" strokeWidth="2" />
      <polygon points="117,60 133,60 137,48 113,48" fill="#d97706" />
      <path d="M110 46 L140 46 L145 70 L105 70 Z" fill="#fbbf24" opacity="0.15" />
      
      <rect x="40" y="85" width="70" height="25" fill="#475569" />
      <rect x="35" y="75" width="5" height="35" fill="#334155" />
      <rect x="40" y="80" width="70" height="8" fill="#f8fafc" />
      
      <rect x="45" y="80" width="65" height="28" rx="2" fill="#5c60f5" />
      <path d="M45 80 L65 80 L60 88 L45 88 Z" fill="#e0e7ff" />
      <rect x="92" y="75" width="15" height="8" rx="2" fill="#e2e8f0" />
    </svg>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const scenesLeftPanelRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleSkipToDownload = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Main Scrollytelling Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          }
        }
      });

      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        // Set Initial States
        gsap.set('.scene-text', { opacity: 0, y: 30, filter: 'blur(8px)' });
        
        // 2D Scene illustrations
        gsap.set('.illust-s1', { opacity: 0, scale: 0.8, y: 30 });
        gsap.set('.illust-s2', { opacity: 0, scale: 0.8, y: 30 });
        gsap.set('.illust-s3', { opacity: 0, scale: 0.8, y: 30 });
        gsap.set('.illust-s4', { opacity: 0, scale: 0.8, y: 30 });
        gsap.set('.illust-s5', { opacity: 0, scale: 0.8, y: 30 });
        
        // Documents and clock
        gsap.set(paperRef.current, { y: '100vh', opacity: 0, rotate: 10, scale: isDesktop ? 1 : 0.85 });
        gsap.set('.falling-word-badge', { opacity: 0, y: -40, scale: 0.8 });
        gsap.set('.clock-3am-light', { opacity: 0, scale: 0.8 });
        gsap.set('.panic-balloon', { opacity: 0, y: 20 });
        
        // Phone mockup initial position
        gsap.set(phoneRef.current, { y: '100vh', opacity: 0, scale: isDesktop ? 1 : 0.85, x: 0 });
        gsap.set('.sparkle-glow', { opacity: 0, scale: 0 });
        gsap.set('.small-pdf-icon', { opacity: 0, scale: 0.5, y: -50 });
        gsap.set('.scan-laser-line', { y: '-10%', opacity: 0 });

        // App Screen States
        gsap.set('.screen-app-upload', { opacity: 1 });
        gsap.set('.screen-app-scanning', { opacity: 0 });
        gsap.set('.screen-app-meds', { opacity: 0 });
        gsap.set('.screen-app-timeline', { opacity: 0 });
        gsap.set('.screen-app-chat', { opacity: 0 });

        // App UI lists
        gsap.set('.app-med-card', { opacity: 0, x: -30 });
        gsap.set('.app-timeline-node', { opacity: 0, y: 20 });
        gsap.set('.app-timeline-fill', { scaleY: 0 });
        gsap.set('.app-chat-user', { opacity: 0, x: 20 });
        gsap.set('.app-chat-bot', { opacity: 0, x: -20 });

        gsap.set('.final-cta-block', { opacity: 0, y: 40, filter: 'blur(8px)' });

        // --- TIMELINE TWEENS ---

        // SCENE 1: "You just got discharged."
        tl.to('.text-s1', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 })
          .to('.illust-s1', { opacity: 1, scale: 1, y: 0, duration: 1 }, '<')
          .to('.text-s1', { opacity: 0, y: -30, filter: 'blur(8px)', duration: 0.8 }, '+=1.2')
          .to('.illust-s1', { opacity: 0, scale: 0.9, y: -20, duration: 0.8 }, '<')

        // SCENE 2: Discharge Paper enters + Chaotic Words Rain Down
        tl.to('.bg-viewport', { backgroundColor: '#f1f5f9', duration: 1 }, '<') 
          .to(paperRef.current, { y: isDesktop ? '10vh' : '12vh', opacity: 1, rotate: -2, duration: 1.2 }, '<')
          .to('.illust-s2', { opacity: 1, scale: 1, y: 0, duration: 1.2 }, '<')
          .to('.text-s2', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '<+0.5')
          .to('.f-badge-1', { opacity: 1, y: 0, scale: 1, duration: 0.4 })
          .to('.f-badge-2', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, '-=0.2')
          .to('.f-badge-3', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, '-=0.2')
          .to('.f-badge-4', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, '-=0.2')
          .to('.f-badge-5', { opacity: 1, y: 0, scale: 1, duration: 0.4 }, '-=0.2')
          
        // SCENE 3: Zoom In & Confusion (Paper zooms and blurs, patient scratches head)
        tl.to(paperRef.current, { scale: isDesktop ? 1.4 : 1.2, rotate: 1, y: isDesktop ? '20vh' : '22vh', filter: 'blur(5px)', duration: 1.5 }, '+=0.6')
          .to('.falling-word-badge', { opacity: 0.2, filter: 'blur(3px)', duration: 1.2 }, '<')
          .to('.illust-s2', { opacity: 0, scale: 0.9, duration: 0.8 }, '<')
          .to('.text-s2', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.illust-s3', { opacity: 1, scale: 1, y: 0, duration: 1.2 }, '<+0.3')
          .to('.text-s3', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, '<+0.4')
          
        // SCENE 4: 3:00 AM Bedside table & Panic
        tl.to(paperRef.current, { y: '100vh', opacity: 0, duration: 1 }, '+=0.6')
          .to('.text-s3', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.illust-s3', { opacity: 0, scale: 0.9, duration: 0.8 }, '<')
          .to('.bg-viewport', { backgroundColor: '#0f172a', duration: 1.2 }, '<') 
          .to('.illust-s4', { opacity: 1, scale: 1, y: 0, duration: 1.2 })
          .to('.clock-3am-light', { opacity: 1, scale: 1, duration: 1 }, '<')
          .to('.text-s4', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '<+0.3')
          .to('.panic-bal-1', { opacity: 0.9, y: 0, duration: 0.5 })
          .to('.panic-bal-2', { opacity: 0.9, y: 0, duration: 0.5 }, '-=0.25')
          .to('.panic-bal-3', { opacity: 0.9, y: 0, duration: 0.5 }, '-=0.25')
          
        // SCENE 5: Mr. Meddy Mascot Spark & Phone Rises
        tl.to('.clock-3am-light', { opacity: 0, scale: 0.8, duration: 1 }, '+=0.6')
          .to('.panic-balloon', { opacity: 0, y: -20, duration: 0.8 }, '<')
          .to('.illust-s4', { opacity: 0, scale: 0.9, duration: 0.8 }, '<')
          .to('.text-s4', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.bg-viewport', { backgroundColor: '#f8fafc', duration: 1.2 }, '<') 
          .to('.sparkle-glow', { opacity: 0.6, scale: 1.2, duration: 1.2 }, '<')
          .to(phoneRef.current, { y: isDesktop ? '6vh' : '10vh', opacity: 1, duration: 1.5 })
          .to('.illust-s5', { opacity: 1, scale: 1, y: 0, duration: 1.2 }, '<+0.3')
          .to('.text-s5', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, '<+0.5')
          
        // SCENE 6: Upload Document into Phone Mockup & Scanner Sweep
        tl.to('.text-s5', { opacity: 0, y: -30, duration: 0.8 }, '+=0.6')
          .to('.text-s6', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 })
          .to('.small-pdf-icon', { opacity: 1, scale: 1, y: 0, duration: 1 })
          .to('.small-pdf-icon', { y: isDesktop ? 70 : 50, scale: 0.7, opacity: 0, duration: 0.8 })
          .to('.screen-app-upload', { opacity: 0, duration: 0.4 }, '-=0.2')
          .to('.screen-app-scanning', { opacity: 1, duration: 0.4 }, '<')
          .to('.scan-laser-line', { opacity: 1, y: '250%', duration: 1.2 })
          .to('.scan-laser-line', { y: '500%', opacity: 0, duration: 0.5 })
          
        // SCENE 7: AI Prescriptions List Extraction
        tl.to('.screen-app-scanning', { opacity: 0, duration: 0.4 }, '+=0.3')
          .to('.screen-app-meds', { opacity: 1, duration: 0.4 }, '<')
          .to('.text-s6', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.text-s7', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 })
          .to('.app-med-card-1', { opacity: 1, x: 0, duration: 0.6 })
          .to('.app-med-card-2', { opacity: 1, x: 0, duration: 0.6 }, '-=0.3')
          .to('.app-med-card-3', { opacity: 1, x: 0, duration: 0.6 }, '-=0.3')
          
        // SCENE 8: Recovery Roadmap Calendar
        tl.to('.screen-app-meds', { opacity: 0, y: -40, duration: 0.6 }, '+=0.6')
          .to('.screen-app-timeline', { opacity: 1, y: 0, duration: 0.6 }, '<')
          .to('.text-s7', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.text-s8', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 })
          .to('.app-timeline-fill', { scaleY: 1, transformOrigin: 'top', duration: 1.2 })
          .to('.app-timeline-node-1', { opacity: 1, y: 0, duration: 0.4 }, '-=1.0')
          .to('.app-timeline-node-2', { opacity: 1, y: 0, duration: 0.4 }, '-=0.7')
          .to('.app-timeline-node-3', { opacity: 1, y: 0, duration: 0.4 }, '-=0.4')
          
        // SCENE 9: 3 AM Reassured (Dark backdrop returns, Mr. Meddy Chat acts)
        tl.to('.bg-viewport', { backgroundColor: '#0f172a', duration: 1.2 }, '+=0.6')
          .to('.text-s8', { opacity: 0, y: -30, duration: 0.8 }, '<')
          .to('.illust-s5', { opacity: 0, scale: 0.9, duration: 0.8 }, '<')
          .to('.screen-app-timeline', { opacity: 0, duration: 0.5 }, '<')
          .to('.screen-app-chat', { opacity: 1, duration: 0.5 }, '<')
          .to('.text-s9', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 })
          .to('.app-chat-user-1', { opacity: 1, x: 0, duration: 0.8 })
          .to('.app-chat-bot-1', { opacity: 1, x: 0, duration: 1.2 }, '+=0.2')
          
        // SCENE 10: Final Zoom Out & Split Layout (CTA Left, Phone Right)
        tl.to('.text-s9', { opacity: 0, y: -30, duration: 0.8 }, '+=0.6')
          .to('.bg-viewport', { backgroundColor: '#f8fafc', duration: 1.5 }, '<')
          .to(phoneRef.current, { 
            scale: isDesktop ? 0.85 : 0.72, 
            y: isDesktop ? '0vh' : '-20vh', 
            duration: 1.8 
          }, '<')
          .to('.final-cta-block', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5 }, '<+0.4');
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white text-slate-900 bg-grid-pattern">
      {/* Top Floating Glass Header */}
      <header className="fixed top-0 left-0 w-full z-[100] glass-panel-light py-4.5 px-6 md:px-12 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/20">
            <Heart className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <div>
            <span className="font-sans font-black tracking-tight text-slate-900 text-base md:text-lg">
              Discharge<span className="text-brand-purple">Buddy</span>
            </span>
            <div className="text-[10px] text-slate-500 font-semibold leading-none">Your Recovery, Simplified</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-brand-purple border border-indigo-100">
            🛡️ HIPAA Secure & Private
          </span>
          <button 
            onClick={handleSkipToDownload}
            className="flex items-center gap-1.5 text-xs md:text-sm font-bold bg-brand-purple hover:bg-brand-purple-dark text-white shadow-md shadow-brand-purple/10 px-4.5 py-2 rounded-full transition-all cursor-pointer"
          >
            <span>Skip to Download</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Pinned Scrollytelling Viewport */}
      <div ref={triggerRef} className="relative w-full h-[1100vh]">
        <div className="pin-content sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white">
          {/* Transitioning background overlay */}
          <div className="bg-viewport absolute inset-0 bg-white transition-all duration-300 pointer-events-none" />
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="sparkle-glow absolute w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

          {/* Left panel narrative and character graphics (Desktop split) */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 z-40 pointer-events-none">
            
            {/* Left side column: Text, Illustrations & Final CTA */}
            <div ref={scenesLeftPanelRef} className="w-full md:w-[45%] h-[45%] md:h-full flex flex-col justify-center relative mt-16 md:mt-0">
              
              {/* --- TEXT SCENE LAYERS --- */}
              
              {/* Scene 1 Text */}
              <div className="scene-text text-s1 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">01 / Hospital Leave</span>
                <h1 className="text-3.5xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                  You just got discharged.
                </h1>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  The clinic doors close. You step outside, officially on your own, feeling relieved but incredibly fragile.
                </p>
              </div>

              {/* Scene 2 Text */}
              <div className="scene-text text-s2 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">02 / The Handout</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 leading-tight">
                  Then comes the paper.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  The nurse hands you a dense sheet containing tablets, complex food limits, follow-ups, and instructions.
                </p>
              </div>

              {/* Scene 3 Text */}
              <div className="scene-text text-s3 absolute max-w-md">
                <span className="text-xs text-rose-600 font-mono font-bold tracking-widest uppercase block mb-3">03 / The Fog</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-rose-600 leading-tight">
                  You remember none of it.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  Between the pharmacy trip and the post-op exhaustion, your doctor's detailed instructions blur into pure confusion.
                </p>
              </div>

              {/* Scene 4 Text */}
              <div className="scene-text text-s4 absolute max-w-md">
                <span className="text-xs text-amber-400 font-mono font-bold tracking-widest uppercase block mb-3">04 / The Anxiety</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-white leading-tight">
                  The 3:00 AM silence.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                  You wake up sore in a dark room, staring at bottles of pills. The worry starts creeping in: <span className="text-amber-300 italic">Is this pain normal? Did I take my meds?</span>
                </p>
              </div>

              {/* Scene 5 Text */}
              <div className="scene-text text-s5 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">05 / The Companion</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 leading-tight">
                  What if your paper summary could talk back?
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  Meet <span className="font-extrabold text-brand-purple">Mr. Meddy</span>, your cozy 24/7 recovery companion. Simply snap a photo of your discharge paperwork.
                </p>
              </div>

              {/* Scene 6 Text */}
              <div className="scene-text text-s6 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">06 / Safe AI Analysis</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 leading-tight">
                  Upload & Read.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  Our private AI scans the handwritten doctor script, translating jargon into clear, straightforward tasks.
                </p>
              </div>

              {/* Scene 7 Text */}
              <div className="scene-text text-s7 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">07 / Medication schedule</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 leading-tight">
                  Daily schedules. Tracked.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  Your pills are structured neatly into morning, afternoon, and evening timelines with proactive dosage alerts.
                </p>
              </div>

              {/* Scene 8 Text */}
              <div className="scene-text text-s8 absolute max-w-md">
                <span className="text-xs text-brand-purple font-mono font-bold tracking-widest uppercase block mb-3">08 / The recovery roadmap</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 leading-tight">
                  Clear roadmaps.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  A visual calendar mapping out rest periods, dressing changes, and follow-up hospital visits.
                </p>
              </div>

              {/* Scene 9 Text */}
              <div className="scene-text text-s9 absolute max-w-md">
                <span className="text-xs text-teal-400 font-mono font-bold tracking-widest uppercase block mb-3">09 / Peaceful nights</span>
                <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-white leading-tight">
                  3 AM questions? Answered.
                </h2>
                <p className="mt-3.5 text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                  No more Google rabbit holes. Type a question and Mr. Meddy cross-references your discharge summary to reply instantly.
                </p>
              </div>

              {/* --- SCENE 10: SPLIT LAYOUT HERO TEXT (Fades in left column) --- */}
              <div className="final-cta-block absolute w-full max-w-[280px] md:max-w-md text-left flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] md:text-xs font-bold font-mono tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-indigo-100">
                    HIPAA Secure AI
                  </span>
                  <span className="text-[10px] md:text-xs font-bold font-mono text-slate-500 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                    Free Download
                  </span>
                </div>
                
                <h2 className="text-3.5xl md:text-5.5xl font-black tracking-tight text-slate-900 leading-none">
                  Discharge<br />
                  <span className="text-brand-purple">Buddy</span>
                </h2>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-sm">
                  Say goodbye to confusing medical packets and 3 AM worry. Let <span className="font-extrabold text-brand-purple">Mr. Meddy</span> organize your pills, chart your recovery, and keep you secure.
                </p>

                {/* Patient, Mascot, and Doctor SVG Waving side by side */}
                <div className="flex gap-2 items-center my-1 select-none pointer-events-none">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-full shadow-xs flex items-center justify-center p-1">
                    <MrMeddy state="happy" className="w-full h-full" />
                  </div>
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-full shadow-xs flex items-center justify-center p-1">
                    <PatientCharacter emotion="waving" className="w-full h-full" />
                  </div>
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-full shadow-xs flex items-center justify-center p-1">
                    <DoctorCharacter action="waving" className="w-full h-full" />
                  </div>
                  <div className="text-[9px] text-slate-500 font-bold leading-tight pl-1">
                    "Recover with your personal<br />recovery assistant team."
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 mt-1 pointer-events-auto">
                  {/* App Store button */}
                  <a 
                    href="#" 
                    className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <Apple className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-slate-400 block mb-0.5 font-bold">Download on the</span>
                      <span className="text-xs font-black font-sans">App Store</span>
                    </div>
                  </a>

                  {/* Google Play button */}
                  <a 
                    href="#" 
                    className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <Play className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
                    <div className="text-left leading-none">
                      <span className="text-[8px] text-slate-400 block mb-0.5 font-bold">Get it on</span>
                      <span className="text-xs font-black font-sans">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>


              {/* --- 2D NARRATIVE ILLUSTRATIONS (Only visible in Scenes 1-9) --- */}
              <div className="hidden md:block w-96 h-72 absolute bottom-8 left-0">
                {/* Scene 1 Graphic: Doctor explaining to patient */}
                <div className="illust-s1 absolute inset-0 flex items-end justify-between p-2">
                  <DoctorCharacter action="pointing" className="w-44 h-44" />
                  <PatientCharacter emotion="tired" className="w-44 h-44" />
                </div>
                {/* Scene 2 Graphic: Patient holding summary folder */}
                <div className="illust-s2 absolute inset-0 flex items-end justify-center">
                  <PatientCharacter emotion="confused" className="w-48 h-48" />
                </div>
                {/* Scene 3 Graphic: Blurry text, patient scratches head */}
                <div className="illust-s3 absolute inset-0 flex items-end justify-center">
                  <PatientCharacter emotion="confused" className="w-48 h-48" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center animate-bounce border border-red-200 shadow-md">
                    <span className="text-2xl font-black text-rose-600">?</span>
                  </div>
                </div>
                {/* Scene 4 Graphic */}
                <div className="illust-s4 absolute inset-0">
                  <BedsideScene className="w-full h-full" />
                  <div className="absolute top-10 right-4">
                    <PatientCharacter emotion="worried" className="w-28 h-28" />
                  </div>
                </div>
                {/* Scene 5 Graphic */}
                <div className="illust-s5 absolute inset-0 flex items-center justify-center">
                  <MrMeddy state="waving" className="w-64 h-64" />
                </div>
              </div>

            </div>

            {/* Right side column: Pinned Canvas for Paper & Phone Mockups */}
            <div className="w-full md:w-[50%] h-[50%] md:h-full flex items-center justify-center relative">
              
              {/* SCENE 2 & 3: Clinical Discharge Summary Paper */}
              <div 
                ref={paperRef} 
                className="discharge-paper absolute w-[280px] h-[370px] md:w-[330px] md:h-[430px] bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-slate-200/80 select-none z-10 overflow-hidden"
              >
                {/* Document Header */}
                <div className="border-b-2 border-slate-200 pb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="w-10 h-3 bg-brand-purple rounded opacity-90" />
                    <div className="w-14 h-2 bg-slate-200 rounded" />
                  </div>
                  <div className="text-[11px] font-black text-slate-800 font-mono uppercase tracking-wider">
                    DISCHARGE INSTRUCTIONS
                  </div>
                  <div className="w-20 h-1.5 bg-slate-100 rounded mt-1" />
                </div>

                {/* Document Body (Lines representing text) */}
                <div className="flex-1 py-4 flex flex-col gap-2.5 relative">
                  <div className="w-full h-2 bg-slate-100 rounded" />
                  <div className="w-11/12 h-2 bg-slate-100 rounded" />
                  
                  <div className="mt-2 p-2 border border-dashed border-red-200 bg-red-50/50 rounded flex flex-col gap-1">
                    <div className="w-16 h-2 bg-rose-400 rounded" />
                    <div className="w-full h-1.5 bg-slate-200 rounded" />
                    <div className="w-5/6 h-1.5 bg-slate-200 rounded" />
                  </div>

                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="w-20 h-2 bg-slate-200 rounded" />
                    <div className="w-10/12 h-1.5 bg-slate-100 rounded" />
                  </div>
                  
                  {/* Falling chaotic words overlays (Absolute positioned in the paper) */}
                  <div className="absolute inset-0 flex flex-wrap items-center justify-center p-3 pointer-events-none">
                    <span className="falling-word-badge f-badge-1 absolute top-[10%] left-[5%] bg-slate-900 text-white font-mono text-[9px] md:text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md rotate-[-8deg] z-20">
                      Paracetamol 500mg (1-0-1)
                    </span>
                    <span className="falling-word-badge f-badge-2 absolute top-[28%] right-[2%] bg-brand-purple text-white font-mono text-[9px] md:text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md rotate-[5deg] z-20">
                      No lifting &gt; 5kg
                    </span>
                    <span className="falling-word-badge f-badge-3 absolute top-[48%] left-[2%] bg-violet-600 text-white font-mono text-[9px] md:text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md rotate-[-12deg] z-20">
                      Follow-up Day 7
                    </span>
                    <span className="falling-word-badge f-badge-4 absolute bottom-[32%] right-[5%] bg-indigo-600 text-white font-mono text-[9px] md:text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md rotate-[6deg] z-20">
                      Keep hydrated (3L water)
                    </span>
                    <span className="falling-word-badge f-badge-5 absolute bottom-[12%] left-[10%] bg-rose-600 text-white font-mono text-[9px] md:text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md rotate-[-4deg] z-20">
                      ER if fever &gt; 101°F
                    </span>
                  </div>
                </div>

                {/* Document Footer */}
                <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[8px] text-slate-400 font-mono">
                  <span>DOC_ID: 80486-X</span>
                  <span>SIGN: ______________</span>
                </div>
              </div>

              {/* SCENE 4: 3:00 AM Digital Bedside Clock */}
              <div className="clock-3am-light absolute flex flex-col items-center justify-center z-10 pointer-events-none">
                <div className="text-7xl md:text-9xl font-black font-mono tracking-widest text-amber-500/90 text-accent-glow select-none animate-pulse">
                  03:00
                </div>
                <div className="text-xs md:text-sm font-bold text-amber-400/80 font-mono tracking-widest mt-2">
                  AM — ALARM SLEEPLESSNESS
                </div>
              </div>

              {/* SCENE 4: Panic Floating Questions */}
              <div className="panic-questions absolute inset-0 w-full h-full pointer-events-none z-15">
                <div className="panic-balloon panic-bal-1 absolute top-[28%] left-[-10%] md:left-[-15%] bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-2xl text-[11px] md:text-xs text-amber-200/90 font-bold max-w-[170px] shadow-xl">
                  "Is this dull ache normal or should I go to the ER?"
                </div>
                <div className="panic-balloon panic-bal-2 absolute top-[50%] right-[-10%] md:right-[-15%] bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-2xl text-[11px] md:text-xs text-amber-200/90 font-bold max-w-[170px] shadow-xl">
                  "Did I take my afternoon pill at 2 PM or 4 PM?"
                </div>
                <div className="panic-balloon panic-bal-3 absolute bottom-[24%] left-[0%] md:left-[-5%] bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-2xl text-[11px] md:text-xs text-amber-200/90 font-bold max-w-[170px] shadow-xl">
                  "Can I sleep on my left side with this stitch?"
                </div>
              </div>

              {/* SCENE 5 - 10: Pinned Smart Phone Mockup */}
              <div 
                ref={phoneRef} 
                className="phone-container absolute w-[275px] h-[550px] md:w-[310px] md:h-[620px] bg-slate-900 rounded-[44px] shadow-2xl p-2.5 border-4 border-slate-700 ring-8 ring-slate-800/20 select-none z-30 overflow-hidden flex flex-col pointer-events-auto"
              >
                {/* Phone Speaker Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5.5 bg-slate-900 rounded-b-xl z-50 flex items-center justify-center">
                  <div className="w-10 h-0.5 bg-slate-800 rounded-full mb-1" />
                </div>

                {/* Phone Screen Canvas */}
                <div className="flex-1 bg-brand-purple-light rounded-[34px] overflow-hidden relative flex flex-col pt-5 pb-3">
                  
                  {/* Status Bar */}
                  <div className="px-5 pt-1.5 pb-2.5 flex justify-between items-center text-[9px] text-slate-500 font-bold z-40">
                    <span>18:42</span>
                    <div className="flex items-center gap-1">
                      <span>LTE</span>
                      <div className="w-3.5 h-2 border border-slate-400 rounded-xs p-0.5 flex">
                        <div className="flex-1 bg-slate-500 rounded-3xs" />
                      </div>
                    </div>
                  </div>

                  {/* SCREEN 1: UPLOAD VIEW */}
                  <div className="screen-app-upload absolute inset-0 pt-8 px-4 flex flex-col justify-between z-10 transition-opacity duration-300">
                    <div className="text-center pt-2">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full">
                        Secure Import
                      </span>
                      <h3 className="text-xs font-black text-slate-850 mt-1.5">Import Discharge Plan</h3>
                      <p className="text-[9px] text-slate-500 mt-0.5">Upload summary to translate.</p>
                    </div>

                    <div className="my-auto border-2 border-dashed border-indigo-200 bg-white/70 hover:bg-white rounded-2xl p-5.5 flex flex-col items-center justify-center gap-2.5 transition-colors shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                        <Upload className="w-4.5 h-4.5 text-brand-purple" />
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] font-bold text-slate-800 block leading-tight">discharge_plan.pdf</span>
                        <span className="text-[8px] text-slate-400 font-mono">PDF Document • 2.4 MB</span>
                      </div>
                      <div className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white font-bold text-[9px] py-1.5 px-3 rounded-lg text-center transition-colors shadow-md shadow-brand-purple/10">
                        Process summary
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-white/95 p-2 rounded-xl border border-indigo-50/50 shadow-sm mb-1">
                      <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center">
                        <FileText className="w-3 h-3 text-emerald-600" />
                      </div>
                      <div className="text-[8px] text-slate-500 leading-tight">
                        Encrypted HIPAA secure environment.
                      </div>
                    </div>
                  </div>

                  {/* SCREEN 2: SCANNING PROGRESS VIEW */}
                  <div className="screen-app-scanning absolute inset-0 pt-8 px-4 flex flex-col justify-between bg-white z-10 transition-opacity duration-300">
                    <div className="text-center pt-5">
                      <div className="relative w-10 h-10 mx-auto mb-2.5">
                        <div className="absolute inset-0 border border-brand-purple/40 rounded-full animate-ping" />
                        <div className="w-full h-full flex items-center justify-center bg-brand-purple/10 rounded-full">
                          <Sparkles className="w-4.5 h-4.5 text-brand-purple" />
                        </div>
                      </div>
                      <h3 className="text-[10px] font-bold text-brand-purple uppercase tracking-widest font-mono">Analyzing Summary</h3>
                      <p className="text-[8px] text-slate-400 mt-1">Reading doctor notes & medications...</p>
                    </div>

                    <div className="relative w-full h-[160px] bg-slate-50 rounded-xl border border-slate-100 overflow-hidden p-3 flex flex-col gap-2">
                      <div className="w-full h-2.5 bg-slate-200 rounded animate-pulse" />
                      <div className="w-5/6 h-2.5 bg-slate-200 rounded animate-pulse" />
                      <div className="w-4/5 h-2.5 bg-slate-200 rounded animate-pulse" />
                      <div className="w-2/3 h-2.5 bg-slate-200 rounded animate-pulse mt-2" />
                      <div className="w-11/12 h-2.5 bg-slate-200 rounded animate-pulse" />
                      <div className="scan-laser-line laser-scanner" />
                    </div>

                    <div className="text-center pb-3 text-[8px] text-slate-400 font-mono">
                      EXTRACTING DATA...
                    </div>
                  </div>

                  {/* SCREEN 3: DASHBOARD SCREEN */}
                  <div className="screen-app-meds absolute inset-0 pt-6 flex flex-col justify-between bg-brand-purple-light z-10 transition-opacity duration-300">
                    
                    {/* Purple Header segment */}
                    <div className="bg-brand-purple px-4 pt-3 pb-4 rounded-b-[26px] text-white flex flex-col gap-2 relative">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-[14px] font-black tracking-tight leading-none">My Medicines</h4>
                          <span className="text-[9px] text-white/70 block mt-1">1 of 4 taken today</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer">
                          <Camera className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      {/* Bear popup bubble card */}
                      <div className="bg-white rounded-xl p-2.5 text-slate-800 flex items-center justify-between border border-slate-100 shadow-sm relative mt-1 select-none">
                        <div className="flex-1 pr-8 text-left">
                          <span className="text-[10px] font-bold text-slate-800 block leading-tight">Check your schedule when you can.</span>
                        </div>
                        <div className="w-4.5 h-4.5 rounded-full bg-brand-purple-light flex items-center justify-center">
                          <Volume2 className="w-2.5 h-2.5 text-brand-purple" />
                        </div>
                        
                        {/* Bear Mascot Peeking in from right */}
                        <div className="absolute right-[-4px] bottom-[-4px] w-14 h-14 z-20">
                          <MrMeddy state="waving" className="w-full h-full" />
                        </div>
                      </div>

                      {/* Progress Line */}
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="flex-1 h-1.5 bg-white/25 rounded-full overflow-hidden">
                          <div className="w-1/4 h-full bg-white rounded-full" />
                        </div>
                        <span className="text-[8px] font-bold font-mono">25%</span>
                      </div>
                    </div>

                    {/* Today Tabs bar */}
                    <div className="px-4 mt-2">
                      <div className="bg-brand-purple-dark/10 p-0.5 rounded-lg flex items-center">
                        <div className="flex-1 py-1 rounded bg-white text-brand-purple font-black text-[9px] text-center shadow-xs">Today</div>
                        <div className="flex-1 py-1 text-slate-500 font-bold text-[9px] text-center">All Meds</div>
                        <div className="flex-1 py-1 text-slate-500 font-bold text-[9px] text-center">Refills</div>
                      </div>
                    </div>

                    {/* Time of Day filter */}
                    <div className="px-4 mt-2 text-center">
                      <span className="text-[8px] font-black text-slate-800 uppercase tracking-widest">Time of Day Filter</span>
                      <div className="flex justify-between mt-1.5">
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-xs">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-[7px] font-bold text-brand-purple">Early</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                          <span className="text-[7px] font-bold text-slate-400">Morning</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                          <span className="text-[7px] font-bold text-slate-400">Afternoon</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                          <span className="text-[7px] font-bold text-slate-400">Night</span>
                        </div>
                      </div>
                    </div>

                    {/* Med List Area */}
                    <div className="flex-1 px-4 py-2 overflow-y-auto flex flex-col gap-2">
                      <div className="app-med-card app-med-card-1 bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-brand-purple-light text-brand-purple font-black text-[10px] flex items-center justify-center">Pa</div>
                          <div className="text-left">
                            <span className="text-[9px] font-black text-slate-800 block leading-tight">Paracetamol • 500mg</span>
                            <span className="text-[7px] text-slate-400">Early morning, bedtime</span>
                          </div>
                        </div>
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-white border-t border-slate-100 py-1.5 px-5 flex justify-between items-center rounded-b-[34px]">
                      <div className="flex flex-col items-center"><HomeIcon className="w-3.5 h-3.5 text-slate-400" /><span className="text-[6px] text-slate-400">Home</span></div>
                      <div className="flex flex-col items-center"><Activity className="w-3.5 h-3.5 text-brand-purple" /><span className="text-[6px] text-brand-purple font-bold">Medicines</span></div>
                      <div className="w-7 h-7 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/20">+</div>
                      <div className="flex flex-col items-center"><Clock className="w-3.5 h-3.5 text-slate-400" /><span className="text-[6px] text-slate-400">Activity</span></div>
                      <div className="flex flex-col items-center"><Sparkles className="w-3.5 h-3.5 text-slate-400" /><span className="text-[6px] text-slate-400">Progress</span></div>
                    </div>
                  </div>

                  {/* SCREEN 4: RECOVERY ROADMAP TIMELINE */}
                  <div className="screen-app-timeline absolute inset-0 pt-8 px-4 flex flex-col bg-white z-10 transition-opacity duration-300">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                      <h4 className="text-xs font-black text-slate-900 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                        Roadmap
                      </h4>
                      <span className="text-[7.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Day 2 Active</span>
                    </div>

                    <div className="flex-1 relative pl-4.5 flex flex-col gap-3">
                      <div className="absolute left-[6px] top-[6px] bottom-[6px] w-0.5 bg-slate-100" />
                      <div className="app-timeline-fill absolute left-[6px] top-[6px] bottom-[50%] w-0.5 bg-brand-purple" />

                      {/* Day 1 - 2 */}
                      <div className="app-timeline-node app-timeline-node-1 relative flex gap-2.5 text-left">
                        <div className="absolute left-[-20.5px] top-1 w-2 h-2 rounded-full bg-brand-purple ring-4 ring-brand-purple/10" />
                        <div className="flex-1 p-2 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[8px] font-bold text-brand-purple block">Day 1 - 2: Pure Liquid Diet</span>
                          <p className="text-[7.5px] text-slate-400 mt-0.5">Focus strictly on clear juices & rest. Minimal walking.</p>
                        </div>
                      </div>

                      {/* Day 3 */}
                      <div className="app-timeline-node app-timeline-node-2 relative flex gap-2.5 text-left">
                        <div className="absolute left-[-20.5px] top-1 w-2 h-2 rounded-full bg-slate-300" />
                        <div className="flex-1 p-2 bg-slate-50 rounded-xl border border-slate-100 opacity-60">
                          <span className="text-[8px] font-bold text-slate-600 block">Day 3: Soft Solids</span>
                          <p className="text-[7.5px] text-slate-400 mt-0.5">Transition to porridge & mashed fruits. Check dressings.</p>
                        </div>
                      </div>

                      {/* Day 7 */}
                      <div className="app-timeline-node app-timeline-node-3 relative flex gap-2.5 text-left">
                        <div className="absolute left-[-20.5px] top-1 w-2 h-2 rounded-full bg-slate-300" />
                        <div className="flex-1 p-2 bg-slate-50 rounded-xl border border-slate-100 opacity-60">
                          <span className="text-[8px] font-bold text-slate-600 block">Day 7: Clinic Follow-up</span>
                          <p className="text-[7.5px] text-slate-400 mt-0.5">Meet Dr. Mehta for incision inspection and stitch assessment.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SCREEN 5: MR. MEDDY CHAT SCREEN */}
                  <div className="screen-app-chat absolute inset-0 pt-7 flex flex-col justify-between bg-brand-purple-light z-10 transition-opacity duration-300">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b border-slate-200/50 pb-2 px-4 bg-white pt-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-brand-purple-light flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 text-brand-purple rotate-180" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-[12px] font-black text-slate-900 leading-none">Mr. Meddy</h4>
                          <span className="text-[7.5px] text-brand-purple font-mono font-bold">Speaking...</span>
                        </div>
                      </div>
                      <div className="text-slate-400 flex gap-0.5">
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                      </div>
                    </div>

                    {/* Chat Bubble Area */}
                    <div className="flex-1 p-3.5 flex flex-col gap-3 overflow-y-auto">
                      {/* User message (Paracetamol) */}
                      <div className="app-chat-user app-chat-user-1 ml-auto max-w-[80%] bg-brand-purple text-white text-[9px] py-1.5 px-3 rounded-2xl rounded-tr-xs shadow-xs font-bold leading-normal">
                        Paracetamol
                      </div>

                      {/* Mr. Meddy Response */}
                      <div className="app-chat-bot app-chat-bot-1 max-w-[90%] bg-white text-slate-800 text-[8.5px] p-3 rounded-2xl rounded-tl-xs shadow-md border border-slate-100 flex flex-col gap-1 relative leading-relaxed text-left">
                        {/* Audio speaker float icon */}
                        <div className="absolute right-2 top-2 text-brand-purple/75">
                          <Volume2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="pr-4.5 font-bold">
                          I'm glad you've taken your Paracetamol, Vortex 😊.
                        </div>
                        <div className="text-slate-600 mt-1">
                          Since you've recently experienced dizziness and headache, please make sure to rest and stay hydrated. It's also essential to take your other medicines as prescribed.
                        </div>
                        <div className="text-slate-700 font-bold border-t border-slate-100 pt-1 mt-1.5">
                          Have you taken your Ampicillin and Cough Relief for the day? 🤔
                        </div>
                      </div>

                      {/* Inline symptom logging quick options */}
                      <div className="flex flex-col gap-1.5 mt-2">
                        <div className="bg-white/95 hover:bg-white text-slate-800 py-1.5 px-3 rounded-xl border border-slate-100 text-[8.5px] font-black flex items-center gap-1.5 shadow-xs transition-colors text-left">
                          <span>📋</span> Log your current symptoms
                        </div>
                        <div className="bg-white/95 hover:bg-white text-slate-800 py-1.5 px-3 rounded-xl border border-slate-100 text-[8.5px] font-black flex items-center gap-1.5 shadow-xs transition-colors text-left">
                          <span>💊</span> Check medicine schedule for the day
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="bg-white border-t border-slate-100 p-2 flex items-center gap-2">
                      <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 text-[9px] text-slate-400 flex justify-between items-center">
                        <span>How are you feeling?</span>
                        <Mic className="w-3.5 h-3.5 text-brand-purple" />
                      </div>
                    </div>
                  </div>

                  {/* Floating PDF document for Scene 6 */}
                  <div className="small-pdf-icon absolute top-1/4 right-[25%] w-12 h-16 bg-white rounded shadow-xl p-1 z-25 border border-slate-200">
                    <div className="w-full h-1 bg-brand-purple rounded-2xs mb-0.5" />
                    <div className="w-2/3 h-0.5 bg-slate-200 rounded-2xs mb-0.5" />
                    <div className="w-4/5 h-0.5 bg-slate-200 rounded-2xs mb-0.5" />
                    <div className="w-1/2 h-0.5 bg-slate-200 rounded-2xs mb-0.5" />
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Bottom indicator reminding users to scroll */}
          <div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-1.5 transition-opacity duration-500 pointer-events-none"
            style={{ opacity: scrollProgress > 0.95 ? 0 : 0.7 }}
          >
            <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase font-mono">
              Scroll down to unfold story
            </span>
            <div className="w-6 h-10 border border-slate-350 rounded-full p-1 flex justify-center">
              <div className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-bounce mt-1" />
            </div>
          </div>
        </div>
        </div>
      
      {/* Premium Stats, Features, and Testimonials Section (Venture-Backed Brand Feel) */}
      <section className="relative w-full bg-white py-24 px-6 md:px-12 z-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Trust Statistics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 border-b border-slate-100 text-center">
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl md:text-5xl font-black text-brand-purple tracking-tight">98.4%</span>
              <span className="text-sm font-bold text-slate-800 mt-2">Medication Adherence</span>
              <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                Smart schedules, dynamic filters, and vocal alarms ensure you stick to your doctor's exact instructions.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl md:text-5xl font-black text-brand-purple tracking-tight">100%</span>
              <span className="text-sm font-bold text-slate-800 mt-2">HIPAA Secure & Encrypted</span>
              <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                Your discharge files are processed locally and securely. No data sharing, no public LLMs.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-4xl md:text-5xl font-black text-brand-purple tracking-tight">24 / 7</span>
              <span className="text-sm font-bold text-slate-800 mt-2">On-Demand Companion</span>
              <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                Whether it's 3 AM or mid-day, Mr. Meddy is awake and ready to check your symptoms and timetable.
              </p>
            </div>
          </div>

          {/* Detailed Features Grid */}
          <div className="py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold font-mono tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-indigo-100">
                Core Capabilities
              </span>
              <h2 className="text-3xl md:text-4.5xl font-black tracking-tight text-slate-900 mt-4 leading-tight">
                Engineered for a smooth post-hospital recovery.
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Discharge Buddy replaces stack folders of clinical instructions with an intelligent, interactive mobile hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="group bg-[#f8fafc] hover:bg-indigo-50/30 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-slate-900">AI Discharge Summary Scanner</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  Simply point your camera or upload a PDF of your hospital summary. Our private clinical parser processes handwriting, charts, schedules, and complex doctor jargon within seconds.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-[#f8fafc] hover:bg-indigo-50/30 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Custom Medication Dashboard</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  Pills are categorized cleanly into early, morning, afternoon, and night dosages. Checking off a pill updates your progress bar, helping your family caregivers monitor status remotely.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-[#f8fafc] hover:bg-indigo-50/30 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Dynamic Recovery Roadmap</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  Follow a day-by-day clinical path showing diet adjustments (e.g. liquid to solid diet), activity limits, dressing changes, and upcoming clinic appointments.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-[#f8fafc] hover:bg-indigo-50/30 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Mr. Meddy 3 AM Support</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  Avoid dangerous search engine rabbit holes. Ask Mr. Meddy about symptoms, medication interactions, or sleep posture. He answers instantly using only your verified discharge paper data.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Testimonials / Case Studies */}
          <div className="bg-gradient-to-tr from-brand-purple/5 to-indigo-50/30 rounded-[36px] p-8 md:p-14 border border-indigo-100/40 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            {/* Mascot in background */}
            <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 opacity-5 pointer-events-none">
              <MrMeddy state="happy" className="w-full h-full" />
            </div>

            <div className="w-full md:w-1/2 text-left relative z-10">
              <span className="text-[10px] font-bold font-mono tracking-widest text-brand-purple uppercase bg-white px-3 py-1 rounded-full border border-indigo-100">
                Loved by patients & doctors
              </span>
              <h3 className="text-2.5xl md:text-3.5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
                "We felt supported every single day of recovery."
              </h3>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Read how Discharge Buddy is helping families bypass the panic and transition from hospital ward to bedroom with absolute clarity.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6 relative z-10">
              {/* Testimonial Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100">
                <p className="text-xs italic text-slate-650 leading-relaxed">
                  "My father was discharged after double bypass surgery with 7 medicines and a dozen guidelines. Discharge Buddy organized everything, and Mr. Meddy answered all our late-night panic questions."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] font-bold text-brand-purple font-mono">
                    MK
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 block">Meera K.</span>
                    <span className="text-[9px] text-slate-400 font-bold block">Caregiver & Daughter, Boston</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-100">
                <p className="text-xs italic text-slate-650 leading-relaxed">
                  "As a surgeon, my biggest worry is patients mismanaging meds or ignoring warnings post-discharge. Discharge Buddy translates our clinical summary into a warm, daily plan they actually follow."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] font-bold text-emerald-600 font-mono">
                    DR
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 block">Dr. Amanda Vance, MD</span>
                    <span className="text-[9px] text-slate-400 font-bold block">Chief of Post-Operative Recovery, Stanford Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA section */}
      <footer className="w-full bg-[#f8fafc] border-t border-slate-200/60 py-16 px-6 md:px-12 relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="font-sans font-black tracking-tight text-slate-900">
                Discharge<span className="text-brand-purple">Buddy</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm mt-2 font-medium">
              Disclaimer: Discharge Buddy provides AI transcriptions and reminders based on your documents. It does not provide clinical diagnostic services or replace physician oversight.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-xs text-slate-600 font-bold">
            <div className="flex flex-col gap-2">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[9px]">Product</span>
              <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-purple transition-colors">HIPAA Compliance</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[9px]">Support</span>
              <a href="mailto:support@dischargebuddy.com" className="hover:text-brand-purple transition-colors">support@dischargebuddy.com</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Press Inquiries</a>
              <a href="#" className="hover:text-brand-purple transition-colors">FAQ</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-bold">
          <span>&copy; {new Date().getFullYear()} Discharge Buddy Inc. All rights reserved.</span>
          <span>Designed with care.</span>
        </div>
      </footer>
    </div>
  );
}
