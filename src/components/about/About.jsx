import React from "react";

const skills = [
  { label: "HTML & CSS (Tailwind)", percent: 90 },
  { label: "JavaScript (ES6+)", percent: 85 },
  { label: "React JS", percent: 88 },
  { label: "Next JS", percent: 70 },
  { label: "Node.js & Express", percent: 82 },
  { label: "MongoDB", percent: 78 },
  { label: "Python (Pandas, NumPy)", percent: 75 },
  { label: "ML / Data Science (sklearn, TF)", percent: 60 },
  { label: "MS Office (Excel, PowerPoint)", percent: 80 },
];

const SkillRow = ({ label, percent }) => (
  <div className="flex items-center gap-3 py-2">
    {/* tiny gradient circle like a dot/badge */}
    <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 ring-2 ring-white/10 shadow-[0_0_12px_rgba(59,130,246,.45)]" />

    {/* skill label */}
    <span className="min-w-[190px] text-sm text-white/85">{label}</span>

    {/* progress bar with comfy left space */}
    <div className="relative mx-3 h-2 flex-1 rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 transition-all duration-700"
        style={{ width: `${percent}%` }}
      />
    </div>

    {/* percent */}
    <span className="w-10 text-right text-xs text-white/60">{percent}%</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-16">
      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            me
          </span>
        </h2>
        <div className="mx-auto mt-2 h-2 w-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
      </div>

      {/* Copy */}
      <div className="mx-auto max-w-5xl">
        <p className="text-white/85">
          I’m <span className="font-semibold text-white">Maham Durrani</span> — a{" "}
          <span className="font-semibold text-blue-300">MERN Stack Developer</span> from Lahore with a growing
          focus on <span className="text-blue-300">Machine Learning</span> and{" "}
          <span className="text-blue-300">Data Science</span>. I craft clean UIs in React, build reliable APIs
          with Node/Express, ship data-driven features, and love turning ideas into working products fast.
        </p>

        <p className="mt-4 text-white/70">
          Recent work includes portfolio sites, dashboards, and micro-apps using MongoDB + Express + React + Node.
          On the AI side, I use Python (Pandas, scikit-learn, TensorFlow) for simple classification, prediction,
          and visualizations to make web apps smarter.
        </p>

        {/* Skills — single-line rows */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
          {skills.map((s) => (
            <SkillRow key={s.label} label={s.label} percent={s.percent} />
          ))}
        </div>
      </div>

      {/* Stats (optional keep) */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:grid-cols-3">
        <div>
          <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            1+
          </p>
          <p className="mt-1 text-xs tracking-wide text-white/60">YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            10+
          </p>
          <p className="mt-1 text-xs tracking-wide text-white/60">PROJECTS COMPLETED</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            5+
          </p>
          <p className="mt-1 text-xs tracking-wide text-white/60">HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
