import type {UserType} from "./UserType";

export interface LoginResponseType {
  statusCode: number,
  data?: {
    user: UserType,
    accessToken: string
    refreshToken: string
  },
  message?: string
  success?: boolean,
  error?: string
}
