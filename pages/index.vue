<template>
  <v-app>
    <TopMenu/>
    <!--Main content-->
    <v-content class="main-content">
      <!--list wrapper-->
      <Hero/>
      <div class="title-box center">
        <h3>Popular Events</h3>
        <a href="#">See more</a>
      </div>
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
      <!--end list wrapper-->
    </v-content>
    <!--End main content-->
    <Footer/>
  </v-app>
</template>

<script>
import TopMenu from "@/components/containers/TopMenu";
import Footer from "@/components/containers/Footer";
import Hero from "@/components/containers/Hero";
import axios from "axios";
export default {
  components: {
    TopMenu,
    Hero,
    Footer
  },

  data() {
    return {
      urlAddress: "https://eticket-vhu.herokuapp.com"
    };
  },

  async asyncData() {
    const { data } = await axios.get(
      "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=4&page=1"
    );
    return { posts: data.data };
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: gray;
}
body {
  font-family: "Roboto", sans-serif;
}
.center {
  width: 1440px;
  margin: 0 auto;
}
.main-content {
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
}

.title-box h3 {
  font-size: 32px;
}
.list-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.post-card {
  width: calc(23%);
  margin: auto;
  height: auto;
  border: 1px solid rgba(#000, 0.08);
  padding: 15px;
  margin: 1%;
  background: #fff;
  overflow: hidden;
}
.post-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.post-card__thumbnai {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;
  position: relative;
}
.post-card__title {
  font-size: 20px;
  width: 100%;
  float: left;
  margin: 30px 0 20px 0;
  color: #000;
}
.post-card__time {
  position: absolute;
  width: 250px;
  height: 55px;
  line-height: 55px;
  background: #fff;
  text-align: center;
  bottom: -25px;
  left: 10px;
  z-index: 100;
  color: #000;
  font-size: 13px;
}
.post-card__des {
  margin: 10px 0;
  color: rgba(#000, 0.5);
  font-size: 13px;
  text-decoration: none;
}
.post-read-more {
  display: table-cell;
  vertical-align: middle;
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  transform-origin: 0;
  position: absolute;
  top: -50px;
  right: 0;
  z-index: 99;
}
.post-read-more::after {
  position: absolute;
  top: 10px;
  left: -40px;
  content: "";
  background: #fff;
  width: 30px;
  height: 1px;
}
.post-card__thumbnai:hover .post-read-more {
  top: 150px;
  transition: all ease-in 0.3s;
}

@media (max-width: 768px) {
  .post-card {
    width: calc(100%);
    margin: 10px;
  }
}
</style>