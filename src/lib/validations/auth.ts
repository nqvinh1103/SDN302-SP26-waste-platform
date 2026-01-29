import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  roleCode: z.enum(["CITIZEN", "ENTERPRISE", "SUPER_ADMIN"]),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Base register fields
const baseRegisterSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  gender: z.enum(["Male", "Female", "Other"]),
  dob: z.string().min(1, "Date of birth is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
})

// Citizen specific fields
export const citizenRegisterSchema = baseRegisterSchema.extend({
  role: z.literal("citizen"),
  displayName: z.string().optional(),
})

// Enterprise specific fields
export const enterpriseRegisterSchema = baseRegisterSchema.extend({
  role: z.literal("enterprise"),
  name: z.string().min(2, "Company name is required"),
  tin: z.string().min(5, "Tax ID is required"),
  address: z.string().min(5, "Address is required"),
  contactInfo: z.string().optional(),
})

// Union type for register
export const registerSchema = z.discriminatedUnion("role", [
  citizenRegisterSchema,
  enterpriseRegisterSchema,
])

export type RegisterFormData = z.infer<typeof registerSchema>
export type CitizenRegisterFormData = z.infer<typeof citizenRegisterSchema>
export type EnterpriseRegisterFormData = z.infer<typeof enterpriseRegisterSchema>
