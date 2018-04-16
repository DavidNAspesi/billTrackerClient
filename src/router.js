import Vue from 'vue'
import Router from 'vue-router'
import signIn from './views/signIn.vue'
import billPage from './views/billPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/billPage',
      name: 'billPage',
      component: billPage
    }
  ]
})
