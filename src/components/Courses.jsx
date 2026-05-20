const courses = [
  {
    icon: "JEE",
    title: "JEE Main + Advanced",
    text: "PCM coaching with daily practice problems, doubt counter, chapter tests and rank improvement planning.",
    color: "bg-[#14345c]",
  },
  {
    icon: "NEET",
    title: "NEET Medical",
    text: "NCERT-based Biology, Physics and Chemistry with diagram practice, short notes and full syllabus tests.",
    color: "bg-[#24735b]",
  },
  {
    icon: "XII",
    title: "10th / 12th Boards",
    text: "CBSE and State Board support for Maths, Science, English and Commerce with school exam preparation.",
    color: "bg-[#7c3f58]",
  },
  {
    icon: "IT",
    title: "Computer Courses",
    text: "MS Office, typing, basic coding, web design and Python classes for students and beginners.",
    color: "bg-[#c98d2f]",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#14345c]">
              Popular Courses
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-[#10233f] sm:text-4xl">
              Courses designed for Indian students and local school needs.
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#eadcc8] bg-white shadow-lg shadow-[#14345c]/10">
            <img
              src="/images/students-studying.png"
              alt="Students studying during a classroom test"
              className="h-56 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-lg border border-[#eadcc8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#14345c]/10"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-xl ${course.color} text-sm font-black text-white`}>
                {course.icon}
              </div>
              <h3 className="mt-6 text-xl font-black text-[#10233f]">{course.title}</h3>
              <p className="mt-3 min-h-28 leading-7 text-slate-600">{course.text}</p>
              <div className="mt-5 rounded-lg bg-[#fffaf1] px-4 py-3 text-sm font-bold text-[#a55d19]">
                Demo class available
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex font-black text-[#14345c] transition group-hover:translate-x-1"
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
