<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/original${movie?.poster_path}`" style="width: 20px;">
    <span>{{movie?.title}}</span>
  </div>
  
</template>

<script>
export default {
  name:'SearchList',
  props:{
    movie:Object,
  },
}
</script>

<style>

</style>