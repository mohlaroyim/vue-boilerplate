<template>
  <div class="flex gap-8 w-full justify-between items-center" v-if="props.totalPages > 1">
    <GButton :disabled="!props.previousPage" @click="prev">Prev</GButton>
    <ul class="flex gap-2">
      <li class="pagination-step" :class="{active: pageNumber.value === page}" v-for="pageNumber in pages" :key="pageNumber.id" @click="()=>changePage(pageNumber)">
        {{pageNumber.value}}
      </li>
    </ul>
    <GButton :disabled="!props.nextPage" @click="next">Next</GButton>
  </div>
</template>

<script setup lang="ts">
import GButton from "../elements/GButton.vue";
import type {PaginationPropsType} from "@/ui/types/PaginationPropsType";
import {computed} from "vue";

const props = defineProps<PaginationPropsType>()
const emit = defineEmits<{ (event: 'update:modelValue', newPage: number): void; }>();

// const firstItem = computed(() => (props.page - 1) * props.currentPageItems + 1);
// const lastItem = computed(() => {
//   if (props.page === props.totalPages && props.totalPages * props.currentPageItems !== props.totalItems) {
//     return props.totalItems;
//   }
//   return props.page * props.currentPageItems;
// });

const maxVisiblePages = 5;
const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);


const startPage = computed(() => {
  let start = Math.max(props.page - halfMaxVisiblePages, 1);
  if (start < 1) {
    start = 1;
  }

  if (endPage.value > props.totalPages) {
    start = Math.max(endPage.value - maxVisiblePages + 1, 1);
  }

  return start;
});

const endPage = computed(() => {
  let end = startPage.value + maxVisiblePages - 1;
  if (startPage.value < 1) {
    end = maxVisiblePages;
  }

  if (end > props.totalPages) {
    end = props.totalPages;
  }
  return end;
});

const pages = computed(() => {
  const pageNumbers: { id: string; value: number | string}[] = [];

  if (startPage.value > 1) {
    pageNumbers.push({ id: 'first', value: 1 });
    if (startPage.value > 2) {
      pageNumbers.push({ id: 'prev-ellipsis', value: '...' });
    }
  }

  for (let i = Math.max(startPage.value, 1); i <= endPage.value; i++) {
    pageNumbers.push({ id: `page-${i}`, value: i });
  }

  if (endPage.value < props.totalPages) {
    if (endPage.value < props.totalPages - 1) {
      pageNumbers.push({ id: 'next-ellipsis', value: '...' });
    }
    pageNumbers.push({ id: 'last', value: props.totalPages });
  }

  return pageNumbers;
});

const changePage = (pageNumber: { id: string; value: number | string }) => {
  if (pageNumber.id === 'prev-ellipsis') {
    emit('update:modelValue', startPage.value - 1);
  }else if (pageNumber.id === 'next-ellipsis') {
    emit('update:modelValue', endPage.value + 1);
  }else{
    emit('update:modelValue', Number(pageNumber.value))
  }
}

const next = () => emit('update:modelValue', props.page + 1);
const prev = () => emit('update:modelValue', props.page - 1);



</script>

<style scoped lang="scss">
.pagination-step{
  background: snow;
  border: 1px solid rgba(24, 24, 24, 0.19);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.active{
    background: black;
    color: white;
  }
}
</style>
