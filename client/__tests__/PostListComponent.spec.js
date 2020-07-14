import { shallowMount } from '@vue/test-utils';
import PostList from '../src/components/PostListComponent.vue';

jest.mock('axios');

describe('PostList component', () => {
  const wrapper = shallowMount(PostList, {
    propsData: {
      items: [
        { _id: 1, title: 'blog 1' },
        { _id: 2, title: 'blog 2' },
      ],
    },
  });

  wrapper.setData({
    posts: [
      { _id: 1, title: 'blog 1' },
      { _id: 2, title: 'blog 2' },
    ],
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('deletes a blog post from the list', () => {
    wrapper.vm.deletePostFromList(2);
    expect(wrapper.vm.$data.posts.length).toBe(1);
    expect(wrapper.vm.$data.posts[0].title).toEqual('blog 1');
  });
});
