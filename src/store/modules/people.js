import {getState} from '../../utility'

export default {
  state: () => ({
    people: []
  }),
  getters: {
    getPeople: (state) => {
      state.people = getState('people', state.people)
      return state.people
    },
    getPerson: (state, getters) => (id) => {
      let qs = getters.getPeople.filter(obj => obj.id === id)
      return qs.length ? qs[0] : null
    },
    peopleNames (state) {
      if (state.people.length) {
        return state.people.map(obj => obj.name)
      }
      return []
    }
  },
  mutations: {
    addPeople (state, obj) {
      let id = state.people.length ? Math.max(...state.people.map(obj => obj.id)) + 1 : 0
      let mutatedObj = Object.assign({id: id}, obj)
      state.people.push(mutatedObj)
      localStorage.setItem('people', JSON.stringify(state.people))
    },
    removePeople (state, id) {
      state.people = state.people.filter(obj => obj.id !== id)
      localStorage.setItem('people', JSON.stringify(state.people))
    }
  }
}
