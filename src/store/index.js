import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  getters: {
    getPeople (state) {
      if (!state.people.length && localStorage.getItem('people')) {
        try {
          state.people = JSON.parse(localStorage.getItem('people'))
        } catch (e) {
          localStorage.removeItem('people')
        }
      }
      return state.people
    },
    peopleNames (state) {
      console.log(state.people)
      if (state.people.length) {
        return state.people.map(obj => obj.name)
      }
      return []
    }
  },
  mutations: {
    addPeople (state, obj) {
      let ids = state.people.map(obj => obj.id)
      let maxId = 0
      if (ids.length) {
        maxId = Math.max(...ids) + 1
      }
      let mutatedObj = Object.assign({id: maxId}, obj)
      state.people.push(mutatedObj)
      localStorage.setItem('people', JSON.stringify(state.people))
    },
    removePeople (state, id) {
      state.people = state.people.filter(obj => obj.id !== id)
      localStorage.setItem('people', JSON.stringify(state.people))
    }
  }
})
