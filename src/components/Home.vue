
<template>
  <v-layout>
    <v-container class="row">
    <v-flex lg12>
      <v-card class="elevation-5">
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(item, index) in randomNotes" :key="index"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="item.img_url"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    </v-container>
  </v-layout>
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
      for (let i = 0; i < 9; i++) {
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
