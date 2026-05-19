const courses = [
  {
    icon: "JEE",
    title: "JEE Main + Advanced",
    text: "PCM coaching with daily practice problems, doubt counter, chapter tests and rank improvement planning.",
    color: "bg-blue-700",
  },
  {
    icon: "NEET",
    title: "NEET Medical",
    text: "NCERT-based Biology, Physics and Chemistry with diagram practice, short notes and full syllabus tests.",
    color: "bg-emerald-600",
  },
  {
    icon: "XII",
    title: "10th / 12th Boards",
    text: "CBSE and State Board support for Maths, Science, English and Commerce with school exam preparation.",
    color: "bg-violet-600",
  },
  {
    icon: "IT",
    title: "Computer Courses",
    text: "MS Office, typing, basic coding, web design and Python classes for students and beginners.",
    color: "bg-orange-500",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-gradient-to-b from-amber-50 to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Popular Courses
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Courses designed for Indian students and local school needs.
            </h2>
          </div>
          <a
            href="#contact"
            className="w-fit rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-orange-500 hover:text-orange-600"
          >
            Ask for batch timing
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-[1.5rem] border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-xl ${course.color} text-sm font-black text-white`}>
                {course.icon}
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950">{course.title}</h3>
              <p className="mt-3 min-h-28 leading-7 text-slate-600">{course.text}</p>
              <div className="mt-5 rounded-xl bg-orange-50 px-4 py-3 text-sm font-bold text-orange-700">
                Demo class available
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex font-black text-orange-600 transition group-hover:translate-x-1"
              >
                Enquire now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
