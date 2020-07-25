import { shallowMount } from '@vue/test-utils';
import Hero from '../src/components/HeroComponent.vue';

describe('Hero component', () => {
  const $route = {
    path: '/',
  };

  const heroFactory = (router) => shallowMount(Hero, {
    mocks: {
      $route: router,
    },
  });

  test('renders correctly', () => {
    const wrapper = heroFactory($route);
    expect(wrapper.html()).toMatchSnapshot();
    const heroWrapper = wrapper.find('.hero-wrapper');
    expect(heroWrapper.exists()).toBe(true);
  });

  test('renders correct markup', () => {
    const wrapper = heroFactory($route);
    const mainTitle = wrapper.find('#mainTitle');

    expect(mainTitle.exists()).toBe(true);
  });

  test('does not show hero image if not on the main page', () => {
    const wrapper = heroFactory({
      path: '/about',
    });

    const mainTitle = wrapper.find('#main-title');
    const heroImage = wrapper.find('.hero');
    expect(mainTitle.exists()).toBe(false);
    expect(heroImage.exists()).toBe(false);
  });
});
