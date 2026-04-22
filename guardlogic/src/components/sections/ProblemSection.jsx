import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const problems = [
  {
    title: "Data Leaks",
    text: "Employees paste customer records into public AI tools, exposing critical PII and internal IP.",
    metric: "43% increase"
  },
  {
    title: "Compliance Risk",
    text: "Regulators now treat AI-generated incidents as preventable events when controls are not in place.",
    metric: "SOC2 / HIPAA / GDPR"
  },
  {
    title: "Financial Loss",
    text: "One leak can trigger legal penalties, customer churn, and incident response costs in days.",
    metric: "$4.7M average impact"
  }
];

export default function ProblemSection() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Risk"
          title="AI acceleration is outpacing enterprise security controls."
          description="As teams move faster with copilots and LLM workflows, sensitive data leaks happen silently and at scale."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.16 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass-panel rounded-2xl p-6 shadow-glow"
            >
              <p className="text-sm uppercase tracking-[0.17em] text-violet-200">{item.metric}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
