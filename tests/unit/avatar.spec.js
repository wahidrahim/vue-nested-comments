import { shallowMount } from '@vue/test-utils';
import Avatar from '@/components/Avatar';

describe('Avatar.vue', () => {
  it('has a background image', () => {
    const avatarUrl = '/images/me.jpg';
    const wrapper = shallowMount(Avatar, {
      propsData: { url: avatarUrl },
    });

    expect(wrapper.find('.avatar').element.style.backgroundImage).toMatch(
      `url(${avatarUrl})`
    );
  });
});
