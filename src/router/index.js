import Vue from 'vue'
import Router from 'vue-router'
import PartiesListPage from '@/components/party/PartiesListPage'
import PartyCreatePage from '@/components/party/PartyCreatePage'
import PartyDetailPage from '@/components/party/PartyDetailPage'

import PeoplePage from '@/components/people/PeoplePage'
import PeopleCreatePage from '@/components/people/PeopleCreatePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/parties',
      name: 'PartiesListPage',
      component: PartiesListPage
    },
    {
      path: '/parties/create',
      name: 'PartyCreatePage',
      component: PartyCreatePage
    },
    {
      path: '/parties/:id',
      name: 'PartyDetailPage',
      component: PartyDetailPage
    },
    {
      path: '/people',
      name: 'PeoplePage',
      component: PeoplePage,
      children: [
        {
          path: 'create',
          name: 'PeopleCreatePage',
          component: PeopleCreatePage
        }
      ]
    }
  ]
})
