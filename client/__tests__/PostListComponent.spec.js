import { shallowMount } from '@vue/test-utils';
import PostList from '../src/components/PostListComponent.vue';
import PostTile from '../src/components/PostTileComponent.vue';

jest.mock('axios', () => ({
  delete: (id) => Promise.resolve({
    data: [
      { _id: 1, title: 'blog 1' },
      { _id: 2, title: 'blog 2' }].filter((i) => i !== id),
  }),
}));

describe('PostList component', () => {
  const wrapper = shallowMount(PostList, {
    propsData: {
      items: [],
    },
    mocks: {
      $toasted: {
        error: () => {},
        show: () => {},
      },
    },
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders passed items correctly', async () => {
    wrapper.vm.$options.watch.items.call(wrapper.vm, [
      { _id: 1, title: 'blog 1' },
      { _id: 2, title: 'blog 2' }]);

    wrapper.setProps({
      items: [
        { _id: 1, title: 'blog 1' },
        { _id: 2, title: 'blog 2' }],
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.items.length).toBe(2);
    expect(wrapper.vm.$data.posts.length).toBe(2);
    expect(wrapper.findAllComponents(PostTile).length).toBe(2);
  });

  it('deletes a blog post from the list', async () => {
    wrapper.vm.$root.$emit('deletePost', 2);
    await wrapper.vm.$nextTick();

    expect(wrapper.findAllComponents(PostTile).length).toBe(1);
  });
});
