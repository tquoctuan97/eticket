<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center column>
        <v-card align-center justify-center max-width="500" class="pa-5">
          <v-card-title primary-title>
            <h1 class="headline" style="color: green;">Successful account activation</h1>
          </v-card-title>
          <v-card-text>
            <p>You will go to the login page after 5s</p>
          </v-card-text>
          <v-layout align-center justify-center>
            <v-card-actions>
              <v-btn color="green" dark depressed>Sign In now</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style scoped>
.box-info {
  border: 1px solid gray;
}
</style>
