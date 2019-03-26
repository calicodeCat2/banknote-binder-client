<template>
   <v-content>
      <h1>New Issues</h1>
    <div class="notes">
        <h1 class="subheading grey--text">New Issues for March 2019</h1>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex m6 lg3 v-for="(item, index) in newIssues" :key="index">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-img :src="item.img_url"></v-img>   
                        </v-responsive>
                        <v-card-text>
                            <div class="country">Country: {{item.country}}</div>
                            <div class="denomination">Denomination: {{item.denomination}} {{item.currency}}</div>
                            <div class="date">Date: {{item.issue_date}}</div>
                            <div class="comments">Comments: </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="blue">
                                <v-icon small left>star</v-icon>
                                <span>Add Comments</span>
                            </v-btn>                            
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</v-content>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
        this.$store.dispatch('loadNewIssues')
    },
    computed: {
        newIssues() {
            return this.$store.state.newissues
        }
    }
}
</script>

<style scoped>


</style>
