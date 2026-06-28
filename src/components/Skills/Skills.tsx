export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "AI & Data Science",
      skills: ["Pandas", "NumPy", "Machine Learning", "OpenCV"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Firebase", "Vercel"],
    },
  ];

  return (
  <section
  id="skills"
  className="relative py-32"
>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute left-[-250px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7A0019]/20 blur-[150px]" />

        <div className="absolute right-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-[#7A0019]/15 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        {/* Heading */}
        <div className="mb-24">
          <p className="text-[#d12b53] text-lg tracking-[0.5em] mb-6">
            02
          </p>

          <h2 className="text-white text-5xl lg:text-7xl leading-none">
            Technical
            <br />
            <span className="italic font-serif text-[#d12b53]">
              Skills
            </span>
          </h2>

          <p className="text-white/60 max-w-xl mt-8 text-lg leading-8">
            A combination of software engineering,
            frontend development, AI and data science
            technologies used to build modern digital products.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-10
                transition-all
                duration-500
                hover:border-[#7A0019]/50
                hover:shadow-[0_0_60px_rgba(122,0,25,0.25)]
              "
            >
              <h3 className="text-white text-3xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white/80
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}