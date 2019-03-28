<template>
  <v-content>
    <v-container class="text-left">
      <h1>Add to Your Collection</h1>
      <CombinedSelect/>
    </v-container>
    <div class="notes">
      <v-container class="my-5">
        <v-layout row wrap>
          <v-flex m6 lg3 v-for="(item, index) in banknotes" :key="index">
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
    </div>
  </v-content>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CombinedSelect from "../selects/CombinedSelect";
export default {
  mounted() {
    this.$store.dispatch("loadBanknotes");
  },
  data() {
    return {
      user_id: this.user.id,
      note_id: this.banknote.id,
      in_collection: true,
      in_wantlist: false
    };
  },
  computed: {
    banknotes() {
      return this.$store.state.banknotes;
    }
  },
  methods: {
    collectionAd: function() {
      const { user_id, note_id, in_collection, in_wantlist } = this;
      let newCollectionNote = {
        user_id,
        note_id,
        in_collection,
        in_wantlist
      };
      this.$store
        .dispatch("addToCollection", { newCollectionNote })
        .then(() => {
          this.$router.push("dashboard");
        });
    }
  },
  components: {
    CombinedSelect
  }
};
</script>

<style scoped>
</style>
