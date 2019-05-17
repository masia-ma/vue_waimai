import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import flex from '@/pages/flex/flex'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'

Vue.use(Router)

export default new Router({
  // eslint-disable-next-line no-sparse-arrays
  routes: [{
    path: '/',
    redirect: '/msite'
  }, {
    path: '/msite',
    name: 'Msite',
    component: Msite,
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  }, {
    path: '/flex',
    name: 'flex',
    component: flex
  }, {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      showFooter: false
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      showFooter: false
    }
  }]
})
