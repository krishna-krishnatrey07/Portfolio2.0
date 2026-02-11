import { Github, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Basic Portfolio",
      image: "",
      github: "#",
      live: "#",
    },
    {
      title: "Weather App",
      image: "",
      github: "#",
      live: "#",
    },
    {
      title: "Todo App",
      image: "",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full pt-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
        </div>

        {/* Center Line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-800 -translate-x-1/2"></div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                <div className="group w-full md:w-[45%] relative border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition">

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:blur-sm"
                  />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-4 bg-blue-600 rounded-full hover:scale-110 transition"
                    >
                      <Eye size={22} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="p-4 bg-gray-900 rounded-full hover:scale-110 transition"
                    >
                      <Github size={22} />
                    </a>
                  </div>

                  {/* Title */}
                  <div className="p-4 text-center bg-black">
                    <h2 className="text-lg font-semibold text-gray-300">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
