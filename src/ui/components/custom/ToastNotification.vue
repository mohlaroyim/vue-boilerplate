<template>
  <Teleport to="body">
    <ul v-if="toastStore.toasts.length" class="toaster__wrapper">
      <li
          v-for="toast in toastStore.toasts"
          :class="['toaster__inner', toastClassMap[toast.status]]"
          :key="toast.text"
      >
        <span class="toaster__list-text">{{ toast.text }}</span>
      </li>
    </ul>
  </Teleport>
</template>

<script lang="ts" setup>
import {useToastStore} from "../../stores/useToastStore";
import type { ToastStatusType } from "../../stores/useToastStore";

const toastClassMap: Record<ToastStatusType, string> = {
  warning: "warning",
  error: "error",
  success: "success",
};

const toastStore = useToastStore()
</script>

<style scoped lang="scss">
.toaster {
  &__wrapper {
    position: fixed;
    top: 3%;
    right: 5%;

    z-index: 100;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__inner {
    --color: black;
    display: flex;
    align-items: center;
    gap: 1rem;

    border-radius: 0.3rem;
    border: 1px solid var(--color);

    background-color: white;
    padding: 16px 24px;
    color: var(--color);

    svg {
      fill: var(--color);
      stroke: var(--color);
    }

    &.success {
      --color: green;
    }

    &.warning {
      --color: orange;
    }

    &.error {
      --color: red;
    }

    &-icon {
      width: 1.8rem;
      aspect-ratio: 1/1;
    }

    &-text {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
}
</style>
