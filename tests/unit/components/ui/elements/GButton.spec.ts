import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GButton from "@/ui/components/elements/GButton.vue";

const buttonTitle: string = 'title'
describe('GButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(GButton, {
      slots: { default: buttonTitle }
    })

    expect(wrapper.html()).toContain(buttonTitle)
  })

  it('shows loading indicator when loading', () => {
    const wrapper = mount(GButton, {
      props: { submitting: true }
    });
    expect(wrapper.html()).toContain('Loading...');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(GButton)
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(GButton, {
      props: { disabled: true }
    })
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('does not emit click event when submitting', async () => {
    const wrapper = mount(GButton, {
      props: { submitting: true }
    });
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });
})
