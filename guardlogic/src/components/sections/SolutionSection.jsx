import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const points = [
  "Inspects prompts and responses across AI tools in milliseconds.",
  "Detects PII, secrets, and policy violations before data leaves your environment.",
  "Auto-remediates and routes safe prompts to approved AI providers."
];

export default function SolutionSection() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Solution"
          title="GuardLogic acts as your AI firewall layer."
          description="Position one policy engine between your users and any AI tool to enforce security without slowing teams down."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="glass-panel rounded-2xl p-8"
          >
            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-slate-200">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-cyan-500/10" />
            <div className="relative space-y-4">
              <div className="glass-panel rounded-xl p-4 text-sm text-slate-200">User Prompt</div>
              <motion.div
                className="h-10 w-1 rounded-full bg-cyan-400/70"
                animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="glass-panel rounded-xl p-4 text-sm text-slate-200">GuardLogic Policy Engine</div>
              <motion.div
                className="h-10 w-1 rounded-full bg-violet-400/80"
                animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, delay: 0.3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="glass-panel rounded-xl p-4 text-sm text-slate-200">Safe AI Response</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
