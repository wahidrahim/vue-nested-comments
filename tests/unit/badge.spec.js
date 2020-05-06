import { shallowMount } from '@vue/test-utils';
import Badge from '@/components/Badge';

describe('Avatar.vue', () => {
  it('has a background image', () => {
    const badgeText = 'author';
    const wrapper = shallowMount(Badge, {
      slots: {
        default: badgeText,
      },
    });

    expect(wrapper.find('.badge').text()).toMatch(badgeText);
  });
});
