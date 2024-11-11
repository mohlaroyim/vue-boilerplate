<template>
  <main>
    <div class="header">
      Welcome {{user?.username}}
    </div>
    <div class="flex flex-col gap-8">
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Product List</div>
      </div>
      <div  class="flex flex-col gap-8" v-if="products.length && !loading">
        <table class="simple-table">
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="table-cell">{{product.id}}</td>
              <td class="table-cell">{{product.title}}</td>
              <td class="table-cell">{{product.price}}$</td>
              <td class="table-cell">{{product.brand}}</td>
              <td class="table-cell">{{product.rating}}</td>
            </tr>
          </tbody>
        </table>
        <Pagination
            :page="productStore.pagination.page"
            :limit="productStore.pagination.limit"
            :current-page-items="productStore.pagination.currentPageItems"
            :total-pages="productStore.pagination.totalPages"
            :next-page="productStore.pagination.nextPage"
            :previous-page="productStore.pagination.previousPage"
            :total-items="productStore.pagination.totalItems"
            v-model="currentPage"
        />
      </div>
      <Loader v-else-if="loading"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import {useAuthStore} from "@/auth/stores/useAuthStore";
import {useProductStore} from "@/eCommerce/stores/useProductStore";
import Pagination from "@/ui/components/custom/Pagination.vue";
import Loader from "@/ui/components/custom/Loader.vue";

const authStore = useAuthStore()
const productStore = useProductStore()
const currentPage = ref<number>(1)
const loading = ref<boolean>(false)

const user = computed(()=> authStore.user).value
const products = computed(()=> productStore.products)

const fetchProducts = async () => {
  loading.value = true
  await productStore.getProducts(currentPage.value, productStore.pagination.limit);
  loading.value = false
};

watch(currentPage, () => {
  fetchProducts()
});

onMounted(async () => {
  await fetchProducts()
});
</script>
