import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    addPeople (state, obj) {
      state.people.push(obj)
    }
  }
})
