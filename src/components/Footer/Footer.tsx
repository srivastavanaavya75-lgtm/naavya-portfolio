export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-white text-xl font-semibold">
              Naavya Srivastava
            </h3>

            <p className="text-white/50 mt-2">
              Computer Science Engineer • Data Science • AI Developer
            </p>
          </div>

          <div className="flex items-center gap-8 text-white/60">

            <a
              href="mailto:srivastavanaavya75@gmail.com"
              className="hover:text-[#d12b53] transition-colors"
            >
              Email
            </a>

            <a
              href="https://github.com/srivastavanaavya75-lgtm"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d12b53] transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/naavya-srivastava-661bb03ba/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#d12b53] transition-colors"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">

          <p className="text-white/40 text-sm">
            © 2026 Naavya Srivastava. All Rights Reserved.
          </p>

          <p className="text-white/30 text-sm mt-2">
            Built with React, TypeScript & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
}