export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the first project.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of the second project.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of the third project.',
      link: '#',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-gray-900 font-medium hover:text-gray-700"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 