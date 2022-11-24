<template>
  <div style="height:100%;">
    
    <h2>
      <font-awesome-icon icon="fa-solid fa-clapperboard"
      style="color:rgb(197, 32, 41); margin: 0 10px;" />
      Watchlist</h2>

    <hr>

    <!-- SEARCH BAR -->
    <span v-if="this.username === $route.params.username">
      <h6 style="text-align:center;">Search and click a movie to add to watchlist</h6>
      <div style="min-width: 300px; display:flex; justify-content: center; width: 100%; align-items: center;">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="width: 30px; color:#c3ddecd0"/>
        <input type="text" v-model="searchInput" placeholder="Search Movie" class="search-bar" style="min-width: 90%;" @keyup.enter="searchMovie">
      </div>
    </span>

    <!-- SEARCH RESULT -->
    <div v-if="this.showResult" style="display: flex; flex-wrap:wrap; justify-content: center;">
      <div v-for="searchMovie in this.searchMovies" :key="searchMovie.id">
        <search-list :movie="searchMovie" @close-result="showResult=false"/>
      </div>
    </div>

    <!-- WATCHLIST -->
    <div v-if="!this.showResult" style="padding: 10px;" class="card-container" >

      <div class="cardbox"  v-for="movie in movies" :key="movie.id">
        <font-awesome-icon icon="fa-solid fa-thumbtack" class="pin" />
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" @click="goDetail(movie?.movie_id)">

        <div class="card-content" style="display:flex; flex-direction:column; justify-content: space-between;">
          <div>
            <span style="font-size: 15px; font-weight:bold;">{{movie.title}}</span><br>
            <span v-if="movie?.genres[0]">{{movie?.genres[0]['name'] }}</span>
          </div>

          <div v-if="username === $route.params.username" style="display:flex; justify-content:right;">
            <font-awesome-icon icon="fa-solid fa-trash" @click="removeItem(movie?.movie_id)" style="margin-left: 10px;"/>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import SearchList from '@/components/SearchList.vue'

const API_URL = "http://127.0.0.1:8000"

export default {
  name: 'MyWatchlist',
  components:{
    SearchList,
  },
  data(){
    return {
      searchInput: null,
      showResult: false,
      username: localStorage.getItem('username'),
    }
  },
  computed:{
    movies(){
      return this.$store.state.userInfo.watch_list
    },
    searchMovies(){
      return this.$store.state.searchMovies
    }
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    },
    searchMovie(){
      this.showResult = true
      this.$store.dispatch('searchMovie',this.searchInput)
    },
    
    removeItem(movieId){     
      const token = localStorage.getItem('user')

      axios({
        method:'delete',
        url: `${API_URL}/profile/watched/${movieId}/`,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
      .then (()=>{
        this.$store.dispatch('getUser', this.$route.params.username)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
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