<template>
  <div class="popup-modal-container">
    <div class="popup-modal">
      <div class="title">Add Product</div>
      <div class="flex flex-col gap-8">
        <TextInput name="name" v-model="form.name" label="Name" />
        <TextAreaInput name="description" v-model="form.description" label="Description"/>
        <NumberInput name="price" v-model="form.price" label="Price"/>
        <TextInput name="stock" v-model="(form.stock)" label="Stock"/>
        <TextInput name="category" v-model="form.category" label="Category"/>
<!--        <TextInput name="mainImage" v-model="form.mainImage" label="Display Image"/>-->
<!--        <TextInput name="subImages" v-model="form.subImages" label="Additional Images"/>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextInput from "@/ui/components/inputs/TextInput.vue";
import { ref } from "vue";
import TextAreaInput from "@/ui/components/inputs/TextAreaInput.vue";
import NumberInput from "@/ui/components/inputs/NumberInput.vue";

const form = ref({
  name: '',
  description:'',
  price:0,
  stock:'',
  quantity:'',
  category:'',
  mainImage:null,
  subImages: null
})
</script>
