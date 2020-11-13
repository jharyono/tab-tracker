import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Songs from '../views/Songs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: () => import('../views/ViewSong.vue')
  },
  {
    path: '/songs/create',
    name: 'song-create',
    component: () => import('../views/CreateSong.vue')
  },
  {
    path: '/songs/:songId/edit',
    name: 'song-edit',
    component: () => import('../views/EditSong.vue')
  },
  {
    path: '*',
    redirect: 'songs'
  },
  // Only for testing purpose
  {
    path: '/playground',
    name: 'play-ground',
    component: () => import('../views/PlayGround.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
