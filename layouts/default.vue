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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: gray;
}
body {
  font-family: "Roboto", sans-serif;
}

.box-shadow {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
}

.header {
  box-shadow: inset 0px -1px 0px 0 rgba(0, 0, 0, 0.1);
}
</style>
