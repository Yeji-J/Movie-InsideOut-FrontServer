<template>
  <div>
    <h1 id="banner">Your weekend buddy for this week</h1>
    <carousel-content/>
    <movie-content/>
  </div>
</template>

<script>
import MovieContent from '@/components/Movie.vue'
import CarouselContent from '@/components/Carousel.vue'

  export default {
    name: 'HomeView',
    components: {
      MovieContent,
      CarouselContent,
    },

  }

</script>

<style scoped>
div{
  margin: 0 auto;
  max-width: 900px;
}

#banner{
  margin-top: 100px;
  text-align: center;
  color: #C3DDEC;
  transition: transform 0.5s linear;
}

#banner:hover{
  transform: scale(1.1)
}

</style>