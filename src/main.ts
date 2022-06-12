import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import piniaPersist from 'pinia-plugin-persist'
import './router/permisson'
/**
 * 加载全局样式
 */
import './styles/index.scss'
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
