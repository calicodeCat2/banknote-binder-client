<template>
  <v-layout>
    <v-flex lg4 offset-sm3 class="mt-4 elevation-5">
      <v-card>
        <v-img
          src="https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-17-20Shillings-1-7-1978.jpg"
          max-width="500px"
          class="ma-4"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Note to Edit</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>
        <v-form>
          <v-card-actions>
            <v-text-field
              v-model="calatog_no"
              label="Catalog Number"
              required
              class="form-input"
              offset-sm3
              ></v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-select
              v-model="selectGrade"
              :items="grades"
              :rules="[(v) => !!v || 'Choose grade before adding.']"
              required
              @change="($event)"
              item-text="grade"
              label="Select Grade"
              data-vv-name="select"
              class="row ml-3 mr-3"
              max-width="250px"
            ></v-select>
            <v-btn flat color="blue">Edit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      grade: ""
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
    }
  }
};
</script>

<style scoped>

</style>


