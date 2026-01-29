import axios from "axios"

export type ApiErrorBody = {
  type?: string
  message?: string
  details?: unknown
  timestamp?: string
}

export function getApiErrorMessage(err: unknown, fallback: string): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data
    if (data && typeof data === "object" && "message" in data) {
      const msg = (data as ApiErrorBody).message
      if (typeof msg === "string" && msg.length > 0) return msg
    }
  }
  if (err instanceof Error) return err.message
  return fallback
}
