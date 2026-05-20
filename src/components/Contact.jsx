import { useState } from "react";
import axios from "axios";

const contactItems = [
  ["Phone", "+91 78879 46323"],
  ["Email", "aftab.tamboli.23@gmail.com"],
  ["Address", "2nd Floor, Sunrise Plaza, MG Road, Pune, Maharashtra"],
];

const emailJsConfig = {
  serviceId: "service_huk3pdg",
  templateId: "template_6b4gk7y",
  publicKey: "ODfpZRhlpm07egUZK",
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      student_name: formData.get("student_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      course: formData.get("course"),
      message: formData.get("message"),
    };

    setFormStatus("sending");
    setFormMessage("");

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: emailJsConfig.serviceId,
        template_id: emailJsConfig.templateId,
        user_id: emailJsConfig.publicKey,
        template_params: templateParams,
      })
      .then(() => {
        setFormStatus("success");
        setFormMessage("Thank you. Your enquiry has been sent successfully.");
        form.reset();
        window.setTimeout(() => {
          setFormStatus("idle");
          setFormMessage("");
        }, 4500);
      })
      .catch(() => {
        setFormStatus("error");
        setFormMessage(
          "Sorry, something went wrong. Please try again or contact us on WhatsApp.",
        );
        window.setTimeout(() => {
          setFormStatus("idle");
          setFormMessage("");
        }, 5500);
      });
  }

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      {formMessage && (
        <div className="fixed right-4 top-24 z-[90] max-w-sm sm:right-6" role="status">
          <div
            className={`rounded-2xl border px-5 py-4 font-bold shadow-2xl ${
              formStatus === "success"
                ? "border-green-200 bg-green-50 text-green-800 shadow-green-100"
                : "border-red-200 bg-red-50 text-red-800 shadow-red-100"
            }`}
          >
            {formMessage}
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.25rem] bg-[#14345c] p-8 text-white shadow-2xl shadow-[#14345c]/15 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7d99d]">
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
                  <div key={label} className="rounded-lg bg-white/10 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f7d99d]">
                      {label}
                    </p>
                    <p className="mt-2 break-words font-bold">{value}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917887946323"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg bg-[#24735b] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1e614d]"
              >
                Contact on WhatsApp
              </a>
          </div>

          <div className="rounded-[1.25rem] border border-[#eadcc8] bg-[#fbf7ef] p-5">
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input className="rounded-lg border border-[#eadcc8] bg-white px-4 py-3 outline-none transition focus:border-[#c98d2f] focus:ring-4 focus:ring-[#eadcc8]" name="student_name" placeholder="Student name" required />
              <input className="rounded-lg border border-[#eadcc8] bg-white px-4 py-3 outline-none transition focus:border-[#c98d2f] focus:ring-4 focus:ring-[#eadcc8]" name="phone" placeholder="Phone number" required />
              <input className="rounded-lg border border-[#eadcc8] bg-white px-4 py-3 outline-none transition focus:border-[#c98d2f] focus:ring-4 focus:ring-[#eadcc8]" name="email" placeholder="Email address" type="email" />
              <select className="rounded-lg border border-[#eadcc8] bg-white px-4 py-3 text-slate-500 outline-none transition focus:border-[#c98d2f] focus:ring-4 focus:ring-[#eadcc8]" name="course" defaultValue="">
                <option value="" disabled>Select course</option>
                <option>JEE Coaching</option>
                <option>NEET Coaching</option>
                <option>10th / 12th Boards</option>
                <option>Computer Courses</option>
              </select>
              <textarea className="min-h-32 rounded-lg border border-[#eadcc8] bg-white px-4 py-3 outline-none transition focus:border-[#c98d2f] focus:ring-4 focus:ring-[#eadcc8] sm:col-span-2" name="message" placeholder="Message" />
              <button
                className="rounded-full bg-[#14345c] px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0f2949] disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Submit Enquiry"}
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
