import React from "react";

export default function About() {
  return (
   <section
  id="about"
  className="relative py-32"
>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#140004] to-[#2a0008]" />

        <div className="absolute left-[-250px] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-[#7A0019]/35 blur-[220px]" />

        <div className="absolute right-[-200px] top-0 h-[700px] w-[700px] rounded-full bg-[#7A0019]/40 blur-[220px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.45em] text-sm text-white/50 mb-8">
              About Me
            </p>

           <div className="max-w-[700px]">
  <h2 className="text-white text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-12">
    Turning Ideas Into
    <br />

    <span className="italic font-serif text-[#d12b53]">
      Digital Reality.
    </span>
  </h2>
</div>

            <p className="text-white/70 text-lg leading-10 max-w-xl">
              I'm Naavya, a Computer Science student specializing in
              Data Science, passionate about building intelligent,
              beautiful and user-centric digital products.
            </p>

            <p className="text-white/70 text-lg leading-10 max-w-xl mt-8">
              I love transforming complex ideas into elegant
              experiences through code, AI and design.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(122,0,25,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7A0019]/40
              hover:shadow-[0_0_60px_rgba(122,0,25,0.35)]
            "
            >
              <h3 className="text-6xl font-bold text-white">
                07+
              </h3>

              <div className="w-12 h-px bg-[#d12b53] mt-4 mb-4" />

              <p className="text-white/60">
                Projects Built
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(122,0,25,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7A0019]/40
              hover:shadow-[0_0_60px_rgba(122,0,25,0.35)]
            "
            >
              <h3 className="text-6xl font-bold text-white">
                06+
              </h3>

              <div className="w-12 h-px bg-[#d12b53] mt-4 mb-4" />

              <p className="text-white/60">
                Certifications
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(122,0,25,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7A0019]/40
              hover:shadow-[0_0_60px_rgba(122,0,25,0.35)]
            "
            >
              <h3 className="text-4xl font-bold text-white">
                B.Tech
              </h3>

              <div className="w-12 h-px bg-[#d12b53] mt-4 mb-4" />

              <p className="text-white/60">
                CSE (Data Science)
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              shadow-[0_0_40px_rgba(122,0,25,0.18)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#7A0019]/40
              hover:shadow-[0_0_60px_rgba(122,0,25,0.35)]
            "
            >
              <h3 className="text-4xl font-bold text-white">
                AI +
              </h3>

              <div className="w-12 h-px bg-[#d12b53] mt-4 mb-4" />

              <p className="text-white/60">
                Frontend Development
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}