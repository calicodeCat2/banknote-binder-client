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
              class="row ml-3 mr-3"
              v-if="$route.name == 'CollectionAdd' "
              v-model="selectedGrade"
              v-validate="'required'"
              :items="grade"
              label="Select Grade"
              data-vv-name="select"
              required
              max-width="250px"
            ></v-select>
            <v-card-actions class="row" v-if="$route.name == 'CollectionAdd' ">
              <v-btn flat color="blue" @click="addNote(item)">
                <v-icon small left>star</v-icon>
                <span>Add to Collection</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions v-if="$route.name == 'WantListAdd' ">
              <v-btn flat color="blue" @click="addWant(this.user_id)">
                <v-icon small left>star</v-icon>
                <span>Add to Want List</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        {{ collection }}
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
    console.log("user", this.inCollection.id);
  },
  data: function() {
    return {
      collection: [],
      selectedRegion: "",
      selectedCountry: "",
      user_id: "",
      note_id: "",
      in_collection: "",
      in_wantlist: "",
      grade: ""
    };
  },
  computed: {
    grade() {
      const noteGrades = [];
      const grades = ["UNC", "AU", "EF", "VF", "F", "VG", "G", "Fair", "P"];
      for (let i = 0; i < grades.length; i++) {
        noteGrades.push(grades[i]);
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
    addNote(item) {
      this.collection.push({
        note_id: item.banknote_id,
        user_id: this.user_id,
        grade: item.grade
      });
    },
    addWant(item) {
      const { user_id, note_id } = this.item;
    },
    collectionAd: function() {
      const { user_id, note_id } = this;
      let newCollectionNote = {
        user_id,
        note_id
      };
      this.$store
        .dispatch("addToCollection", { newCollectionNote })
        .then(() => {
          this.$router.push("dashboard");
        });
    },
    wantListAd: function() {
      let newWantListNote = {
        user_id,
        note_id
      };
      this.$store.dispatch("addToWantList", { newWantListNote }).then(() => {
        this.$router.push("dashboard");
      });
    }
  },
  components: {}
};
</script>

<style scoped>
</style>

