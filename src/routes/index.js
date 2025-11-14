import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { path: '/', name: 'Home', component: () => import("../pages/Home/Home.vue") },
    { path: '/profile', name: 'Profile', component: () => import('../pages/Profile/Profile.vue') },
    { path: '/profile/history', name: 'History', component: () => import('../pages/Profile/History/History.vue') },
    { path: "/contest", name: "Contest", component: () => import("../pages/Contest/Contest.vue") },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router