<template>
  <div class="card">
    <div class="left-header">
      <h2 id="post-title">{{ post.title }}</h2>
      <p id="post-date-header"><date-format :rawDate="post.createdAt" /></p>
    </div>
    <div class="container">
      <img id="card-img" alt="img" />
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>
<script>
import DateFormat from "./DateFormatComponent";
export default {
  name: "PostTile",
  props: ["post"],
  components: {
    DateFormat
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: 10px;
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
