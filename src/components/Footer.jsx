// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="section-shell pb-10">
      <div className="section-panel flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center text-sm text-slate-300 md:text-left">
          © 2025 Md. Jahid Hasan. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl text-slate-200">
          <a
            href="https://github.com/arjahid"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-chip !rounded-2xl !px-4 !py-3"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jahid-hasan-ba8873144/"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-chip !rounded-2xl !px-4 !py-3"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ar__jahid/"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-chip !rounded-2xl !px-4 !py-3"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/jahidul.jahid.285226"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-chip !rounded-2xl !px-4 !py-3"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
