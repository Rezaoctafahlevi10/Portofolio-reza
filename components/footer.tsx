"use client";

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Reza Octa Fahlevi — Portfolio
          </h2>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/reza-octa-fahlevi-a78366208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/fahlevi_rz10/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/Rezaoctafahlevi10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        <div className="h-[1px] bg-gray-700 my-6" />
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Reza Octa Fahlevi — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
