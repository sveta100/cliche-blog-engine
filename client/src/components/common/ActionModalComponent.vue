<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="popup"
    >
      <div class="popup__content">
        <h2 class="margin-top">
          Are you sure?
        </h2>
        <div class="popup__actions">
          <primary-button
            :name="'Yes'"
            @click="confirm()"
          />
          <primary-button
            :name="'No'"
            @click="cancel()"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PrimaryButton from './ButtonComponent.vue';

export default {
  name: 'CoolModal',
  components: {
    PrimaryButton,
  },
  data() {
    return {
      showModal: false,
      confirmHandler: {},
    };
  },
  created() {
    this.$root.$on('showModal', (cb) => {
      this.showModal = true;
      this.confirmHandler = cb;
    });
  },
  methods: {
    cancel() {
      this.showModal = false;
    },
    confirm() {
      this.showModal = false;
      this.confirmHandler();
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(black, 0.5);
  transition: all 0.5s ease-in-out;

  &__content {
    position: absolute;
    background: white;
    border-radius: 5px;
    border: 1px solid white;
    width: 50%;
    height: 20rem;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__actions {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
