<template>
  <v-layout>
    <h1>Collection Stats</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex m6 lg3 v-for="(item, index) in inCollection" :key="index">
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
              <div>Total: {{totalCollection}}</div>
            </v-card-text>
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
    this.$store.dispatch("loadUserCollection");
  },
  computed: {
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    totalCollection() {
      return this.$store.getters.getUserCollectionSize;
    }
  }
};
</script>

<style scoped>
</style>
