<template>
<v-container>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="register-form" autocomplete="off">
          <v-text-field label="First Name" v-model="firstName"></v-text-field>
          <br>
          <v-text-field label="Last Name" v-model="lastName"></v-text-field>
          <br>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error"/>
        <br>
        <v-btn dark class="blue darken-3" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import LoginService from "@/services/LoginService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      const response = LoginService.register({
        email: this.email,
        password: this.password
      });
      console.log("register button was clicked", response.data);
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
