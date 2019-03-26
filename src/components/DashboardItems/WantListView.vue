<template>
  <v-layout>
    <v-container class="text-left">
    <h1>View Want List</h1>
      <v-layout row>
        <v-flex xs6>
          <v-card light flat>
            <v-card-text class="total">
              Total Notes on Want List: {{totalWantList}}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat>
            <v-card-text class="first">
              On Want List Longest: {{firstEntry}}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card light tile flat>
            <v-card-text class="recent">
              Most Recent Want List Addition:
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex m6 lg3 v-for="(item, index) in inWantList" :key="index">
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
              <div>Total: {{totalWantList}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="blue">
                <v-icon small left>star</v-icon>
                <span>Add to Collection</span>
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
    this.$store.dispatch("loadUserCollection");
  },
  computed: {
    inWantList() {
      return this.$store.getters.getUserWantList;
    },
    totalWantList() {
      return this.$store.getters.getUserWantListSize;
    },
    firstEntry() {
      return this.$store.getters.wantItemCreatedDate
    },
  },
  methods: {
    firstEntry() {
      Math.min(...timeOnList)
    }

  }
};
</script>

<style scoped>
</style>
