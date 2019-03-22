import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    banknotes: [],
    users: [],
    newissues: [],
    countryList: [],
    regionList: []
  },
  getters: {

  },
  mutations: {
    SET_BANKNOTES(state, banknotes) {
      state.banknotes = banknotes;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_RANDOM(state, banknotes) {
      state.banknotes = banknotes[Math.floor(Math.random() * banknotes.length)];
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_NEWISSUES(state, newissues) {
      state.newissues = newissues;
    },
    SET_COUNTRYLIST(state, countryList) {
        state.countryList = countryList
      },
    SET_REGIONLIST(state, regionList) {
        state.regionList = regionList;
    },
  },
  actions: {
    loginUser({ commit, dispatch }, user) {
      axios
        .get("http://localhost:8000/users/login${email}")
        .then(data => {
          let user = data.data;
          commit("SET_USER", user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadBanknotes({ commit }) {
      axios
        .get("http://localhost:8000/banknotes")
        .then(data => {
          let banknotes = data.data;
          commit("SET_BANKNOTES", banknotes);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadUsers({ commit }) {
      axios
        .get("http://localhost:8000/users")
        .then(data => {
          console.log(data);
          let users = data.data;
          commit("SET_USERS", users);
        })
        .catch(error => {
          console.log(error);
        });
    },
    randomBanknotes({ commit }) {
      axios
        .get("http://localhost:8000/banknotes")
        .then(data => {
          let banknotes = data.data;
          commit("SET_RANDOM", banknotes);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadNewIssues({ commit }) {
      axios
        .get("http://localhost:8000/newissues")
        .then(data => {
          let newissues = data.data;
          commit("SET_NEWISSUES", newissues);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadCountryList({ commit }) {
        axios
            .get('http://localhost:8000/banknotes/countries')
            .then(data => {
                let countryList = data.data;
                commit("SET_COUNTRYLIST", countryList);
            })
            .catch(error => {
                console.log(error);
            });
    },
    loadRegionList({ commit }) {
      axios
        .get("http://localhost:8000/regions")
        .then(data => {
          let regionList = data.data;
          commit("SET_REGIONLIST", regionList);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});
