import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    banknotes: [],
    users: [],
    newissues: [],
    countrylist: [],
    regionlist: [],
    usercollection: [],
  },
  getters: {
    allBanknotes: state => {
      return state.banknotes
    },
    allUsers: state => {
      return state.users
    },
    newIssues: state => {
      return state.newissues
    },
    // radomNote: state => {
    //   console.log('state banknotes', state.banknotes);
    //   return state.banknotes[Math.floor(Math.random() * state.banknotes.length)]
    // },
    getUserCollection: state => {
      return state.usercollection.filter(collection => {
        return collection.in_collection
      })
    },
    getUserCollectionSize: state => {
      return state.usercollection.filter(collection => {
        return collection.in_collection
      }).length;
    },
    getUserWantList: state => {
      return state.usercollection.filter(collection => {
        return collection.in_wantlist
      });
    },
    getUserWantListSize: state => {
      return state.usercollection.filter(collection => {
        return collection.in_wantlist
      }).length;
    },
    timeOnWantList: state => {
      return state.usercollection.map(date => {
        return date.created_at.substring(0, 10)
      })
    }

  },
  mutations: {
    // State Setting mutations
    SET_BANKNOTES(state, banknotes) {
      state.banknotes = banknotes;
    },
    SET_USER(state, users) {
      state.users = users;
    },
    SET_USER_COLLECTION(state, usercollection) {
      state.usercollection = usercollection;
    },
    SET_NEWUSER(state, users) {
      state.users = users;
    },
    SET_NEWISSUES(state, newissues) {
      state.newissues = newissues;
    },
    SET_COUNTRYLIST(state, countrylist) {
        state.countrylist = countrylist
      },
    SET_REGIONLIST(state, regionlist) {
        state.regionlist = regionlist;
    },
    SET_COLLECTIONS(state, collections) {
      state.collections = collections;
    },
    // State altering mutations
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
    registerUser({ commit, dispatch }, newUser) {
      axios
        .post("http://localhost:8000/users/adduser")
        .then(data => {
          let newUser = data.JSON.stringify();
          commit("SET_NEWUSER", newUser);
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
    loadUserCollection({ commit }) {
      axios
        .get("http://localhost:8000/users/collection/3")
        .then(data => {
          let usercollection = data.data;          
          commit("SET_USER_COLLECTION", usercollection);
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
                let countrylist = data.data;
                commit("SET_COUNTRYLIST", countrylist);
            })
            .catch(error => {
                console.log(error);
            });
    },
    loadRegionList({ commit }) {
      axios
        .get("http://localhost:8000/regions")
        .then(data => {
          let regionlist = data.data;
          commit("SET_REGIONLIST", regionlist);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadCollections({ commit }) {
      axios
        .get("http://localhost:8000/regions")
        .then(data => {
          let collections = data.data;
          commit("SET_COLLECTIONS", collections);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout({commit}) {
      localStorage.removeItem('user')
    }
  }
});
