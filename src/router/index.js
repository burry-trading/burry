import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from './../components/pages/Login.vue'
import SettingsPage from './../components/pages/Settings.vue'
import DashboardPage from './../components/pages/Dashboard.vue'
import AdministratorPage from './../components/pages/Administrator.vue'

const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'login',
        meta: {
            title: 'Burry Trading: Login',
        }
    },
    {
        path: '/settings',
        component: SettingsPage,
        name: 'settings',
        meta: {
            title: 'Burry Trading: Configurações',
        }
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        name: 'dashboard',
        meta: {
            title: 'Burry Trading: Dashboard',
        }
    },
    {
        path: '/administrator',
        component: AdministratorPage,
        name: 'administrator',
        meta: {
            title: 'Burry Trading: Back-office',
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "route-active",
})

const isAuthenticated = () => {
    if (localStorage.getItem('tokenUser') !== null) return true;
    return false;
}

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && isAuthenticated()) {
        document.title = to.meta.title;
        next({ name: 'dashboard' })
    }

    if (to.name !== 'login' && !isAuthenticated()) {
        document.title = to.meta.title;
        next({ name: 'login' })
    } else {
        document.title = to.meta.title;
        next()
    }
});

export default router