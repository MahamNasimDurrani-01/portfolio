import React, { useState } from "react";
import { FiMail, FiLinkedin } from "react-icons/fi";

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("subscribe:", email);
    setEmail("");
    alert("Subscribed! (Wire this to your email tool later)");
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0b0b0f]">
      {/* top content */}
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 md:grid-cols-2">
        {/* left: brand + bio */}
        <div>
          <h3 className="text-3xl font-extrabold leading-none">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              MahamNasimDurrani
            </span>
          </h3>
          <p className="mt-3 max-w-md text-sm text-white/70">
            I’m a frontend-focused <span className="text-blue-300">MERN developer</span> from Lahore.
            1+ year of experience, 10+ projects shipped, and growing skills in{" "}
            <span className="text-blue-300">Machine Learning / Data Science</span>.
          </p>
        </div>

        {/* right: subscribe + LinkedIn */}
        <form onSubmit={handleSubscribe} className="w-full">
          <label className="mb-2 block text-sm font-semibold text-white/80">
            Subscribe for updates
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-12 flex-1 min-w-[220px] items-center gap-2 rounded-full border border-white/10 bg-[#111318] px-4 text-white focus-within:border-blue-500/50">
              <FiMail className="text-white/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-full w-full bg-transparent text-sm outline-none placeholder-white/40"
              />
            </div>

            <button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            >
              Subscribe
            </button>

            {/* 🔗 LinkedIn button */}
            <a
              href="https://www.linkedin.com/in/mahamnasimdurrani699/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-sm font-medium text-blue-300 hover:bg-white/10"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>

          <p className="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
        </form>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Maham Durrani. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#contact" className="hover:text-blue-300">Connect with me</a>
            {/* tiny icon link (optional) */}
            <a
              href="https://www.linkedin.com/in/mahamnasimdurrani699/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
