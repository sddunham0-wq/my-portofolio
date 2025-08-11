import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <a
          href="mailto:alfirasyid933@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Send Email
        </a>
      </motion.div>
    </section>
  );
}
