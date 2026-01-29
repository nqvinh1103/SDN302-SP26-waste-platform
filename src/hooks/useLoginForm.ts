import { getApiErrorMessage } from "@/lib/error.ts"
import { loginSchema, type LoginFormData } from "@/lib/validations/auth.ts"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "./useAuth.ts"

export function useLoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      roleCode: "CITIZEN",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data)
      toast.success("Logged in successfully")

      const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/"
      navigate(from, { replace: true })
    } catch (err) {
      toast.error(getApiErrorMessage(err, "Login failed"))
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
