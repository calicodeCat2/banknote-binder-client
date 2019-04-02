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
    selectedBanknotes: [],
    usercollection: [],
    regionlist: [],
    countrylist: [],
    newissues: [],
    newcollectionitem: []
  },
  getters: {
    allNotes: state => {
      return state.banknotes.map(banknote => {
        return banknote;
      });
    },
    selectNotes: state => {
      return state.selectedBanknotes.map(selectedBanknote => {
        return selectedBanknote.ctry_id;
      });
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
    SET_SELECT_RETURN(state) {
      state.selectedBanknotes = selectedBanknotes;
    },
    SET_COLLECTION(state, usercollection) {
       state.usercollection = usercollection
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
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
    },
    SET_LOGOUT(state) {
      state.user = {}
    }
  },
  actions: {
    loginUser({ commit }, email) {
      return axios
        .post("http://localhost:8000/users/login", { email: email.email })
        .then(data => {
          let user = data.data[0];
          commit("SET_USER", user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerUser({ commit }, newuser) {
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
          let users = data.data;
          commit("SET_USERS", users);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadCollection({ commit, state }, id) {
      let userInfo = state.user
      console.log(userInfo);
      
      axios
        .get(`http://localhost:8000/users/collection/${userInfo.id}`)
        .then(data => {
          let usercollection = data.data;
          commit("SET_COLLECTION", usercollection);
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
    addToCollection({ commit }, newcollectionitem) {
      axios
      .post(`http://localhost:8000/users/collections/addnote`, newcollectionitem)
      .then(data => {
        let newcollectionitem = data.JSON.stringify();
        commit("ADD_TO_COLLECTION", newcollectionitem);
      })
      .catch(error => {
        console.log(error);
      });
    },
    addToWantList({ commit }, newcollectionitem) {
      console.log('addNote func', newcollectionitem);
      axios
        .post(`http://localhost:8000/users/wantlists/addnote`, newcollectionitem)
        .then(data => {
          let newcollectionitem = data.JSON.stringify();
          commit("ADD_TO_WANTLIST", newcollectionitem);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteCollectionItem({ commit }, id) {
      axios
        .delete(`http://localhost:8000/users/collections/deletenote/${id.id}`)
        .catch(error => {
          console.log(error);
        });
    },
    deleteWantListItem({ commit }, id) {
      axios
        .delete(`http://localhost:8000/users/collections/deletenote/${id.id}`)
        .catch(error => {
          console.log(error);
        });
    },
    // Logout function clears storage and resets user state, but does not push to /login as defined in Method on Header.vue
    logout({ commit }) {
      localStorage.removeItem("user");
      commit('SET_LOGOUT')
      // state.user = {}
    }
  }
});
