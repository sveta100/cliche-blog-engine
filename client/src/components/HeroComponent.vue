<template>
  <section class="hero-wrapper">
    <div
      v-if="this.$route.path === '/'"
      class="hero-wrapper hero-wrapper__content"
    >
      <h1 id="mainTitle">
        In Wonderland of Programming
      </h1>
      <div class="hero_wrapper hero-wrapper__hero" />
      <div class="hero-wrapper__decor-container" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'Hero',
};
</script>
<style lang="scss">
#mainTitle {
  font-size: 6rem;
  font-weight: 600;
  padding: 0 5rem 0 10rem;
  text-align: left;
  color: #2f2e41;
  font-family: 'Heebo', sans-serif;
}

.hero-wrapper {
  background: white;
  min-height: 450px;
  width: 100%;
  padding: 5rem 0;

  &__decor-container {
    width: 550px;
    height: 400px;
    position: absolute;
    border-radius: 50%;
    left: -275px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $violet;
    opacity: 0.1;
  }

  &__content {
    width: 100%;
    display: flex;
    padding: 5rem;
    margin-top: 5rem;
    align-items: center;
    position: relative;
  }

  &__hero {
    background-image: url('../assets/images/undraw_proud_coder_7ain.svg');
    height: 400px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    width: 100%;
    transform: rotate(5deg);
  }
}
</style>
