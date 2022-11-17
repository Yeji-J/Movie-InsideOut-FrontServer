<template>
  <div>
    <div id="headContainer">
      <div id="backdrop">
        <img :src="backdropImgSrc">
      </div>
    </div>
    <!-- <img :src="imgSrc" class="poster"> -->
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
  },
  // 새로고침했을 때 데이터를 불러올 수 있는 방법은 ~  ?
  // updated(){
  //   this.$store.dispatch('getDetail', this.$route.params.id)
  // }
}
</script>

<style scoped>

#backdrop{
  margin: 40px 0;
  width: 100%;
  height: 700px;
  overflow: hidden;
}

#backdrop img{
  width: 100%;
  opacity: 50%;
}
.poster{
  width: 100px;
}

</style>