export default function FeaturedProject() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Project</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Name
            </h3>
            <p className="text-gray-600 mb-6">
              A brief description of your featured project. Highlight the key
              technologies used and the problem it solves.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                TypeScript
              </span>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
              >
                View Project
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 