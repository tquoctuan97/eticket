<template>
  <v-toolbar app color="white">
    <v-toolbar-title style="border-right: 0.25px solid #eee; padding-right:20px;">
      <img width="120" src="/logo-eticket.png">
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
    <v-toolbar-items>
      <v-btn flat>For Event Organizer</v-btn>
      <v-btn flat>
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
</style>
