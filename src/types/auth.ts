export type LoginRequestBody = {
  email: string
  password: string
  roleCode: string
}

/** Request body cho đăng ký doanh nghiệp (enterprise). */
export type RegisterEnterpriseRequestBody = {
  email: string
  fullName: string
  gender: string
  dob: string
  password: string
  name: string
  tin: string
  avatarName: string
  address: string
  contactInfo: string
}

/** Request body cho đăng ký công dân (citizen). */
export type RegisterCitizenRequestBody = {
  email: string
  fullName: string
  gender: string
  dob: string
  password: string
  displayName: string
  avatarName: string
}

export type AuthPayload = {
  accessToken: string
  refreshToken: string
}

export type AuthApiResponse<T = AuthPayload> = {
  success: boolean
  payload: T
  timestamp: string
}

/** Response của API register (citizen / enterprise): payload là message string. */
export type RegisterApiResponse = AuthApiResponse<string>
