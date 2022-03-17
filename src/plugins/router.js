import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RecipeView from '../views/RecipeView.vue'
import LogoutView from '../views/LogoutView.vue'

import RecipeShow from '../components/RecipeShow.vue'

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
    component: RecipeView
  },

  {
    path: '/recette/:id',
    name: 'recipeShow',
    component: RecipeShow
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/logout',
    component: LogoutView,
    name: 'logout'
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

export default router
