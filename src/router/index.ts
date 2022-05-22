import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/AppLayout.vue'
const routes:RouteRecordRaw[] = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/console',
  component: Layout,
  children: [{
    path: '',
    name: '首页',
    component: () => import('@/views/home/index.vue')
  }]
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
