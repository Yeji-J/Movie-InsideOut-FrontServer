<template>
  <div>
    <section>
      <h2>Carousel</h2>
    </section>
    <section>
      <div id='head'>
        <h2>Movie</h2>
        <nav>
          <div>Popular</div>
          <div>Recent</div>
        </nav>
      </div>

      <div>
        <movie-popular/>
        <movie-recent/>
      </div>
    </section>
  </div>
</template>

<script>
import MoviePopular from './MoviePopular.vue'
import MovieRecent from './MovieRecent.vue'

export default {
  name:'MovieContent',
  components:{
    MoviePopular,
    MovieRecent,
  },
  methods:{
    
  }
}
</script>

<style scoped>

#head {
  margin: 20px 0;
  padding-right: 70px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

nav{
  display: flex;
}

nav div{
  font-size: 20px;
  margin: 0 20px;
}

nav div:hover{
  cursor: pointer;
}
</style>