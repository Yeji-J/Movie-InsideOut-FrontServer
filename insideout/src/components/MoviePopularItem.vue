<template>
  <div id="popular">
    <img :src="imgSrc" alt="" />
    <div>
      <p>{{ movie?.title }}</p>
      <p>{{movie?.release_date.split('-')[0]}} / {{movie?.genre_ids}}</p>
    </div>
  </div>

</template>

<script>
export default {
  name:'MoviePopularItem',
  data(){
    return{
      imgSrc: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`,
    }
  },
  props:{
    movie:Object,
  },
  
}
</script>

<style scoped>
#popular{
  display: flex;
  flex-direction: column;;
}

img{
  max-width: 100px;
}

</style>