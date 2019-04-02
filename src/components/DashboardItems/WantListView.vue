<template>
  <v-layout>
    <v-container class="text-center">
      <h1>View Want List</h1>
      <v-layout row>
        <v-flex xs12>
          <v-card class="elevation-5 ma-2" light flat align-center>
            <v-card-text class="total headline">Total Notes on Want List: {{totalWantList}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex m6>
          <v-card light class="elevation-5 mt-2">
            <v-card-text class="first title">Longest on Want List:</v-card-text>
            <v-container class="img-container">
              <v-img offset-sm2  :src="this.longestOnList.img_url" max-width="250px"></v-img>
            </v-container>
            <v-card-text class="subheading">
              {{longestOnList.name}} {{longestOnList.catalog_no}}
              {{longestOnList.denomination}} {{longestOnList.currency}} ({{longestOnList.issue_date}})
            </v-card-text>
            <v-card-actions>
              <v-btn class="ml-5" small dark color="blue" @click="deleteNote(item)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex m6>
          <v-card light class="elevation-5 ma-2">
            <v-card-text class="first ma-0 title">Most Recent Addition:</v-card-text>
            <v-container class="img-container">
              <v-img offset-sm2 :src="this.mostRecentAddition.img_url" max-width="250px"></v-img>
            </v-container>
            <v-card-text class="mt-4 subheading">
              {{mostRecentAddition.name}} {{mostRecentAddition.catalog_no}}
              {{mostRecentAddition.denomination}} {{mostRecentAddition.currency}} ({{mostRecentAddition.issue_date}})
            </v-card-text>
            <v-card-actions>
              <v-btn class="ml-5" small dark color="blue" @click="deleteNote(item)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex m6 lg3 v-for="(item, index) in inWantList" :key="index">
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
            <v-card-actions>
              <v-btn class="ml-5" small dark color="blue" @click="deleteNote(item)">Delete</v-btn>
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
  data() {
    return {

      id: ""
    }
  },
  computed: {
    inWantList() {
      return this.$store.getters.getUserWantList;
    },
    noteId() {
      return this.$store.getters.getUserWantList.map(
        wantlist => wantlist.id);
    },
    totalWantList() {
      return this.$store.getters.getUserWantListSize;
    },
    longestOnList() {
      return this.$store.getters.getUserWantList.shift();
    },
    mostRecentAddition() {
      return this.$store.getters.getUserWantList.pop();
    },
  },
    methods: {
      deleteNote(item) {
        const { id } = item;
        let noteToDelete = { id };
        this.$store.dispatch("deleteWantListItem", { id }).then(() => {
          this.$router.push("/dashboard");
        });
      }
    }
};
</script>

<style scoped>
.img-container {
  width: 300px;
  height: 250px;
}
</style>
