import {getState} from '../../utility'

export default {
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
