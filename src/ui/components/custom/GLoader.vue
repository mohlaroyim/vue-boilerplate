<template>
  <div class="loader" :class="classList" :style="{fontSize, color, zIndex}">
    Loading...
  </div>
</template>

<script lang="ts" setup>

defineProps({
  fontSize: {
    type: Number,
    default: 16
  },
  classList: String,
  color: String,
  zIndex: String
})
</script>
