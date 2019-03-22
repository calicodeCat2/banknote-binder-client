<template>
  <v-container fluid grid-list-xl>
    <h1>NOTE FILTER</h1>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex elevation-10 color="blue lighten-4" >
        <v-select
          color="blue darken-4" 
          :items="countryList"
          item-text="name"
          label="Choose Country"
           ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
this.$store.dispatch('loadCountryList')
  },
  computed: {
    ...mapState([
      'countryList'
    ])
  }
}
</script>

<style scoped>


</style>
