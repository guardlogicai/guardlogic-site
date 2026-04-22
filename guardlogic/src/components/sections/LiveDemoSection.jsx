import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const defaultInput =
  "Hi, send invoice details to maria@guardlogic.ai and include customer SSN 123-45-6789.";

function TokenizedText({ text }) {
  const pieces = useMemo(() => text.split(/(\[[A-Z_0-9]+\])/g), [text]);
  return (
    <>
      {pieces.map((piece, idx) =>
        /^\[[A-Z_0-9]+\]$/.test(piece) ? (
          <motion.span
            key={`${piece}-${idx}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="mask-token"
          >
            {piece}
          </motion.span>
        ) : (
          <span key={`${piece}-${idx}`}>{piece}</span>
        )
      )}
    </>
  );
}

export default function LiveDemoSection() {
  const [input, setInput] = useState(defaultInput);
  const [output, setOutput] = useState("");
  const [displayed, setDisplayed] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const typeOut = (text) => {
    let index = 0;
    setDisplayed("");
    const id = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(id);
      }
    }, 18);
  };

  const onProtect = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8000/mask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input })
      });

      if (!response.ok) {
        throw new Error("Masking API failed");
      }

      const data = await response.json();
      const masked = data.masked_text || data.output || "";
      setOutput(masked);
      typeOut(masked);
    } catch (apiError) {
      setError("Could not reach local masking API at http://localhost:8000/mask.");
      setOutput("");
      setDisplayed("");
      console.error(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="live-demo" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Live Demo"
          title="Protect prompts before they ever reach the model."
          description="Test your own data and watch GuardLogic identify and mask sensitive content in real-time."
        />

        <div className="glass-panel rounded-2xl p-6 md:p-8">
          <label htmlFor="prompt-input" className="mb-2 block text-sm font-medium text-slate-200">
            Your Prompt
          </label>
          <textarea
            id="prompt-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-32 w-full rounded-xl border border-white/20 bg-slate-950/80 p-4 text-sm text-slate-100 outline-none transition focus:border-cyan-300/70"
          />

          <motion.button
            onClick={onProtect}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading || !input.trim()}
            className="mt-4 rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Protecting..." : "Protect My Data"}
          </motion.button>

          <div className="mt-6 rounded-xl border border-cyan-300/20 bg-cyan-500/5 p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-200">Protected Output</p>
            {error ? (
              <p className="text-sm text-rose-300">{error}</p>
            ) : (
              <p className="min-h-16 whitespace-pre-wrap text-sm text-slate-100">
                <TokenizedText text={displayed || output || "Output will appear here..."} />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
