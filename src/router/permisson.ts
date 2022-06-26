import router from './index'
import { useToken } from '@/store/authorization'
const whiteList = ['/authorize', '/']

router.beforeEach((to, from, next) => {
  const token = useToken().GetToken
  console.log(token)
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
      // next('/') // 本地测试用
      next()
    }
  }
})
