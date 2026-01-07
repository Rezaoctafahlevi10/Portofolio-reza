"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  return (
    <section id="about" className="relative px-4 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 rpx-dot-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-purple-300 blur-[60px] sm:blur-[90px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#d9d9ff_1px,transparent_1px)] bg-[length:18px_18px] opacity-20" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden sm:block absolute bottom-16 right-8 sm:right-28 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-indigo-500"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden sm:block absolute top-20 right-8 sm:right-28 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-indigo-500"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="hidden md:block absolute left-4 md:left-16 top-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-500"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="hidden md:block absolute left-4 md:left-16 top-1/3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-500"
      />

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-1/6 bottom-8 sm:bottom-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-600"
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-8 sm:bottom-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-600"
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-1/2 bottom-8 sm:bottom-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-600"
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute right-1/6 bottom-8 sm:bottom-10 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-600"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-full md:max-w-6xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-16">
          <p className="text-indigo-600 font-semibold text-sm sm:text-base">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mt-2">
            Education & Work Experience
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            A summary of my education and professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <GraduationCap className="text-indigo-700" size={24} sm-size={28} />
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-900">Education</h3>
            </div>

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1}
              className="rounded-xl"
            >
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-700 animate-float"
                >
                  <h4 className="text-lg font-semibold text-indigo-900">Universitas Jember</h4>
                  <p className="text-gray-600">Bachelor of Informatics</p>
                  <span className="text-sm text-gray-400">2021 – 2024</span>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500 animate-float"
                >
                  <h4 className="text-lg font-semibold text-indigo-900">Senior High School 1 Bangil</h4>
                  <p className="text-gray-600">Science</p>
                  <span className="text-sm text-gray-400">2018 – 2021</span>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Briefcase className="text-indigo-700" size={24} sm-size={28} />
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-900">Experience</h3>
            </div>

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1}
            >
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-700 animate-float"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">
                    Full Stack Web Developer (Bootcamp)
                  </h4>
                  <p className="text-gray-600">Dicoding Indonesia</p>
                  <span className="text-sm text-gray-400">2024</span>
                  <p className="text-gray-500 mt-2 sm:mt-3">
                    React JS, Express JS, REST API, CSS, deployment workflow.
                  </p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500 animate-float"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">
                    Quality Assurance (Intern)
                  </h4>
                  <p className="text-gray-600">PT Arkatama Multi Solusindo</p>
                  <span className="text-sm text-gray-400">Feb 2024 - Juni 2024</span>
                  <p className="text-gray-500 mt-2 sm:mt-3">
                    I worked on a tracer study project with manual testing and bug reporting using Trello, besides that I was also given training on automation testing using Selenium and API testing.
                  </p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500 animate-float"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">
                    Quality Assurance (Intern)
                  </h4>
                  <p className="text-gray-600">PT Berkah Digital Aysah</p>
                  <span className="text-sm text-gray-400">Nov 2024 - Feb 2025</span>
                  <p className="text-gray-500 mt-2 sm:mt-3">
                    As QA on the Dee project, I was responsible for developing test plans, test scenarios, and test cases. I performed manual testing on the website and mobile platforms, documented and reported bugs to developers via Trello, and conducted regression testing to ensure fixes didn't impact other functions (UAT).
                  </p>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-indigo-500 animate-float"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-indigo-900">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600">
                    NTT Data Indonesia - Data is placed at the client Bank Mandiri Tbk
                  </p>
                  <span className="text-sm text-gray-400">Oct 2024 - now</span>
                  <p className="text-gray-500 mt-2 sm:mt-3">
                    I served as QA on the Kopra AI Trader project, which handles large-scale corporate trade (export-import and B2B transactions). My duties included manual testing of the website according to flow and design, creating evidence for test case execution, bug monitoring through Jira, and conducting UAT and regression testing.
                  </p>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
