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
          <v-card flat class="text-xs-center ma-3 elevation-5">
            <v-responsive class="pt-4">
              <v-img class="ml-4" :src="item.img_url" max-width="200px"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="region">Region: {{item.region_name}}</div>
              <div class="country">Country: {{item.name}}</div>
              <div class="calatog">Catalog #: {{item.catalog_no}}</div>
              <div class="denomination">Denomination: {{item.denomination}} {{item.currency}}</div>
              <div class="date">Date: {{item.issue_date}}</div>
            </v-card-text>
            <v-select
              v-if="$route.name == 'CollectionAdd' "
              v-model="grade"
              :items="grades"
              :rules="[(v) => !!v || 'Choose grade before adding.']"
              required
              @change="($event)"
              item-text="grade"
              label="Select Grade"
              data-vv-name="select"
              class="row ml-3 mr-3"
              max-width="250px"
            ></v-select>
            <v-card-actions class="row" v-if="$route.name == 'CollectionAdd' ">
              <v-btn flat color="blue" @click="collectionAd(item)">
                <v-icon small left>star</v-icon>
                <span>Add to Collection</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions v-if="$route.name == 'WantListAdd' ">
              <v-btn flat color="blue" @click="wantListAd(item)">
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
import { mapState, mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadRegionList");
    this.$store.dispatch("loadCountryList");
    this.$store.dispatch("loadBanknotes");
    this.$store.dispatch("loadCollection");
  },
  data() {
    return {
      collection: [],
      wantlist: [],
      selectedRegion: "",
      selectedCountry: "",
      user_id: "",
      banknote_id: "",
      in_collection: "",
      in_wantlist: "",
      grade: ""
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
    grades() {
      const noteGrades = [];
      const grade = ["UNC", "AU", "EF", "VF", "F", "VG", "G", "Fair", "P"];
      for (let i = 0; i < grade.length; i++) {
        noteGrades.push(grade[i]);
      }
      return noteGrades;
    },
    regions() {
      return this.$store.state.regionlist;
    },
    countries() {
      return this.$store.state.countrylist;
    },
    banknotes() {
      return this.$store.state.banknotes;
    },
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    inWantlist() {
      return this.$store.getters.getUserWantList.map(
        wantlist => wantlist.note_id
      );
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
    },
    collectionFilter() {
      return this.filteredNotes.filter(
        filtered => filtered.banknote_id == this.inCollection.note_id
      );
    },
    wantlistFilter() {
      return this.inWantList.filter(
        wantlist => wantlist.note_id == this.filteredNotes.banknote_id
      );
    }
  },
  methods: {
    collectionAd: function(item) {
      const { banknote_id } = item
      const { id } = this.currentUser
      const { grade } = this
      let user_id = id
      let note_id = banknote_id
      let newcollectionitem = {
        note_id,
        user_id,
        grade
      };
      this.$store
        .dispatch("addToCollection", { newcollectionitem }).then(() => {
          this.$router.push("dashboard");
        });
    },
    wantListAd: function(item) {
      const { banknote_id } = item
      const { id } = this.currentUser
      let user_id = id
      let note_id = banknote_id
      let newcollectionitem = {
        note_id,
        user_id
      };
      this.$store.dispatch("addToWantList", { newcollectionitem }).then(() => {
        this.$router.push("dashboard");
      });
    }
  },
  components: {}
};
</script>

<style scoped>
</style>

