<template>
  <v-content>
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
                  @change="($event)"
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
    <br>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex m6 lg3 v-for="(item, index) in filteredNotes" :key="index">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="item.img_url"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="region">Region: {{item.region_name}}</div>
              <div class="country">Country: {{item.name}}</div>
              <div class="calatog">Catalog #: {{item.catalog_no}}</div>
              <div class="denomination">Denomination: {{item.denomination}} {{item.currency}}</div>
              <div class="date">Date: {{item.issue_date}}</div>
            </v-card-text>
            <v-card-actions v-if="true">
              <v-btn flat color="blue">
                <v-icon small left>star</v-icon>
                <span>Add to Collection</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions v-if="true">
              <v-btn flat color="blue">
                <v-icon small left>star</v-icon>
                <span>Add to Want List</span>
              </v-btn>
            </v-card-actions>
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
  watch: {
    route: function(collectionadd) {
      this.$set("addCollectButton", true);
    },
    route: function(collectionview) {
      this.$set("WantListAdd", false);
    }
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
      console.log(filteredNotes);
    }
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>
