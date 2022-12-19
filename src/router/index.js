import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    meta: {layout: 'main'},
    component: () => import('../views/Category.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('../views/About.vue')
  },
  {
    path: '/elements',
    name: 'elements',
    meta: {layout: 'main'},
    component: () => import('../views/Elements.vue')
  },
  {
    path: '/images',
    name: 'images',
    meta: {layout: 'main'},
    component: () => import('../views/Images.vue')
  }, {
    path: '/price',
    name: 'price',
    meta: {layout: 'main'},
    component: () => import('../views/Price.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
