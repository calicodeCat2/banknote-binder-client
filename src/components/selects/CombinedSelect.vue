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
                    v-model="selectedRegion"
                    @change="($event)"
                    label="Choose Region"
                    :items="regions"
                    item-text="region_name"
                    item-value="id"
                    key="id"
                  ></v-select>
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
                    :items="filteredCountries"
                    item-text="name"
                    item-value="id"
                    key="id"
                  ></v-select>
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

export default {
  mounted() {
    this.$store.dispatch("loadRegionList");
    this.$store.dispatch("loadCountryList");
    this.$store.dispatch("loadBanknotes");
  },
  data: function() {
    return {
      selectedRegion: "",
      selectedCountry: ""
    };
  },
  computed: {
    regions() {
      return this.$store.state.regionlist;
    },
    countries() {
      return this.$store.state.countrylist;
    },
    banknotes() {
      return this.$store.state.banknotes;
    },
    filteredCountries() {
      return this.countries.filter(
        country => country.reg_id == this.selectedRegion
      );
    },
    filteredNotes() {
      return this.banknotes.filter(
        banknote => banknote.ctry_id == this.selectedCountry
      );
    }
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>

