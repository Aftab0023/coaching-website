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
    <section id="testimonials" className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#14345c]">
            Student & Parent Reviews
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#10233f] sm:text-4xl">
            Local families trust our teaching system.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg border border-[#eadcc8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14345c]/10">
              <div className="flex gap-1 text-lg font-black text-[#c98d2f]" aria-label="5 star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>&#9733;</span>
                ))}
              </div>
              <p className="mt-5 leading-8 text-slate-600">{item.quote}</p>
              <div className="mt-7 border-t border-slate-200 pt-5">
                <h3 className="font-black text-[#10233f]">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-[#a55d19]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
