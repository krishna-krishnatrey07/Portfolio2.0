export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold">
          About Me
        </h1>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-xl md:text-2xl text-blue-400 font-semibold">
            Crafting Digital Solutions
          </h3>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I'm a passionate Computer Science student who enjoys solving complex DSA problems
            and building responsive, real-world web applications.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Driven by curiosity and consistency, I continuously improve my skills in
            modern technologies like React, Node.js, and AI tools while turning ideas
            into meaningful projects.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { number: "7.3", label: "Current CGPA" },
            { number: "90+", label: "LeetCode Problems" },
            { number: "3", label: "Projects" },
            { number: "10+", label: "Technologies" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 border border-gray-800 rounded-xl text-center hover:border-blue-500 transition"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

     

      