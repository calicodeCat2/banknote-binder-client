
{
    mutations: {
      SET_TOKEN (state, value) {
        state.token = JSON.parse(value)
        localStorage.setItem('token', JSON.stringify(token);
      } 
    },
  
    getters: {
      token (state) {
        return state.token
      }
    },
  
    actions: {
      init(store) {
         store.actions.setToken(store, JSON.parse(localStorage.getItem('token') || ''))
      }
      setToken(store, value) {
        store.commit('SET_TOKEN', value)
      }
    }
  }
