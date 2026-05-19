const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-gradient-to-r from-orange-600 via-rose-600 to-blue-800 px-4 py-2 text-sm text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-semibold">Admission Open 2026 | Free Demo Class | Scholarship Test Every Sunday</p>
          <div className="flex gap-6 text-slate-300">
            <a href="tel:+919876543210" className="hover:text-white">
              +91 78879 46323
            </a>
            <a
              href="mailto:admissions@brightfutureacademy.in"
              className="hover:text-white"
            >
              admissions@brightfutureacademy.in
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-base font-black text-white shadow-lg shadow-orange-200">
            BF
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-slate-950 sm:text-xl">
              Bright Future Academy
            </span>
            <span className="block text-xs font-bold text-orange-600">
              JEE | NEET | Boards | Computer Classes
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-200 transition hover:-translate-y-0.5"
        >
          Join Now
        </a>
      </nav>
    </header>
  );
}
