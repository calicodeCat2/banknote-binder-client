<template>
  <v-container class="sign-up">
    <v-layout name="login">
      <v-flex xs10 offset-xs1>
        <panel title="Login" align-center>
          <v-form @submit.prevent="login">
            <v-text-field type="text" label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            <br>
            <v-btn type="submit" dark class="blue darken-3">Login</v-btn>
          </v-form>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function () {
    const { email } = this
    this.$store.dispatch('loginUser', { email })
    .then(() => {
      this.$router.push('/dashboard')
    })
    },
  },
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
