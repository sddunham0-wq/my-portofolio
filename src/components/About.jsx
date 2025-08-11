import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
        <p className="text-gray-600 text-lg">
          I am a dedicated frontend developer with a passion for creating
          smooth, responsive, and visually appealing websites. I enjoy working
          with modern frameworks and tools to bring ideas to life on the web.
        </p>
      </motion.div>
    </section>
  );
}
