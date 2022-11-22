<template>
  <div style="height:100%;">
    
    <h2>
      <font-awesome-icon icon="fa-solid fa-clapperboard"
      style="color:rgb(197, 32, 41); margin: 0 10px;" />
      Watchlist</h2>

    <hr>
    <div style="min-width: 300px; display:flex; justify-content: center; width: 100%; align-items: center;">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="width: 50px; color:#c3ddecd0"/>
        <input type="text" v-model="search" placeholder="Search Movie" class="search-bar">
      </div>
    
    <div style="padding: 10px;" class="card-container">
      <div class="cardbox" @click="goDetail(movie?.movie_id)" v-for="movie in movies" :key="movie.id">
        <font-awesome-icon icon="fa-solid fa-thumbtack" class="pin" />
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`">
        <div class="card-content">
          <span style="font-size: 18px; font-weight:bold;">{{movie.title}}</span>
          {{movie.genres[0]["name"] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MyWatchlistItem from '@/components/MyWatchlistItem.vue';

export default {
  name: 'MyWatchlist',
  components:{
    // MyWatchlistItem,
  },
  data(){
    return {
      search: null,
      // 유저 데이터로 가져오기 !!
    }
  },
  computed:{
    movies(){
      return this.$store.state.userInfo.favorites.slice(4)
    }
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    }
  }
}
</script>

<style scoped>

.search-bar {
  padding-left: 10px;
  width: 100%;
  height: 35px;
  background-color:#2c3036;
  border-radius: 5px;
}

.search-bar:focus{
  outline: none;
  caret-color: #F8F9FA;
  color: #F8F9FA;
}

.search-bar{
  color:#F8F9FA;
}

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
  height: 150px;
  background-color:#c3ddecd0;
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