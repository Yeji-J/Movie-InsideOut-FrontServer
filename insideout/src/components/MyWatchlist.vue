<template>
  <div style="height:100%;">
    
    <h2>
      <font-awesome-icon icon="fa-solid fa-clapperboard"
      style="color:rgb(197, 32, 41); margin: 0 10px;" />
      Watchlist</h2>

    <hr>
    <div style="min-width: 300px; display:flex; justify-content: center; width: 100%; align-items: center;">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="width: 30px; color:#c3ddecd0"/>
      <input type="text" v-model="searchInput" placeholder="Search Movie" class="search-bar" style="min-width: 90%;" @keyup.enter="searchMovie(searchInput)">
    </div>

    <div v-if="this.searchMovies">
      <div v-for="searchMovie in this.searchMovies" :key="searchMovie.id" @click="addToWatchlist(searchMovie)">
        <img :src="`https://image.tmdb.org/t/p/original${searchMovie?.poster_path}`" style="width: 20px;">
        <span>{{searchMovie?.title}}</span>
      </div>
    </div>

    
    <div style="padding: 10px;" class="card-container">

      <div class="cardbox"  v-for="movie in movies" :key="movie.id">
        <font-awesome-icon icon="fa-solid fa-thumbtack" class="pin" />
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" @click="goDetail(movie?.movie_id)">

        <div class="card-content" style="display:flex; flex-direction:column; justify-content: space-between;">
          <div>
            <span style="font-size: 15px; font-weight:bold;">{{movie.title}}</span>
            {{movie.genres[0]["name"] }}
          </div>
          <div style="display:flex; justify-content:right;">
            <font-awesome-icon icon="fa-solid fa-check" @click="removeItme({type:'get', movieId:movie?.movie_id})" />
            <font-awesome-icon icon="fa-solid fa-trash" @click="removeItem({type:'delete', movieId:movie?.movie_id})" style="margin-left: 10px;"/>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

const API_URL = "http://127.0.0.1:8000"
const token = localStorage.getItem('user')

export default {
  name: 'MyWatchlist',
  data(){
    return {
      searchInput: null,
    }
  },
  computed:{
    movies(){
      return this.$store.state.userInfo.favorites.slice(4)
    },
    searchMovies(){
      return this.$store.state.searchMovies
    }
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    },
    searchMovie(searchInput){
      this.$store.dispatch('searchMovie',searchInput)
    },
    addToWatchlist(movie){
      console.log(movie)
      axios({
        method:'post',
        url: `${API_URL}/movies/watchlist/`,
        data:{movie},
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          console.log('success')
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    // removeItem(payload){
    //   console.log(payload.movieId)
    //   
    //   const token = localStorage.getItem('user')

    //   axios({
    //     method:payload.type,
    //     url: `${API_URL}/accounts/watched/${payload.movieId}`,
    //     headers:{
    //       Authorization: `JWT ${token}`
    //     }
    //   })
    //   .then (()=>{
    //     this.$store.dispatch('getUser', this.$route.params.username)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // }
  },
}
</script>

<style scoped>



.card-container{
  height: 80%;
  overflow: scroll;
  display: flex;
  flex-wrap:wrap;
  margin: 25px;
  justify-content: left;
}
.cardbox{
  margin: 10px;
  width: 230px;
  height: 170px;
  background-color:#f7e69c;
  transform: rotate(2deg);
  padding: 10px;
  position: relative;
  color:#2c3036;
  display:flex;
  justify-content: space-evenly;
  box-shadow: 2px 2px 2px #1b1d1f;
  transition: transform 0.2s linear;
}

.cardbox:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.cardbox img{
  border-radius:10px;
  width: 60%;
  margin-right: 10px;
  box-shadow: 0 2px 2px #1b1d1f;

}

.pin{
  position: absolute;
  color:rgb(197, 32, 41); 
  width: 100%;
  top: -7px;
  left: 0px;
}

.card-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
  
.card-container::-webkit-scrollbar-corner{
  display:none;
}

.card-container::-webkit-scrollbar-thumb {
  background-color:#c3ddecd0;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
  box-shadow: inset 0 0 2px #c3ddecc5;
}

</style>