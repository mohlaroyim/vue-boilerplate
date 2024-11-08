<template>
  <div class="input-container" :class="containerClass">
    <label v-if="label" class="input-label" :class="labelClass">
        {{label}}
        <span v-if="required" class="input-required">*</span>
    </label>
    <input
      class="input-form"
      type="text"
      :data-testid="dataTestId"
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
import type {TextInputEmitsType, TextInputProps} from "@/ui/types/InputTypes";

defineProps<TextInputProps>()
const emits = defineEmits<TextInputEmitsType>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>
