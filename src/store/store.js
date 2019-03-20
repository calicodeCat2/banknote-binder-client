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
        loadBanknotes ({commit}) {
            axios
            .get('http://localhost:8000/banknotes')
            .then(data => {
                let banknotes = data.data
                this.commit('SET_BANKNOTES', banknotes)
            })
            .catch(error => {
                console.log(error);
                
            })
        },
        loadUsers ({commit}) {
            axios
            .get('http://localhost:8000/users')
            .then(data => {
                console.log(data);
                let users = data.data
                this.commit('SET_USERS', users)
            })
            .catch(error => {
                console.log(error);
                
            })
        },
        randomBanknotes ({commit}) {
            axios
            .get('http://localhost:8000/banknotes')
            .then(data => {
                let banknotes = data.data
                this.commit('SET_RANDOM', banknotes)
            })
            .catch(error => {
                console.log(error);
                
            })
        },
        
    },
    mutations: {
        SET_BANKNOTES (state, banknotes) {
            state.banknotes = banknotes
        },
        
        SET_USERS (state, users) {
            state.users = users
        },
        SET_RANDOM (state, banknotes) {
            state.banknotes = banknotes
            console.log(banknotes);
        },
    }
})
