<template>
  <div class="card">
    <div class="left-header">
      <h2 id="post-title">{{ post.title }}</h2>
      <p id="post-date-header"><date-format :rawDate="post.createdAt" /></p>
    </div>
    <div class="container">
      <img id="card-img" alt="img" />
      <p class="card__content" v-html="compiledMarkdown"></p>
    </div>
  </div>
</template>
<script>
import DateFormat from "./DateFormatComponent";
import marked from "marked";

export default {
  name: "PostTile",
  props: ["post"],
  computed: {
    compiledMarkdown: function() {
      return marked(this.post.content, { sanitize: true });
    }
  },
  components: {
    DateFormat
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.left-header {
  float: left;
  clear: both;
  margin: 10px 5px 30px 5px;
}

#card-img {
  width: 100%;
  height: 30%;
  clear: both;
}

#post-title {
  margin: 0px 5px;
}

#post-date-header {
  margin: 0px 5px;
  float: left;
}

.container {
  padding: 2px 16px;
  clear: both;
  float: left;
  width: 100%;
  text-align: start;
}
</style>
