import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Events',
          path: '',
          alias: '/events',
          component: () => import('@/views/dashboard/pages/Events'),
        },
      ],
    },
  ],
})
