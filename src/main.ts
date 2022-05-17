import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
/**
 * 加载全局样式
 */
import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
