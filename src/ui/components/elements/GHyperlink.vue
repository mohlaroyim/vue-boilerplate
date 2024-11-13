<template>
  <a
    :href="!disabled ? href : undefined"
    :rel="!disabled ? computedRel : undefined"
    :class="[classList, {disabled}]"
    :style="style"
    :title="title"
    :target="target"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>


<script lang="ts" setup>

import type { HyperlinkProps } from "@/ui/types/ElementTypes";
import type { ButtonEmitsType } from "@/ui/types/ButtonEmitsType";
import { computed } from "vue";

const props = withDefaults(defineProps<HyperlinkProps>(),{
  target: "_self",
  rel: ''
})
const emit = defineEmits<ButtonEmitsType>();

const computedRel = computed(() => {
  return props.target === '_blank' ? `${props.rel} noopener noreferrer`.trim() : props.rel;
});

function handleClick() {
  if(!props.disabled){
    emit('click');
  }
}
</script>
