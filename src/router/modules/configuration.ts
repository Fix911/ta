import { RouteRecordRaw } from 'vue-router'

const routes :RouteRecordRaw[] = [{
  path: '/term',
  name: 'term',
  component: () => import('@/views/config/term/index.vue')
}, {
  path: '/class',
  name: 'class',
  component: () => import('@/views/config/class/index.vue')
}, {
  path: '/course',
  name: 'course',
  component: () => import('@/views/config/course/index.vue')
}, {
  path: '/schedule',
  name: 'schedule',
  component: () => import('@/views/config/schedule/index.vue')
}, {
  path: '/teacher',
  name: 'teacher',
  component: () => import('@/views/config/teacher/index.vue')
}]
export default routes
