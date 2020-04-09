<template>
  <div class="fl-continer">
    <div class="fl-row">
      <div class="fl-row__col-10">
        <PostList :posts="posts" />
      </div>
      <div class="fl-row__col-2">
        <img
          class="portrait"
          src="../assets/images/portrait.jpg"
        >
        <div class="tags">
          <h4>Categories</h4>
          <ul class="tags__list">
            <li class="tags__tag">
              <p class="tags__content">
                C#
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                JS
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                NodeJs
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                React
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                VueJs
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                DevOps
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                .Net
              </p>
            </li>
            <li class="tags__tag">
              <p class="tags__content">
                Sass
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from '../../services/PostService';
import PostList from '../components/PostListComponent.vue';

export default {
	name: 'Home',
	components: {
		PostList,
	},
	data() {
		return {
			posts: [],
		};
	},
	created() {
		this.init();
	},
	methods: {
		async init() {
			PostService.getPublishedPosts().then((posts) => {
				console.log(this);
				this.$set(this, 'posts', posts);
			});
		},
	},
};
</script>
<style lang="scss">
.home-container {
  display: flex;
  justify-content: flex-end;

  &__left {
    width: 50%;
  }

  &__right {
    max-width: 23%;
    padding: 0 1rem;
  }
}

.portrait {
  border-radius: 50%;
  max-width: 100px;
}

.tags {
  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  &__tag {
    margin: 5px;
    background: $tertiary;
    color: white;
  }

  &__content {
    padding: 5px 8px;
    margin: 0;
  }
}
</style>
