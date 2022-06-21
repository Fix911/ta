import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/AppLayout.vue'
import configRoutes from './modules/configuration'
const routes:RouteRecordRaw[] = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/authorize',
  name: 'authorize',
  component: () => import('@/views/authorize/index.vue')
},
{
  path: '/console',
  name: 'console',
  component: Layout,
  children: [{
    path: '',
    name: 'console',
    component: () => import('@/views/config/home/index.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('@/views/config/location/index.vue')

  },
  ...configRoutes
  ]
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
