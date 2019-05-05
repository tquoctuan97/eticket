<template>
  <div class="tab-wrapper">
    <div class="v-card theme--light elevation-1 tab-navs">
      <div
        :class="tabActive == 'myinfo' ? 'tab-link-item active' : 'tab-link-item'"
        @click="tabActive = 'myinfo'"
      >My Information</div>
      <div
        :class="tabActive == 'mytickets' ? 'tab-link-item active' : 'tab-link-item'"
        @click="tabActive = 'mytickets'"
      >My Tickets</div>
      <div
        :class="tabActive == 'favevent' ? 'tab-link-item active' : 'tab-link-item'"
        @click="tabActive = 'favevent'"
      >My Favorite Events</div>
    </div>
    <div class="v-card theme--light elevation-1 tab-content">
      <UserInfoTab v-if="tabActive=='myinfo'" :infoUser="infoUser" :profileUser="profileUser"/>
      <UserEventTab v-if="tabActive=='mytickets'" :posts="eventTicket"/>
      <FavoriteEvent v-if="tabActive=='favevent'"/>
    </div>
  </div>
</template>

<script>
import UserInfoTab from "../../../components/elements/UserInfoTab.vue";
import UserEventTab from "../../../components/elements/UserEventTab.vue";
import FavoriteEvent from "../../../components/elements/FavoriteEvent.vue";
import axios from "axios";

export default {
  components: {
    UserInfoTab,
    UserEventTab,
    FavoriteEvent
  },
  data() {
    return {
      tabActive: "myinfo",
      active: ""
    };
  },
  async asyncData({ query, error }) {
    let [
      resProfileUser,
      resEventTicket
      // resUpcommingEvents,
      // resFreeEvents,
      // resGetCategories
    ] = await Promise.all([
      axios.get(
        "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-profile",
        {
          headers: {
            Authorization: "bd627587-9438-4ea4-a680-1a2581bb13db"
          }
        }
      ),
      axios.get(
        "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-my-ticket?limit=10&page=1",
        {
          headers: {
            Authorization: "bd627587-9438-4ea4-a680-1a2581bb13db"
          }
        }
      )
      // axios.get(
      //   "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-in-week?limit=6&page=1"
      // ),
      // axios.get(
      //   "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event-free?limit=6&page=1"
      // )
    ]);
    return {
      profileUser: resProfileUser.data.data,
      eventTicket: resEventTicket.data.data
      // upcommingEvents: resUpcommingEvents.data.data,
      // freeEvents: resFreeEvents.data.data
    };
  },
  head() {
    return {
      title: "My Account"
    };
  },
  computed: {
    infoUser() {
      if (this.$store.getters.loadedUser) {
        let infoUser = this.$store.getters.loadedUser;
        return infoUser;
      }
    }
  }
};
</script>
<style scoped>
.tab-wrapper {
  margin-top: 75px;
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}
.tab-navs {
  max-width: 330px;
  width: 25%;
  margin: 15px;
  padding: 15px;
}
.tab-link-item {
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  /* background-color: #ebebeb; */
  transition: 0.2s all ease-in-out;
}
.tab-link-item:not(:last-child) {
  margin-bottom: 15px;
}
.tab-link-item.active,
.tab-link-item:hover {
  border-right: 10px rgb(255, 77, 0) solid;
}
.tab-content {
  width: 75%;
  padding: 15px;
  margin: 15px;
  min-height: calc(100vh - 191px);
}
@media screen and (max-width: 768px) {
  .tab-wrapper {
    flex-wrap: wrap;
  }
  .tab-navs {
    max-width: 100%;
    width: 100%;
  }
  .tab-content {
    width: 100%;
  }
}
</style>
