<template>
  <div id="carousel">
    <carousel-3d  :controls-visible="true" :controls-prev-html="'&#10092; '" 
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
  }
}
</script>

<style scoped>
*{
  background-color:#F8F9FA;
  color: red
}

#carousel{
  margin: 150px auto;
}
div.carousel-3d-container {
  background-color:#353A40;
}

div.carousel-3d-slide{
  border-radius: 10px;
  border:none;
  transition: transform .5s;

}

.carousel-3d-slide:hover{
  cursor: pointer;
}


/* .carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
} */



</style>