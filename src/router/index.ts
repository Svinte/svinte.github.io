import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/error/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },

    // Errors
    { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
  ],
})

export default router
