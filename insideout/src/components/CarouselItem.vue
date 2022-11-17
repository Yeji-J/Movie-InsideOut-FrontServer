<template>
  <div id="carouselItem">
    <img :src="imgSrc">
    <div id="carouselContent">
      <div><h6>{{movie.title}}</h6></div>
      <p>Genre |</p>
      <p>Release Date | {{movie.release_date}}</p>
      <p>Runtime | </p>
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

#carouselItem{
  display: flex;
  color: #353A40;
}

img{
  width: 51%;
}


#carouselContent{
  width: 49%;
  padding: 15px;
}

#carouselContent div{
  border-bottom: 1px solid #353a4050;
}

#carouselContent p{
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0;
}
</style>