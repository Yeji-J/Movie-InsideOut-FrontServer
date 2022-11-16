<template>
  <div>
    <img :src="imgSrc" alt="">
    <p>{{movie.release_date.split('-')[0]}} / {{movie.genre_ids}}</p>
    <p>{{movie.title}}</p>
  </div>
</template>

<script>
export default {
  name:'MovieRecentItem',
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

img{
  width: 100px;
  border-radius: 10px;
}

div {
  display:flex;
  flex-direction: column;;
}

</style>