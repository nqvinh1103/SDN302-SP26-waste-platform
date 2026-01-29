import { Link } from "react-router-dom"

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWNzjQqMCIGpqEN1KHAnis1f22ALU74vS-CMU6GGYP5WKxUg-_1LgRiQee9zC94T4NKub0GOFlUlYEJvjFKxxqKV9ykbusGjoAM_TV_BI3pUtOyI_j4qSCylUdDtsIq8_0SDKtRDmGa8x7dfj9YZYioCtY0R9BaItKJeQ5h1hCLWzylYHB1F5WQrcNi9Xdqq6GY4XUu63MWpcuTwZTFnMQjWYjTNOvgpoqTyt5GxuQv5J7v_9835ff51l6uyi9cdhMlKBfNdNnh4"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-[#e3e8e3] bg-white dark:bg-gc-surface-dark dark:border-[#2a382a] px-3 py-1 text-sm font-medium text-gc-text-muted">
            <span className="flex h-2 w-2 rounded-full bg-gc-primary mr-2" />
            Vietnam&apos;s #1 Waste Management Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gc-text-main dark:text-white">
            Cleaner Cities, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gc-primary to-green-600">
              Smarter Recycling.
            </span>
          </h1>
          <p className="text-lg text-gc-text-muted dark:text-gray-300 leading-relaxed max-w-lg">
            Empowering urban Vietnam to recycle better. Connect with collectors, track your environmental
            impact, and build a greener future for our communities.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/register"
              className="flex h-12 items-center justify-center rounded-lg bg-gc-primary px-8 text-base font-bold text-gc-text-main shadow-lg shadow-gc-primary/25 hover:bg-gc-primary-dark transition-all hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="flex h-12 items-center justify-center rounded-lg border border-[#e3e8e3] dark:border-[#2a382a] bg-white dark:bg-gc-surface-dark px-8 text-base font-bold text-gc-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#223522] transition-colors"
            >
              View Live Map
            </Link>
          </div>
        </div>
        <div className="relative w-full aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
            aria-label="Clean futuristic city park with greenery"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gc-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gc-text-muted">Real-time Impact</p>
              <p className="text-lg font-bold text-gc-text-main dark:text-white">Active Collection in Hanoi</p>
            </div>
            <div className="size-10 rounded-full bg-gc-primary flex items-center justify-center text-gc-text-main">
              <span className="material-symbols-outlined">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
