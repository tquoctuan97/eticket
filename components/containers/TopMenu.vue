<template>
  <header>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>-->
      <v-toolbar-title>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign in</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-toolbar-title>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in links" :key="item.title" :href="item.linkTo">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title style="border-right: 0.25px solid #eee; padding-right:20px;">
        <nuxt-link to="/">
          <img width="120" src="/logo-eticket.png">
        </nuxt-link>
      </v-toolbar-title>
      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <v-icon>location_on</v-icon>
            <span>{{place}}</span>
            <v-icon>arrow_drop_down</v-icon>
          </v-toolbar-title>
        </template>

        <v-list>
          <v-list-tile v-on:click="placeHCM">
            <v-list-tile-title>Ho Chi Minh</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-on:click="placeHN">
            <v-list-tile-title>Ha Noi</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-on:click="placeDN">
            <v-list-tile-title>Da Nang</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat to="/organizer">For Event Organizer</v-btn>
        <v-btn flat to="/account/sign-in" nuxt>
          Sign In
          <v-icon right>account_circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { title: "Home", icon: "dashboard", linkTo: "/" },
      { title: "About", icon: "question_answer", linkTo: "/sign-in" }
    ],
    place: "Ho Chi Minh",
    items: [
      { place: "Ho Chi Minh", callback: () => console.log("HCM") },
      { place: "Ha Noi", callback: () => console.log("HN") },
      { place: "Da Nang", callback: () => console.log("DN") }
    ]
  }),
  methods: {
    placeHCM: function(event) {
      this.place = "Ho Chi Minh";
    },
    placeHN: function(event) {
      this.place = "Ha Noi";
    },
    placeDN: function(event) {
      this.place = "Da Nang";
    }
  }
};
</script>

<style scoped>
.v-toolbar__content {
  font-family: "Roboto", sans-serif;
  width: 1440px !important;
  margin: 0 auto !important;
}
</style>
