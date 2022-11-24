<template>
  <div style="width:150px; text-align: center; padding: 10px 5px;" @click="addToWatchlist()">
    <img :src="`https://image.tmdb.org/t/p/original${movie?.poster_path}`" style="width: 120px; height:180px;">
    <div>{{movie?.title}}</div>
  </div>
  
</template>

<script>
import axios from 'axios'
const API_URL = "http://127.0.0.1:8000"
const token = localStorage.getItem('user')

export default {
  name:'SearchList',
  props:{
    movie:Object,
  },
  methods:{
    addToWatchlist(){
      
      axios({
        method:'post',
        url: `${API_URL}/movies/watchlist/`,
        data:{movie:this.movie},
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          this.$emit('close-result')
          this.$store.dispatch('getUser', this.$route.params.username)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>
div:hover{
  cursor:pointer;
}

</style>