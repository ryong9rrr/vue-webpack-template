import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home';

export default createRouter({
  history: createWebHistory(),
  // scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
  ],
});
