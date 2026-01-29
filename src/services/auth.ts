import { ENDPOINTS } from "@/constants/endpoints.ts"
import type {
  AuthApiResponse,
  AuthPayload,
  LoginRequestBody,
  RegisterApiResponse,
  RegisterCitizenRequestBody,
  RegisterEnterpriseRequestBody,
} from "@/types/auth.ts"
import { api } from "./axios.ts"
import { clearTokens, setTokens } from "./tokenStorage.ts"

export { clearTokens, getAccessToken, getRefreshToken } from "./tokenStorage.ts"

// --- API ---
export async function login(
  body: LoginRequestBody
): Promise<AuthPayload> {
  const { data } = await api.post<AuthApiResponse>(ENDPOINTS.auth.login, body)
  if (!data.success || !data.payload) {
    throw new Error("Login failed")
  }
  const { accessToken, refreshToken } = data.payload
  setTokens(accessToken, refreshToken)
  return data.payload
}

export async function registerEnterprise(
  body: RegisterEnterpriseRequestBody
): Promise<string> {
  const { data } = await api.post<RegisterApiResponse>(
    ENDPOINTS.auth.registerEnterprise,
    body
  )
  if (!data.success || typeof data.payload !== "string") {
    throw new Error("Register failed")
  }
  return data.payload
}

export async function registerCitizen(
  body: RegisterCitizenRequestBody
): Promise<string> {
  const { data } = await api.post<RegisterApiResponse>(
    ENDPOINTS.auth.registerCitizen,
    body
  )
  if (!data.success || typeof data.payload !== "string") {
    throw new Error("Register failed")
  }
  return data.payload
}

export function logout(): void {
  clearTokens()
}
