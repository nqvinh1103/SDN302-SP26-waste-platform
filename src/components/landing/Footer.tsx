export function Footer() {
  return (
    <footer className="bg-gc-surface-light dark:bg-[#0a160a] border-t border-[#f0f4f0] dark:border-[#2a382a] py-12 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gc-text-main dark:text-white">
            <div className="flex items-center justify-center size-6 rounded bg-gc-primary/20 text-gc-primary-dark dark:text-gc-primary">
              <span className="material-symbols-outlined text-sm">recycling</span>
            </div>
            <h2 className="text-base font-bold">GreenCycle VN</h2>
          </div>
          <p className="text-sm text-gc-text-muted dark:text-gray-400">
            Making Vietnam greener, one pickup at a time.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm uppercase tracking-wider text-gc-text-main dark:text-white">
            Platform
          </h4>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            For Citizens
          </a>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            For Enterprises
          </a>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            Pricing
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm uppercase tracking-wider text-gc-text-main dark:text-white">
            Resources
          </h4>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            Recycling Guide
          </a>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            Impact Report
          </a>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            API Docs
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm uppercase tracking-wider text-gc-text-main dark:text-white">
            Legal
          </h4>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-sm text-gc-text-muted hover:text-gc-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-[#f0f4f0] dark:border-[#2a382a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gc-text-muted">
        <p>© 2023 GreenCycle VN. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <span className="material-symbols-outlined text-xs text-gc-primary filled">favorite</span>
          <span>in Vietnam</span>
        </div>
      </div>
    </footer>
  )
}
