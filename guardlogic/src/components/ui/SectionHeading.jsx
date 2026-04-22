export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">{title}</h2>
      <p className="mt-4 text-pretty text-base text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}
