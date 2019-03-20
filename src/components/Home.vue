<template>
<v-content>
    <h1>Welcome</h1>
<v-container class="my-5">
            <v-layout row wrap>
                <v-flex m6 lg3 v-for="(item, index) in banknotes" :key="index">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-img :src="item.img_url"></v-img>   
                        </v-responsive>
                        <v-card-text>
                            <div class="region">Region: {{item.region}}</div>
                            <div class="country">Country: {{item.country}}</div>
                            <div class="calatog">Catalog #: {{item.catalog_no}}</div>
                            <div class="denomination">Denomination: {{item.denomination}} {{item.currency}}</div>
                            <div class="date">Date: {{item.issue_date}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="blue">
                                <v-icon small left>star</v-icon>
                                <span>Add to Collection</span>
                            </v-btn>                            
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</v-content>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
this.$store.dispatch('randomBanknotes')
  },
  computed: {
    ...mapState([
      'banknotes'
    ]),
  computedObj(){
    banknotes[Math.floor(Math.random()*banknotes.length)]
  }
  },
}
</script>

<style scoped>
.list-one {
  list-style: none;
}

.list-two {
  list-style: none;
}

</style>
