import Vue from 'vue'
import Router from 'vue-router'
import parties from './modules/parties'
import people from './modules/people'
import auth from './modules/auth'
import settings from './modules/settings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...parties,
    ...people,
    ...auth,
    ...settings
  ]
})

const DEFAULT_TITLE = 'Partylator'
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = `${DEFAULT_TITLE} - ${to.name}` || DEFAULT_TITLE
  })
})

export default router
