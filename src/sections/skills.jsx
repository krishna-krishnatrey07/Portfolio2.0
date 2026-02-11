export default function Skills() {
  const skillCards = [
    {
      title: "Programming Languages",
      skills: [
        {name:"C",level:"95%"},
        {name:"C++",level:"95%"},
        {name:"Python",level:"85%"},
      ],
    },
    {
      title: "Frontend",
      skills: [
        {name:"HTML",level:"95%"},
        {name:"CSS",level:"95%"},
        {name:"Javascript",level:"90%"},
        {name:"React",level:"85%"},
        {name:"TailwindCSS",level:"80%"},
      ],
    },
    {
      title: "Backend",
      skills: [
        {name:"Nodejs",level:"63%"},
        {name:"Expressjs",level:"68%"},
        {name:"MongoDB (Learning)",level:"15%"},
      ],
    },
    {
      title: "Data Science / ML",
      skills: [
        {name:"Python",level:"85%"},
        {name:"Numpy",level:"80%"},
        {name:"Matplotlib (Learning)",level:"25%"},
        {name:"Scikit-Learn (Learning)",level:"20%"},
      ],
    },
    {
      title: "Tools / Platforms",
      skills: [
        {name:"Google Colab",level:"90%"},
        {name:"Git & Github",level:"95%"},
        {name:"Figma (Learning)",level:"30%"},
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold">Skills</h1>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCards.map((card) => (
          <div
            key={card.title}
            className="p-8 border border-gray-600 rounded-xl hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              {card.title}
            </h2>

            <ul className="space-y-3 text-gray-400">
              {card.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="relative overflow-hidden border border-gray-600 rounded-md group cursor-pointer">
                  {/* Fill bar */}
                  <span
                    className="absolute left-0 top-0 h-full bg-blue-400 w-0 
                    transition-all duration-700 group-hover:w-[var(--level)]"
                    style={{ "--level": skill.level }}>
                 </span>

                  {/* Text */}
                <span className="relative z-10 block px-4 py-2 text-center text-gray-300">
                  {skill.name}
                </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
}
