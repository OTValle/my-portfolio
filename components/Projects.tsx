"use client"

import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js and Tailwind CSS. Features smooth scrolling navigation, dark mode, and clean minimalist aesthetics.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      liveLink: "https://owelvalle.vercel.app",
      githubLink: "https://github.com/OTValle/my-portfolio",
    },
    {
      title: "Task Tracker Application",
      description:
        "A productivity app for managing daily tasks and projects. Includes features like task creation, completion tracking, priority levels, and local storage persistence.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React.js", "Tailwind CSS", "Local Storage", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform ${
                hoveredProject === index ? "scale-105 shadow-2xl" : "scale-100"
              }`}
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-64 object-cover transition-all duration-500 ${
                    hoveredProject === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center space-x-4 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.liveLink}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                    title="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
