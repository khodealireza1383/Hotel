import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Otagh from '../views/Otagh.vue';
import Blog from '../views/Blog.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home2 from '../views/Home2.vue';

const routes = [
  {
    path: '/home',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/room',
    name: 'room',
    component: Otagh
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/',
    name: 'home',
    component: Home2
  },
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
