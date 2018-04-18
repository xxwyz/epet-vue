import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import List from '../pages/List/List.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Classify from '../pages/List/Classify/Classify.vue'
import Brand from '../pages/List/Brand/Brand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/list/classify',
          component: Classify
        },
        {
          path: '/list/brand',
          component: Brand
        },
      ]
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: false
      }
    },
  ]
})


