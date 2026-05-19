const testimonials = [
  {
    name: "Nisha Verma",
    role: "NEET Student",
    quote:
      "The daily tests and Biology notes helped me revise without panic. Teachers were available whenever I got stuck.",
  },
  {
    name: "Mr. Sanjay Gupta",
    role: "Parent",
    quote:
      "The progress updates were very clear. We always knew which chapters needed more attention at home.",
  },
  {
    name: "Kabir Sethi",
    role: "Class 12 Student",
    quote:
      "Maths became much easier after the classroom problem practice. The test discussions helped the most.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-orange-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            Student & Parent Reviews
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Local families trust our teaching system.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[1.5rem] border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100">
              <div className="flex gap-1 text-lg font-black text-amber-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="mt-5 leading-8 text-slate-600">{item.quote}</p>
              <div className="mt-7 border-t border-slate-200 pt-5">
                <h3 className="font-black text-slate-950">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-orange-600">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
