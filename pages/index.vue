<template>
  <v-app>
    <v-content class="main-content">
      <Hero/>
      <div class="title-box center">
        <h3 class="headline">Lastest Event</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
      <EventCard :posts="lastedEvents"/>
      <!--end list wrapper-->
      <!--list wrapper-->
      <div class="title-box center">
        <h3 class="headline">Upcomming in week</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
      <EventCard :posts="upcommingEvents"/>

      <!--end list wrapper-->
      <!--list wrapper-->
      <div class="title-box center">
        <h3 class="headline">Free Entry</h3>
        <a class="box-see-more" href="#">
          <span>See more</span>
          <v-icon>navigate_next</v-icon>
        </a>
      </div>
      <EventCard :posts="freeEvents"/>

      <EventCategory/>
    </v-content>
  </v-app>
</template>

<script>
import Hero from "@/components/containers/Hero";
import EventCategory from "@/components/containers/EventCategory.vue";
import EventCard from "@/components/elements/EventCard.vue";
import axios from "axios";
export default {
  components: {
    Hero,
    EventCategory,
    EventCard
  },
  async asyncData({ query, error }) {
    let [
      resLastedEvents,
      resUpcommingEvents,
      resFreeEvents,
      resGetCategories
    ] = await Promise.all([
      axios.get(
        "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=6&page=1"
      ),
      axios.get(
        "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-in-week?limit=6&page=1"
      ),
      axios.get(
        "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-free?limit=6&page=1"
      )
    ]);
    return {
      lastedEvents: resLastedEvents.data.data,
      upcommingEvents: resUpcommingEvents.data.data,
      freeEvents: resFreeEvents.data.data
    };
  },
  head() {
    return {
      title: "Home"
    };
  }
};
</script>
<style scoped>
.title-box {
  margin-top: 40px;
}
</style>

<style>
.main-content {
  width: 100%;
  min-height: 100vh;
  background: #f4f4f3;
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
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  -moz-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
@media (max-width: 1440px) {
  .center {
    width: 100vw;
    overflow-x: hidden;
  }
}
@media (max-width: 768px) {
  .post-card {
    width: calc(100%);
    margin: 10px;
  }
}
</style> 