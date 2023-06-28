import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import LogoView from '../views/LogoView.vue'
import Book1 from '../views/Book1View.vue'
import Book2 from '../views/Book2View.vue'
import Contact from '../views/ContactView.vue'
import About from '../views/AboutView.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
// import AboutPage from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/Home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
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
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
export default router
