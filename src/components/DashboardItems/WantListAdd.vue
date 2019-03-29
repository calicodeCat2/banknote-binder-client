<template>
  <v-content>
    <v-container class="text-left">
      <h1>Add to Your Want List</h1>
      <CombinedSelect/>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import CombinedSelect from "../selects/CombinedSelect";
export default {
  mounted() {
    this.$store.dispatch("loadBanknotes");
  },
  data() {
    return {
      user_id: "",
      note_id: "",
      in_collection: "",
      in_wantlist: true
    };
  },
  computed: {
    banknotes() {
      return this.$store.state.banknotes;
    }
  },
  methods: {
    wantListAd: function() {
      let newWantListNote = {
        user_id,
        note_id,
        in_collection,
        in_wantlist
      };
      this.$store.dispatch("addToWantList", { newWantListNote }).then(() => {
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
