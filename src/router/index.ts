import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginUser from '@/components/LoginUser.vue';
import ChatInterface from '@/components/ChatInterface.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: LoginUser
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatInterface
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
