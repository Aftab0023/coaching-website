import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-slate-900">
      {isLoading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#fbf7ef]">
          <div className="flex flex-col items-center gap-5">
            <img
              src="/logo.svg"
              alt="Bright Future Academy"
              className="h-16 w-16 animate-pulse"
            />
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-[#e9dcc9]">
              <div className="loading-bar h-full rounded-full bg-gradient-to-r from-[#c98d2f] via-[#b24a33] to-[#14345c]" />
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Results />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
