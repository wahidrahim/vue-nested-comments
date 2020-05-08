import { shallowMount } from '@vue/test-utils';

import Badge from '@/components/Badge';

describe('Badge.vue', () => {
  it('shows text in default slot', () => {
    const badgeText = 'author';
    const wrapper = shallowMount(Badge, {
      slots: {
        default: badgeText,
      },
    });

    expect(wrapper.find('.badge').text()).toMatch(badgeText);
  });

  it('has a class provided through variant prop', () => {
    const variant = 'dark';
    const wrapper = shallowMount(Badge, {
      propsData: {
        variant,
      },
    });

    expect(wrapper.find(`.badge.${variant}`).element).toBeTruthy();
  });
});
