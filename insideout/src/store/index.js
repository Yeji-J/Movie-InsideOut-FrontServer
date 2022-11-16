import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'
const MOVIE_API_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = 'd9e39572aa5b5519e4f503f2b30ca989'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    movies:null,
  },
  getters: {
  },
  mutations: {
    SIGN_UP(state, token){
      state.token = token
      console.log(state.token)
    },
    GET_MOVIES(state, payload){
      state.movies = payload.splice(10)
      console.log(state.movies)
    }
  },
  actions: {
    // SIGN_UP
    signUp(context, payload){
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;

      axios({
        method:'post',
        url: `${API_URL}/accounts/signup/`,
        data:{
          username,
          password1,
          password2
        }
      })
        .then((res)=>{
          // 생성된 토큰 넘겨주기
          context.commit('SIGN_UP', res.data.key)
        })
        .catch((err)=>{
          console.log(err)
        });
    },
    // GET_MOVIES
    getMovies(context, payload){
      axios({
        method:'get',
        url: `${MOVIE_API_URL}/${payload}`,
        params:{
          api_key : API_KEY,
          page:3
        }
      })
       .then((res)=>{
        context.commit('GET_MOVIES', res.data.results)
       })
       .catch((err)=>{
        console.log(err)
       })
    },
  },
  modules: {
  },

})
