import Vue from 'vue'
import Vuex from 'vuex'

function getState (lsName, stateObj) {
  if (!stateObj.length && localStorage.getItem(lsName)) {
    try {
      stateObj = JSON.parse(localStorage.getItem(lsName))
    } catch (e) {
      localStorage.removeItem(lsName)
    }
  }
  return stateObj
}

let partyModule = {
  state: {
    parties: []
  },
  getters: {
    getParties: (state) => {
      state.parties = getState('parties', state.parties)
      return state.parties
    },
    getParty: (state) => (id) => {
      let qs = state.parties.filter(obj => obj.id === id)
      return qs.length ? qs[0] : null
    },
    getPersonFromParty: (state) => (id, party) => {
      let qs = party.people.filter(obj => obj.id === id)
      return qs.length ? qs[0] : null
    }
  },
  actions: {
    addParty ({commit, rootState}, obj) {
      commit('addParty', Object.assign({obj, ids: rootState.chosen_ids}))
      rootState.chosen_ids = []
    },
    addMoneyToParty ({commit, getters}, payload) {
      let party = getters.getParty(payload.id)
      party.all_money += parseInt(payload.money)
      commit('saveParties')
    },
    addMoneyToPerson ({commit, getters}, payload) {
      let party = getters.getParty(payload.id)
      let person = getters.getPersonFromParty(payload.personId, party)
      person.money += parseInt(payload.money)
      commit('saveParties')
    }
  },
  mutations: {
    addParty (state, payload) {
      let id = state.parties.length ? Math.max(...state.parties.map(obj => obj.id)) + 1 : 0
      let people = payload.ids.map(id => Object.assign({id: id, money: 0}))
      let mutatedObj = Object.assign({id, people, all_money: 0, date: '22.05.2021'}, payload.obj)
      state.parties.push(mutatedObj)
      localStorage.setItem('parties', JSON.stringify(state.parties))

      state.chosen_ids = []
    },
    removeParty (state, id) {
      state.parties = state.parties.filter(obj => obj.id !== id)
      localStorage.setItem('parties', JSON.stringify(state.parties))
    },
    saveParties (state) {
      localStorage.setItem('parties', JSON.stringify(state.parties))
    }
  }
}

let peopleModule = {
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

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    parties: partyModule,
    people: peopleModule
  },
  state: {
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
