import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/stores/auth.store.ts"
import { login as apiLogin, logout as apiLogout } from "@/services/auth.ts"
import { getUserFromToken } from "@/lib/jwt.ts"
import { getAccessToken } from "@/services/tokenStorage.ts"
import type { LoginRequestBody } from "@/types/auth.ts"

export function useAuth() {
  const navigate = useNavigate()
  const { user, setUser, logout: clearUser, isInitialized, setInitialized } = useAuthStore()

  const login = async (credentials: LoginRequestBody) => {
    const payload = await apiLogin(credentials)
    const userInfo = getUserFromToken(payload.accessToken)
    
    if (userInfo) {
      setUser(userInfo)
    }
    
    return payload
  }

  const logout = () => {
    clearUser()
    apiLogout()
    navigate("/login", { replace: true })
  }

  const checkAuth = () => {
    if (isInitialized) return

    const token = getAccessToken()
    if (token) {
      const userInfo = getUserFromToken(token)
      if (userInfo) {
        setUser(userInfo)
      } else {
        clearUser()
      }
    }
    setInitialized(true)
  }

  return {
    user,
    isAuthenticated: !!user,
    isInitialized,
    login,
    logout,
    checkAuth,
  }
}
