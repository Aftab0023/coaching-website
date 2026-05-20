const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcc8] bg-white/95 backdrop-blur">
      <div className="hidden bg-[#14345c] px-4 py-2 text-sm text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-semibold">Admission Open 2026 | Free Demo Class | Scholarship Test Every Sunday</p>
          <div className="flex gap-6 text-slate-300">
            <a href="tel:+917887946323" className="hover:text-white">
              +91 78879 46323
            </a>
            <a
              href="mailto:aftab.tamboli.23@gmail.com"
              className="hover:text-white"
            >
              aftab.tamboli.23@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.svg"
            alt="Bright Future Academy"
            className="h-11 w-11 shrink-0 rounded-full shadow-lg shadow-[#14345c]/15 sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-tight text-[#10233f] sm:text-xl">
              Bright Future Academy
            </span>
            <span className="block truncate text-xs font-bold text-[#a55d19]">
              JEE | NEET | Boards | Computer Classes
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition hover:text-[#a55d19]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-3 shrink-0 rounded-full bg-[#c98d2f] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[#c98d2f]/25 transition hover:-translate-y-0.5 hover:bg-[#a55d19] sm:px-5"
        >
          Join Now
        </a>
      </nav>
    </header>
  );
}
