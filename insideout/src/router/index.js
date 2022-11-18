import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

// import MoviePopularView from '../views/MoviePopularView.vue'
// import MovieRandomView from '../views/MovieRandomView.vue'
// import MovieRecentView from '../views/MovieRecentView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name:'DetailView',
    component: DetailView,
  }
  // {
  //   path: '/popular',
  //   name: 'MoviePopularView',
  //   component: MoviePopularView,
  // },
  // {
  //   path:'/random',
  //   name: 'MovieRandomView',
  //   component: MovieRandomView,
    
  // },
  // {
  //   path:'/recents',
  //   name:'MovieRecentView',
  //   component: MovieRecentView,
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
