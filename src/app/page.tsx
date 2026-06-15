"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  Menu, 
  X, 
  Mail, 
  Cpu, 
  Sparkles,
  GitBranch,
  Search,
  BookOpen,
  Code2,
  Database,
  Braces
} from "lucide-react";

const GithubIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

type AccentType = "rose" | "amber" | "slate";

interface ConsoleLog {
  text: string;
  type: "input" | "success" | "pending" | "info";
}

export default function Home() {
  const [accent, setAccent] = useState<AccentType>("rose");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"weaving" | "core" | "catalysts">("weaving");
  
  // Interactive Console State
  const [consoleInput, setConsoleInput] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([
    { text: "INITIALIZING BRINARYA CONFLICT MODULES...", type: "info" },
    { text: "COGNITIVE ALIGNMENT: WEB DEVELOPER v1.0.0", type: "success" },
    { text: "READY. SELECT A DIRECTIVE OR TYPE 'help'.", type: "pending" }
  ]);

  // Handle command execution
  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    if (!cleanCmd) return;

    const newLogs = [...consoleLogs, { text: `> ${cmd}`, type: "input" as const }];

    if (cleanCmd === "help") {
      newLogs.push(
        { text: "AVAILABLE DIRECTIVES:", type: "info" },
        { text: "  summon    - Reveal contact coordinates", type: "success" },
        { text: "  decrypt   - Read ciphered grimoire metadata", type: "success" },
        { text: "  transmute - Toggle thematic color coordinates", type: "success" },
        { text: "  clean     - Purge console buffer logs", type: "success" }
      );
    } else if (cleanCmd === "summon") {
      newLogs.push(
        { text: "[PENDING] Routing transmission lines...", type: "pending" },
        { text: "[SUCCESS] Subject: Brinarya Nino Sudhipurwa", type: "success" },
        { text: "[SUCCESS] Coordinates: Brinaryanino09@gmail.com", type: "success" },
        { text: "[SUCCESS] GitHub: github.com/brinaryanino", type: "success" }
      );
    } else if (cleanCmd === "decrypt") {
      newLogs.push(
        { text: "[PENDING] Decoding grimoire cipher nodes...", type: "pending" },
        { text: "[DECRYPTED] 'Vibe coding is the boundary where intent meets execution.'", type: "info" },
        { text: "[DECRYPTED] Core Directive: Formulate responsive front-ends with Antigravity speed.", type: "success" }
      );
    } else if (cleanCmd === "transmute") {
      const accents: AccentType[] = ["rose", "amber", "slate"];
      const currentIndex = accents.indexOf(accent);
      const nextIndex = (currentIndex + 1) % accents.length;
      const nextAccent = accents[nextIndex];
      setAccent(nextAccent);
      newLogs.push(
        { text: `[TRANSMUTE] Invoking element: ${nextAccent.toUpperCase()}`, type: "info" }
      );
    } else if (cleanCmd === "clean") {
      setConsoleLogs([{ text: "CONSOLE CLEANSED. READY FOR DIRECTIVE.", type: "info" }]);
      setConsoleInput("");
      return;
    } else {
      newLogs.push(
        { text: `[ERROR] Unknown command '${cmd}'. Type 'help' for directives.`, type: "info" }
      );
    }

    setConsoleLogs(newLogs);
    setConsoleInput("");
  };

  // Auto scroll console to bottom
  useEffect(() => {
    const consoleBox = document.getElementById("console-logs");
    if (consoleBox) {
      consoleBox.scrollTop = consoleBox.scrollHeight;
    }
  }, [consoleLogs]);

  // Mouse position tracker for trailing glow (CSS variables for zero React re-renders)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Dynamic Theme Styling Tokens mapping
  const theme = {
    rose: {
      accent: "text-rose-500",
      accentBg: "bg-rose-500/10",
      accentBorder: "border-rose-500/20",
      hoverBorder: "group-hover:border-rose-700/60",
      glow: "group-hover:shadow-[0_0_20px_rgba(190,18,60,0.12)]",
      activeText: "text-rose-400",
      bullet: "bg-rose-600",
      underline: "after:bg-rose-700",
      customGlow: "shadow-[0_0_30px_rgba(190,18,60,0.05)]",
      cornerBorder: "group-hover:border-rose-700/60",
    },
    amber: {
      accent: "text-amber-500",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/20",
      hoverBorder: "group-hover:border-amber-600/50",
      glow: "group-hover:shadow-[0_0_20px_rgba(217,119,6,0.12)]",
      activeText: "text-amber-400",
      bullet: "bg-amber-600",
      underline: "after:bg-amber-600",
      customGlow: "shadow-[0_0_30px_rgba(217,119,6,0.05)]",
      cornerBorder: "group-hover:border-amber-600/60",
    },
    slate: {
      accent: "text-slate-300",
      accentBg: "bg-slate-300/5",
      accentBorder: "border-slate-500/20",
      hoverBorder: "group-hover:border-slate-500/60",
      glow: "group-hover:shadow-[0_0_20px_rgba(148,163,184,0.08)]",
      activeText: "text-slate-200",
      bullet: "bg-slate-400",
      underline: "after:bg-slate-400",
      customGlow: "shadow-[0_0_30px_rgba(148,163,184,0.03)]",
      cornerBorder: "group-hover:border-slate-400/60",
    }
  }[accent];

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] overflow-x-hidden font-sans select-none selection:bg-rose-900/30 selection:text-white">
      
      {/* Mouse Trailing Glow (Tied to CSS Variables for GPU-accelerated movement) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-colors duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), ${
            accent === "rose" ? "rgba(190, 18, 60, 0.05)" : 
            accent === "amber" ? "rgba(217, 119, 6, 0.05)" : 
            "rgba(148, 163, 184, 0.03)"
          }, transparent 70%)`
        }}
      />
      
      {/* 0. ARCHITECTURAL GRID LINES (Subtle background alignment helpers) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-12 md:px-24">
        <div className="w-[1px] h-full bg-white/[0.01]"></div>
        <div className="w-[1px] h-full bg-white/[0.01] hidden sm:block"></div>
        <div className="w-[1px] h-full bg-white/[0.01] hidden md:block"></div>
        <div className="w-[1px] h-full bg-white/[0.01] hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white/[0.01]"></div>
      </div>

      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-radial from-rose-950/5 via-transparent to-transparent blur-3xl pointer-events-none z-0"></div>

      {/* 1. FIXED MINIMAL HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#0a0a0c]/60 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Initials */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-xl tracking-widest font-black text-white flex items-center gap-1">
              Æ<span className={`h-1.5 w-1.5 rounded-full ${theme.bullet} inline-block animate-pulse`}></span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] group-hover:text-zinc-300 transition-colors">
              // BRINARYA.NINO
            </span>
          </a>

          {/* Navigation & Utilities */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a href="#artifacts" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors tracking-wide flex items-center gap-1.5">
                <span className={`text-[10px] ${theme.accent}`}>01.</span> ARTIFACTS
              </a>
              <a href="#chronicles" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors tracking-wide flex items-center gap-1.5">
                <span className={`text-[10px] ${theme.accent}`}>02.</span> CHRONICLES
              </a>
              <a href="#ritual" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors tracking-wide flex items-center gap-1.5">
                <span className={`text-[10px] ${theme.accent}`}>03.</span> THE RITUAL
              </a>
            </nav>

            {/* Separator */}
            <div className="h-4 w-[1px] bg-white/10"></div>

            {/* Transmutation Accents Switcher */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">TRANSMUTE:</span>
              <button 
                onClick={() => setAccent("rose")} 
                title="Blood / Crimson Theme" 
                className={`w-3.5 h-3.5 rounded-full bg-rose-700/80 border transition-all duration-300 ${accent === "rose" ? "border-white scale-125" : "border-transparent hover:scale-110"}`}
              />
              <button 
                onClick={() => setAccent("amber")} 
                title="Sun / Gold Theme" 
                className={`w-3.5 h-3.5 rounded-full bg-amber-600/85 border transition-all duration-300 ${accent === "amber" ? "border-white scale-125" : "border-transparent hover:scale-110"}`}
              />
              <button 
                onClick={() => setAccent("slate")} 
                title="Moon / Silver Theme" 
                className={`w-3.5 h-3.5 rounded-full bg-slate-400 border transition-all duration-300 ${accent === "slate" ? "border-white scale-125" : "border-transparent hover:scale-110"}`}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Accent toggle directly visible for mobile */}
            <button 
              onClick={() => {
                const modes: AccentType[] = ["rose", "amber", "slate"];
                setAccent(modes[(modes.indexOf(accent) + 1) % 3]);
              }}
              className="p-1 border border-white/5 bg-[#0d0d11] rounded font-mono text-[9px] text-zinc-400"
            >
              ACCENT: {accent.toUpperCase()}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-1"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-[#0a0a0c] border-b border-white/10 z-40 p-8 flex flex-col gap-8">
            <nav className="flex flex-col gap-6">
              <a 
                href="#artifacts" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wider text-zinc-100 hover:text-white transition-colors"
              >
                <span className={`font-mono text-sm ${theme.accent} mr-2`}>01 /</span> Selected Artifacts
              </a>
              <a 
                href="#chronicles" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wider text-zinc-100 hover:text-white transition-colors"
              >
                <span className={`font-mono text-sm ${theme.accent} mr-2`}>02 /</span> The Chronicles
              </a>
              <a 
                href="#ritual" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wider text-zinc-100 hover:text-white transition-colors"
              >
                <span className={`font-mono text-sm ${theme.accent} mr-2`}>03 /</span> The Ritual
              </a>
            </nav>
            <div className="h-[1px] w-full bg-white/5"></div>
            <div className="flex flex-col gap-3 font-mono text-xs text-zinc-500">
              <p>// SYSTEM DIRECTIVES LOADED</p>
              <p>// CORE STATE: SOLID_MATTE</p>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* 2. THE HERO SECTION */}
        <section className="relative py-12 md:py-32 flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center justify-between border-b border-white/[0.04]">
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10 w-full">
            <div className="flex items-center gap-3 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full">
              <Sparkles size={11} className={`${theme.accent} animate-pulse`} />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-400">// CONJURING SOLID LOGIC</span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// COGNITIVE SUBJECT</span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight font-black leading-[0.9] text-white break-words">
                BRINARYA NINO <br />
                <span className={`font-light italic text-transparent bg-clip-text bg-gradient-to-r ${accent === "rose" ? "from-rose-500 to-rose-900" : accent === "amber" ? "from-amber-400 to-amber-800" : "from-slate-200 to-slate-500"}`}>
                  SUDHIPURWA
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed font-sans text-zinc-400 font-light">
              A Web Developer synthesizing raw client logic into reactive front-end architectures. Melding the clean boundaries of database streams with the fluid aesthetic of modern user interfaces.
            </p>

            <div className="flex items-center gap-6 mt-2">
              <a 
                href="#artifacts"
                className={`px-6 py-3 border border-white/10 hover:border-white text-white font-mono text-xs tracking-wider transition-all duration-300`}
              >
                UNFOLD SCROLLS
              </a>
              <a 
                href="#ritual"
                className={`font-mono text-xs tracking-wider ${theme.accent} hover:text-white transition-colors flex items-center gap-2`}
              >
                SUMMON ARCHITECT <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Console Block */}
          <div className="lg:col-span-5 w-full mt-16 lg:mt-0 z-10">
            <div className="border border-white/10 bg-[#0c0c0f] rounded-none p-4 md:p-5 flex flex-col gap-4 relative overflow-hidden group shadow-2xl">
              {/* Corner Runic Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20 group-hover:border-rose-600 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/20 group-hover:border-rose-600 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/20 group-hover:border-rose-600 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/20 group-hover:border-rose-600 transition-colors duration-300"></div>

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 font-mono text-[10px] text-zinc-500">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className={theme.accent} />
                  <span>GRIMOIRE_SHELL.EXE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.bullet}`}></span>
                </div>
              </div>

              {/* Console Logs */}
              <div 
                id="console-logs"
                className="h-36 md:h-48 overflow-y-auto font-mono text-[11px] leading-relaxed flex flex-col gap-2 scrollbar-thin select-text"
              >
                {consoleLogs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-zinc-600">[{100 + i}]</span>
                    <span className={
                      log.type === "input" ? "text-white" :
                      log.type === "success" ? theme.activeText :
                      log.type === "pending" ? "text-zinc-400 italic" :
                      "text-zinc-500"
                    }>
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Command Buttons */}
              <div className="flex flex-wrap gap-2 border-t border-white/5 pt-3">
                <span className="font-mono text-[9px] text-zinc-500 self-center">DIRECTIVES:</span>
                <button 
                  onClick={() => runCommand("help")}
                  className="px-2.5 py-1 bg-white/[0.02] border border-white/5 hover:border-zinc-700 font-mono text-[10px] text-zinc-300 hover:text-white transition-colors"
                >
                  help
                </button>
                <button 
                  onClick={() => runCommand("summon")}
                  className="px-2.5 py-1 bg-white/[0.02] border border-white/5 hover:border-zinc-700 font-mono text-[10px] text-zinc-300 hover:text-white transition-colors"
                >
                  summon
                </button>
                <button 
                  onClick={() => runCommand("decrypt")}
                  className="px-2.5 py-1 bg-white/[0.02] border border-white/5 hover:border-zinc-700 font-mono text-[10px] text-zinc-300 hover:text-white transition-colors"
                >
                  decrypt
                </button>
                <button 
                  onClick={() => runCommand("transmute")}
                  className="px-2.5 py-1 bg-white/[0.02] border border-white/5 hover:border-zinc-700 font-mono text-[10px] text-zinc-300 hover:text-white transition-colors"
                >
                  transmute
                </button>
              </div>

              {/* Input Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  runCommand(consoleInput);
                }}
                className="flex items-center gap-2 border border-white/5 bg-black/40 px-2 py-1.5"
              >
                <span className="font-mono text-[11px] text-zinc-500">&gt;</span>
                <input 
                  type="text" 
                  value={consoleInput}
                  onChange={(e) => setConsoleInput(e.target.value)}
                  placeholder="enter runic statement..."
                  className="w-full bg-transparent border-none outline-none font-mono text-[11px] text-white placeholder-zinc-700 focus:ring-0"
                />
              </form>
            </div>
          </div>
        </section>

        {/* 3. THE ARTIFACTS GRID (Selected Work) */}
        <section id="artifacts" className="py-16 md:py-24 border-b border-white/[0.04]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="flex flex-col gap-3">
              <span className={`font-mono text-xs uppercase tracking-[0.2em] ${theme.accent}`}>
                01 // SELECT ARTIFACTS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                COGNITIVE SYSTEMS
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm text-zinc-500 font-light leading-relaxed">
              Geometric blueprints realized through highly strict coding standards and optimized logic pipelines. Hover each panel to feel the latent crimson energy grids.
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Card 1: Wide Layout */}
            <div className="md:col-span-8 group relative border border-white/5 bg-[#0d0d10] p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] hover:border-rose-900/40 transition-all duration-500 ease-out hover:scale-[1.005]">
              {/* Corner Runic Accents */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>

              {/* Glowing Background effect */}
              <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${theme.glow}`}></div>

              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                  [ MODULE.01 // PERSISTENCE ]
                </span>
                <span className="font-mono text-xs text-zinc-600">[ 0xDE_01 ]</span>
              </div>

              <div className="my-8">
                <h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-wide group-hover:text-white transition-colors">
                  DENotes
                </h3>
                <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                  An elegant markdown-based note taking journal storing records in encrypted localStorage matrices. Features a reactive compilation layout, instant content lookup, and full offline autonomy.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">REACT</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">LOCALSTORAGE</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">MARKDOWN</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">TAILWIND CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/brinaryanino" target="_blank" rel="noopener noreferrer" className="p-1.5 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                    <GithubIcon size={14} />
                  </a>
                  <a href="https://de-notes-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className={`p-1.5 border border-white/5 ${theme.accent} hover:text-white hover:border-zinc-700 transition-colors`}>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Narrow Layout */}
            <div className="md:col-span-4 group relative border border-white/5 bg-[#0d0d10] p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] hover:border-rose-900/40 transition-all duration-500 ease-out hover:scale-[1.005]">
              <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${theme.glow}`}></div>

              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                  [ MODULE.02 // METRICS ]
                </span>
                <span className="font-mono text-xs text-zinc-600">[ 0xGT_12 ]</span>
              </div>

              <div className="my-8">
                <h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-wide group-hover:text-white transition-colors">
                  GooseTyping
                </h3>
                <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                  A modular speed-typing training environment built to monitor and calibrate keystroke velocities. Integrated with interactive canvas progress visualizers and custom audio waves.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">TYPESCRIPT</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">CANVAS API</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">WEBAUDIO</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/brinaryanino" target="_blank" rel="noopener noreferrer" className="p-1.5 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                    <GithubIcon size={14} />
                  </a>
                  <a href="https://goose-typing-test.vercel.app/" target="_blank" rel="noopener noreferrer" className={`p-1.5 border border-white/5 ${theme.accent} hover:text-white hover:border-zinc-700 transition-colors`}>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Narrow Layout */}
            <div className="md:col-span-4 group relative border border-white/5 bg-[#0d0d10] p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] hover:border-rose-900/40 transition-all duration-500 ease-out hover:scale-[1.005]">
              <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${theme.glow}`}></div>

              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                  [ MODULE.03 // STREAMING ]
                </span>
                <span className="font-mono text-xs text-zinc-600">[ 0xNS_88 ]</span>
              </div>

              <div className="my-8">
                <h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-wide group-hover:text-white transition-colors">
                  Breaking News Stream
                </h3>
                <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                  A real-time information aggregator connecting client interfaces directly to multi-channel live news events. Leverages asynchronous request pipelines for fast layout updates.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">JAVASCRIPT</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">WEBSOCKETS</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">NODE.JS</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/brinaryanino" target="_blank" rel="noopener noreferrer" className="p-1.5 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                    <GithubIcon size={14} />
                  </a>
                  <a href="https://breaking-news-stream.vercel.app/" target="_blank" rel="noopener noreferrer" className={`p-1.5 border border-white/5 ${theme.accent} hover:text-white hover:border-zinc-700 transition-colors`}>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Wide Layout */}
            <div className="md:col-span-8 group relative border border-white/5 bg-[#0d0d10] p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] hover:border-rose-900/40 transition-all duration-500 ease-out hover:scale-[1.005]">
              <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 ${theme.cornerBorder} duration-300`}></div>
              <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${theme.glow}`}></div>

              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">
                  [ MODULE.04 // GEOSPATIAL ]
                </span>
                <span className="font-mono text-xs text-zinc-600">[ 0xFT_90 ]</span>
              </div>

              <div className="my-8">
                <h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-wide group-hover:text-white transition-colors">
                  IndoFlightTracker
                </h3>
                <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                  A regional airspace navigation dashboard mapping geographical flight paths, waypoint coordinates, and real-time radar vector arrays. Merges leaflet layers with third-party tracking metrics.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">NEXT.JS</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">LEAFLET API</span>
                  <span className="px-2 py-0.5 border border-white/5 bg-black/40 font-mono text-[9px] text-zinc-400">REST APIS</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/brinaryanino" target="_blank" rel="noopener noreferrer" className="p-1.5 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                    <GithubIcon size={14} />
                  </a>
                  <a href="https://indo-flight-tracker.vercel.app/" target="_blank" rel="noopener noreferrer" className={`p-1.5 border border-white/5 ${theme.accent} hover:text-white hover:border-zinc-700 transition-colors`}>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. THE CHRONICLES (Timeline/Skills) */}
        <section id="chronicles" className="py-16 md:py-24 border-b border-white/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Timeline (Temporal Pathway) */}
            <div className="lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className={`font-mono text-xs uppercase tracking-[0.2em] ${theme.accent}`}>
                  02.A // THE CHRONICLES
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                  TEMPORAL PATHWAY
                </h2>
              </div>

              {/* Timeline Items */}
              <div className="flex flex-col gap-10 relative pl-6 md:pl-8">
                {/* Vertical Line */}
                <div className="absolute left-0 top-1.5 bottom-1.5 w-[1px] bg-white/5"></div>
                
                {/* Milestone 1 */}
                <div className="relative group">
                  {/* Timeline bullet indicator */}
                  <div className={`absolute left-0 -translate-x-1/2 top-1.5 w-2 h-2 rounded-full bg-zinc-800 group-hover:${accent === "rose" ? "bg-rose-600" : accent === "amber" ? "bg-amber-500" : "bg-slate-400"} transition-colors duration-300`}></div>
                  
                  <span className="font-mono text-xs text-zinc-500 block mb-2">AUG 2024 — PRESENT</span>
                  <h3 className="font-serif text-xl text-zinc-100 group-hover:text-white transition-colors">
                    Data Entry Specialist
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-400 tracking-wide uppercase mb-3">// INFORMATION REGISTRY</p>
                  <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                    Managing structured client records, verifying raw input matrices, and maintaining full data consistency check-loops to ensure perfect database alignment.
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative group">
                  <div className={`absolute left-0 -translate-x-1/2 top-1.5 w-2 h-2 rounded-full bg-zinc-800 group-hover:${accent === "rose" ? "bg-rose-600" : accent === "amber" ? "bg-amber-500" : "bg-slate-400"} transition-colors duration-300`}></div>
                  
                  <span className="font-mono text-xs text-zinc-500 block mb-2">INTERNSHIP // 2024</span>
                  <h3 className="font-serif text-xl text-zinc-100 group-hover:text-white transition-colors">
                    Front-End Web Developer
                  </h3>
                  <p className="font-mono text-[10px] text-zinc-400 tracking-wide uppercase mb-3">// SINERGI SOLUSI ANALITIKA</p>
                  <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                    Pioneered front-end logic dashboard interfaces, engineered responsive layouts, and optimized component render trees for complex data analytical streams.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Skills (Elemental Alchemist) */}
            <div className="lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className={`font-mono text-xs uppercase tracking-[0.2em] ${theme.accent}`}>
                  02.B // THE ALCHEMY
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                  ELEMENTAL SKILLS
                </h2>
              </div>

              {/* Skills Tab System */}
              <div className="flex flex-col gap-6">
                
                {/* Tabs Header */}
                <div className="flex border-b border-white/5 pb-2 gap-4">
                  <button 
                    onClick={() => setActiveTab("weaving")}
                    className={`font-mono text-xs tracking-wider pb-2 relative transition-colors ${activeTab === "weaving" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    WEAVING [FRONT]
                    {activeTab === "weaving" && <span className={`absolute bottom-[-9px] left-0 w-full h-[1px] ${theme.bullet}`}></span>}
                  </button>
                  <button 
                    onClick={() => setActiveTab("core")}
                    className={`font-mono text-xs tracking-wider pb-2 relative transition-colors ${activeTab === "core" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    SYSTEM CORE [BACK]
                    {activeTab === "core" && <span className={`absolute bottom-[-9px] left-0 w-full h-[1px] ${theme.bullet}`}></span>}
                  </button>
                  <button 
                    onClick={() => setActiveTab("catalysts")}
                    className={`font-mono text-xs tracking-wider pb-2 relative transition-colors ${activeTab === "catalysts" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    CATALYSTS [TOOLS]
                    {activeTab === "catalysts" && <span className={`absolute bottom-[-9px] left-0 w-full h-[1px] ${theme.bullet}`}></span>}
                  </button>
                </div>

                {/* Tab Contents: WEAVING */}
                {activeTab === "weaving" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Code2 className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">JAVASCRIPT</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Braces className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">TYPESCRIPT</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Layers className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">REACT / NEXT.JS</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Terminal className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">HTML & CSS STYLING</span>
                    </div>
                  </div>
                )}

                {/* Tab Contents: CORE */}
                {activeTab === "core" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Cpu className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">PHP</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Layers className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">LARAVEL FRAMEWORK</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Database className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">DATABASE (MYSQL/SQL)</span>
                    </div>
                  </div>
                )}

                {/* Tab Contents: CATALYSTS */}
                {activeTab === "catalysts" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Search className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">CURSOR EDITOR</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <Sparkles className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">ANTIGRAVITY (VIBE)</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:border-zinc-800 transition-colors duration-300">
                      <GitBranch className={`w-5 h-5 ${theme.accent}`} />
                      <span className="font-mono text-xs tracking-wider text-zinc-300">GIT / VERSION CONTROL</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* 5. THE RITUAL (Footer Contact) */}
        <section id="ritual" className="py-16 md:py-24 flex flex-col items-center text-center gap-12">
          
          <div className="flex flex-col gap-4 max-w-xl">
            <span className={`font-mono text-xs uppercase tracking-[0.25em] ${theme.accent}`}>
              03 // INITIATE THE TRANSMUTATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
              SUMMON THE <br />DEVELOPER
            </h2>
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mt-2">
              Transmission coordinates are open for web applications, front-end styling engineering, or direct collaborative code creation.
            </p>
          </div>

          {/* Large Animated Email Link */}
          <div className="my-6 w-full px-4 overflow-hidden">
            <a 
              href="mailto:Brinaryanino09@gmail.com"
              className={`font-serif text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-white transition-colors duration-300 hover:text-white link-underline-slide pb-2 break-all`}
            >
              Brinaryanino09@gmail.com
            </a>
          </div>

          {/* Social Coordinates Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-zinc-400">
            <a href="https://github.com/brinaryanino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <GithubIcon size={14} /> <span>GITHUB</span>
            </a>
            <span className="text-zinc-800">/</span>
            <a href="https://www.linkedin.com/in/brnryanino/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <LinkedinIcon size={14} /> <span>LINKEDIN</span>
            </a>
            <span className="text-zinc-800">/</span>
            <a href="mailto:Brinaryanino09@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> <span>EMAIL</span>
            </a>
          </div>
          
        </section>

      </main>

      <footer className="border-t border-white/[0.04] bg-[#070709] py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest text-center">
            © 2026. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

    </div>
  );
}
