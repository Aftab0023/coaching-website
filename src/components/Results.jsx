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
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-orange-600 p-8 text-white shadow-2xl shadow-orange-100 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
                Proud Results
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Toppers board that motivates every batch.
              </h2>
            </div>
            <p className="leading-8 text-slate-300">
              Monthly rank lists, chapter tests, doubt records and parent
              meetings help every student understand their improvement.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toppers.map((student) => (
              <article key={student.name} className="rounded-2xl bg-white p-5 text-slate-950 shadow-lg shadow-black/10">
                <p className="text-sm font-bold text-slate-500">{student.course}</p>
                <h3 className="mt-2 font-black">{student.name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <p className="text-4xl font-black text-orange-600">{student.score}</p>
                  <p className="pb-1 text-sm font-bold uppercase text-slate-500">
                    {student.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
