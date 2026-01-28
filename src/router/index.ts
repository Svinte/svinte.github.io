import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import NotFound from '@/views/error/404.vue'
import Reversi from '@/reversi/Reversi.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/projects', name: 'Projects', component: Projects },
        { path: '/projects/reversi', name: 'Reversi', component: Reversi},

        // Errors
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ],
})

export default router
