// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import TextInput from "@/ui/components/inputs/TextInput.vue";
import { mount } from "@vue/test-utils";


describe('TextInput Component', ()=>{
  it('renders correctly', ()=>{
    const placeholder: string = 'test placeholder'
    const wrapper = mount(TextInput, {
      props: { placeholder: placeholder, modelValue: 'initial value' },
    });

    expect(wrapper.props('placeholder')).toBe(placeholder)
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
  })

  it('handles input correctly', async ()=>{
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'initial value',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  it('handles error correctly', ()=>{
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'initial value',
        error: 'Error message'
      }
    })

    expect(wrapper.find('span[class="error-text"]').exists()).toBeTruthy()
    expect(wrapper.find('input').classes().includes('error'))
  })

  it('handles disabled state correctly', async ()=>{
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'initial value',
        disabled: true
      }
    })

    await wrapper.find('input').setValue('test')

    expect(wrapper.find('input').classes().includes('disabled'))
    expect(wrapper.props('modelValue')).toBe('initial value')
  })
})
