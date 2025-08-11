import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React & Tailwind.",
      link: "#",
    },
    {
      title: "E-Commerce UI",
      desc: "Frontend UI for an online store.",
      link: "#",
    },
    {
      title: "Blog Platform",
      desc: "Responsive blog platform design.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <a href={p.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
