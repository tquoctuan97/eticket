<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout style="background-color:white; padding:30px 20px 0px 20px;">
        <v-flex xs12 md4>
          <v-text-field label="Search Event" light clearable style="margin:0; padding:0;"></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-select
            :items="items"
            label="Event Category"
            style="margin:0; padding:0;"
            placeholder="All Event"
          ></v-select>
        </v-flex>
        <v-flex xs12 md4>
          <v-select
            :items="items"
            label="Upcomming"
            style="margin:0; padding:0;"
            placeholder="On Any Date"
          ></v-select>
        </v-flex>
        <v-flex style="margin:0; padding:0;">
          <v-btn
            large
            depressed
            color="mycolor"
            style="margin:0; padding:0;"
            dark
            @click="onSubmitSearch"
          >
            <v-icon>search</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    posts: ""
  }),
  async asyncData() {
    const { data } = await axios.get(
      "https://eticket-vhu.herokuapp.com/api/v1/eticket/get-event?limit=3&page=1"
    );
    return { posts: data.data };
  },
  methods: {
    onSubmitSearch() {
      console.log(this.posts);
    }
  }
};
</script>

<style>
.v-text-field--outline > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>
