import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

import VueMask from 'v-mask'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueMask)
Vue.use(VueAxios, axios)
Vue.use(VueToast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
