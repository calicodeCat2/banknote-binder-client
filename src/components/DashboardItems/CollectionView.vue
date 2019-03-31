<template>
  <v-layout>
    <v-container class="my-5">
      <h1>Collection Stats</h1>
      <v-layout row>
        <v-flex xs6>
          <v-card class="elevation-5 ma-2" light flat>
            <v-card-text class="total">Total Notes in Collection: {{totalCollection}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat align-center class="elevation-5 ma-2">
            <v-card-text class="first">Most Recent Addition:</v-card-text>
            <v-responsive align-center class="pt-4" >
              <v-img class="ml-4" :src="this.mostRecentAddition.img_url" max-width="200px"></v-img>
            </v-responsive>
            <v-card-text>
              {{this.mostRecentAddition.name}} {{this.mostRecentAddition.catalog_no}}
              {{this.mostRecentAddition.denomination}} {{this.mostRecentAddition.currency}} {{this.mostRecentAddition.issue_date}}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat class="elevation-5 ma-2">
            <v-card-text class="recent">Estimated Value of Collection: Invaluable</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex m6 lg3 v-for="(item, index) in inCollection" :key="index">
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
              <div class="date">Grade: {{item.grade}}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat color="blue" @click="addNote(item)">
                <v-icon small left>fa fa-trash-alt</v-icon>
                <span>Delete from Collection</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadCollection");
  },
  computed: {
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    totalCollection() {
      return this.$store.getters.getUserCollectionSize;
    },
    totalCollection() {
      return this.$store.getters.getUserCollectionSize;
    },
    mostRecentAddition() {
      console.log(this.$store.getters.getUserCollection.pop());

      return this.$store.getters.getUserCollection.pop();
    }
  }
};
</script>

<style scoped>
</style>
