import PeoplePage from '../../components/people/PeoplePage'
import PeopleCreatePage from '../../components/people/PeopleCreatePage'

export default [
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
