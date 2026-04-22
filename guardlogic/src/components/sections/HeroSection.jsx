import { motion } from "framer-motion";

const floatingCards = [
  { title: "Prompt Inspection", value: "98.7% detection", className: "top-20 right-[12%]" },
  { title: "Leak Attempts Blocked", value: "14,285 / day", className: "top-[58%] left-[8%]" },
  { title: "Compliance Alerts", value: "SOC2 + HIPAA", className: "top-[18%] left-[5%]" }
];

export default function HeroSection() {
  return (
    <section className="relative px-6 pb-24 pt-24 md:px-12 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-slate-900/80 to-cyan-500/15 p-10 shadow-glow md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-cyan-400/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Real-Time AI Security
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              Stop AI Data Leaks Before They Cost You Millions.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              AI tools can leak sensitive data. GuardLogic prevents it in real-time.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Try Live Demo
              </motion.button>
            </div>
          </div>

          {floatingCards.map((card, idx) => (
            <motion.div
              key={card.title}
              className={`glass-panel absolute hidden rounded-xl p-4 shadow-glow lg:block ${card.className}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.2 * idx },
                y: {
                  duration: 5 + idx,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
              }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-cyan-200/90">{card.title}</p>
              <p className="mt-2 text-lg font-semibold text-slate-100">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
