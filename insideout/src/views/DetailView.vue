<template>
  <div>
    <h1>Detail</h1>
    <div id="headContainer">
      {{movie.title}}
      <img :src="imgSrc" alt="">
      <img :src="backdropImgSrc" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name:'DetailView',
  computed:{
    movie(){
      return this.$store.state.movie
    },
    imgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    },
    backdropImgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    }
  },
  created(){
    this.$store.dispatch('getDetail', this.$route.params.id)
  }
}
</script>

<style scoped>
img{
  width: 100px;
}

</style>