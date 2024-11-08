export type UserRoleTypes = 'ADMIN' | 'USER'
export type LoginTypes = 'EMAIL_PASSWORD'

export interface UserType{
  _id: string,
  avatar: {
    url: string,
    localPath: string,
    _id: string
  },
  username: string,
  email: string,
  role: UserRoleTypes,
  loginType: LoginTypes,
  isEmailVerified: boolean,
  createdAt: string,
  updatedAt: string,
  __v: number
}
