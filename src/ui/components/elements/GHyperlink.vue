<template>
  <a
    :href="href"
    :class="classList"
    :style="style"
    :title="title"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>


<script lang="ts" setup>

import type {HyperlinkProps} from "@/ui/types/ElementTypes";
import type {ButtonEmitsType} from "@/ui/types/ButtonEmitsType";

const props = defineProps<HyperlinkProps>()
const emit = defineEmits<ButtonEmitsType>();

function handleClick() {
  if(!props.disabled){
    emit('click');
  }
}
</script>
