import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
  },
  getters: {
  },
  mutations: {
    SIGN_UP(state, token){
      state.token = token
      console.log(state.token)
    },
  },
  actions: {
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
    }
  },
  modules: {
  }
})
