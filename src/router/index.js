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
  {
    path: '/expanding-card',
    name: 'ExpandingCard',
    component: () => import('../views/ExpandingCard'),
  },
  {
    path: '/design-base',
    name: 'DesignBase',
    component: () => import('../views/DesignBase'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
