const stats = [
  { value: "14+", label: "Years experience" },
  { value: "80+", label: "Faculty and mentors" },
  { value: "45+", label: "Top ranks yearly" },
];

const principles = [
  "Hindi and English classroom explanation",
  "Weekly test with rank list and analysis",
  "Small batches with personal attention",
  "Parent updates through WhatsApp",
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              About Our Classes
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A trusted neighbourhood academy for serious students.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bright Future Academy is made for Indian school and entrance exam
              students who need clear explanation, strict practice, regular
              revision and caring guidance from teachers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <p className="text-3xl font-black text-orange-600">{stat.value}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white shadow-xl shadow-orange-100">
            <h3 className="text-2xl font-black">Mission</h3>
            <p className="mt-4 leading-7 text-blue-50">
              Give every student quality teaching, daily discipline and a clear
              path from basic concepts to exam-level confidence.
            </p>
            <h3 className="mt-8 text-2xl font-black">Vision</h3>
            <p className="mt-4 leading-7 text-blue-50">
              Become the first-choice local coaching class for families who want
              honest guidance and consistent academic improvement.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-orange-100 bg-amber-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">How we teach</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="rounded-xl bg-white p-5 shadow-sm">
                  <span className="mb-4 block h-1.5 w-10 rounded-full bg-orange-500" />
                  <p className="font-bold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
