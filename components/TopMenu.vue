<template>
  <v-toolbar app color="white">
    <v-toolbar-title>
      <img width="120" src="/logo-eticket.png">
    </v-toolbar-title>
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on">
          <span>All</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
      </template>

      <v-list>
        <v-list-tile v-for="item in items" :key="item" @click>
          <v-list-tile-title v-text="item"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>For Event Organizer</v-btn>
      <v-btn flat>Sign In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: ["All", "Family", "Friends", "Coworkers"]
  })
};
</script>

<style>
</style>
