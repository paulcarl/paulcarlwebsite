const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'UI/UX Design', level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      skill.level === 'Advanced'
                        ? 'bg-gray-900 w-4/5'
                        : 'bg-gray-600 w-3/5'
                    }`}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 