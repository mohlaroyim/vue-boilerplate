import {defineStore} from "pinia";
import {freeApiPost} from "@/libs/freeAPI";
import type {UserType} from "../types/UserType";
import type {OptionType} from "@/ui/types/InputTypes";
import type {RegisterResponseType} from "../types/RegisterResponseType";
import type {LoginResponseType} from "../types/LoginResponseType";

type TokensType = {
  accessToken: string | null
  refreshToken: string | null
}

type StateType = {
    roles: OptionType[],
    user: UserType | null
    tokens: TokensType
}

type AuthStoreType = {
  id: string,
  options: {
    state: {
      roles: OptionType[],
      user: UserType | null
      tokens: TokensType
    },
    actions: {
      registerUser: (form: Record<string, any>) => Promise<UserType>
      loginUser: (form: Record<string, any>) => Promise<UserType>
    },
    getters: {
      isLoggedIn: boolean
    }
  }
}

export const useAuthStore = defineStore('AuthStore', {
  state: (): StateType => ({
    roles: [{label:'Admin', value: 'ADMIN'}, {label: 'User', value: 'USER'}] as OptionType[],
    user: null as UserType |null,
    tokens: {
      accessToken: null,
      refreshToken: null
    } as TokensType
  }),
  getters:{
    isLoggedIn(): boolean{
      if(!this.tokens.accessToken) {
        return false
      }

      return Date.now() < (JSON.parse(atob(this.tokens.accessToken.split('.')[1]))).exp * 1000
    }
  },
  actions: {
    async registerUser(form: Record<string, any>): Promise<RegisterResponseType>{
     const res = await freeApiPost('/users/register', {
        ...form
      });

     if(res?.data && res?.data?.user){
       this.user = res.data.user
     }

     return res
    },
    async loginUser(form: Record<string, any>): Promise<LoginResponseType>{
     const res = await freeApiPost('/users/login', {...form});

     if(res?.data){
       this.user = res.data.user
       this.tokens = {
         accessToken: res.data.accessToken,
         refreshToken: res.data.refreshToken,
       }
     }

     return res
    }
  },
  persist: true
})
