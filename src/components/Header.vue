<template>
<nav>
  <v-container>
  <v-toolbar fixed class="blue lighten-1" dark>
    <v-toolbar-title class="mr-4 mt-4">
      <router-link class="home" tag="span" :to="{name: 'Home'}">Banknote Binder</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn class="mt-4" flat dark :to="{name: 'browse'}">Browse Notes</v-btn>
      <v-btn class="mt-4"  flat dark :to="{name: 'newissues'}">New Issues</v-btn>
      <v-btn class="mt-4"  flat dark :to="{name: 'About'}">About</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!isLoggedIn" class="mt-4"  flat dark :to="{name: 'login'}">Login</v-btn>
      <v-btn v-if="!isLoggedIn" class="mt-4"  flat dark :to="{name: 'register'}">Sign Up</v-btn>
      <v-btn v-if="isLoggedIn" class="mt-4"  flat dark :to="{name: 'dashboard'}">Dashboard</v-btn>
      <v-btn v-if="isLoggedIn" class="mt-4"  flat dark @click="logout" type="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </v-container>
</nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
  
    return !!Object.keys(this.$store.state.user).length

    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push('/login')
      })
    },

  }
 
 
}
</script>

<style scoped>
nav {
  height: 100px;
}

.home {
  font-size: 40px;
}
.home {
  cursor: pointer
}
.home:hover {
  color: #0D47A1;
}
</style>

