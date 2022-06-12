import router from './index'

const whiteList = ['/authorize', '/']
const token = sessionStorage.getItem('authorization')
router.beforeEach((to, from, next) => {
  if (token) {
    if (to.path === '/') {
      next('/console')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/')
    }
  }
})
// if (to.matched.some(record => record.meta.requiresAuth)) {
