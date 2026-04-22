export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-16 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>GuardLogic © {new Date().getFullYear()}.</p>
        <p>AI Firewall for enterprise-safe generative AI.</p>
      </div>
    </footer>
  );
}
