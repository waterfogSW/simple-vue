import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'), // 동적 import
    },
    {
        path: '/error',
        name: 'ErrorPage',
        component: () => import('@/views/ErrorPage.vue'),
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/error',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;