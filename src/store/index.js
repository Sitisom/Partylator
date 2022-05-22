import Vue from 'vue'
import Vuex from 'vuex'
import party from './modules/party'
import people from './modules/people'
import auth from './modules/auth'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    auth: auth,
    parties: party,
    people: people
  },
  state: {
    hostname: 'http://localhost:8000',
    chosen_ids: [],
    chosen_party: null
  },
  mutations: {
    addChosenId (state, id) {
      state.chosen_ids.push(id)
    },
    removeChosenId (state, id) {
      state.chosen_ids = state.chosen_ids.filter(el => el !== id)
    },
    resetChosenIds (state) {
      state.chosen_ids = []
    }
  }
})
