<template>
  <v-content>
    <v-container class="text-left">
      <h3>Seach by Region or Country</h3>
      <v-layout row>
        <v-flex xs6>
          <v-card light flat>
            <v-container fluid grid-list-xl>
              <v-layout wrap justify-start>
                <v-flex
                  lg12
                  lg6
                  d-flex
                  elevation-10
                  color="blue lighten-4"
                  class="align-content-right"
                >
                  <v-select
                    color="blue darken-4"
                    class="form-control"
                    v-model:="selectRegion"
                    @change="getSelected($event)"
                    label="Choose Region"
                    :items="regions"
                    item-text="region_name"
                    item-value="id"
                    key="region.id"
                  ></v-select>
                {{regions.region_name}}
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat>
            <v-container fluid grid-list-xl>
              <v-layout wrap justify-end>
                <v-flex lg12 lg6 d-flex elevation-10 color="blue lighten-4">
                  <v-select
                    color="blue darken-4"
                    class="form-control"
                    v-model="selectedCountry"
                    @change="onChange($event)"
                    label="Choose Country"
                    :items="countries"
                    item-text="name"
                    item-value="id"
                    key="country.id" 
                  ></v-select>
                  {{countries.name}}
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import CountrySelect from "./CountrySelect";
import RegionSelect from "./RegionSelect";
export default {
  mounted() {
    this.$store.dispatch("loadRegionList");
    this.$store.dispatch("loadCountryList");
  },
  data: {
    regions: [],
    countries: [],
    selectedRegion: "",
    selectedCountry: ""
  },
  computed: {
    regions() {
      return this.$store.state.regionlist;
    },
    countries() {
      return this.$store.state.countrylist;
    }
  },
  methods: {
    getSelected(event) {
      console.log("selected region: ", this.selected);
    },
    onChange(event) {
      console.log('selected country', this.selectedCountry)
    }
  },
  components: {
    CountrySelect,
    RegionSelect
  }
};
</script>

<style scoped>
</style>

