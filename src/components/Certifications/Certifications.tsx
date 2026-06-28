export default function Certifications() {
  const certifications = [
    "JP Morgan Chase - Quantitative Research",
    "Deloitte - Data Analytics",
    "Tata - GenAI Powered Data Analytics",
    "Tata - Cybersecurity Analyst",
    "BCGX - Data Science",
    "BCGX - GenAI",
    "BCGX - Introduction to Data for Decision Makers",
  ];

  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black" />

      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}
        <div className="mb-24">

          <p className="text-[#d12b53] text-lg tracking-[0.5em] mb-6">
            03
          </p>

          <h2 className="text-white text-5xl lg:text-7xl leading-none">
            Professional
            <br />
            <span className="italic font-serif text-[#d12b53]">
              Certifications
            </span>
          </h2>

          <p className="text-white/60 max-w-xl mt-8 text-lg leading-8">
            Industry-recognized virtual job simulations and
            certifications from global organizations.
          </p>

        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((certificate, index) => (
            <div
              key={index}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:border-[#7A0019]/50
                hover:shadow-[0_0_50px_rgba(122,0,25,0.25)]
              "
            >
              <p className="text-white text-lg font-medium">
                {certificate}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}