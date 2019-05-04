<template>
  <div class="list-wrapper center">
    <!--news items-->
    <div class="post-card" v-for="post in posts" :key="post.id">
      <nuxt-link :to="'/event/'+ post.id ">
        <div
          :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + post.imageURL +')'}"
          class="post-card__thumbnai"
        >
          <div class="post-read-more">Read More</div>
          <div class="overlay"></div>
        </div>
      </nuxt-link>
      <nuxt-link :to="'/event/'+ post.id ">
        <div class="post-card__title">{{ post.title }}</div>
      </nuxt-link>
      <p class="post-card__des">{{ post.start_date}} - {{post.start_time}}:00</p>
      <div class="post-card__further mt-3">
        <p class="post-card__category d-inline-block mr-2">{{post.category}}</p>
        <p
          class="post-card__price d-inline-block"
          style="border-color: rgba(255, 77, 0, 0.87); color:#FF4D00;"
        >From {{post.tickettype.data[0].price}}</p>
      </div>
    </div>
    <!--news items-->
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.posts);
  }
};
</script>

<style>
</style>
