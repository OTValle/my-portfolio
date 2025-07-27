import { Calendar, GraduationCap, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="group">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Owel Valle working"
              className="w-full rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Frontend Developer with a strong foundation in modern web technologies. Currently
              pursuing my Bachelor's degree in Information Technology, I love creating user-friendly and visually
              appealing web applications that solve real-world problems.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development started with curiosity about how websites work, and it has evolved into a
              passion for crafting clean, efficient, and interactive user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Calendar
                  className="text-black dark:text-white group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Age:</strong> 22 (Born October 14, 2002)
                </span>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer">
                <GraduationCap
                  className="text-black dark:text-white group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Education:</strong> BS Information Technology
                </span>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer">
                <MapPin
                  className="text-black dark:text-white group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>School:</strong> First Asia Institute of Technologies and Humanities (FAITH Colleges)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
