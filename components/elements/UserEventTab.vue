<template>
  <!--================ Tab Event ==================-->
  <v-card-text class="my-events">
    <!--list wrapper-->
    <div class="title-box">
      <h3>My Tickets</h3>
      <!-- <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
      </a>-->
    </div>
    <div class="list-wrapper">
      <!--news items-->
      <div class="post-card" v-for="post in posts" :key="post.id">
        <nuxt-link :to="'/event/'+ post.id_event ">
          <div
            :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + post.imageURL +')'}"
            class="post-card__thumbnai"
          >
            <div class="overlay"></div>
          </div>
        </nuxt-link>
        <nuxt-link :to="'/event/'+ post.id_event ">
          <div class="post-card__title">{{ post.title }}</div>
        </nuxt-link>
        <p class="post-card__des">{{ post.start_date}} - {{post.start_time}}:00</p>
        <div class="post-card__further mt-3">
          <p class="post-card__category d-inline-block mr-2">{{post.category}}</p>
          <p
            class="post-card__price d-inline-block"
            style="border-color: rgba(255, 77, 0, 0.87); color:#FF4D00;"
          >{{post.status}}</p>
        </div>
      </div>
      <!--news items-->
    </div>
    <!--end list wrapper-->
  </v-card-text>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>
<style >
</style>
