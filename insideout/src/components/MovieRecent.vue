<template>
  <div>
    <movie-recent-item v-for="movie in movies"
    :key="movie.id"
    :movie="movie"/>
  </div>
</template>

<script>
import MovieRecentItem from './MovieRecentItem.vue';

export default {
  name: "MovieRecent",
  data(){
    return {
      movies: this.$store.state.movies.splice(10)
    }
  },
  components:{
    MovieRecentItem,
  },
  created(){
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