import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6"
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-600">SID</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate Frontend Developer building smooth & modern web
        experiences.
      </motion.p>

      <motion.img
        src="/Brad Pitt.jpg"
        alt="Profile"
        className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto md:mx-0 border-4 border-yellow-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {"SID"}
      </motion.div>
    </section>
  );
}
