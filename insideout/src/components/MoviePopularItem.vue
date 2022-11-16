<template>
  <div class="col-2">
    <div class="card h-100">
      <img :src="imgSrc" alt="" />
      <div
        class="card-body d-flex flex-column justify-content-center align-items-center">
        <div>
        </div>
        <h4 class="card-title">{{ movie?.title }}</h4>
        <p class="card-text">{{movie?.release_date.split('-')[0]}} / {{movie?.genre_ids}}</p>
      </div>
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



</style>