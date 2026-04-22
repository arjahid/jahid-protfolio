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
      className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-primary font-medium mb-2">Hello, I&apos;m</p>

          <h1
            id="hero-heading"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight transition-all duration-500 transform ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Md. Jahid Hasan
          </h1>

          <p className="mt-3 text-lg md:text-xl text-slate-600 font-medium">
            Full Stack Developer — building accessible, scalable web
            applications with a focus on maintainability and performance.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in a new tab)"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-white font-semibold shadow hover:shadow-lg transition text-center"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              aria-label="Open contact section"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            className={`w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-2xl border border-slate-100 transform transition-all duration-700 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={pic}
              alt="Portrait of Md. Jahid Hasan — Full Stack Software Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
