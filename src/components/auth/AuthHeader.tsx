import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"

type AuthHeaderProps = {
  showSignUp?: boolean
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
    </svg>
  )
}

export function AuthHeader({ showSignUp = false }: AuthHeaderProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border px-6 md:px-10 py-3 bg-card top-0 w-full z-10">
      <Link to="/" className="flex items-center gap-4 text-foreground">
        <div className="size-6 text-gc-primary">
          <LogoIcon />
        </div>
        <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em]">
          GreenCycle Vietnam
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-6 md:gap-8 items-center">
        <div className="hidden md:flex items-center gap-9">
          <a className="text-muted-foreground text-sm font-medium hover:text-gc-primary transition-colors" href="#">
            How it works
          </a>
          <a className="text-muted-foreground text-sm font-medium hover:text-gc-primary transition-colors" href="#">
            About Us
          </a>
        </div>
        {showSignUp ? (
          <Button asChild>
            <Link to="/register" className="min-w-[84px]">
              Sign Up
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/login" className="min-w-[84px]">
              Login
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}
