import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-10 py-5">
        <a href="#" className="flex items-baseline gap-[2px] select-none">
          <span
            className="font-playfair italic text-white text-[1.15rem] tracking-tight"
            style={{ fontWeight: 500 }}
          >
            Naavya
          </span>

          <span className="font-inter text-white/60 text-[0.95rem] font-light tracking-wider">
            .co
          </span>
        </a>

        <div className="hidden md:flex glass-pill rounded-full px-2 py-2 gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                glass-pill-item
                font-inter
                text-white/80
                hover:text-white
                text-sm
                font-medium
                px-5
                py-2
                rounded-full
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/resume/Naavya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            md:flex
            items-center
            gap-2
            bg-white
            text-black
            font-inter
            font-semibold
            text-sm
            px-6
            py-2.5
            rounded-full
            transition-all
            duration-300
            hover:bg-white/90
            hover:scale-[1.03]
          "
        >
          Resume
        </a>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-8 md:hidden">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  py-5
                  text-4xl
                  text-white
                  border-b
                  border-white/10
                  font-playfair
                  italic
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume/Naavya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                mt-10
                bg-white
                text-black
                font-semibold
                px-8
                py-4
                rounded-full
                w-fit
              "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}