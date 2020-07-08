import { mount } from '@vue/test-utils';
import Button from '../components/common/ButtonComponent.vue';

describe('Button component', () => {
  const wrapper = mount(Button);

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correct markup', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
});
