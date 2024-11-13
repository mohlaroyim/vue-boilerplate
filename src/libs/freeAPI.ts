import axios, { AxiosError } from "axios";
import { useAuthStore } from "@/auth/stores/useAuthStore";
const API_URL: string = "https://api.freeapi.app/api/v1"

interface FreeApiError {
  message?: string
}

export const defaultInstance = axios.create({
  baseURL: API_URL
})



defaultInstance.interceptors.request.use((config) => {
  const { tokens } = useAuthStore()
  const token = tokens.accessToken

  if (token) {
    const unprotectedURls = ['/users/login/', '/users/register/'];

    if (config.url && !unprotectedURls.includes(config.url)) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
  }

  return config
})

export const freeApiPost = async (url: string, params: Record<string, string|number|boolean>, options = {}) => {
  try {
    const res = await defaultInstance.post(
      url,
      { ...params },
      { ...options }
    )
    if (res.data) {
      return res.data
    }

    return res
  } catch (ex) {
    const e = ex as AxiosError<FreeApiError>

    return { error: e?.response?.data?.message || 'An error occurred' }
  }
}


export const freeApiGet = async (url: string, params?: Record<string, string|number|boolean>, options = {}) => {
  try {
    const res = await defaultInstance.get(url, { ...params, ...options })

    if (res.data) {
      return res.data
    }

    return res
  } catch (ex) {
    const e = ex as AxiosError<FreeApiError>

    return { error: e?.response?.data?.message || 'An error occurred' }
  }
}
