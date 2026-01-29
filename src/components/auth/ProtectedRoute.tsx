import { useAuth } from "@/hooks/useAuth.ts"
import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

type ProtectedRouteProps = {
  children: ReactNode
  requiredRole?: string
  requiredPrivilege?: string
  requiredPrivileges?: string[]
  anyPrivilege?: string[]
}

export function ProtectedRoute({
  children,
  requiredRole,
  requiredPrivilege,
  requiredPrivileges,
  anyPrivilege,
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Check role requirement
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  // Check single privilege requirement
  if (requiredPrivilege && !user?.privileges.includes(requiredPrivilege)) {
    return <Navigate to="/" replace />
  }

  // Check all privileges requirement
  if (requiredPrivileges && !requiredPrivileges.every((p) => user?.privileges.includes(p))) {
    return <Navigate to="/" replace />
  }

  // Check any privilege requirement
  if (anyPrivilege && !anyPrivilege.some((p) => user?.privileges.includes(p))) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
