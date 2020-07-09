import { mount } from '@vue/test-utils';
import Button from '../src/components/common/ButtonComponent.vue';

describe('Button component', () => {
  const wrapper = mount(Button);

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correct markup', () => {
    const btn = wrapper.find('button');
    expect(btn.exists()).toBe(true);
  });
});
