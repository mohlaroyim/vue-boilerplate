<template>
  <button
    :disabled="disabled || submitting"
    class="btn-default"
    :class="computedClasses"
    :style="style"
    :title="title"
    :type="type"
    :data-testid="dataTestId"
    @click="handleClick"
  >
    <slot></slot>
    <GLoader v-if="submitting" />
  </button>
</template>

<script lang="ts" setup>
import GLoader from "@/ui/components/custom/GLoader.vue";
import type { ButtonProps } from "@/ui/types/ButtonProps";
import type { ButtonEmitsType } from "@/ui/types/ButtonEmitsType";
import { computed } from "vue";

const props = withDefaults(defineProps<ButtonProps>(), { classList: 'btn-default', type: 'submit' })
const emit = defineEmits<ButtonEmitsType>();

const computedClasses = computed(() => [
  props.classList,
  { disabled: props.disabled || props.submitting },
]);

function handleClick() {
  if(!props.submitting && !props.disabled){
    emit('click');
  }
}

</script>
