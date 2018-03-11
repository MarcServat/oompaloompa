import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Details from '@/components/Details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id',
      name: 'Details',
      component: Details,
      props: true
    }
  ]
})
