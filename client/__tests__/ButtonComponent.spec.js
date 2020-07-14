import { mount } from '@vue/test-utils';
import Button from '../src/components/common/ButtonComponent.vue';

describe('Button component', () => {
  const onClick = jest.fn();
  const wrapper = mount(Button, {
    listeners: {
      click: onClick,
    },
  });

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correct markup', () => {
    const btn = wrapper.find('button');
    expect(btn.exists()).toBe(true);
  });

  test('once clicked an event is emitted', () => {
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
