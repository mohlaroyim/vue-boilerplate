<template>
  <button
    :disabled="disabled"
    class="btn-default"
    :class="[classList, {disabled}]"
    :style="style"
    :title="title"
    :type="type"
    :data-testid="dataTestId"
    @click="handleClick"
  >
    <slot></slot>
    <Loader v-if="submitting"/>
  </button>
</template>

<script lang="ts" setup>
import Loader from "@/ui/components/custom/Loader.vue";
import type {ButtonProps} from "@/ui/types/ButtonProps";
import type {ButtonEmitsType} from "@/ui/types/ButtonEmitsType";

withDefaults(defineProps<ButtonProps>(), {classList: 'btn-default', type: 'submit'})
const emit = defineEmits<ButtonEmitsType>();

function handleClick() {
  emit('click');
}
</script>
