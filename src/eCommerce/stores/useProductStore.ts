import {defineStore} from "pinia";
import {freeApiGet} from "@/libs/freeAPI";
import {useAuthStore} from "@/auth/stores/useAuthStore";
import type {PaginationType} from "@/ui/types/PaginationType";
import type {ProductType} from "@/eCommerce/types/ProductType";

export const useProductStore = defineStore('ProductStore', {
  state: ()=>({
    products: [] as ProductType[],
    pagination: {
      page: 1,
      limit: 10,
      currentPageItems: 0,
      previousPage: false,
      nextPage: false,
      totalItems:0,
      totalPages: 0
    } as PaginationType
  }),
  actions:{
    async getProducts(page?: number, limit?: number){
      const res = await freeApiGet(`/public/randomproducts?page=${page}&limit=${limit}&category='smartphones'`)

      if(res.data){
        this.products = [...res.data?.data]
        this.pagination = {
          limit: res.data.limit,
          nextPage: res.data.nextPage,
          page: res.data.page,
          previousPage: res.data.previousPage,
          totalPages: res.data.totalPages,
          totalItems: res.data.totalItems,
          currentPageItems: res.data.currentPageItems
        }
      }

      return res
    }
  },
  getters: {
    canAddProduct(){
      const {user} = useAuthStore()

      return user?.role === 'ADMIN'
    }
  },
  persist: false
})
