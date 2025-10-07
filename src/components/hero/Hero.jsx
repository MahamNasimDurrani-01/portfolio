import React from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* animated background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-16%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
        <div className="absolute left-[12%] bottom-[-22%] h-[520px] w-[520px] rounded-full bg-indigo-600/25 blur-3xl animate-pulse" />
        <div className="absolute right-[10%] top-[40%] h-48 w-48 rounded-full border border-blue-400/25 animate-spin-slow" />
      </div>

      {/* centered content */}
      <div className="mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        {/* badge */}
        <span className="animate-slide-in-left inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 [animation-delay:0ms]">
          Open to Work — MERN • ML
        </span>

        {/* heading */}
        <h1 className="animate-slide-in-left mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl [animation-delay:120ms]">
          I’m{" "}
          <span className="animate-shimmer bg-[linear-gradient(110deg,#60a5fa,45%,#93c5fd,55%,#6366f1)] bg-[length:200%_100%] bg-clip-text text-transparent">
            Maham Durrani
          </span>
          , MERN Stack Developer based in Lahore.
        </h1>

        {/* subcopy */}
        <p className="animate-slide-in-left mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg [animation-delay:220ms]">
          I build fast, scalable apps with <b>MERN</b> (MongoDB, Express, React, Node) and
          level them up using <b>Machine Learning</b> & <b>Data Science</b>. From clean UI to{" "}
          <span className="font-semibold text-blue-300">reliable APIs</span> to predictive models —
          my work is <span className="text-blue-300">data-driven, performance-focused,</span> and
          <span className="text-blue-300"> user-obsessed.</span>
        </p>

        {/* education */}
        <p className="animate-slide-in-left mx-auto mt-2 max-w-3xl text-base text-white/75 sm:text-lg [animation-delay:300ms]">
          I’ve completed <b>BSIT</b> from <b>University of the Punjab</b>.
        </p>

        {/* tech badges */}
        <div className="animate-slide-in-left mt-6 flex flex-wrap items-center justify-center gap-2 [animation-delay:380ms]">
          {["React","Node.js","Express","MongoDB","Python","Pandas","scikit-learn","TensorFlow"].map((t, i) => (
            <span
              key={t}
              className="animate-float rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 transition hover:border-blue-400/30 hover:bg-blue-400/10"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-slide-in-left mt-8 flex flex-wrap items-center justify-center gap-3 [animation-delay:460ms]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-indigo-500/40"
          >
            Connect With Me <FiArrowRight />
          </a>

          {/* make sure your file exists at public/Maham_Nasim_Durani_Resume.pdf */}
          <a
            href="\Maham_Nasim_Durani_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-white/10"
          >
            <FiDownload /> My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
