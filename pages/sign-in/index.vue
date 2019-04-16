<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <SigninForm/>
    </v-layout>
  </v-container>
</template>

<script>
import SigninForm from "~/components/elements/SigninForm";

export default {
  components: {
    SigninForm
  }
};
</script>

<style>
</style>
