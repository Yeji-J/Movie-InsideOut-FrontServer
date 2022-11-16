<template>
  <div>
    <h2>Movie</h2>

    <nav>
      <span>Popular</span>  |
      <span>Recent</span>
    </nav>

    <div>
      <movie-popular/>
      <movie-recent/>
    </div>
  </div>
</template>

<script>
import MoviePopular from './MoviePopular.vue'
import MovieRecent from './MovieRecent.vue'

export default {
  name:'MovieContent',
  components:{
    MoviePopular,
    MovieRecent,
  },
  methods:{
    
  }
}
</script>

<style scoped>


</style>