<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
        
          :items="item"
          label="Standard"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
this.$store.dispatch('loadBanknotes')
  },
  computed: {
    ...mapState([
      'banknotes'
    ])
  }
}
</script>

<style scoped>
</style>
