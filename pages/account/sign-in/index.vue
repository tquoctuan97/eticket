<template>
  <v-container class="signin-wrapper">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-0">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign in</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-snackbar v-model="snackbar_success" absolute top right color="success">
              <span>Welcome back, {{fullname}} !</span>
              <v-icon dark right>check_circle</v-icon>
            </v-snackbar>
            <v-snackbar v-model="snackbar_error" absolute top right color="error">
              <span>{{message}}</span>
              <v-icon dark right>error</v-icon>
            </v-snackbar>
            <v-snackbar v-model="snackbar_warning" absolute top right color="warning">
              <span>{{message}}</span>
              <v-icon dark right>warning</v-icon>
            </v-snackbar>
            <v-form @submit.prevent="onSubmit">
              <v-text-field prepend-icon="email" label="Email" type="email" v-model="username"></v-text-field>
              <v-text-field prepend-icon="lock" label="Password" type="password" v-model="password"></v-text-field>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn flat nuxt to="/account/sign-up">Sign up</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      snackbar_success: "",
      snackbar_error: "",
      snackbar_warning: "",
      fullname: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email);
      this.$axios
        .$post("https://eticket-vhu.herokuapp.com/api/v1/auth/login", {
          username: this.username,
          password: this.password
        })
        .then(result => {
          console.log(result);
          if (result.status_code == "200") {
            this.fullname = result.data.fullname;
            this.snackbar_success = true;
            this.username = "";
            setTimeout(() => {
              // After waiting for five seconds, submit the form.
              this.$router.push("/");
            }, 2000);
          }
          if (
            result.status_code == "401" &&
            result.message == "Invalid login or password."
          ) {
            this.snackbar_error = true;
            this.message = result.message;
          }
          if (
            result.status_code == "401" &&
            result.message ==
              "Account not yet validated. Please check your email."
          ) {
            this.snackbar_warning = true;
            this.message = result.message;
          }
          this.password = "";
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.signin-wrapper{
    
}
</style>
