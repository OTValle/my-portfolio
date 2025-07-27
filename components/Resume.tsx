import { Download, FileText } from "lucide-react";

export default function Resume() {
  // Best practice: URL-encode the filename to handle spaces and special characters.
  const pdfFileName = "CV Valle, Owel.pdf";
  const pdfUrl = `/${encodeURIComponent(pdfFileName)}`;

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-8"></div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 group hover:shadow-2xl transition-all duration-500">
            <div className="mb-6">
              <FileText
                className="text-black dark:text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                size={64}
              />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">View My Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a detailed overview of my education, skills, experience, and projects in a professionally formatted
                document.
              </p>
            </div>

            {/* --- MODIFIED LINK --- */}
            <a
              href={pdfUrl}
              target="_blank" // This attribute opens the link in a new tab
              rel="noopener noreferrer" // Security measure for opening links in a new tab
              className="inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <FileText size={20} />
              <span>Click HERE to view my CV</span>
            </a>
            {/* --- END OF MODIFICATION --- */}

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">PDF format • Last updated: July 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}