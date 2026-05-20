const toppers = [
  { name: "Aarav Sharma", course: "JEE Main", score: "99.4", label: "Percentile" },
  { name: "Meera Iyer", course: "NEET", score: "681", label: "Out of 720" },
  { name: "Rohan Patel", course: "Class 12 Science", score: "96.8", label: "Percent" },
  { name: "Sara Khan", course: "Class 10 Boards", score: "98.2", label: "Percent" },
];

export default function Results() {
  return (
    <section id="results" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.25rem] bg-[#10233f] text-white shadow-2xl shadow-[#14345c]/15">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 lg:p-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7d99d]">
                  Proud Results
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Toppers board that motivates every batch.
                </h2>
              </div>
              <p className="mt-5 leading-8 text-slate-300">
                Monthly rank lists, chapter tests, doubt records and parent
                meetings help every student understand their improvement.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {toppers.map((student) => (
                  <article key={student.name} className="rounded-lg bg-white p-5 text-slate-950 shadow-lg shadow-black/10">
                    <p className="text-sm font-bold text-slate-500">{student.course}</p>
                    <h3 className="mt-2 font-black">{student.name}</h3>
                    <div className="mt-6 flex flex-wrap items-end gap-2">
                      <p className="text-4xl font-black text-[#a55d19]">{student.score}</p>
                      <p className="pb-1 text-sm font-bold uppercase text-slate-500">
                        {student.label}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <img
              src="/images/topper-wall.png"
              alt="Bright Future Academy toppers wall"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
