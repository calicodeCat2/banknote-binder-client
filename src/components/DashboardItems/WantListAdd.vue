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
 
  computed: {
    banknotes() {
      return this.$store.state.banknotes;
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
