const STATS = [
  {
    icon: "scale",
    value: "12,500+",
    label: "kg Waste Recycled",
  },
  {
    icon: "map",
    value: "5 Zones",
    label: "Active Urban Areas",
  },
  {
    icon: "groups",
    value: "850+",
    label: "Registered Citizens",
  },
  {
    icon: "domain",
    value: "42",
    label: "Enterprise Partners",
  },
] as const

export function Stats() {
  return (
    <section className="w-full bg-white dark:bg-gc-surface-dark border-y border-[#f0f4f0] dark:border-[#2a382a]">
      <div className="max-w-[1280px] mx-auto py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ icon, value, label }) => (
            <div
              key={icon}
              className="flex flex-col gap-2 p-4 rounded-lg hover:bg-gc-background-light dark:hover:bg-gc-background-dark transition-colors cursor-default"
            >
              <div className="flex items-center gap-3 text-gc-primary">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>
              <h3 className="text-3xl font-black text-gc-text-main dark:text-white">{value}</h3>
              <p className="text-sm font-medium text-gc-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
