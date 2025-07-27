import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/OT-Valle",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/valle-owel-646583346/",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://facebook.com/owel.valle",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:valleowel123@gmail.com",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-black dark:bg-white text-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-white dark:bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a developer for your next project, want to collaborate on something exciting,
              or just want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail
                  className="text-white dark:text-black group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <a
                  href="mailto:owel.valle@example.com"
                  className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors duration-200"
                >
                  valleowel123@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-white dark:text-black" size={20} />
                <span className="text-gray-300 dark:text-gray-600">Available upon request</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="text-white dark:text-black" size={20} />
                <span className="text-gray-300 dark:text-gray-600">Tanauan City, Batangas, Philippines</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            <p className="text-gray-300 dark:text-gray-600 mb-8">
              Connect with me on social media to stay updated with my latest projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`flex items-center space-x-3 p-4 bg-gray-900 dark:bg-gray-100 rounded-lg text-gray-300 dark:text-gray-600 ${link.color} transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-200 mt-16 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Owel Valle. Built with React.js and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
