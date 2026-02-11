export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center" >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Krishna Krishnatrey
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="mt-4 text-xl md:text-3xl text-gray-400">
          Web Developer • Problem Solver • Tech Enthusiast
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">
          I build responsive web applications, solve complex DSA problems,
          and love turning ideas into real-world projects using modern technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium text-center"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition rounded-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
