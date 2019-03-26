import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    user: {},
    newuser: [],
    banknotes: [],
    newbanknote: [],
    usercollection: [],
    newcollection: [],
    newcollectionitme: [],
    regionlist: [],
    countrylist: [],
    newcountry: [],
    newissues: []
  },
  getters: {
    getUserCollection: state => {
      return state.usercollection.filter(collection => {
        return collection.in_collection;
      });
    },
    getUserCollectionSize: state => {
      return state.usercollection.filter(collection => {
        return collection.in_collection;
      }).length;
    },
    collectionItemCreatedDate: state => {
      return state.usercollection.map(date => {
        return date.created_at.substring(0, 10);
      });
    },
    getUserWantList: state => {
      return state.usercollection.filter(collection => {
        return collection.in_wantlist;
      });
    },
    getUserWantListSize: state => {
      return state.usercollection.filter(collection => {
        return collection.in_wantlist;
      }).length;
    },
    wantItemCreatedDate: state => {
      var firstEntry = state.usercollection.filter(item => {
        if (item.in_wantlist === true) {
          Math.min(item.created_at);
        }
        return firstEntry;
      });
    }
  },
  mutations: {
    // State Setting mutations
    SET_BANKNOTES(state, banknotes) {
      state.banknotes = banknotes;
    },
    SET_USER(state, user) {
      state.user = user;
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
      state.countrylist = countrylist;
    },
    SET_REGIONLIST(state, regionlist) {
      state.regionlist = regionlist;
    },
    SET_COLLECTIONS(state, collections) {
      state.collections = collections;
    },
    // State altering mutations
    ADD_TO_COLLECTION(state, newcollectionitem) {
      state.collections = [...collections, newcollectionitem];
    }
  },
  actions: {
    loginUser({ commit, dispatch }, email) {
      axios
        .post("http://localhost:8000/users/login", { email: email.email })
        .then(data => {
          let user = data.data;
          commit("SET_USER", user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerUser({ commit, dispatch }, newuser) {
      axios
        .post("http://localhost:8000/users/register", {newuser: newuser})
        .then(data => {
          let newuser = data.JSON.stringify(newuser);
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
        .get("http://localhost:8000/users/collection/1")
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
        .get("http://localhost:8000/banknotes/countries")
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
    addToCollection({ commit }) {
      axios
        .get("http://localhost:8000/users/collections/addnote/${id}")
        .then(data => {
          let newcollectionitem = data.JSON.stringify();
          commit("ADD_TO_COLLECTION", newcollectionitem);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout({ commit }) {
      localStorage.removeItem("user");
    }
  },
});
