import { useAuthStore } from "@/stores/auth.store.ts"
import axios from "axios"
import { getAccessToken } from "./tokenStorage.ts"

const baseURL = import.meta.env.VITE_API_BASE_URL ?? ""

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout()

      if (!window.location.pathname.startsWith("/login") && !window.location.pathname.startsWith("/register")) {
        window.location.href = "/login"
      }
    }
    return Promise.reject(err)
  }
)
