<template>
  <v-app>
    <TopMenu/>
    <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
import TopMenu from "@/components/containers/TopMenu.vue";
import Footer from "@/components/containers/Footer.vue";
export default {
  components: {
    TopMenu,
    Footer
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
</style>
