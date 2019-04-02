<template>
  <div class="post-single">
    <div class="post-single__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="post-single__content">
      <p>{{ description }}</p>
      <img src="/img-2.jpg" alt>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";

export default {
  validate({ params }) {
    return !isNaN(+params.url);
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${+params.url}`
      );
      return data.articles;
    } catch (e) {
      error({ message: "User not found", statusCode: 404 });
    }
  }
};
</script>
 
<style>
.post-single__title {
  width: 100%;
  float: left;
  margin: 30px 30px 0px 30px;
}
.post-single__title h1 {
  font-size: 32px;
}
.post-single__content {
  width: 100%;
  float: left;
  margin: 0 30px 30px 30px;
  line-height: 22px;
}
</style>