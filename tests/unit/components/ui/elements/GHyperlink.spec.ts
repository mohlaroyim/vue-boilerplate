import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GHyperlink from "@/ui/components/elements/GHyperlink.vue";

const linkText: string = 'title'
const linkHref: string = 'https://google.com/'
const defaultHyperlinkProps = {
  href: linkHref
}

describe('GHyperlink', () => {
  it('renders correctly', () => {
    const wrapper = mount(GHyperlink, {
      props: defaultHyperlinkProps,
      slots: { default: linkText }
    })

    expect(wrapper.html()).toContain(linkText)
    expect(wrapper.attributes('href')).toBe(linkHref);
  })

  it('opens in new tab with correct rel when target="_blank"', () => {
    const wrapper = mount(GHyperlink, {
      props: { href: linkHref, target: '_blank' },
    });

    expect(wrapper.attributes('target')).toBe('_blank');
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(GHyperlink, {
      props: defaultHyperlinkProps,
    })
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(GHyperlink, {
      props: { ...defaultHyperlinkProps, disabled: true },
    })
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
    expect(wrapper.attributes('href')).toBeUndefined();
  });
})
