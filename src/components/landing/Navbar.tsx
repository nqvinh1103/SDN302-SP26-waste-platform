import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f4f0] dark:border-[#2a382a] bg-gc-surface-light/95 dark:bg-gc-surface-dark/95 backdrop-blur supports-backdrop-filter:bg-gc-surface-light/60">
      <div className="flex h-16 items-center px-4 md:px-10 max-w-[1400px] mx-auto justify-between">
        <Link to="/" className="flex items-center gap-2 text-gc-text-main dark:text-white">
          <div className="flex items-center justify-center size-8 rounded bg-gc-primary/20 text-gc-primary-dark dark:text-gc-primary">
            <span className="material-symbols-outlined">recycling</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">GreenCycle VN</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-gc-primary transition-colors">
            Home
          </Link>
          <a className="text-sm font-medium hover:text-gc-primary transition-colors" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:text-gc-primary transition-colors" href="#impact">
            Impact
          </a>
          <a className="text-sm font-medium hover:text-gc-primary transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-gc-primary text-gc-text-main text-sm font-bold leading-normal hover:bg-gc-primary-dark transition-colors"
          >
            <span className="truncate">Sign In</span>
          </Link>
          <Link
            to="/register"
            className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 border border-[#e3e8e3] dark:border-[#2a382a] text-sm font-medium hover:text-gc-primary transition-colors"
          >
            <span className="truncate">Sign Up</span>
          </Link>
          <button type="button" className="md:hidden p-2 text-gc-text-main dark:text-white" aria-label="Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
