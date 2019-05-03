<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center column>
        <v-card align-center justify-center max-width="500" class="pa-5 elevation-1">
          <v-layout align-center justify-center>
            <v-card-title primary-title>
              <h3 class="headline" style="color: green;">Successful account activation</h3>
              <p class="subheading">Thank you for registering eticket account.</p>
            </v-card-title>
          </v-layout>
          <v-layout align-center justify-center>
            <v-card-actions>
              <v-btn color="green" dark nuxt to="/account/sign-in">Sign In now</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      setTimeCountDown: 5
    };
  },
  computed: {
    countdown() {
      if (this.setTimeCountDown > 0) {
        var time;
        return (time = setInterval(this.setTimeCountDown - 1, 1000));
      }
    }
  }
};
</script>

<style scoped>
.box-info {
  border: 1px solid gray;
}
</style>
