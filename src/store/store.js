import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    users: {},
    newuser: {},
    banknotes: [],
    usercollection: [],
    regionlist: [],
    countrylist: [],
    newissues: []
    // isLoggedIn: !!localStorage.getItem(user)
  },
  getters: {
    allNotes: state => {
      return state.banknotes.map(banknote => {
        return banknote
      })
    },
    getUser: state => {
      return state.user.map(userData => {
        return userData
      })
    },
    isLoggedIn: state => {
      return (status = state.isLoggedIn);
    },
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
  },
  mutations: {
    // State Setting mutations
    SET_BANKNOTES(state, banknotes) {
      state.banknotes = banknotes;
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    SET_USER_COLLECTION(state) {
      state.usercollection = usercollection;
    },
    SET_NEWUSER(state, users) {
      state.users = users;
    },
    SET_USERS(state, users) {
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
    // State altering mutations
    ADD_TO_COLLECTION(state, newcollectionitem) {
      state.collections = [...collections, newcollectionitem];
    },
    ADD_TO_WANTLIST(state, newcollectionitem) {
      state.collections = [...collections, newcollectionitem];
    }
  },
  actions: {
    loginUser({ dispatch, commit }, email) {
      axios
        .post("http://localhost:8000/users/login", { email: email.email })
        .then(data => {
          let user = data.data[0];
          commit("SET_USER", user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerUser({ commit, dispatch }, newuser) {
      console.log("heard in action", newuser);
      axios
        .post("http://localhost:8000/users/register", newuser)
        .then(data => {
          let newuser = data.data;
          commit("SET_NEWUSER", newuser);
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
    loadUserCollection({ commit } ) {
      axios
        .get(`http://localhost:8000/users/collection/1`)
        .then(data => {
          let usercollection = data.data;
          console.log(usercollection);
          
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
        .get("http://localhost:8000/countries")
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

    // addToCollection({ commit }) {
    //   axios
    //     .get(`http://localhost:8000/users/collections/addnote/${id}`)
    //     .then(data => {
    //       let newcollectionitem = data.JSON.stringify();
    //       commit("ADD_TO_COLLECTION", newcollectionitem);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
  // Logout function clears storage and resets user state, but does not push to /login as defined in Method on Header.vue
    logout({ commit }) {
      localStorage.removeItem("user");
      // state.user = {}
    }
  }
});
