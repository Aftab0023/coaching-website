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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#14345c]">
              About Our Classes
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#10233f] sm:text-4xl">
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
              <div key={stat.label} className="rounded-lg border border-[#eadcc8] bg-[#fffaf1] p-6">
                <p className="text-3xl font-black text-[#a55d19]">{stat.value}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-[1.25rem] border border-[#eadcc8] bg-white shadow-xl shadow-[#14345c]/10">
            <img
              src="/images/faculty-teaching.png"
              alt="Faculty explaining a concept to a student"
              className="h-80 w-full object-cover"
            />
            <div className="grid gap-0 border-t border-[#eadcc8] sm:grid-cols-2">
              <div className="bg-[#14345c] p-7 text-white">
                <h3 className="text-2xl font-black">Mission</h3>
                <p className="mt-4 leading-7 text-blue-50">
                  Give every student quality teaching, daily discipline and a clear
                  path from basic concepts to exam-level confidence.
                </p>
              </div>
              <div className="bg-[#fffaf1] p-7">
                <h3 className="text-2xl font-black text-[#10233f]">Vision</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Become the first-choice local coaching class for families who want
                  honest guidance and consistent academic improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[#eadcc8] bg-[#fbf7ef] p-8">
            <h3 className="text-2xl font-black text-[#10233f]">How we teach</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                  <span className="mb-4 block h-1.5 w-10 rounded-full bg-[#c98d2f]" />
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
