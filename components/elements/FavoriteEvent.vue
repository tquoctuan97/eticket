<template>
        <!--================ Tab Event ==================-->
          <v-card-text  class="my-favorites">
                      <!--list wrapper-->
      <div class="title-box">
        <h3>Favorite Event List</h3>
        <!-- <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a> -->
      </div>
      <div class="list-wrapper">
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
      <!--end list wrapper-->
          </v-card-text>
</template>

<script>
export default {
    data (){
        return{
            posts:'',
        }
    },
    methods:{

    }
}
</script>
<style >

</style>
