import {
  Navbar,
  Hero,
  Stats,
  RoleSelection,
  HowItWorks,
  Footer,
} from "@/components/landing"

export function Landing() {
  return (
    <div className="min-h-screen bg-gc-background-light dark:bg-gc-background-dark text-gc-text-main dark:text-white font-display overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <Stats />
        <RoleSelection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
