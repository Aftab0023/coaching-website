const contactItems = [
  ["Phone", "+91 78879 46323"],
  ["Email", "admissions@brightfutureacademy.in"],
  ["Address", "2nd Floor, Sunrise Plaza, MG Road, Pune, Maharashtra"],
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-red-600 to-blue-900 p-8 text-white shadow-2xl shadow-orange-100 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-100">
              Visit Our Centre
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Enquire for admission, fees and batch timing.
            </h2>
            <p className="mt-5 leading-8 text-blue-50">
              Call, WhatsApp or visit the academy. Our counsellor will guide you
              according to class, school board and target exam.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-100">
                    {label}
                  </p>
                  <p className="mt-2 font-bold">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg bg-green-500 px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-amber-50 p-5">
            <form className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100" placeholder="Student name" />
              <input className="rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100" placeholder="Phone number" />
              <input className="rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100" placeholder="Email address" />
              <select className="rounded-xl border border-orange-100 bg-white px-4 py-3 text-slate-500 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100">
                <option>Select course</option>
                <option>JEE Coaching</option>
                <option>NEET Coaching</option>
                <option>10th / 12th Boards</option>
                <option>Computer Courses</option>
              </select>
              <textarea className="min-h-32 rounded-xl border border-orange-100 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:col-span-2" placeholder="Message" />
              <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 sm:col-span-2">
                Submit Enquiry
              </button>
            </form>

            <iframe
              title="Bright Future Academy location"
              className="mt-5 h-72 w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=MG%20Road%20Pune&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
