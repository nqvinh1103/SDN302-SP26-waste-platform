import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { registerSchema, type RegisterFormData } from "@/lib/validations/auth.ts"
import { registerCitizen, registerEnterprise } from "@/services/auth.ts"
import { getApiErrorMessage } from "@/lib/error.ts"

type RoleOption = "citizen" | "enterprise"

export function useRegisterForm(role: RoleOption) {
  const navigate = useNavigate()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role,
      fullName: "",
      email: "",
      gender: "Male",
      dob: "",
      password: "",
    },
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      let message: string

      if (data.role === "citizen") {
        const displayName = data.displayName || data.fullName.replace(/\s+/g, "")
        const dob = data.dob.includes("T") ? data.dob : `${data.dob}T00:00:00`
        
        message = await registerCitizen({
          email: data.email,
          fullName: data.fullName,
          gender: data.gender,
          dob,
          password: data.password,
          displayName,
          avatarName: "default_avatar",
        })
      } else {
        const contactInfo = data.contactInfo || "+84-" + (data.phone || "").replace(/\s/g, "-")
        
        message = await registerEnterprise({
          email: data.email,
          fullName: data.fullName,
          gender: data.gender,
          dob: data.dob || new Date().toISOString().slice(0, 10),
          password: data.password,
          name: data.name,
          tin: data.tin,
          avatarName: "green_future_logo.png",
          address: data.address,
          contactInfo,
        })
      }

      toast.success(message)
      navigate("/login", { replace: true })
    } catch (err) {
      toast.error(getApiErrorMessage(err, "Registration failed"))
    }
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
