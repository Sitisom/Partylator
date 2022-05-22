export default {
  state: {
    token: '',
    refreshToken: '',
    endpoints: {
      login: '/auth/login/',
      signup: '/auth/signup/'
    }
  },
  getters: {
  },
  mutations: {
    getToken(state) {
      state.token = localStorage.getItem('token')
      state.refreshToken = localStorage.getItem('refreshToken')
    },
    setToken(state, payload) {
      state.token = payload.token
      state.refreshToken = payload.refresh
      localStorage.setItem('token', state.token)
      localStorage.setItem('refreshToken', state.refreshToken)
    },
    logout(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      state.token = ''
      state.refreshToken = ''
    }
  },
  actions: {}
}
