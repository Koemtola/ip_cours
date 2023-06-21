import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogoView from '../views/LogoView.vue'
import Book1 from '../views/Book1View.vue'
import Book2 from '../views/Book2View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/menuHoem',
      name: 'menuHoem',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/logo',
      name: 'logo',
      component: LogoView
    },
    {
      path: '/Book1',
      name: 'Book1',
      component: Book1
    },
    {
      path: '/Book2',
      name: 'Book2',
      component: Book2
    }
  ]
})

export default router
