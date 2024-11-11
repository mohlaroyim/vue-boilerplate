<template>
  <div class="input-container" :class="containerClass">
    <label v-if="label" class="input-label" :class="labelClass">
      {{label}}
      <span v-if="required" class="input-required">*</span>
    </label>
    <input
      :data-testid="dataTestId"
      class="input-form"
      autoComplete="on"
      :class="[classList, {error: !!error, disabled}]"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readOnly"
      :type="show?'text':'password'"
      @input="handleInput"
    />
    <div v-if="modelValue" class="input-icon" @click="togglePassword">
      show
    </div>
    <span class="error-text" v-if="error">{{error}}</span>
  </div>
</template>

<script lang="ts" setup>

import { ref } from "vue";
import type { TextInputEmitsType, TextInputProps } from "@/ui/types/InputTypes";

defineProps<TextInputProps>();
const emits = defineEmits<TextInputEmitsType>()
const show = ref<boolean>(false)

const togglePassword = () => show.value = !show.value

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>
