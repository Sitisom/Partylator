import LoginPage from '../../components/auth/LoginPage'
import SignupPage from '../../components/auth/SignupPage'

export default [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  }
]
