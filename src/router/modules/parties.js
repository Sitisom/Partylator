import PartiesListPage from '../../components/party/PartiesListPage'
import PartyCreatePage from '../../components/party/PartyCreatePage'
import PartyDetailPage from '../../components/party/PartyDetailPage'
import AddMoneyPage from '../../components/party/AddMoneyPage'

export default [
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
    component: PartyDetailPage,
    children: [
      {
        path: 'addMoney',
        name: 'AddMoneyPage',
        component: AddMoneyPage,
        props: true
      }
    ]
  }
]
