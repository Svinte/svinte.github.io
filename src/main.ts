import App from './App.vue'
import { i18n } from './i18n'
import router from './router'
import './resources/ts/script'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './resources/scss/style.scss'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

const pinia = createPinia()

app.use(i18n)
app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
