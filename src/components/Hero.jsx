import React, { useEffect, useState } from "react";
import pic from '../assets/Gemini_Generated_Image_n2287un2287un228.png'
import cv from '../assets/jahid-cv-updated_latestONe.pdf' 
import { Link } from "react-router-dom";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      id="home"
      aria-labelledby="hero-heading"
      className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center"
    >
      <div className="section-panel relative z-10 grid w-full grid-cols-1 items-center gap-12 overflow-hidden md:grid-cols-[1.15fr_0.85fr]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_30%)]" />

        <div className="text-center md:text-left">
          <span className="eyebrow mb-5">Full Stack Developer</span>

          <h1
            id="hero-heading"
            className={`text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05] transition-all duration-500 transform ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Md. Jahid Hasan
          </h1>

          <p className="section-copy mx-auto mt-6 max-w-2xl md:mx-0">
            I build clean, scalable web experiences with thoughtful interaction, strong structure, and a focus on performance. The portfolio is intentionally simple, but the details carry the design.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in a new tab)"
              className="primary-action w-full sm:w-auto"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              aria-label="Open contact section"
              className="secondary-action w-full sm:w-auto"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex  flex-wrap justify-center gap-3 md:justify-start">
            {['React.js', 'Node.js','Next.js', 'MongoDB', 'Tailwind'].map((item) => (
              <span key={item} className="soft-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className={`relative aspect-square w-56 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.95)] transition-all duration-700 sm:w-72 md:w-[24rem] ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/15 via-transparent to-sky-400/10" />
            <img
              src={pic}
              alt="Portrait of Md. Jahid Hasan — Full Stack Software Engineer"
              className="relative z-10 h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-20 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Available for</p>
              <p className="mt-1 text-sm font-semibold text-white">Freelance & collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
