import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        banknotes: [],
        users: [],
    },
    actions: {
        randomBanknotes ({commit}) {
            axios
            .get('http://localhost:8000/banknotes')
            .then(data => {
                let banknotes = data.data
                this.commit('RANDOM_BANKNOTES', banknotes)
            })
            .catch(error => {
                console.log(error);
                
            })
        },
        filterBanknotes ({commit}) {
            axios
            .get('http://localhost:8000/banknotes')
            .then(data => {
                let banknotes = data.data
                this.commit('FILTER_BANKNOTES', banknotes)
            })
            .catch(error => {
                console.log(error);
                
            })
        },
    },
    mutations: {
        RANDOM_BANKNOTES (state, banknotes) {
            state.banknotes = banknotes[Math.floor(Math.random()*banknotes.length)]
        },

        FILTER_BANKNOTES (state, banknotes) {
            // state.banknotes = (banknotes.map(banknote => banknote.country))
            // var uniqueCountries = countries.filter(function(item, index){
            //   return countries.indexOf(item) >= index;
            // });
        },
    }
})