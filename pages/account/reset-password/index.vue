<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-1">
          <v-toolbar dark flat color="mycolor">
            <v-toolbar-title>Reset Password</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="onSubmit">
              <v-text-field
                color="mycolor"
                prepend-icon="email"
                label="Email"
                type="email"
                v-model="email"
              ></v-text-field>
              <v-btn color="mycolor" dark type="submit">Submit</v-btn>
            </v-form>
          </v-card-text>

          <!-- <v-card-actions>
            <v-btn flat nuxt to="/account/sign-up">Sign up</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>-->
        </v-card>
        <v-card-actions class="sign-up__section">
          <nuxt-link color="mycolor" to="/account/sign-in">Back to Sign in</nuxt-link>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email);
      this.$axios
        .$post("https://eticket-vhu.herokuapp.com/api/v1/auth/reset-password", {
          email: this.email
        })
        .then(result => {
          console.log(result);
        })
        .catch(e => {
          console.log(e);
        });
      this.email = "";
    }
  }
};
</script>

<style>
</style>
