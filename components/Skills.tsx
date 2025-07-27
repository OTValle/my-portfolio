"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "Python",
    "Java",
    "MySQL",
    "HTML/CSS",
  ]

  const skillDescriptions: { [key: string]: string } = {
    React: "Component-based library for building user interfaces",
    "Next.js": "Full-stack React framework for production",
    TypeScript: "Typed superset of JavaScript",
    JavaScript: "Dynamic programming language for web development",
    TailwindCSS: "Utility-first CSS framework",
    "Node.js": "JavaScript runtime for server-side development",
    Python: "High-level programming language",
    Java: "Object-oriented programming language",
    "C++": "Systems programming language",
    MySQL: "Relational database management system",
    "HTML/CSS": "Markup and styling languages for web",
    "C#": "Microsoft's object-oriented programming language",
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill) => (
            <span
              key={skill}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
            >
              {skill}
            </span>
          ))}
        </div>

        {hoveredSkill && (
          <div className="text-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-200 dark:border-gray-700 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{hoveredSkill}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skillDescriptions[hoveredSkill]}</p>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Always learning and exploring new technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "GitHub", "VS Code", "Figma", "Responsive Design", "Web APIs"].map((tech) => (
              <span
                key={tech}
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
