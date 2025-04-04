export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] overflow-hidden flex items-center"
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
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl pt-[7vh]">
            FORGE YOUR FUTURE.<br />TRANSMUTE IDEAS INTO PROFITS.
          </h1>
          <p className="mt-3 max-w-md mx-auto text-left text-base text-[hsl(var(--primary-foreground))] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I help both eCommerce and eBay businesses burn down inefficiencies and raise profits from the ashes. The fusion of marketing, software development, and workflow optimization creates the philosophers stone that transmutes ideas into profits. Continue reading to discover my exact formula.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-black bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 md:py-4 md:text-lg md:px-10"
              >
                View Projects
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[hsl(var(--secondary-foreground))] bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))]/90 md:py-4 md:text-lg md:px-10"
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