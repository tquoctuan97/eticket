<template>
  <v-app>
    <!--Main content-->
    <v-content class="main-content">
      <Hero/>
      <!--list wrapper-->
      <div class="title-box center">
        <h3>Popular Events</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
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
      <!--end list wrapper-->
      <!--list wrapper-->
      <div class="title-box center">
        <h3>Upcomming in week</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
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
      <!--end list wrapper-->
      <!--list wrapper-->
      <div class="title-box center">
        <h3>Free Entry</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
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
      <!--end list wrapper-->
      <EventCategory/>
    </v-content>
    <!--End main content-->
  </v-app>
</template>

<script>
import Hero from "@/components/containers/Hero";
import EventCategory from "@/components/containers/EventCategory.vue";
import axios from "axios";
export default {
  components: {
    Hero,
    EventCategory
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=3&page=1"
    );
    return { posts: data.data };
  },
  head() {
    return {
      title: "Home"
    };
  }
};
</script>

<style>
.main-content {
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
.center {
  width: 1440px;
  margin: 0 auto;
}
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin-top: 40px;
}

.title-box h3 {
  font-size: 32px;
}

.box-see-more {
  font-size: 17px;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.list-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.post-card {
  width: calc(31%);
  margin: auto;
  height: auto;
  border: 1px solid rgba(#000, 0.08);
  padding: 15px;
  margin: 1%;
  background: #fff;
  overflow: hidden;
}
.post-card:hover {
  transition: 0.3s all ease-in-out;
  background: #ffffff;
  -webkit-box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  border-radius: 9px;
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
  height: 200px;
  position: relative;
  border-radius: 5px;
}
.post-card__title {
  font-size: 20px;
  height: 60px;
  width: 100%;
  float: left;
  margin: 30px 0 10px 0;
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
.post-card__further p {
  border: 0.5px solid rgba(112, 112, 112, 0.5);
  border-radius: 3px;
  font-size: 12px;
  padding: 4px 8px;
  user-select: none;
  cursor: pointer;
}

/* Event Category */
.category_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.category_item p {
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;
}
.image-items {
  width: 100px;
  height: auto;
  object-fit: cover;
}

@media (max-width: 768px) {
  .post-card {
    width: calc(100%);
    margin: 10px;
  }
}
</style>