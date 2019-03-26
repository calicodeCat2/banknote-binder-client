<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-end>
      <v-flex lg12 lg6 d-flex elevation-10 color="blue lighten-4">
        <v-select
          color="blue darken-4"
          class="form-control"
          v-model="selected"
          @change="onChange($event)"
          label="Choose Country"
          :items="countrylist"
          item-text="name"
          key="country.id"
        ></v-select>
        {{selected}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadCountryList");
  },
  data() {
    return {
      selected: ""
    };
  },
  computed: {
    countrylist() {
      return this.$store.state.countrylist;
    }
  },
  handleChange: function(event) {
    console.log(event);
  }
};
</script>

<style scoped>
</style>
