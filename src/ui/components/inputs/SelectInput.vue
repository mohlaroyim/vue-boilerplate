<template>
  <div class="input-container" :class="containerClass">
    <label v-if="label" class="input-label" :class="labelClass">
      {{label}}
      <span v-if="required" class="input-required">*</span>
    </label>
    <select
      class="input-select"
      :value="modelValue"
      @input="handleInput"
      :disabled="disabled"
      :class="[classList, {error: !!error, disabled}]"
    >
      <option v-if="placeholder" value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="item in items" :key="item.value" :value="item.value">{{item.label}}</option>
    </select>
    <span class="error-text" v-if="error">{{error}}</span>
  </div>
</template>

<script lang="ts" setup>

import type {SelectInputEmitsType, SelectInputProps} from "../../types/InputTypes";

defineProps<SelectInputProps>()
const emits = defineEmits<SelectInputEmitsType>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  emits('update:modelValue', target.value)
}
</script>
