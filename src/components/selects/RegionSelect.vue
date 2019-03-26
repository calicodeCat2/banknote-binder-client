<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-start>
      <v-flex lg12 lg6 d-flex elevation-10 color="blue lighten-4" class="align-content-right">
        <v-select
          color="blue darken-4"
          class="form-control"
          v-model="selected"
          @change="onChange($event)"
          label="Choose Region"
          :items="regions"
          item-text="region_name"
          key="regions.region_name"
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
    this.$store.dispatch("loadRegionList");
    this.$store.dispatch("loadCountryList");
  },
  data() {
    return {
      selected: ""
    };
  },
  computed: {
    regions() {
      return this.$store.state.regionlist
    },
    countries() {
      return this.$store.state.countrylist
    },
 
  },
  methods: {
    handleChange: function($event) {
      console.log(handleChange);
    }
  }
};
</script>

<style scoped>
</style>
