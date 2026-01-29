import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { AuthHeader } from "@/components/auth/AuthHeader.tsx"
import { RoleSelector } from "@/components/auth/RoleSelector.tsx"
import { useLoginForm } from "@/hooks/useLoginForm.ts"

const ROLE_OPTIONS = [
  { value: "CITIZEN" as const, label: "Citizen", icon: "person" },
  { value: "ENTERPRISE" as const, label: "Enterprise", icon: "factory" },
  { value: "SUPER_ADMIN" as const, label: "Super Admin", icon: "admin_panel_settings" },
]

export function Login() {
  const { form, onSubmit, isSubmitting } = useLoginForm()
  const { register, watch, setValue } = form
  const roleCode = watch("roleCode")

  return (
    <div className="bg-gc-background-light dark:bg-gc-background-dark min-h-screen font-display transition-colors duration-200">
      <AuthHeader showSignUp />

      <main className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        <div className="absolute inset-0 eco-pattern pointer-events-none" aria-hidden />
        <div className="z-10 w-full max-w-[480px]">
          <Card className="bg-card border-border overflow-hidden shadow-xl">
            <CardHeader className="text-center pb-4 pt-10">
              <CardTitle className="text-[32px] tracking-tight">Welcome Back</CardTitle>
              <CardDescription className="text-base mt-2">
                Log in to start recycling for a cleaner Vietnam
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-5 px-8 pb-6">
                <RoleSelector
                  value={roleCode}
                  onValueChange={(value) => setValue("roleCode", value)}
                  options={ROLE_OPTIONS}
                  label="I am logging in as:"
                />

                <div className="flex flex-col gap-2">
                  <Label htmlFor="login-email">Email Address</Label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xl pointer-events-none z-10">
                      mail
                    </span>
                    <Input
                      id="login-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="pl-10 h-12"
                      {...register("email")}
                    />
                  </div>
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xl pointer-events-none z-10">
                      lock
                    </span>
                    <Input
                      id="login-password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className="pl-10 h-12"
                      {...register("password")}
                    />
                  </div>
                  {form.formState.errors.password && (
                    <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="login-remember" />
                    <Label htmlFor="login-remember" className="text-sm font-normal cursor-pointer hover:text-gc-primary transition-colors">
                      Remember me
                    </Label>
                  </div>
                  <a className="text-sm font-medium text-gc-primary hover:underline" href="#">
                    Forgot password?
                  </a>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-4 border-t border-border bg-muted/30 px-8 py-4">
                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-bold">
                  {isSubmitting ? "Logging in…" : "Login"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="text-gc-primary font-semibold hover:underline">
                    Create an account
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>

          <div className="mt-8 flex justify-center items-center gap-4 text-muted-foreground text-xs flex-wrap">
            <span className="hover:text-gc-primary cursor-pointer flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">language</span>
              Tiếng Việt
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" aria-hidden />
            <a href="#" className="hover:text-gc-primary">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" aria-hidden />
            <a href="#" className="hover:text-gc-primary">Terms of Service</a>
          </div>
        </div>
      </main>

      <div className="fixed -bottom-10 -left-10 opacity-10 dark:opacity-5 pointer-events-none" aria-hidden>
        <span className="material-symbols-outlined text-[300px] text-gc-primary rotate-45">eco</span>
      </div>
      <div className="fixed -top-10 -right-10 opacity-10 dark:opacity-5 pointer-events-none" aria-hidden>
        <span className="material-symbols-outlined text-[300px] text-gc-primary -rotate-12">recycling</span>
      </div>
    </div>
  )
}
