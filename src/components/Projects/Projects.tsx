import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-24">
          <p className="text-[#d12b53] text-lg tracking-[0.5em] mb-6">
            01
          </p>

          <h2 className="text-white text-5xl lg:text-7xl leading-none">
            Featured
            <br />
            <span className="italic font-serif text-[#d12b53]">
              Projects
            </span>
          </h2>

          <p className="text-white/60 max-w-xl mt-8 text-lg leading-8">
            A curated collection of AI, Data Science,
            Frontend and Full Stack projects focused on
            solving real-world problems.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
              }}
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
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-[#d12b53] uppercase tracking-[0.3em] text-sm mb-4">
                    {project.category}
                  </p>

                  <h3 className="text-white text-4xl font-bold mb-6">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/10
                          text-white/70
                          text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[#d12b53]
                      font-medium
                      tracking-wide
                      transition-all
                      duration-300
                      hover:text-white
                      hover:translate-x-2
                    "
                  >
                    View Project
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}