<template>
  <div>
    <h1 id="banner">Your weekend buddy for this week</h1>

    <carousel-content />

    <div class="sug-btn shadow-sm rounded p-1" @click="goRecom">
      Movie Suggestions by Feelings
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </div>

    <movie-content />
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
  methods: {
    goRecom() {
      this.$router.push({ name: 'recommend' })
    },
  },
  beforeCreate() {
    this.$store.dispatch('getMovies') // main
    this.$store.dispatch('getMovies', 'popular') // popular
  },
}
</script>

<style scoped>
div {
  margin: 0 auto;
  max-width: 900px;
}

#banner {
  margin-top: 100px;
  text-align: center;
  color: #c3ddec;

  transition: transform 0.5s linear;
}

#banner:hover {
  transform: scale(1.1);
}

.sug-btn {
  width: fit-content;
  background-color: #c3ddec;
  color: #23262b;
  font-weight: bold;

  transition: transform 0.1s;
}

.sug-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.sug-btn:active {
  transform: translateY(4px);
}
</style>
