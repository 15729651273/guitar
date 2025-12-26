import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout/LayoutIndex.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/HomeIndex.vue'),
          meta: { title: '首页' } 
        },
      ]
    }
  ]
})



// router.beforeEach((to, from, next) => {

// });

export default router
