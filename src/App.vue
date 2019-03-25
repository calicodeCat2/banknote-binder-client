<template>
  <v-app>
    <v-content>
      <Header />
      <Test />
    <router-view/>
    </v-content>
`
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Test from '@/components/Test'
export default {
  name: 'App',
  components: {
    Header,
    Test
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}
</style>
