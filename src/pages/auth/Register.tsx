import { useState } from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { AuthHeader } from "@/components/auth/AuthHeader.tsx"
import { RoleSelector } from "@/components/auth/RoleSelector.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx"
import { DatePicker } from "@/components/ui/date-picker.tsx"
import { useRegisterForm } from "@/hooks/useRegisterForm.ts"

type RoleOption = "citizen" | "enterprise"

const ROLE_OPTIONS = [
  { value: "citizen" as const, label: "Citizen", description: "I want to report waste or earn rewards", icon: "person" },
  { value: "enterprise" as const, label: "Enterprise", description: "I am a collector or recycling facility", icon: "factory" },
]

export function Register() {
  const [role, setRole] = useState<RoleOption>("citizen")
  const [showPassword, setShowPassword] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState<Date>()

  const { form, onSubmit, isSubmitting } = useRegisterForm(role)
  const { register, setValue } = form

  const handleRoleChange = (newRole: RoleOption) => {
    setRole(newRole)
    setValue("role", newRole)
  }

  const handleDateChange = (date: Date | undefined) => {
    setDateOfBirth(date)
    if (date) {
      // Format to YYYY-MM-DD for API
      setValue("dob", format(date, "yyyy-MM-dd"))
    } else {
      setValue("dob", "")
    }
  }

  const handleSubmitWithTerms = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!termsAccepted) {
      // This is now handled in validation, but keeping UX check
      return
    }
    await onSubmit(e)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gc-background-light dark:bg-gc-background-dark font-display">
      <AuthHeader />

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-[560px] w-full border-border">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl tracking-tight pb-2">Join the Green Movement</CardTitle>
            <CardDescription className="text-sm">
              Create your account to start recycling and earning rewards in your community.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 pt-0 space-y-6">
            <RoleSelector
              value={role}
              onValueChange={handleRoleChange}
              options={ROLE_OPTIONS}
              label="I am signing up as a:"
              columns={2}
            />

            <form onSubmit={handleSubmitWithTerms} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="register-full-name">Full Name</Label>
                  <Input
                    id="register-full-name"
                    placeholder="Nguyen Van A"
                    {...register("fullName")}
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email Address</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="register-gender">Gender</Label>
                    <Select
                      defaultValue="Male"
                      onValueChange={(value) => setValue("gender", value as "Male" | "Female" | "Other")}
                    >
                      <SelectTrigger id="register-gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-dob">Date of Birth</Label>
                    <DatePicker
                      date={dateOfBirth}
                      onDateChange={handleDateChange}
                      placeholder="Select your date of birth"
                    />
                    {form.formState.errors.dob && (
                      <p className="text-sm text-destructive">{form.formState.errors.dob.message}</p>
                    )}
                  </div>
                </div>

                {role === "citizen" && (
                  <div className="space-y-2">
                    <Label htmlFor="register-display-name">Display Name</Label>
                    <Input
                      id="register-display-name"
                      placeholder="VanA98"
                      {...register("displayName")}
                    />
                  </div>
                )}

                {role === "enterprise" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="register-company-name">Company Name</Label>
                      <Input
                        id="register-company-name"
                        placeholder="Green Future Recycling Co., Ltd"
                        {...register("name")}
                      />
                      {"name" in form.formState.errors && form.formState.errors.name && (
                        <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-tin">Tax ID (TIN)</Label>
                      <Input
                        id="register-tin"
                        placeholder="0312345678"
                        {...register("tin")}
                      />
                      {"tin" in form.formState.errors && form.formState.errors.tin && (
                        <p className="text-sm text-destructive">{form.formState.errors.tin.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-address">Address</Label>
                      <Input
                        id="register-address"
                        placeholder="123 Nguyen Hue Street, District 1, Ho Chi Minh City"
                        {...register("address")}
                      />
                      {"address" in form.formState.errors && form.formState.errors.address && (
                        <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-contact">Contact (Phone)</Label>
                      <Input
                        id="register-contact"
                        type="tel"
                        placeholder="+84-901-234-567"
                        {...register("contactInfo")}
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Phone Number</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm z-10">
                      +84
                    </span>
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="90 123 4567"
                      className="pl-12"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      className="pr-10"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  {form.formState.errors.password && (
                    <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="register-terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                />
                <Label
                  htmlFor="register-terms"
                  className="text-xs text-muted-foreground leading-normal cursor-pointer font-normal"
                >
                  I agree to the{" "}
                  <a className="text-gc-primary font-semibold hover:underline" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-gc-primary font-semibold hover:underline" href="#">
                    Privacy Policy
                  </a>{" "}
                  of GreenCycle Vietnam.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !termsAccepted}
                className="w-full h-11 font-bold"
              >
                {isSubmitting ? "Creating account…" : "Create Account"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center border-t border-border pt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-gc-primary font-bold hover:underline">
                Log in
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 opacity-40">
          <div className="flex items-center gap-2 text-muted-foreground flex-wrap justify-center">
            <span className="material-symbols-outlined">nature</span>
            <span className="text-xs font-medium uppercase tracking-widest">Sustainability First</span>
            <span className="material-symbols-outlined">location_on</span>
            <span className="text-xs font-medium uppercase tracking-widest">Vietnam</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 -z-10 w-64 h-64 bg-gc-primary/10 blur-[100px] rounded-full pointer-events-none" aria-hidden />
      <div className="fixed top-0 right-0 -z-10 w-96 h-96 bg-gc-primary/5 blur-[120px] rounded-full pointer-events-none" aria-hidden />
    </div>
  )
}
