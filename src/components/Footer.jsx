const links = [
  ["About", "#about"],
  ["Courses", "#courses"],
  ["Results", "#results"],
  ["Reviews", "#testimonials"],
  ["Contact", "#contact"],
];

const socials = ["Facebook", "Instagram", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 font-black">
              BF
            </span>
            <h2 className="text-2xl font-black">Bright Future Academy</h2>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Your local coaching centre for JEE, NEET, boards and computer
            classes with disciplined teaching and personal care.
          </p>
        </div>

        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black">Social Links</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-orange-400 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright 2026 Bright Future Academy. All rights reserved.
      </div>
    </footer>
  );
}
