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
  components:{
    MovieRecentItem,
  },
  computed:{
    movies(){
      return this.$store.state.movies
    }
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