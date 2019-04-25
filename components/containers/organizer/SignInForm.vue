<template>
    <div class="organizer--singin">
        <v-card class="elevation-3">
          <v-toolbar color="#575BDE" dark>
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
              <v-text-field
                color="#575BDE"
                prepend-icon="email"
                label="Email"
                type="email"
                v-model="username"
                required
              ></v-text-field>
              <v-text-field
                color="#575BDE"
                prepend-icon="lock"
                label="Password"
                type="password"
                v-model="password"
                required
              ></v-text-field>
              <v-card-actions class="sign-in__section">
                <v-btn color="#575BDE" dark type="submit">Login</v-btn>
                <v-btn flat color="#575BDE" light nuxt @click="formActive">Forgot password?</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>

    </div>
</template>

<script>
import axios from "axios";
export default {
    props:['formActive'],
  data() {
    return {
        // formActive:'',
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
        console.log(this.props.formActive)
      console.log(this.email);
      this.$axios
        .$post("https://eticket-vhu.herokuapp.com/api/v1/auth/login", {
          username: this.username,
          password: this.password,
          device_type: "CLIENT_WEB"
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
  display: flex;
  align-self: center;
  justify-content: center;
}
.signin-wrapper .btn-group{
  display: flex;
  justify-content: space-between;
}
.sign-up__section{
  margin-top: 25px;
  padding-top: 10px;
  position: relative;
  justify-content: center;
}

.sign-in__section{
  justify-content: space-between;
  align-items: baseline;

  display: flex;
}
.sign-in__section a,
.sign-up__section a{
  transition: 0.3s all ease-in-out;
  color: #575BDE ;
  margin-left: 15px;
}
.sign-in__section a:hover,
.sign-up__section a:hover{
  color: black;
}
.sign-up__section::before{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  /* background-color: #ebebeb; */
  height: 1px;
  width: 80%;
  transform: translateX(-50%);
}
.sign-up__section >div{
  margin: 10px 0;
}
</style>
