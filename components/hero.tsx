"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Full Stack Web Developer", "Quality Assurance Engineer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((r) => (r + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 items-center overflow-hidden rpx-dot-bg"
    >
      <div className="relative z-10 text-center md:text-left">
        <p className="text-gray-500 mt-4">Welcome to My Portfolio</p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 leading-tight">
          I Am Reza <br /> Octa Fahlevi
        </h1>

        <h2 className="text-xl sm:text-2xl text-indigo-600 mt-4 h-[32px]">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-gray-500 mt-5 max-w-lg mx-auto md:mx-0">
          I'm a fresh graduate from Jember University, a full-stack web
          developer and quality assurance engineer. I really enjoy new things.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/reza-octa-fahlevi-a78366208/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Hire Me
          </a>

          <a
            href="https://drive.google.com/file/d/1DZ7rSt4f-T8kN_r6OQLZ-0RNyarQnG4X/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-indigo-100 text-indigo-900 px-6 py-3 rounded-lg hover:bg-indigo-200 transition">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto md:mx-0 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-[300px] sm:h-[380px] md:h-[430px] lg:h-[460px]">
        <div className="absolute -top-8 -left-8 w-full h-full animated-dots opacity-40 rounded-2xl"></div>
        <div className="absolute top-5 left-5 w-full h-full bg-indigo-900 rounded-2xl"></div>

        <div className="relative w-full h-full bg-white rounded-2xl p-5 shadow-2xl">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/rznew.jpeg"
              alt="Profile"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
