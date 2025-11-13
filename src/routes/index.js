import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { path: '/', name: 'Home', component: () => import("../pages/Home/Home.vue") },
    { path: '/profile', name: 'Profile', component: () => import('../pages/Profile/Profile.vue') },
    { path: '/profile/history', name: 'History', component: () => import('../pages/Profile/History/History.vue') },
    {path: '/wallet', name: 'Wallet', component: () => import("../pages/Kashelok/Kashelok.vue")},
    {path: '/birja', name: 'Birja', component: () => import("../pages/Birja/Birja.vue")},
    {path: '/birja1', name: 'Birja1', component: () => import("../pages/Birja/birja2.vue")},
    {path: '/birja2', name: 'Birja2', component: () => import("../pages/Birja/birja3.vue")},
    {path: '/zakaz', name: 'Zakaz', component: () => import("../pages/Zakaz/Zakaz.vue")},
    {path: '/first', name: 'first', component: () => import("../pages/First/First.vue")},
    {path: '/second', name: 'second', component: () => import("../pages/First/Second.vue")},
    {path: '/third', name: 'third', component: () => import("../pages/First/Third.vue")},
    {path: '/fourth', name: 'fourth', component: () => import("../pages/First/Fourth.vue")},
    {path: '/fifth', name: 'fifth', component: () => import("../pages/First/Fifth.vue")},
    {path: '/sixth', name: 'sixth', component: () => import("../pages/First/Sixth.vue")},
    {path: '/seventh', name: 'seventh', component: () => import("../pages/First/Seventh.vue")},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router