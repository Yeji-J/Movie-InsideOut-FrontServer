<template>
  <div id="carousel">
    <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" 
    :controls-next-html="'&#10093;'" 
    :controls-width="30" :controls-height="60" :clickable="false">
      <slide v-for="(movie, i) in movies" 
      :index="i"
      :key="i">
        <figure>
          <carousel-item :movie="movie"/>
        </figure>
      </slide>
  </carousel-3d>
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
  background-color: #23262b;
}

div.carousel-3d-slide{
  background-color:#F8F9FA;

  border-radius: 10px;
  border:none;
  transition: transform .5s;
  box-shadow: 0 10px 15px 0 #000000;
}
div.carousel-3d-slide:hover{
  cursor: pointer;
}
</style>