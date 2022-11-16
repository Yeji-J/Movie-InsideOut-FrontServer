<template>
  <div id="carouselItem">
    <img :src="imgSrc">
    <div id="carouselContent">
      <h7>{{movie.title}}</h7>
      <hr>
      <div>Genre</div>
      <div>Release Date</div>
      <div>Runtime</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'CarouselItem',
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
*{
  background-color:#f8f9fad3;
  color: #353A40;
}

#carouselItem{
  display: flex;

}

/* #carouselItem:hover{
  transform-origin: center center;
} */

img{
  width: 51%;
}

#carouselContent{
  width: 49%;
  padding: 15px;
}

#carouselContent div{
  font-size: 12px;
}
</style>