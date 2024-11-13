<template>
  <div class="input-container" :class="containerClass">
    <label v-if="label" class="input-label" :class="labelClass">
      {{label}}
      <span v-if="required" class="input-required">*</span>
    </label>
    <input
        class="input-form"
        type="number"
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
        :disabled="disabled"
        :readonly="readOnly"
        :class="[classList, {error: !!error, disabled}]"
    />
    <span class="error-text" v-if="error">{{error}}</span>
  </div>
</template>

<script lang="ts" setup>
import type { NumberInputEmitsType, NumberInputProps } from "@/ui/types/InputTypes";

const props = defineProps<NumberInputProps>()
const emits = defineEmits<NumberInputEmitsType>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value: number|undefined = props.allowDecimal ? parseFloat(target.value) : Number(target.value)

  emits('update:modelValue', value)
}
</script>
