<template>
  <v-container>
    <v-layout name="login">
      <v-flex xs8 offset-xs-1>
        <panel title="Login" align-center>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
          <br>
          <div class="danger-alert" v-html="error"/>
          <br>
          <v-btn dark class="blue darken-3" @click="login">Login</v-btn>
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
    login () {
      console.log('CLICK, CLICK, CLICK, CLICK');
      
      // try {
      //   const response = await AuthenticationService.login({
      //     email: this.email,
      //     password: this.password
      //   })
      //   this.$store.dispatch('setToken', response.data.token)
      //   this.$store.dispatch('setUser', response.data.user)
      //   this.$router.push({
      //     name: 'songs'
      //   })
      // } catch (error) {
      //   this.error = error.response.data.error
      // }
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
