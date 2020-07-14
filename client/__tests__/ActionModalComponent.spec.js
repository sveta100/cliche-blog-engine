import { mount } from '@vue/test-utils';
import ActionModal from '../src/components/common/ActionModalComponent.vue';

describe('ActionModalComponent', () => {
  const factory = (data) => mount(ActionModal, {
    data() {
      return {
        ...data,
      };
    },
  });

  it('renders correctly when modal is hidden', () => {
    const wrapper = factory();

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.attributes().name).toBe('fade');
    expect(wrapper.find('div').exists()).toBe(false);
  });

  it('shows modal popup on showModal event', async () => {
    const wrapper = factory();
    const cb = jest.fn();

    wrapper.vm.$root.$emit('showModal', cb);
    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should render modal element', async () => {
    const wrapper = factory({ showModal: true });
    expect(wrapper.find('div').classes()).toContain('popup');
  });


  describe('Modal is shown', () => {
    const cb = jest.fn();
    const wrapper = factory({
      showModal: true,
      confirmHandler: cb,
    });

    const buttons = wrapper.findAllComponents({ name: 'primary-button' });

    it('calls cb function and hides modal when confirm button clicked', async () => {
      const yesBtn = buttons.at(0);
      await yesBtn.trigger('click');

      expect(yesBtn.text()).toBe('Yes');
      expect(wrapper.find('div').exists()).toBe(false);
    });

    it('hides modal when cancel btn is clicked', async () => {
      const noBtn = buttons.at(1);
      await noBtn.trigger('click');

      expect(noBtn.text()).toBe('No');
      expect(wrapper.find('div').exists()).toBe(false);
    });
  });
});
