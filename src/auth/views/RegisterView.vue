<template>
  <div class="flex justify-center">
    <div class="form-card">
      <div class="form-title">Register to VPP</div>
      <TextInput name="username" label="Username" v-model="form.username" :error="errors.username" />
      <TextInput name="email" label="E-mail" v-model="form.email" :error="errors.email" />
      <SelectInput name="role" label="Role" v-model="form.role" :items="authStore?.roles" :error="errors.role" />
      <PasswordInput name="password" v-model="form.password" label="Password" :error="errors.password" />
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
import {useValidation} from "@/ui/composables/useValidation";

interface UserFormType {
  username: string,
  email: string,
  password: string,
  role: string
}

const authStore = useAuthStore()
const toastStore = useToastStore()
const router = useRouter()
const {validate, isRequiredEmail, isRequiredString} = useValidation()


const form = ref<UserFormType>({
  password: 'mohi',
  username: 'mohi1',
  email: 'mohi@deepnetwork.com',
  role: 'ADMIN'
})
const errors = ref<UserFormType>({
  password: '',
  username: '',
  email: '',
  role: ''
})
const rules = ref({
 username: isRequiredString(),
 password: isRequiredString(),
 email: isRequiredEmail(),
 role: isRequiredString()
})
const loading = ref<boolean>(false)

const onSubmit = async () => {
  const validation = validate(form.value, rules.value)
  if(validation.validated){
    loading.value = true
    const res = await authStore.registerUser(form.value)
    loading.value = false

    if(res.error){
      toastStore.error({text: res.error})
    }else if(res.success){
      if(res.message){
        toastStore.success({text: res.message})
      }
      router.push('/')
    }
  }else {
    errors.value = {...validation.errors}
  }

}
</script>
