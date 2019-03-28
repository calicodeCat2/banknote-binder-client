<template>
  <v-layout>
    <v-flex xs12 lg6 m-2>
      <v-card class="pa-3 mx-4">
        <v-img
          class="black--text"
          height="200px"
          src="https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-17-2000Francs-2005.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="display-3">My Collection</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-container grid-list-xl>
          <h3>Last three additions</h3>
          <v-layout>
            <v-flex
              light
              v-for="(item, index) in inCollection.slice(inCollection.length -3, inCollection.length)"
              :key="index"
            >
              <v-card>
                <v-img :src="item.img_url"></v-img>
                <v-card-text>{{item.name}}</v-card-text>
                <v-card-text>{{item.denomination}}</v-card-text>
                <v-card-text>{{item.issue_date}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container align-center>
        <v-card-actions>
          <v-btn dark class="blue darken-3" :to="{name: 'CollectionView'}">View Collection</v-btn>
          <v-btn dark class="blue darken-3" :to="{name: 'CollectionAdd'}"
          >Add to Collection</v-btn>
        </v-card-actions>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 lg6>
      <v-card class="pa-3 mx-4">
        <v-img
          class="black--text"
          height="200px"
          src="https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-158-5000Kwanzas-10-2012.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="display-3" size="30px">My Want List</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-container grid-list-xl>
          <h3>Last three additions</h3>
          <v-layout>
            <v-flex
              v-for="(item, index) in inWantlist.slice(inCollection.length -3, inCollection.length)"
              :key="index"
            >
              <v-card light>
                <v-img :src="item.img_url"></v-img>
                <v-card-text>{{item.name}}</v-card-text>
                <v-card-text>{{item.denomination}}</v-card-text>
                <v-card-text>{{item.issue_date}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container align-center>
            <v-btn dark class="blue darken-3" :to="{name: 'WantListView'}">View Want List</v-btn>
            <v-btn dark class="blue darken-3" :to="{name: 'WantListAdd'}">Add to Want List</v-btn>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.commit("loadUserCollection", {id});
  },
  data: () => ({

  }),
  computed: {
    getUser() {
      return this.$store.state.user
    },
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    inWantlist() {
      return this.$store.getters.getUserWantList;
    }
  },
  methods: {

  }
};
</script>
<style>
.collection-view {
  border: 1px black solid;
  margin-right: 5px;
}
.want-view {
  border: 1px black solid;
  margin-left: 5px;
}

</style>
