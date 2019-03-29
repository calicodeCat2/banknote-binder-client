<template>
<container class="form-container">
  <form class="pa-3 ma-3">
    <v-select
      v-model="selectedRegion"
      v-validate="'required'"
      :items="regions"
      item-text="regions"
      label="Regions"
      data-vv-name="select"
      required
    ></v-select>
    <v-text-field
      v-model="name"
      label="Country Name"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="catalog_no"
      label="Catalog Number"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="denomination"
      label="Denomination (integer)"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="currency"
      label="Currency"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="issue_date"
      label="Date"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field v-model="img_url" label="Image Url" required @input="a" @blur="a"></v-text-field>
    <v-select
      v-model="selectedGrade"
      v-validate="'required'"
      :items="grades"
      label="Note Grade"
      data-vv-name="select"
      required
    ></v-select>
    <v-btn dark class="blue darken-3"  type="submoit" @click="submit">Add It!</v-btn>
    <v-btn dark class="blue darken-3"  @click="clear">Clear</v-btn>
  </form>
</container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("loadRegionList");
  },
  data() {
    return {
      region_name: "",
      name: "",
      catalog_no: "",
      denomination: "",
      currency: "",
      issue_date: "",
      img_url: "",
      grade: this.selectedGrade
    };
  },
  computed: {
    grades() {
      const noteGrades = [];
      const grade = ["UNC", "AU", "EF", "VF", "F", "VG", "G", "Fair", "P"];
      for (let i = 0; i < grade.length; i++) {
        noteGrades.push(grade[i]);
      }
      return noteGrades;
    },
    regions() {
      return this.$store.state.regionlist.map(
        region => region.region_name
      );
    }
  },
  methods: {
    // addnote: function() {
    //   const { region_name, name, catalog_no, denomination, currency, issue_date, img_url, grade } = this;
    //   let addednote = {
    //       region_name,
    //       name,
    //       catalog_no,
    //       denomination,
    //       currency,
    //       issue_date,
    //       img_url,
    //       grade
    //   };
    //   this.$store.dispatch("addNewNote", { newuser }).then(() => {
    //     this.$router.push("/dashboard");
    //   });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-container {
  width: 60%;
}
</style>
