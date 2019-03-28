<template>
  <v-content>
    <v-container class="text-left">
      <h2>Seach by Region then Country</h2>
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
                    v-model:="selectedRegion"
                    @change="getSelected($event)"
                    label="Choose Region"
                    :items="regions"
                    item-text="region_name"
                    item-value="id"
                    key="id"
                  ></v-select>
                {{}}
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
                    key="id" 
                  ></v-select>
                  {{}}
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

  /*  Need to return regions.id and countries.reg_id from select to
      to set condition when region is selected, country select populates with
      countries from that region. Also need to show: CHOOSE REGION FIRST, then
      show CHOOSE COUNTRY once region is selected
  */
  methods: {
    getSelected(event) {
      console.log("selected region: ", this.selectedRegion);
      // currently delivers Undefined for country
    },
    onChange(event) {
      console.log('selected country', this.selectedCountry)
      // can only deliver countries.id of countries.name
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

