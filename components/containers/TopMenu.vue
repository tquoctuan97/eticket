<template>
  <v-toolbar app color="white" style="z-index:999">
    <v-toolbar-title style="border-right: 0.25px solid #eee; padding-right:20px;">
      <a href="/">
        <img width="120" src="/logo-eticket.png">
      </a>
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
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>For Event Organizer</v-btn>
      <v-btn flat href="/sign-in">
        Sign In
        <v-icon right>account_circle</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
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

<style>
.v-toolbar__content {
  font-family: "Roboto", sans-serif;
}
</style>
