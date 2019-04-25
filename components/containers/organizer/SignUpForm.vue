<template>
    <div class="organizer--singup">
        <v-card flat class="elevation-3">
          <v-toolbar color="#575BDE" dark>
            <v-toolbar-title>Sign up</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-snackbar v-model="snackbar" absolute top right color="success">
            <span>Registration successful! Please check your email</span>
            <v-icon dark>check_circle</v-icon>
          </v-snackbar>
          <v-form ref="form" @submit.prevent="submit">
            <v-container grid-list-xl fluid>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="form.first_name"
                    :rules="rules.name"
                    label="First name"
                    prepend-icon="person"
                    required
                    color="#575BDE"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    color="#575BDE"
                    v-model="form.last_name"
                    :rules="rules.name"
                    label="Last name"
                    prepend-icon="person"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-text-field
                    color="#575BDE"
                    v-model="form.email"
                    :rules="rules.name"
                    label="Email"
                    type="email"
                    prepend-icon="email"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-text-field
                    color="#575BDE"
                    v-model="form.phone_number"
                    :rules="rules.name"
                    label="Phone Number"
                    prepend-icon="phone"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-text-field
                    color="#575BDE"
                    v-model="form.password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :rules="[validatePassword.required, validatePassword.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Normal with hint text"
                    prepend-icon="lock"
                    hint="At least 8 characters"
                    counter
                    required
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-checkbox v-model="form.terms" color="#575BDE">
                    <template v-slot:label>
                      <div @click.stop>
                        Do you accept the
                        <a href="javascript:;" @click.stop="terms = true">terms</a>
                        and
                        <a
                          href="javascript:;"
                          @click.stop="conditions = true"
                        >conditions?</a>
                      </div>
                    </template>
                  </v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions class="btn-group">
              <v-btn flat @click="resetForm">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!formIsValid" color="#575BDE" type="submit">Register</v-btn>
            </v-card-actions>
          </v-form>
          <v-dialog v-model="terms" width="70%">
            <v-card>
              <v-card-title class="title">Terms</v-card-title>
              <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="purple" @click="terms = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="conditions" width="70%">
            <v-card>
              <v-card-title class="title">Conditions</v-card-title>
              <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="purple" @click="conditions = false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>

    </div>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      role_slug: "organizer",
      companyName: "",
      address: "",
      post_code: "",
      phone_number: "",
      terms: false
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [val => val < 10 || `I don't believe you!`],
        name: [val => (val || "").length > 0 || "This field is required"]
      },
      validatePassword: {
        required: value => !!value || "Required.",
        min: val => (val || "").length >= 8 || "Min 8 characters"
      },
      show1: false,
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first_name &&
        this.form.last_name &&
        this.form.phone_number &&
        this.form.password &&
        this.form.terms
      );
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      console.log(
        this.form.first_name,
        this.form.last_name,
        this.form.phone_number,
        this.form.password,
        this.form.terms
      );
      this.$axios
        .$post("https://eticket-vhu.herokuapp.com/api/v1/auth/register", {
          email: this.form.email,
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          password: this.form.password,
          phone_number: this.form.phone_number,
          role_slug: "client"
        })
        .then(result => {
          console.log(result);
        })
        .catch(e => {
          console.log(e);
        });
      this.resetForm();
    }
  }
};
</script>

<style>
.signup-wrapper .v-toolbar__content {
  color: white;
}
.signup-wrapper .bring-center {
  justify-content: center;
  align-items: center;
}
.signup-wrapper .btn-group{
  padding: 10px 15px 25px;
}
</style>
