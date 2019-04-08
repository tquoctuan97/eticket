<template>
  <v-app>
    <TopMenu/>
    <div class="hero-img"></div>
    <div>
      <div>
        <div class="list-wrapper center">
          <!--news items-->
          <div class="post-card" v-for="post in posts" :key="post.id">
            <nuxt-link :to="'/'+ post.id ">
              <div
                :style="{backgroundImage: 'url(https://eticket-vhu.herokuapp.com' + post.imageURL +')'}"
                class="post-card__thumbnai"
              >
                <div class="post-read-more">Read More</div>
                <div class="overlay"></div>
              </div>
            </nuxt-link>
            <nuxt-link :to="'/'+ post.id ">
              <div class="post-card__title">{{ post.title }}</div>
            </nuxt-link>
            <p class="post-card__des">{{ post.created_at.date }}</p>
          </div>
          <!--news items-->
        </div>
      </div>
    </div>

    <Footer/>
  </v-app>
</template>
 
<script>
import TopMenu from "@/components/containers/TopMenu";
import Footer from "@/components/containers/Footer";
import axios from "axios";

export default {
  components: {
    TopMenu,
    Footer
  },
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-by-id?event_id=${+params.id}`
      );
      return { posts: data.data };
    } catch (e) {
      error({ message: "Không tìm thấy event", statusCode: 404 });
    }
  }
};
</script>
 
<style scoped>
.hero-img {
  background-image: url("https://tkbvn-tokyo.s3.amazonaws.com/Upload/eventcover/2019/03/27/8D4F1E.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid #ccc;
  position: relative;
  height: 798px;
}
/* .post-single__title {
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
} */
</style>