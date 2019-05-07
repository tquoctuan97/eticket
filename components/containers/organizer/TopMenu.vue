<template>
  <header>
    <v-toolbar class="header" app color="#575BDE">
      <v-toolbar-title style="border-right: 0.25px solid #eee; padding-right:20px;">
        <nuxt-link to="/">
          <img class="organizer-logo" width="120" src="/logo-eticket.png">
        </nuxt-link>
      </v-toolbar-title>
      <div class="logo__title">For Event Organizer</div>
      <v-spacer></v-spacer>
    </v-toolbar>
  </header>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>
<style>
.organizer-logo {
  filter: hue-rotate(-1deg) brightness(100);
}
.logo__title {
  padding-left: 15px;
  text-transform: capitalize;
  color: white;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.5px;
}
</style>
