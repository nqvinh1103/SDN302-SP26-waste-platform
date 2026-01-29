/**
 * Central API endpoint definitions.
 * Dùng base path tương đối (axios đã có baseURL).
 */
export const ENDPOINTS = {
  auth: {
    login: "iam/auth/login",
    registerEnterprise: "enterprise/auth/register",
    registerCitizen: "citizen/auth/register",
    // refresh: "iam/auth/refresh",
  },
} as const
