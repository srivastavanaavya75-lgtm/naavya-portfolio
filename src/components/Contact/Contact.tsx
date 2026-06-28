export default function Contact() {
  return (
    <section
  id="contact"
  className="relative py-32"
>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A0019]/20 blur-[180px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center">

          <p className="text-[#d12b53] text-lg tracking-[0.5em] mb-6">
            03
          </p>

          <h2 className="text-white text-5xl lg:text-7xl leading-none">
            Let's Build
            <br />
            <span className="italic font-serif text-[#d12b53]">
              Something Exceptional.
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-10 text-lg leading-8">
            Open to internships, collaborations,
            freelance opportunities and innovative
            AI-powered projects.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
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
            <p className="text-[#d12b53] uppercase tracking-[0.3em] text-sm mb-4">
              Email
            </p>

            <h3 className="text-white text-2xl font-semibold">
              Contact Me
            </h3>

            <p className="text-white/60 mt-4">
              Send an email directly.
            </p>
          </a>

          <a
            href="https://github.com/srivastavanaavya75-lgtm"
            target="_blank"
            rel="noreferrer"
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
            <p className="text-[#d12b53] uppercase tracking-[0.3em] text-sm mb-4">
              GitHub
            </p>

            <h3 className="text-white text-2xl font-semibold">
              View Projects
            </h3>

            <p className="text-white/60 mt-4">
              Explore my repositories.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/naavya-srivastava-661bb03ba/"
            target="_blank"
            rel="noreferrer"
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
            <p className="text-[#d12b53] uppercase tracking-[0.3em] text-sm mb-4">
              LinkedIn
            </p>

            <h3 className="text-white text-2xl font-semibold">
              Connect
            </h3>

            <p className="text-white/60 mt-4">
              Let's connect professionally.
            </p>
          </a>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">

          <a
            href="mailto:srivastavanaavya75@gmail.com"
            className="
              px-10
              py-5
              rounded-full
              bg-[#d12b53]
              text-white
              font-medium
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(209,43,83,0.5)]
            "
          >
            Let's Talk →
          </a>

        </div>

      </div>
    </section>
  );
}