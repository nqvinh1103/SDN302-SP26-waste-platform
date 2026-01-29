import { jwtDecode } from "jwt-decode"

const CLAIM_KEYS = {
  NAME_IDENTIFIER: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
  EMAIL: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
  ROLE: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
} as const

export type JwtPayload = {
  [CLAIM_KEYS.NAME_IDENTIFIER]: string
  [CLAIM_KEYS.EMAIL]: string
  [CLAIM_KEYS.ROLE]: string
  FullName: string
  Privileges?: string
  exp: number
  iss: string
  aud: string
}

export function decodeToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token)
  } catch {
    return null
  }
}

export function isTokenExpired(token: string): boolean {
  const decoded = decodeToken(token)
  if (!decoded) return true
  return decoded.exp * 1000 < Date.now()
}

export function getUserFromToken(token: string) {
  const decoded = decodeToken(token)
  if (!decoded) return null

  return {
    id: decoded[CLAIM_KEYS.NAME_IDENTIFIER],
    email: decoded[CLAIM_KEYS.EMAIL],
    name: decoded.FullName,
    role: decoded[CLAIM_KEYS.ROLE],
    privileges: decoded.Privileges?.split(",").map((p) => p.trim()) || [],
  }
}
