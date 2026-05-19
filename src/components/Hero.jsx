const highlights = ["Hindi + English explanation", "Daily homework checking", "Parent WhatsApp updates"];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-sky-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-orange-700 shadow-sm ring-1 ring-orange-100">
            Admissions Open 2026 | Limited Seats
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Local coaching with personal attention and result-oriented study.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Trusted classroom coaching for JEE, NEET, 10th, 12th and computer
            courses with experienced teachers, regular tests, doubt solving and
            parent updates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-center font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5"
            >
              Book Free Demo
            </a>
            <a
              href="#courses"
              className="rounded-full border border-orange-200 bg-white px-7 py-4 text-center font-bold text-slate-800 transition hover:border-orange-500 hover:text-orange-600"
            >
              View Courses
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-2xl shadow-orange-100">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
              This week at academy
            </p>
            <h2 className="mt-3 text-2xl font-black">New Batch Planner</h2>
            <div className="mt-6 space-y-3">
              {[
                ["JEE Target Batch", "Mon - Sat", "6:30 PM"],
                ["NEET Foundation", "Mon - Fri", "5:00 PM"],
                ["10th / 12th Boards", "Weekend", "10:00 AM"],
              ].map(([course, days, time]) => (
                <div key={course} className="grid grid-cols-[1fr_auto] gap-4 rounded-lg bg-white/10 p-4">
                  <div>
                    <p className="font-black">{course}</p>
                    <p className="mt-1 text-sm text-slate-300">{days}</p>
                  </div>
                  <p className="font-black text-amber-200">{time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 divide-x divide-orange-100 rounded-2xl border border-orange-100 bg-orange-50 text-center">
            {[
              ["14+", "Years"],
              ["2.5K+", "Students"],
              ["96%", "Success"],
            ].map(([value, label]) => (
              <div key={label} className="p-4">
                <p className="text-2xl font-black text-orange-600">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
