<template>
  <div id="history">
    <h3 style="text-align:center;">Movie Suggesions for [ <span style="color:#C3DDEC; font-weight: bold;">{{this.feeling}}</span> ]</h3>
    
    <div class=card-container>
      <div class="cardbox" @click="goDetail(movie?.movie_id)"
      v-for="movie in movies" :key="movie.id">
        <img :src="`https://image.tmdb.org/t/p/original${movie?.poster_path}`">
        <div style=" margin-left: 30px; display:flex; flex-direction: column;">
          <h4>
          {{movie?.title}}</h4>
          <v-rating
              style="display:inline-block; margin-bottom: 5px;"
              class="rating"
              background-color="amber"
              :value="movie?.vote_average/2"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
            ></v-rating>
          <span>{{movie?.overview}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RecomViewList',
  props:{
    feeling:String,
    movies:Array,
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    }
  },
}
</script>

<style>




</style>