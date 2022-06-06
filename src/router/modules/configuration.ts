import { RouteRecordRaw } from 'vue-router'

const routes :RouteRecordRaw = {
  path: '/semester',
  name: 'semester',
  component: () => import('@/views/config/semester/index.vue')
}
export default routes
