<template>
  <v-container fluid grid-list-xl>
    <h1>NOTE FILTER</h1>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
        label="Choose Region"
        :items="regionList"
        item-text="region_name"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
this.$store.dispatch('loadRegionList')
  },
  computed: {
    ...mapState([
      'regionList'
    ])
  }
}
</script>

<style scoped>
</style>
