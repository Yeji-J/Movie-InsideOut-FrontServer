import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

const API_URL = "http://127.0.0.1:8000"
const token = localStorage.getItem('user')

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins:[
  //   createPersistedState(),
  // ],
  state: {
    username:null,
    token: null,
    userInfo:null,
    movies: null,
    movie:null,
    moviesPopular: null,
    moviesRecent: null,
    movieLike:null,
    reviews:null,
    searchMovies:null,
  },
  getters: {},
  mutations: {
    SAVE_TOKEN(state, payload) {
      state.username = payload.username
      state.token = payload.token
      localStorage.setItem('user', payload.token)
      localStorage.setItem('username', payload.username)
    },

    LOGOUT(state) {
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      state.username = null
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
    SAVE_USERINFO(state, payload){
      state.userInfo = payload
    },
    SAVE_SEARCHMOVIE(state, payload){
      state.searchMovies = payload
    }

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
        const payload = {
          token: res.data.token,
          username,
        }
        context.commit("SAVE_TOKEN", payload)
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
    },
    // GET USER
    getUser(context, username){
      axios({
        method:'get',
        url: `${API_URL}/profile/${username}/`,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then((res)=>{
          context.commit('SAVE_USERINFO', res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    searchMovie(context, movieTitle){
      const API_KEY = '3cd8e0319cee80069c4b85f6cf42fded'
      const TMDB_URL = 'https://api.themoviedb.org/3/search/movie'
      axios({
        method:'get',
        url: TMDB_URL,
        params:{
          api_key: API_KEY,
          query: movieTitle,
        }
      })
        .then((res)=>{
          context.commit('SAVE_SEARCHMOVIE', res.data.results.slice(0,5))
        })
        .catch((err)=>{
          console.log(err)
        });
    }
  },
  modules: {},
})
