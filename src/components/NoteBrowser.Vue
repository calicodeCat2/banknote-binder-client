<template>
  <v-content>
    <v-container class="text-left">
      <h1>Browse Banknotes</h1>
      <CombinedSelect/>
    </v-container>
  
  </v-content>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CombinedSelect from "./selects/CombinedSelect";
export default {
  mounted() {
    this.$store.dispatch("loadBanknotes");
  },
  computed: {

  },
  components: {
    CombinedSelect
  }
};
</script>


<style scoped>
</style>
