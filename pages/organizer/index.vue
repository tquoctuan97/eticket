<template>
    <div class="organizer-login-wrapper">
        <SignInForm v-if="formActive=='signin'" v-bind:formActive="ForgotPass" class="organizer-signin-form"/>
        <SignUpForm v-if="formActive=='signup'" class="organizer-signup-form"/>
        <ForgotPass v-if="formActive=='forgot'"/>
        <v-card-actions v-if="formActive=='signin'" class="organizer-sign-up__section">
            <div>Didn't have an account?</div>
            <a color="#575BDE" @click="formActive='signup'">Sign up</a>
        </v-card-actions>
        <v-card-actions v-if="formActive=='signup' || formActive=='forgot'" class="organizer-sign-up__section">
            <div>Already have an account?</div>
            <a color="#575BDE" @click="formActive='signin'">Sign in</a>
        </v-card-actions>
    </div>
</template>

<script>
import SignInForm from "@/components/containers/organizer/SignInForm.vue";
import SignUpForm from "@/components/containers/organizer/SignUpForm.vue";
import ForgotPass from "@/components/containers/organizer/ForgotPass.vue";
import axios from "axios";
export default {
    layout: 'organizer',
  components: {
    SignInForm,
    SignUpForm,
    ForgotPass
  },
  data(){
      return{
          formActive: 'signin',
      }
  },
  head() {
    return {
      title: "Home"
    };
  },
  methods : {
      ForgotPass(){
          this.formActive='forgot';
      }
  }
};
</script>
<style>
.organizer-signin-form,
.organizer-signup-form{
    margin-top: 25px;
}
.organizer-sign-up__section{
    display: flex;
    justify-content: center;    
    padding: 15px 5px;
    margin-top: 20px;
}
.organizer-sign-up__section a{
    color: #575BDE;
    margin-left: 5px;
}
</style>
