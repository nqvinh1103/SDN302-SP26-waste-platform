import { useAuth } from "./useAuth.ts"

export function usePermission() {
  const { user } = useAuth()

  const hasPrivilege = (privilege: string): boolean => {
    if (!user) return false
    return user.privileges.includes(privilege)
  }

  const hasAnyPrivilege = (privileges: string[]): boolean => {
    if (!user) return false
    return privileges.some((p) => user.privileges.includes(p))
  }

  const hasAllPrivileges = (privileges: string[]): boolean => {
    if (!user) return false
    return privileges.every((p) => user.privileges.includes(p))
  }

  const hasRole = (role: string): boolean => {
    if (!user) return false
    return user.role === role
  }

  return {
    hasPrivilege,
    hasAnyPrivilege,
    hasAllPrivileges,
    hasRole,
    privileges: user?.privileges || [],
  }
}
