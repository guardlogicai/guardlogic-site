import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const rawText = "Customer: Jane Doe, email jane@acme.com, SSN 123-45-6789, card 4111 1111 1111 1111.";
const maskedText =
  "Customer: [NAME_1], email [EMAIL_1], SSN [SSN_1], card [CARD_1].";

export default function PiiMaskingSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => (prev >= maskedText.length ? 0 : prev + 1));
    }, 55);
    return () => clearInterval(id);
  }, []);

  const animatedMasked = maskedText.slice(0, progress);

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Core Feature"
          title="PII masking happens in real-time before prompts are sent."
          description="GuardLogic tokenizes sensitive data on the fly, so users get AI productivity while your data stays protected."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="glass-panel rounded-2xl p-6"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-rose-300">Before</p>
            <p className="rounded-xl border border-rose-300/20 bg-rose-500/10 p-4 font-mono text-sm text-rose-100">
              {rawText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15 }}
            className="glass-panel rounded-2xl p-6"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-emerald-300">After</p>
            <p className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-4 font-mono text-sm text-emerald-100">
              {animatedMasked}
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-200 align-middle" />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
