<template>
  <v-container>
    <v-layout column>
      <v-flex xs10 offset-xs1>
        <panel title="Register">
          <form name="register-form" @submit.prevent="register" autocomplete="off">
            <v-text-field label="First Name" v-model="first_name" required autofocus></v-text-field>
            <br>
            <v-text-field label="Last Name" v-model="last_name" required></v-text-field>
            <br>
            <v-text-field label="Email" v-model="email" required></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
            <v-btn dark class="blue darken-3" type="submit">Register</v-btn>
          </form>
          <br>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    register: function() {
      const { first_name, last_name, email, password } = this;
      let newuser = {
        first_name,
        last_name,
        email,
        password
      }
      this.$store.dispatch("registerUser", { newuser }).then(() => {
        this.$router.push('/login');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
