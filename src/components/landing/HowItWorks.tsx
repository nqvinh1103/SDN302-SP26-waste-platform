const STEPS = [
  {
    icon: "add_a_photo",
    title: "1. Report",
    description: "Snap a photo of waste and tag the location.",
  },
  {
    icon: "local_shipping",
    title: "2. Collect",
    description: "Enterprises are notified and dispatch pickup.",
  },
  {
    icon: "savings",
    title: "3. Earn",
    description: "Citizens earn points and cities stay clean.",
  },
] as const

export function HowItWorks() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gc-surface-dark border-t border-[#f0f4f0] dark:border-[#2a382a]">
      <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col gap-12 text-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gc-text-main dark:text-white mb-4">
            How GreenCycle Works
          </h2>
          <p className="text-gc-text-muted">A seamless loop from report to recycle.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-gc-primary/30 to-transparent -z-1" />
          {STEPS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 bg-white dark:bg-gc-surface-dark p-4 z-10"
            >
              <div className="size-20 rounded-2xl bg-gc-primary/10 flex items-center justify-center text-gc-primary shadow-sm">
                <span className="material-symbols-outlined text-4xl">{icon}</span>
              </div>
              <h4 className="font-bold text-lg dark:text-white">{title}</h4>
              <p className="text-sm text-gc-text-muted max-w-[200px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
