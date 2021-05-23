import Vue from 'vue'
import Vuex from 'vuex'

function getState (lsName, stateObj) {
  if (!stateObj.length && localStorage.getItem(lsName)) {
    console.log(stateObj)
    stateObj = JSON.parse(localStorage.getItem(lsName))

    // try {
    // } catch (e) {
    //   localStorage.removeItem(lsName)
    // }
  }
  return stateObj
}

let partyModule = {
  state: {
    parties: []
  },
  getters: {
    getParties: (state, getters) => {
      let lsName = 'parties'
      if (!state.parties.length && localStorage.getItem(lsName)) {
        try {
          state.parties = JSON.parse(localStorage.getItem(lsName))
        } catch (e) {
          localStorage.removeItem(lsName)
        }
      }
      return state.parties
    }
  },
  mutations: {
    addParty (state, obj) {
      let id = state.parties.length ? Math.max(...state.parties.map(obj => obj.id)) + 1 : 0
      let people = state.chosen_ids.map(id => Object.assign({id: id, money: 0}))
      let mutatedObj = Object.assign({id, people, all_money: 0, date: '22.05.2021'}, obj)
      state.parties.push(mutatedObj)
      localStorage.setItem('parties', JSON.stringify(state.parties))

      state.chosen_ids = []
    },
    removeParty (state, id) {
      state.parties = state.parties.filter(obj => obj.id !== id)
      localStorage.setItem('parties', JSON.stringify(state.parties))
    },
    addMoneyToParty (state, id, money) {

    }
  }
}

let peopleModule = {
  state: {
    people: []
  },
  getters: {
    getPeople: (state, getters) => {
      // let lsName = 'people'
      // if (!state.people.length && localStorage.getItem(lsName)) {
      //   try {
      //     state.people = JSON.parse(localStorage.getItem(lsName))
      //   } catch (e) {
      //     localStorage.removeItem(lsName)
      //   }
      // }
      // return state.people
      return [...getState('people', state.people), ...state.people]
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

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    parties: [],
    people: [],
    chosen_ids: [],
    chosen_party: null
  },
  getters: {
    getParties: (state, getters) => {
      let lsName = 'parties'
      if (!state.parties.length && localStorage.getItem(lsName)) {
        try {
          state.parties = JSON.parse(localStorage.getItem(lsName))
        } catch (e) {
          localStorage.removeItem(lsName)
        }
      }
      return state.parties
    },
    getPeople: (state, getters) => {
      // let lsName = 'people'
      // if (!state.people.length && localStorage.getItem(lsName)) {
      //   try {
      //     state.people = JSON.parse(localStorage.getItem(lsName))
      //   } catch (e) {
      //     localStorage.removeItem(lsName)
      //   }
      // }
      // return state.people
      return [...getState('people', state.people), ...state.people]
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
    },
    addChosenId (state, id) {
      state.chosen_ids.push(id)
    },
    removeChosenId (state, id) {
      state.chosen_ids = state.chosen_ids.filter(el => el !== id)
    },
    resetChosenIds (state) {
      state.chosen_ids = []
    },
    addParty (state, obj) {
      let id = state.parties.length ? Math.max(...state.parties.map(obj => obj.id)) + 1 : 0
      let people = state.chosen_ids.map(id => Object.assign({id: id, money: 0}))
      let mutatedObj = Object.assign({id, people, all_money: 0, date: '22.05.2021'}, obj)
      state.parties.push(mutatedObj)
      localStorage.setItem('parties', JSON.stringify(state.parties))

      state.chosen_ids = []
    },
    removeParty (state, id) {
      state.parties = state.parties.filter(obj => obj.id !== id)
      localStorage.setItem('parties', JSON.stringify(state.parties))
    },
    addMoneyToParty (state, id, money) {

    }
  }
})
