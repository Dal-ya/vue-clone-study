import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/profile-card',
    name: 'ProfileCardPage',
    component: () => import('../views/ProfileCardPage'),
  },
  {
    path: '/qrcode-card',
    name: 'QrCardPage',
    component: () => import('../views/QrCardPage'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
