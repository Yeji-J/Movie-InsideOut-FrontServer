<template>
  <div>
    <h1>Home</h1>
    <movie-content/>
  </div>
</template>

<script>
import MovieContent from '@/components/Movie.vue'

  export default {
    name: 'HomeView',
    components: {
      MovieContent,
    },
  //   created(){
  //   this.$store.dispatch('getMovies', 'popular')
  //   this.$store.dispatch('getMovies', 'now_playing')
  // },
  }
</script>

<style scoped>
div{
  margin: 0 auto;
  max-width: 900px;
}

</style>