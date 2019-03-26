<template>
  <v-content>
    <v-container class="text-left">
      <h3>Seach by Region or Country</h3>
      <v-layout row>
        <v-flex xs6>
          <v-card light flat>
            <RegionSelect/>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat>
            <CountrySelect align/>
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
  watch: {
    selectedRegion: function() {
      this.countries = [];
      this.selectedCountry = "";

      if (this.seletedRegion.length > 0) {
        this.countrylist.reg_id = this.regionlist[this.selectedRegion];
      }
    }
  },
  computed: {
    regions() {
      return this.$store.state.regionlist;
      console.log(this.$store.state.regionlist);
    },
    countries() {
      return this.$store.state.countrylist;
    }
  },
  methods: {
    handleChange: function() {
      console.log("click, click");
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

