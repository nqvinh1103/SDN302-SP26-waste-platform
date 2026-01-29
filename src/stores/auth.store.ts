import { create } from "zustand"
import { persist } from "zustand/middleware"
import { clearTokens } from "@/services/tokenStorage.ts"

export type AuthUser = {
  id: string
  email: string
  name: string
  role: string
  privileges: string[]
}

type AuthState = {
  user: AuthUser | null
  isInitialized: boolean
  setUser: (user: AuthUser | null) => void
  setInitialized: (initialized: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isInitialized: false,
      setUser: (user) => set({ user }),
      setInitialized: (initialized) => set({ isInitialized: initialized }),
      logout: () => {
        clearTokens()
        set({ user: null })
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
)
