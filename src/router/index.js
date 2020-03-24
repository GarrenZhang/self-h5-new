import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/layout'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/redirect',
    component: LayOut,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/')
      }
    ]
  },
  {
    path: '',
    component: LayOut,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home/'),
        name: 'Home',
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/pages/test/')
  }
]

const router = new VueRouter({
  routes
})

export default router
