<template>
  <v-content>
    <h1>Welcome</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex
        v-for="(item, index) in computedObject" :key="index"
         m6 lg3>
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="img_url"></v-img>
              <v-card-text>
                <div class="country">Country:</div>
                <div class="denomination">Denomination:</div>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex m6 lg3>
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img></v-img>
              <v-card-text>
                <div class="country">Country:</div>
                <div class="denomination">Denomination:</div>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex m6 lg3>
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img></v-img>
              <v-card-text>
                <div class="country">Country:</div>
                <div class="denomination">Denomination:</div>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex m6 lg3>
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img></v-img>
              <v-card-text>
                <div class="country">Country:</div>
                <div class="denomination">Denomination:</div>
              </v-card-text>
            </v-responsive>
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
    this.$store.dispatch("randomBanknotes");
  },
  computed: {
    ...mapState([
      "banknotes"
      ]),
    },
   methods: {

  }
};
</script>

<style scoped>
.list-one {
  list-style: none;
}

.list-two {
  list-style: none;
}
.v-card {
  margin: 10px;
}
</style>
