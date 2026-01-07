"use client";

import { useState } from "react";
import Link from "next/link";
import "@/app/style.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-20 py-5">
        <h1 className="text-2xl font-serif font-bold text-red-400">
          Reza
        </h1>
        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-indigo-600">Home</Link>
          <Link href="#about" className="hover:text-indigo-600">About</Link>
          <Link href="#skill" className="hover:text-indigo-600">Skill</Link>
          <Link href="#project" className="hover:text-indigo-600">My Project</Link>
        </ul>

        {/* Desktop Contact */}
        <a
          href="https://wa.me/6282131959759"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-indigo-900 text-white px-6 py-2 rounded-md"
        >
          Contact Me
        </a>

        {/* Mobile Toggle Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <div className="w-8 h-[3px] bg-gray-700 mb-1" />
          <div className="w-8 h-[3px] bg-gray-700 mb-1" />
          <div className="w-8 h-[3px] bg-gray-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="#skill" onClick={() => setOpen(false)}>Skill</Link>
            <Link href="#project" onClick={() => setOpen(false)}>My Project</Link>
          </ul>

          <a
            href="https://wa.me/6282131959759"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-indigo-900 text-white px-6 py-2 rounded-md"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
