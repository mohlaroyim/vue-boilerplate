<template>
  <div class="flex justify-center">
    <div class="form-card">
      <div class="form-title">Welcome to VPP</div>
      <TextInput name="username" label="Username" v-model="form.username" data-test-id="user_name" :error="errors.username" />
      <PasswordInput name="password" v-model="form.password" label="Password" data-test-id="user_password" :error="errors.password" />
      <GButton :submitting="loading"  @click="onSubmit" data-test-id="login_button">
        Login
      </GButton>
      <span class="text-center">Do you not have an account? <GHyperlink href="/auth/register">Register</GHyperlink></span>
    </div>
  </div>
  <ToastNotification />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuthStore";
import PasswordInput from "@/ui/components/inputs/PasswordInput.vue";
import TextInput from "@/ui/components/inputs/TextInput.vue";
import { useToastStore } from "@/ui/stores/useToastStore";
import { useRouter } from "vue-router";
import GHyperlink from "@/ui/components/elements/GHyperlink.vue";
import ToastNotification from "@/ui/components/custom/ToastNotification.vue";
import GButton from "@/ui/components/elements/GButton.vue";
import { useValidation } from "@/ui/composables/useValidation";

interface UserFormType {
  username: string,
  password: string
}

const authStore = useAuthStore()
const toastStore = useToastStore()
const router = useRouter()
const { isRequiredString, validate } = useValidation()

const rules = ref({
  username: isRequiredString(),
  password: isRequiredString()
})

const form = ref<UserFormType>({ password: '', username: '' })
const errors = ref<UserFormType>({ password: '', username: '' })
const loading = ref<boolean>(false)

const onSubmit = async () => {
  const validation = validate(form.value, rules.value)
  if(validation.validated){
    loading.value = true
    const res = await authStore.loginUser(form.value)
    loading.value = false

    if(res.error){
      toastStore.error({ text: res.error })
    }else{
      toastStore.success({ timeout: 60000, text: 'Yeeey' })
      router.push('/')
    }
  }else{
    errors.value = { ...validation.errors } as UserFormType
  }
}

</script>
