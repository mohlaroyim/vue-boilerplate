import type {UserType} from "./UserType";

export interface RegisterResponseType {
  statusCode: number,
  data?: {
    user: UserType
  },
  message?: string
  success?: boolean,
  error?: string
}
