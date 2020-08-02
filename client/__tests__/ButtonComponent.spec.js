import { mount } from '@vue/test-utils';
import Button from '../src/components/common/ButtonComponent.vue';

describe('Button component', () => {
  const wrapper = mount(Button);

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders correct markup', () => {
    const btn = wrapper.find('button');
    expect(btn.exists()).toBe(true);
  });

  test('once clicked an event is emitted', async () => {
    const btn = wrapper.find('button');
    await btn.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
