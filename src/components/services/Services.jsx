import React from "react";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "MERN Web Apps",
    blurb:
      "Full-stack apps using MongoDB, Express, React, and Node with clean UI and reliable APIs.",
    points: ["Auth & RBAC", "REST/JSON", "Responsive UI", "Vite/React Router"],
    cta: "#contact",
  },
  {
    id: "02",
    title: "Dashboards & Admin Panels",
    blurb:
      "Data-centric dashboards with tables, filters, charts, and exports for teams and clients.",
    points: ["React Tables", "CSV/Excel Export", "Role Based Views", "Notifications"],
    cta: "#contact",
  },
  {
    id: "03",
    title: "API Design & Integration",
    blurb:
      "Practical, well-documented Node/Express APIs with third-party integrations.",
    points: ["Stripe/Payments", "JWT/Refresh Tokens", "Cloud/Storage", "Postman Docs"],
    cta: "#contact",
  },
  {
    id: "04",
    title: "ML Features for Web",
    blurb:
      "Simple ML add-ons using Python to make apps smarter—classification, recommendations, and scoring.",
    points: ["Pandas/NumPy", "scikit-learn", "Model Serving", "Job Scheduling"],
    cta: "#contact",
  },
  {
    id: "05",
    title: "Data Pipelines & Cleaning",
    blurb:
      "Collect, clean, and shape data so it’s ready for charts, models, and decisions.",
    points: ["ETL Scripts", "Validation", "Automations", "Reports"],
    cta: "#contact",
  },
  // 🔄 Replaced SEO with Deployment & Cloud
  {
    id: "06",
    title: "Deployment & Cloud",
    blurb:
      "Ship and scale your app with modern cloud setup—fast deploys, logs, backups, and monitoring.",
    points: ["Vercel/Render Deploys", "Docker Basics", "MongoDB Atlas", "Nginx & CI/CD"],
    cta: "#contact",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16">
      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <div className="mx-auto mt-2 h-2 w-28 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Stuff I actually ship: <b>MERN apps</b>, <b>APIs</b>, and <b>ML-powered</b> features that are
          fast, clean, and easy to maintain.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <article
            key={s.id}
            className="group relative rounded-2xl border border-white/10 bg-[#0c0f14] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_8px_40px_rgba(37,99,235,0.18)]"
          >
            {/* card outline accent */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-blue-500/30" />

            <div className="mb-5 flex items-start justify-between">
              <span className="text-sm font-semibold tracking-widest text-white/60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-semibold text-blue-300">
                MERN • ML
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                {s.title}
              </span>
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
              {s.blurb}
            </p>

            {/* bullets */}
            <ul className="mt-4 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-blue-200/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                  {p}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={s.cta}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
            >
              Read More <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
