import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/recettes',
    name: 'recipes',
    component: () => import('../views/RecipeView.vue')
  },

  {
    path: '/recette/:id',
    name: 'recipeShow',
    component: () => import('../components/RecipeShow.vue')
  },


  {
    path: '/nouveau-recette',
    name: 'recipeCreate',
    component: () => import('../views/RecipeCreateView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  const publicPages = ['/login', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('userData');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

axios.interceptors.response.use(undefined, function (error) {
            
  if (error.response.status === 401) {          
    return false
  }
});

export default router
