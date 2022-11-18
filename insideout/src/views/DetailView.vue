<template>
  <div id="detail-view">

    <section id="backdrop" 
    :style="{'background-image':' linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('+ backdropImgSrc +')'}"
    style="background-size:cover">
      <div id="backdrop-content">
        <p class="movie-title">{{movie.title}}</p>
        <div class="overview">{{movie.overview}}</div>
      </div>
    </section>


    <section id="movie-detail">
      <img :src="imgSrc" class="poster">
      <div class="movie-detail-content">
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
        <div><span>Genres | </span>{{movie.genres}}</div>
        <div><span>Release Date | </span>{{movie.release_date}}</div>
        <div><span>Actors | </span> {{movie.actors}}</div>
        <!-- <h5>adult</h5>
        <h5>like icon</h5> -->
        <div><span>Vote Count | </span>{{movie.vote_count}}</div>
      </div>
    </section>

    <section id="review">
      <h2>Reviews</h2>
      <button class="review-btn"> WRITE REVIEW BUTTON</button>
      <hr>

      <form action="">
        <h4>{{movie.title}}</h4>
        <div>
          Give stars
          <v-rating
          class="rating"
          background-color="amber"
          :value="movie.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>
        </div>
        <textarea name="" id="" cols="30" rows="10"
        class="review-box" placeholder="write your review !" style="width:500px; height:50px; font-size:20px; padding: 0 5px;"></textarea>
        <input type="submit" value="write">
      </form>

      <div id="reive-list">

      </div>
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
#detail-view{
  padding: 0 auto;
}
/* section 1 */

#backdrop{
  padding-left: 300px;
  min-width: 780px;
  height: 550px;
  margin-top: 40px;
  overflow:hidden;
}

#backdrop-content{
  margin-top: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

}

.poster{
  width: 230px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.634);
  left: 300px;
  top: 620px;
}

.movie-detail-content{
  min-width: 500px;
  margin-left: 600px;
}

.movie-detail-content div {
  margin: 30px 0;
}

.movie-detail-content div span{
  font-size: 18px;
  font-weight: bold;
}

.movie-title{
  min-width: 500px;
  font-size: 60px;
}

.overview{
  min-width: 500px;
  width: 600px;
  font-size: 15px;
}



/* section 3 */

#review {
  margin: 70px 350px;
  min-width: 700px;
  max-width: 1200px;
}

form{
  min-width: 500px;
  border-radius: 10px;
  border: 0.5px solid #F8F9FA;
  padding: 20px 40px;
}

.review-box{
  border-bottom: 0.5px solid #F8F9FA;
}

</style>