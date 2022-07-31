import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from './../components/pages/Login.vue'

const routes = [
    { path: '/', component: LoginPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router