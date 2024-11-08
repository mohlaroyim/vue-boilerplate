<template>
  <div class="flex justify-center">
    <div class="form-card">
      <div class="form-title">Register to VPP</div>
      <TextInput name="username" label="Username" v-model="form.username"  />
      <TextInput name="email" label="E-mail" v-model="form.email"  />
      <SelectInput name="role" label="Role" v-model="form.role" :items="authStore?.roles"/>
      <PasswordInput name="password" v-model="form.password" label="Password" />
      <GButton @click="onSubmit">
        Register
      </GButton>
      <span class="text-center">Do you already have an account? <GHyperlink href="/auth/login">Login</GHyperlink></span>
    </div>
  </div>
  <ToastNotification/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useAuthStore} from "../stores/useAuthStore";
import SelectInput from "@/ui/components/inputs/SelectInput.vue";
import PasswordInput from "@/ui/components/inputs/PasswordInput.vue";
import {useRouter} from "vue-router";
import {useToastStore} from "@/ui/stores/useToastStore";
import GHyperlink from "@/ui/components/elements/GHyperlink.vue";
import ToastNotification from "@/ui/components/custom/ToastNotification.vue";
import GButton from "@/ui/components/elements/GButton.vue";
import TextInput from "@/ui/components/inputs/TextInput.vue";

interface UserFormType {
  username: string,
  email: string,
  password: string,
  role: string
}

const authStore = useAuthStore()
const toastStore = useToastStore()
const router = useRouter()

const form = ref<UserFormType>({
  password: 'mohi',
  username: 'mohi1',
  email: 'mohi@deepnetwork.com',
  role: 'ADMIN'
})

const onSubmit = async () => {
  const res = await authStore.registerUser(form.value)

  if(res.error){
    toastStore.error({text: res.error})
  }else if(res.success){
    if(res.message){
      toastStore.success({text: res.message})
    }
    router.push('/')
  }
}
</script>
