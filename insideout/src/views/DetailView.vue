<template>
  <div style="padding: 0 auto;">
    <!-- BACKDROP IMAGE AND MOVIE OVERVIEW -->
    <section id="backdrop" 
    :style="{'background-image':' linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('+ backdropImgSrc +')'}"
    style="background-size:cover">
      <div id="backdrop-content">
        <p style="min-width: 500px; font-size: 60px;">{{movie.title}}</p>
        <div class="overview">{{movie.overview}}</div>
      </div>
    </section>

    <!-- MOVIE POSTER AND DETAIL -->
    <section id="movie-detail">
      <img :src="imgSrc" class="poster">
      <div class="movie-detail-content" style="min-width: 500px; margin-left: 600px;">
        <v-rating
            class="rating"
            background-color="amber"
            :value="movie.vote_average/2"
            color="amber"
            dense
            half-increments
            readonly
            size="22"
          ></v-rating>
        <div><span class="detail-title">Genres | </span> 
          <span 
          style="margin: 0 7px;"
          v-for="(genre, idx) in movie.genres"
          :key="idx">{{genre.name}}</span>
        </div>
        <div><span class="detail-title">Release Date | </span>{{movie.release_date}}</div>
        <div><span class="detail-title">Actors | </span> {{movie.actors}}</div>
        <!-- <h5>adult</h5>
        <h5>like icon</h5> -->
        <div><span class="detail-title">Vote Count | </span>{{movie.vote_count}}</div>
      </div>
    </section>

    <!-- MOVIE REVIEW LIST AND REVIEW FORM -->
    <section style="margin: 70px 350px; min-width: 700px; max-width: 1200px;">
      <span style="font-size: 30px; margin: 0 20px;">Reviews</span>
      <span class="form-btn" @click="formClicked">Write Review</span>
      <hr>

      <!-- REVIEW FORM -->
      <form v-if="this.isFormViewed">
        <h4 style="display:inline-block; margin-right: 20px;">{{movie.title}}</h4>
          <v-rating
          class="rating"
          @hover="giveRating"
          :value="this.rating"
          background-color="amber"
          color="amber"
          dense
          half-increments
          readonly
          size="22"
          style="display:inline-block"
        ></v-rating>
        <textarea name="" id="" cols="30" rows="10" placeholder="Write your review !"></textarea>
        <input type="submit" value="write"
        style="padding: 2px 7px;">
      </form>

      <!-- REVIEW LIST -->
      <div id="reivew-list">

      </div>
    </section>
  </div>

</template>

<script>

export default {
  name:'DetailView',
  data(){
    return {
      isFormViewed:false,
    }
  },
  computed:{
    movie(){
      return this.$store.state.movie
    },
    imgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    },
    backdropImgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    },
  },
  methods:{
    // form button 클릭시 form 열고 닫기 (innertext 변경)
    formClicked(){
      const btnText = document.querySelector('.form-btn')

      if (this.isFormViewed){
        this.isFormViewed = false;
        btnText.innerText = 'Write Review'
      } else {
        this.isFormViewed = true;
        btnText.innerText = 'Hide Form'
      }
    },
  },
  beforeCreate(){
    this.$store.dispatch('getDetail', this.$route.params.id)
  },
  // 새로고침했을 때 데이터를 불러올 수 있는 방법은 ~  ?
  // mounted(){
  //   this.$store.dispatch('getDetail', this.$route.params.id)
  // }
}
</script>

<style scoped>
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

.overview{
  min-width: 500px;
  width: 600px;
  font-size: 15px;
}

.poster{
  width: 230px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.634);
  left: 300px;
  top: 620px;
}

.movie-detail-content div {
  margin: 30px 0;
}

.movie-detail-content div .detail-title{
  font-size: 18px;
  font-weight: bold;
}

/* section 3 */

form{
  min-width: 500px;
  border-radius: 10px;
  border: 0.5px solid #F8F9FA;
  padding: 20px 40px;
}

.form-btn{
  padding: 7px; 
  font-size: 13px; 
  display:inline-block;
}
.form-btn,
input[type=submit]{
  border: 1px solid #F8F9FA; 
  transition: transform 0.3;
  border-radius: 10px; 
}
.form-btn:hover,
input[type=submit]:hover{
  cursor: pointer;
  transform: scale(1.05);
}

.form-btn:active,
input[type=submit]:active{
  transform: translateY(4px);
}

textarea{
  color:#F8F9FA;
  width:500px; 
  max-height:60px; 
  font-size:17px; 
  padding: 10px; 
  margin-top: 20px;
  margin-right: 30px;
  border:0;
  resize: none;
}

textarea:hover{
  border-bottom: solid 1px #F8F9FA;
}

textarea:focus{
  outline: none;
  caret-color: #F8F9FA;
}

textarea::-webkit-scrollbar {
    width: 10px;
  }
textarea::-webkit-scrollbar-thumb {
  background-color:#C3DDEC;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
  box-shadow: inset 0 0 2px #c3ddecc5;
}


</style>