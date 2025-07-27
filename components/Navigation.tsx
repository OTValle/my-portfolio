"use client"

import { useState, useEffect } from "react"
import { Home, FolderOpen, Github, Linkedin, Twitter, Youtube, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
  ]

  const socialItems = [
    { icon: Github, url: "https://github.com/owelvalle", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/owelvalle", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/owelvalle", label: "Twitter" },
    { icon: Youtube, url: "https://youtube.com/@owelvalle", label: "YouTube" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  activeSection === item.id
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
                title={item.label}
              >
                <Icon size={20} />
              </button>
            )
          })}

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

          {socialItems.map((item, index) => {
            const Icon = item.icon
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
                title={item.label}
              >
                <Icon size={20} />
              </a>
            )
          })}

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
            title="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
