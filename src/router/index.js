import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '@/views/Projects'
import SpecificProject from '@/views/SpecificProject'
import About from '@/views/About'
import VueGtag from "vue-gtag";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:slug',
    name: 'SpecificProject',
    component: SpecificProject
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

Vue.use(VueGtag, {
  config: { id: "G-4MVCDSE0BD" },
  appName: 'Portfolio',
  pageTrackerScreenviewEnabled: true
}, router);

export default router
