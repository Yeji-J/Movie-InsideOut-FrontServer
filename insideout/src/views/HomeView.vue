<template>
  <div>
    <h1 id="banner">Your weekend buddy for this week</h1>
    
    <carousel-content />
    <div style="width: 100%; text-align:center;"><div class="sug-btn"  @click="goRecom">Movie Suggestions by Feelings <font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 10px;"/></div></div>
    <movie-content />
  </div>
</template>

<script>
import MovieContent from "@/components/Movie.vue"
import CarouselContent from "@/components/Carousel.vue"


export default {
  name: "HomeView",
  components: {
    MovieContent,
    CarouselContent,
  },
  methods:{
    goRecom(){
      this.$router.push({name:'recommend'})
    }
  },
  beforeCreate() {
    this.$store.dispatch("getMovies") // main
    this.$store.dispatch("getMovies", "popular") // popular
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

.sug-btn{
  width: 30%;
  height: 30px;
  border-radius:5px;
  background-color:#c3ddec;
  color:#23262b;
  font-weight:bold;
  padding: 2px 0;
  box-shadow: 0 0 3px 3px #24292c;
  transition: transform 0.1s;
}

.sug-btn:hover{
  cursor: pointer;
  transform: scale(1.05);
}

.sug-btn:active{
  transform: translateY(4px);
}
</style>
