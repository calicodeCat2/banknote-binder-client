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
                  <span class="headline">My Collection</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-container grid-list-xl>
            <p>Last three additions</p>
            <v-layout>
              <v-flex
                light
                v-for="(item, index) in inCollection.slice(inCollection.length -3, inCollection.length)"
                :key="index"
              >
                <v-card>
                  <v-img
                    :src="item.img_url"
                  ></v-img>
                  <v-card-text>{{item.name}}</v-card-text>
                  <v-card-text>{{item.denomination}}</v-card-text>
                  <v-card-text>{{item.issue_date}}{{item.note_id}}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions justify-center>
            <v-btn
              justify-start
              dark
              class="blue darken-3"
              :to="{name: 'CollectionView'}"
            >View Collection</v-btn>
            <v-btn
              justify-end
              dark
              class="blue darken-3"
              :to="{name: 'CollectionAdd'}"
            >Add to Collection</v-btn>
          </v-card-actions>
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
                  <span class="headline">My Want List</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-container grid-list-xl>
            <p>Last three additions</p>
            <v-layout v-bind="binding">
              <v-flex v-for="(item, index) in inWantlist.slice(inWantlist.length -3, inWantlist.length)" :key="index">
                <v-card light>
                  <v-img
                    :src="item.img_url"
                  ></v-img>
                  <v-card-text>{{item.name}}</v-card-text>
                  <v-card-text>{{item.denomination}}</v-card-text>
                  <v-card-text>{{item.issue_date}}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions justify-center>
            <v-btn
              justify-start
              dark
              class="blue darken-3"
              :to="{name: 'WantListView'}"
            >View Want List</v-btn>
            <v-btn
              justify-end
              dark
              class="blue darken-3"
              :to="{name: 'WantListAdd'}"
            >Add to Want List</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default {
  data: () => ({
    mounted() {
      this.$store.dispatch("loadUserCollection");
    }
  }),
  computed: {
    inCollection() {
      return this.$store.getters.getUserCollection;
    },
    inWantlist() {
      return this.$store.getters.getUserWantList;
    },
    getUser() {
      return this.$store.getters.getUserData
    }
    
  },
  methods: {
    // getCollection: function () {
    //   const {users.id} = this
    //   this.$store.dispatch('loginUser', users.id)
    //   .then(() => {
    //     this.$router.,push('/dashboard')
    //   })
      
    // }
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
