import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

// 일단 comment 완성하려고 토큰 저장
// import createPersistedState from "vuex-persistedstate"

const API_URL = "http://127.0.0.1:8000"
const token = localStorage.getItem('user')

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins:[
  //   createPersistedState(),
  // ],
  state: {
    token: null,
    movies: null,
    movie:null,
    moviesPopular: null,
    moviesRecent: null,
    movieLike:null,
    reviews:null,
  },
  getters: {},
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
    },

    LOGOUT(state) {
      localStorage.removeItem('user')
      state.token = null
    },

    GET_MOVIES(state, payload) {
      const sortValue = payload.sorted

      if (sortValue === undefined) {
        state.movies = payload.movies
      } else if (sortValue === "popular") {
        state.moviesPopular = payload.movies
      } else if (sortValue === "recent") {
        state.moviesRecent = payload.movies
      }
    },

    GET_DETAIL(state, payload) {
      state.movie = payload.data
      state.movieLike = payload.is_liked
    },

    GET_REVIEWS(state, payload) {
      state.reviews = payload
    },
  },

  actions: {
    // Login
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: "post",
        url: `${API_URL}/accounts/api-token-auth/`,
        data: {
          username,
          password,
        }
      })
      .then((res) => {
        localStorage.setItem('user', res.data.token)
        context.commit("SAVE_TOKEN", res.data.token)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // GET_MOVIES
    getMovies(context, payload) {
      let params = null

      if (payload) {
        params = {
          sorted: payload,
        }
      }

      axios({
        method: "get",
        url: `${API_URL}/movies/`,
        params: params,
      })
        .then((res) => {
          const moviePayload = {
            sorted: payload,
            movies: res.data,
          }
          context.commit("GET_MOVIES", moviePayload)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // GET MOVIE DETAIL
    getDetail(context, movieId){

      axios({
        method: "get",
        url: `${API_URL}/movies/${movieId}/`,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then((res)=>{
          context.commit("GET_DETAIL", res.data)
        })
        .catch((err)=>{
          console.log(err)
        })

    },
    // GET REVIEWS
    getReviews(context, movieId){
      axios({
        method:'get',
        url: `${API_URL}/movies/${movieId}/reviews/`,
      })
        .then((res)=>{
          context.commit('GET_REVIEWS', res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    // LIKES
    getLike(context, movieId){

      axios({
        method:'get',
        url: `${API_URL}/movies/${movieId}/like/`,
        // header에 token 넣어주기
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then((res)=>{
          context.state.movieLike = res.data.is_liked
        })
        .catch((err)=>{
          console.log(err)
        })
    },

    // CREATE REVIEW
    createReview(context, payload){

      axios({
        method:'post',
        url: `${API_URL}/movies/${payload.movieId}/review_create/`,
        data: payload.data,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          this.dispatch('getReviews', payload.movieId)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    // EDIT REVIEW (UPDATE & DELETE)
    editReview(context, payload){
      // payload 값의 value에 따라 method 지정
      console.log(payload)
      axios({
        url: `${API_URL}/movies/reviews/${payload.id}/`,
        method: payload.type,
        data: payload.data,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
      .then (()=>{
        this.dispatch('getReviews', payload.movieId)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  modules: {},
})
