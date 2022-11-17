<template>
  <div id="detail-view">
    <section id="backdrop" 
    :style="{'background-image':' linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('+ backdropImgSrc +')'}"
    style="background-size:cover">
      <div id="backdrop-content">
        <v-rating
          class="rating"
          background-color="amber"
          :value="movie.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly
          size="22"
        ></v-rating>
        <p class="movie-title">{{movie.title}}</p>
        <div class="overview">{{movie.overview}}</div>
      </div>
    </section>
      <img :src="imgSrc" class="poster">

    <section id="movie-detail">
    </section>
  </div>

</template>

<script>

export default {
  name:'DetailView',
  computed:{
    movie(){
      return this.$store.state.movie
    },
    imgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    },
    backdropImgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    }
  },
  created(){
    this.$store.dispatch('getDetail', this.$route.params.id)
  },
  // 새로고침했을 때 데이터를 불러올 수 있는 방법은 ~  ?
  // updated(){
  //   this.$store.dispatch('getDetail', this.$route.params.id)
  // }
}
</script>

<style scoped>

#backdrop{
  min-width: 780px;
  height: 550px;
  margin: 40px 0;
  overflow:hidden;
}

#backdrop-content{
  margin-left: 200px;
  margin-top: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

.poster{
  width: 200px;
  border-radius: 10px;
  position: absolute;
  /* top: 580px; */
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.634);
  left: 200px;
  top: 600px;
}

#movie-detail{
  position: relative;
}

.movie-title{
  font-size: 60px;
}

.overview{
  width: 500px;
  font-size: 15px;
}


</style>