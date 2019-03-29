<template>
  <v-content>
    <v-container class="text-left">
      <h1>Add to Your Collection</h1>
      <CombinedSelect/>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CombinedSelect from "../selects/CombinedSelect";
export default {
  mounted() {
    this.$store.dispatch("loadBanknotes");
    console.log('addcolleciton', this);
  },
  data() {
    return {
      user_id: "",
      note_id: "",
      in_collection: true,
      in_wantlist: false
    };
  },
  computed: {
    banknotes() {
      
      return this.$store.state.banknotes;
    },
    user() {
      return this.$store.state.user
    },
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
