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
    console.log("addcolleciton", this);
  },
  computed: {
    banknotes() {
      return this.$store.state.banknotes;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {
    CombinedSelect
  }
};
</script>

<style scoped>
</style>
