export default function Hero() {
  return (
    <section 
      className="relative h-[60vh] overflow-hidden flex items-center"
      style={{
        backgroundImage: 'url(/paul-carl-hero-bg.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px',
        backgroundPosition: 'center',
        opacity: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl pt-[5vh]">
            FORGE YOUR FUTURE<br />TRANSMUTE IDEAS INTO PROFITS
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Web Developer & Designer crafting digital experiences
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
              >
                View Projects
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 