import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GPagination from "@/ui/components/custom/GPagination.vue";

const paginationProps = {
  page: 1,
  limit: 10,
  currentPageItems: 0,
  previousPage: false,
  nextPage: false,
  totalItems:0,
  totalPages: 0
}

describe('GPagination', () => {
  it.todo('renders correctly', () => {
    const wrapper = mount(GPagination,{
      props:{ ...paginationProps, modelValue: 0 }
    })
  })
})
