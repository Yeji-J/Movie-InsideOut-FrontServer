<template>
  <div>
    <movie-popular-item  
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"/>
  </div>
</template>

<script>
import MoviePopularItem from './MoviePopularItem.vue'

export default {
  name: "MoviePopular",
  components:{
    MoviePopularItem,
  },
  computed:{
    movies(){
      return this.$store.state.movies
    }
  },
  created(){
    MoviePopularItem
    this.$store.dispatch('getMovies', 'popular')
    this.$store.dispatch('getMovies', 'now_playing')
  },

}
</script>

<style scoped>
div {
  display:flex;
  flex-wrap: wrap;
}


</style>