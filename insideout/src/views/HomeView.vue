<template>
  <div>
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

</style>