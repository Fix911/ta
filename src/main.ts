import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import piniaPersist from 'pinia-plugin-persist'
/**
 * 加载全局样式
 */
import './styles/index.scss'
import { createPinia } from 'pinia'
import '@/router/permisson'
import i18n from '@/i18n'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
