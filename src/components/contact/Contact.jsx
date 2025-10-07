import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ ok: false, msg: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ ok: false, msg: "" });

    try {
      //  your real EmailJS creds
      const SERVICE_ID = "service_l4xfcrk";
      const TEMPLATE_ID = "template_u40fl43";
      const PUBLIC_KEY  = "yS2gFBtRFIm0TpMVB";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({ ok: true, msg: "Thanks! Your message has been sent to your email." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        msg: "Oops, failed to send. Check your EmailJS IDs or network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            touch
          </span>
        </h2>
        <div className="mx-auto mt-2 h-2 w-36 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Let’s talk
            </span>
          </h3>
          <p className="mt-3 text-white/70">
            I’m available for MERN projects and ML/DS features. Message me and I’ll reply fast.
          </p>

          <ul className="mt-6 space-y-4 text-white/85">
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-blue-500/10 p-2 text-blue-300">
                <FiMail />
              </span>
              <a href="mailto:mahamnaseemdurram@gmail.com" className="hover:text-blue-300">
                mahamnaseemdurram@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-blue-500/10 p-2 text-blue-300">
                <FiPhone />
              </span>
              <a href="tel:+923196971457" className="hover:text-blue-300">
                0319-6971457
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-lg bg-blue-500/10 p-2 text-blue-300">
                <FiMapPin />
              </span>
              <span>Lahore, Pakistan</span>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-white/10 bg-[#0b0b0f]/60 p-4">
            <p className="text-sm text-white/60">
              Tech I love: React, Node/Express, MongoDB, Tailwind, Python, Pandas, scikit-learn.
            </p>
          </div>
        </div>

        {/* Right: Form (matches your EmailJS template fields) */}
        <form ref={formRef} onSubmit={sendEmail} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          {/* feeds {{title}} used in Subject: Contact Us: {{title}} */}
          <input type="hidden" name="title" value="Portfolio Inquiry" />

          <label className="mb-2 block text-sm font-semibold text-white/80">Your Name</label>
          <input
            name="name" /*  matches {{name}} */
            required
            placeholder="Enter your name"
            className="mb-4 w-full rounded-lg border border-white/10 bg-[#1a1c22] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-blue-500/50"
          />

          <label className="mb-2 block text-sm font-semibold text-white/80">Your Email</label>
          <input
            type="email"
            name="email" /*  matches {{email}} (also set as Reply-To in template) */
            required
            placeholder="Enter your email"
            className="mb-4 w-full rounded-lg border border-white/10 bg-[#1a1c22] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-blue-500/50"
          />

          <label className="mb-2 block text-sm font-semibold text-white/80">Write your message here</label>
          <textarea
            name="message" /* matches {{message}} */
            required
            placeholder="Tell me about your project…"
            rows={6}
            className="mb-5 w-full resize-y rounded-lg border border-white/10 bg-[#1a1c22] px-4 py-3 text-white placeholder-white/40 outline-none focus:border-blue-500/50"
          />

          {/* status toast */}
          {status.msg && (
            <div
              className={`mb-4 rounded-lg px-3 py-2 text-sm ${
                status.ok
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  : "bg-red-500/10 text-red-300 border border-red-500/20"
              }`}
            >
              {status.msg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Submit now"} <FiArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
