const highlights = ["Hindi + English explanation", "Daily homework checking", "Parent WhatsApp updates"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe3] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-white/60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#a55d19] shadow-sm ring-1 ring-[#e6d6bd]">
            Admissions Open 2026 | Limited Seats
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-[#10233f] sm:text-5xl lg:text-6xl">
            Local coaching with personal attention and result-oriented study.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Trusted classroom coaching for JEE, NEET, 10th, 12th and computer
            courses with experienced teachers, regular tests, doubt solving and
            parent updates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#14345c] px-7 py-4 text-center font-bold text-white shadow-lg shadow-[#14345c]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2949]"
            >
              Book Free Demo
            </a>
            <a
              href="#courses"
              className="rounded-full border border-[#d7c6ad] bg-white px-7 py-4 text-center font-bold text-[#10233f] transition hover:border-[#c98d2f] hover:text-[#a55d19]"
            >
              View Courses
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c98d2f]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-2xl shadow-[#14345c]/15">
          <div className="relative min-h-[390px]">
            <img
              src="/images/academy-classroom.png"
              alt="Bright Future Academy classroom session"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/88 via-[#10233f]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d99d]">
                This week at academy
              </p>
              <h2 className="mt-3 text-2xl font-black">New Batch Planner</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["JEE", "6:30 PM"],
                  ["NEET", "5:00 PM"],
                  ["Boards", "10:00 AM"],
                ].map(([course, time]) => (
                  <div key={course} className="rounded-lg bg-white/14 p-4 backdrop-blur">
                    <p className="font-black">{course}</p>
                    <p className="mt-1 text-sm font-bold text-[#f7d99d]">{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[#eadcc8] bg-[#fffaf1] text-center">
            {[
              ["14+", "Years"],
              ["2.5K+", "Students"],
              ["96%", "Success"],
            ].map(([value, label]) => (
              <div key={label} className="p-4">
                <p className="text-2xl font-black text-[#14345c]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
