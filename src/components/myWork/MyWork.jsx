import React, { useState } from 'react'
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const allProjects = [
  {
    id: 1,
    title: "Portfolio Hero + Sections",
    desc: "Modern React portfolio with blue/indigo brand, hero, about, services.",
    stack: ["React", "Tailwind", "Vite"],
    img: "https://picsum.photos/seed/hero/800/520",
    live: "#",
    code: "#",
    badge: "UI",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    desc: "Data tables, filters, auth, and exports for clients & teams.",
    stack: ["React", "Node", "MongoDB"],
    img: "https://picsum.photos/seed/dashboard/800/520",
    live: "#",
    code: "#",
    badge: "MERN",
  },
  {
    id: 3,
    title: "Movie Recommender",
    desc: "Simple ML-based recommendations using content similarity.",
    stack: ["Python", "Pandas", "sklearn"],
    img: "https://picsum.photos/seed/recs/800/520",
    live: "#",
    code: "#",
    badge: "ML",
  },
  {
    id: 4,
    title: "Storefront UI",
    desc: "Clean e-commerce front with cart, filters, and product pages.",
    stack: ["React", "Tailwind"],
    img: "https://picsum.photos/seed/store/800/520",
    live: "#",
    code: "#",
    badge: "UI",
  },
  {
    id: 5,
    title: "Chat App",
    desc: "Real-time chat with rooms and typing indicators.",
    stack: ["React", "Node", "Socket.io"],
    img: "https://picsum.photos/seed/chat/800/520",
    live: "#",
    code: "#",
    badge: "MERN",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    desc: "Charts, KPIs, and CSV import for business insights.",
    stack: ["React", "Express", "MongoDB"],
    img: "https://picsum.photos/seed/metrics/800/520",
    live: "#",
    code: "#",
    badge: "Data",
  },
  // extra items for “Show More”
  {
    id: 7,
    title: "Notes API",
    desc: "REST API with JWT, RBAC, and tests.",
    stack: ["Node", "Express", "MongoDB"],
    img: "https://picsum.photos/seed/api/800/520",
    live: "#",
    code: "#",
    badge: "API",
  },
  {
    id: 8,
    title: "Model Serving Demo",
    desc: "Serve sklearn model with FastAPI & job scheduling.",
    stack: ["Python", "FastAPI", "sklearn"],
    img: "https://picsum.photos/seed/serve/800/520",
    live: "#",
    code: "#",
    badge: "ML",
  },
  {
    id: 9,
    title: "Portfolio v2",
    desc: "Animated sections, scroll reveal, and better performance.",
    stack: ["React", "Tailwind"],
    img: "https://picsum.photos/seed/port/800/520",
    live: "#",
    code: "#",
    badge: "UI",
  },
];

const ProjectCard = ({ p }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f14] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,99,235,0.18)]">
    {/* image */}
    <div className="relative">
      <img
        src={p.img}
        alt={p.title}
        className="h-56 w-full object-cover md:h-52 lg:h-56"
        loading="lazy"
      />
      {/* corner badge */}
      <span className="absolute left-3 top-3 rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-300 backdrop-blur">
        {p.badge}
      </span>
    </div>

    {/* body */}
    <div className="p-5">
      <h3 className="text-lg font-bold">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
          {p.title}
        </span>
      </h3>

      {/* no line-clamp plugin needed */}
      <p className="mt-2 text-sm text-white/70 min-h-[40px]">
        {p.desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-blue-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* hover overlay actions */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#0c0f14]/80 via-[#0c0f14]/30 to-transparent p-5 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        <a
          href={p.live}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blue-200 hover:bg-white/10"
        >
          <FiExternalLink /> Live
        </a>
        <a
          href={p.code}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
        >
          <FiGithub /> Code
        </a>
      </div>
    </div>
  </article>
);

const MyWork = () => {
    const [showMore, setShowMore] = useState(false);
    const visible = showMore ? allProjects : allProjects.slice(0, 6);
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16">
      {/* title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            latest work
          </span>
        </h2>
        <div className="mx-auto mt-2 h-2 w-36 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          A mix of <b>MERN apps</b>, <b>APIs</b>, and <b>ML demos</b>—clean UI, reliable
          backends, and data-driven features.
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      {/* show more */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowMore((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          {showMore ? "Show Less" : "Show More"}{" "}
          <FiArrowRight className="transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default MyWork
