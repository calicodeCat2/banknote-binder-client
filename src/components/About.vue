<template>
 <v-layout>
    <v-flex xs12 sm6>
    <h1 class="welcome-headline display-1">Welcome to Banknote Binder</h1>
    <p class="paragraph-one headline">
      Banknote binder is for world banknote collectors who want to catalog their collections to
      display them graphically. Collectors can set up their collection, add notes to their want list,
      and manage both as they add new notes and move about parts of their collection.
    </p>

    <p class="paragraph-two headline">
      This simple presentation of Banknote Binder provides the most basic functions and a limited database. A
      full production version would include a robust database of banknotes with their information and images, the
      ability for a user to add additional notes and images and a forum for collectors to meet and discuss collecting.
    </p>

    <p class="paragraph-three headline">
      Additional functionality would include ability for collectors to share their collections and want lists with 
      other collectors and publish their collections to their own sites.
    </p>

    <p class="paragraph-four headline">
      So jump right in and start building your collection today!
    </p>
    </v-flex>
     <v-flex xs12 sm5>
      <v-card>
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
.welcome-headline {
  margin: 5px;
}
.paragraph-one {
  margin: 10px;
}
.paragraph-two {
  margin: 10px;
}


</style>
