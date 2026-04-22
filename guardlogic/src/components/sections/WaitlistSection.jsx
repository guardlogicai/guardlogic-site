import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const initialState = { name: "", email: "", company: "" };

export default function WaitlistSection() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
    if (!form.name.trim() || !form.company.trim() || !isEmailValid) {
      setError("Please enter valid name, business email, and company.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section id="waitlist" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Early Access"
          title="Join the waitlist for private rollout."
          description="Get priority onboarding, policy templates, and direct support from the GuardLogic security team."
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name"
              className="rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-violet-300/80"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Work Email"
              className="rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-violet-300/80"
            />
          </div>
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            placeholder="Company"
            className="mt-4 w-full rounded-xl border border-white/20 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-violet-300/80"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 w-full rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Get Early Access
          </motion.button>

          {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
          {submitted && <p className="mt-3 text-sm text-emerald-300">You are on the list. We will reach out soon.</p>}
        </motion.form>
      </div>
    </section>
  );
}
