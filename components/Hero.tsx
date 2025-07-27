"use client"

import { ChevronDown, Mail } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div
            className="relative w-48 h-48 mx-auto mb-8 group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/profile1.jpg"
              alt="Owel Valle"
              className={`w-full h-full rounded-full object-cover shadow-2xl transition-all duration-500 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full bg-black/20 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
            Hi, I'm{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Owel Valle
              </span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A Frontend Developer passionate about building{" "}
            <span className="font-semibold text-black dark:text-white">clean</span> and{" "}
            <span className="font-semibold text-black dark:text-white">interactive</span> web experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
            </span>
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center space-x-2">
              <Mail size={16} />
              <span>Get In Touch</span>
            </span>
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 group"
        >
          <ChevronDown className="group-hover:scale-125 transition-transform duration-300" size={32} />
        </button>
      </div>
    </section>
  )
}