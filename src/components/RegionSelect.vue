<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-start>
      <v-flex lg12 lg6 d-flex elevation-10 color="blue lighten-4" class="align-content-right">
        <v-select
          color="blue darken-4"
          class="form-control"
          v-model="region"
 
          label="Choose Region"
          value="key"
          :items="regionlist"
          item-text="region_name"
          key="region.id"
        ></v-select>
        ]
        {{region}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadRegionList");
  },
  data() {
    return {
      region: "",
      value: "key"
    };
  },
  computed: {
    ...mapState(["regionlist"])
  },
  methods: {
    handleChange: function(event) {
      console.log(event);
    }
  }
};
</script>

<style scoped>
</style>
