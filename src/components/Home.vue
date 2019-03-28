<template>
  <v-content>
    <h1>Welcome</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex m6 lg3
          v-for="(item, index) in randomNotes" :key="index"
        >
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="item.img_url"></v-img>
              <v-card-text>
                <div class="country">Country: {{item.name}} </div>
                <div class="denomination">Denomination: {{item.denomination}} {{item.currency}}</div>
                <div class="denomination">Date: {{item.issue_date}}</div>
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadBanknotes");
  },
  computed: {
    banknotes () {
      return this.$store.getters.allNotes
    },
    randomNotes () {
      let randomArray = []
      for (let i = 0; i < 8; i++) {
       randomArray.push(this.banknotes[Math.floor(Math.random()*this.banknotes.length)]);
      }
      return randomArray
    }
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
