<template>
  <v-layout>
    <v-container class="my-5">
      <h1>Collection Stats</h1>
      <v-layout row>
        <v-flex xs6>
          <v-card class="elevation-5 ma-2" light flat>
            <v-card-text class="total title">Total Notes in Collection: {{this.totalCollection}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light class="elevation-5 mt-2">
            <v-card-text class="first title">Most Recent Addition:</v-card-text>
            <v-responsive>
              <v-img class="ml-5" :src="this.mostRecentAddition.img_url" max-width="250px"></v-img>
            </v-responsive>
            <v-card-text class="subheading">
              {{this.mostRecentAddition.name}} {{this.mostRecentAddition.catalog_no}}
              {{this.mostRecentAddition.denomination}} {{this.mostRecentAddition.currency}} ({{this.mostRecentAddition.issue_date}})
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat class="elevation-5 ma-2">
            <v-card-text class="recent title">Estimated Value of Collection: Inestimable</v-card-text>
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
              <v-btn small dark color="blue" @click="deleteNote(item)">Delete</v-btn>
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
      id: "",
      item: ""
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    noteId() {
      return this.$store.getters.getUserCollection.map(
        collection => collection.id
      );
    },
    totalCollection() {
      return this.$store.getters.getUserCollectionSize;
    },
    mostRecentAddition() {
      return this.$store.getters.getUserCollection.pop();
    }
  },
  methods: {
    deleteNote(item) {
      const { id } = item;
      let noteToDelete = { id };
      this.$store.dispatch("deleteCollectionItem", { id }).then(() => {
        this.$router.push("/dashboard");
      });
    }
  },
};
</script>

<style scoped>
</style>
