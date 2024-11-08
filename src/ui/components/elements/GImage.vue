<template>
  <img
      :alt="alt"
      :style="style"
      :src="source"
      :width="width"
      :height="height"
      :class="classList"
      @error="addPlaceholderImg"
  />
</template>

<script lang="ts" setup>
import {computed} from "vue";
import type {ImageProps} from "../../types/ElementTypes";

const props = withDefaults(defineProps<ImageProps>(), {
  classList: 'img-default',
  width: 200,
  height: 'auto'
});

const source = computed(() => {
  if(props.src){
    if(props.src.includes('http')){
      return props.src
    }

    return `/src/img/${props.src}`
  }

  return props.placeholderImg || ''
})

const addPlaceholderImg = (e: Event) => {
  const target = e.target as HTMLImageElement

  if(props.placeholderImg){
    target.src = props.placeholderImg
  }
}
</script>

