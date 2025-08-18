import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './resources/ts/script'
import './resources/scss/style.scss'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')
