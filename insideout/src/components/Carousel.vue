<template>
  <div>
    <div id="carousel">
      <carousel-3d
      :autoplay="true" :autoplay-timeout="2300">
        <slide v-for="(movie, i) in movies" 
        :index="i"
        :key="movie?.id">
          <carousel-item :movie="movie"/>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'
import CarouselItem from './CarouselItem.vue'

export default {
  name: 'CarouselContent',
  components:{
    Carousel3d,
    Slide,
    CarouselItem
  },
  computed:{
    movies(){
      return this.$store.state.movies
      
    }
  },

}
</script>

<style scoped>

#carousel{
  margin: 100px auto;
  margin-bottom: 150px;
}
div.carousel-3d-container {
  background: none;
  overflow: visible;
}

div.carousel-3d-slide{
  background-color:#F8F9FA;
  border-radius: 10px;
  border:none;
  box-shadow: 0 10px 15px 0 #000000;
}
</style>