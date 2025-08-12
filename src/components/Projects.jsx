import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React & Tailwind.",
      link: "https://github.com/username/portfolio",
      image: "/portfolio-thumbnail.jpg",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "E-Commerce UI",
      desc: "Frontend UI for an online store.",
      link: "https://github.com/username/ecommerce-ui",
      image: "/ecommerce-thumbnail.jpg",
      tech: ["React", "Redux", "CSS3"],
    },
    {
      title: "Blog Platform",
      desc: "Responsive blog platform design.",
      link: "https://github.com/username/blog-platform",
      image: "/blog-thumbnail.jpg",
      tech: ["Next.js", "Firebase", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
