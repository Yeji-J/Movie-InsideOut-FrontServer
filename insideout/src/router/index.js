import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import BlogView from '@/views/BlogView.vue'
import CommunityView from '@/views/CommunityView.vue'
import RecomView from '@/views/RecomView.vue'
import PostCreateView from '@/views/PostCreateView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import PostUpdateView from '@/views/PostUpdateView.vue'

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
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView,
  },
  {
    // username dynamic params => /:username
    path: '/blog/:username',
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/recommend',
    name:'recommend',
    component: RecomView
  },
  {
    path:'/post/create',
    name:'postcreate',
    component: PostCreateView
  },
  {
    path:'/post/:id',
    name:'postdetail',
    component: PostDetailView
  },{
    path:'/post/update/:id',
    name:'postupdate',
    component: PostUpdateView
  }


  // {
  //   path: '/blog',
  //   name: 'blog',
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
