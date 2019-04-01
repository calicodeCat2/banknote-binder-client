<template>
  <v-layout>
    <v-flex lg8 offset-sm2>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>
        <v-card-actions>
           <v-select
              v-if="$route.name == 'CollectionAdd' "
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
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {

      grade: "",
    }
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
  }
};
</script>

