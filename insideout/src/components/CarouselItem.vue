<template>
  <div id="carouselItem">
    <img :src="imgSrc">
    <div id="carouselContent">
      <h6 style="font-weight:bold">{{movie?.title}}</h6>
      <v-rating
      class="rating"
      background-color="amber"
      :value="movie?.vote_average / 2"
      color="amber"
      dense
      half-increments
      readonly
      size="18"
      style="margin: 5px 0;"
    ></v-rating>
      <hr style="margin: 10px 0;">
      <p>Genre | {{ movie?.genres[0]["name"] }}</p>
      <p>Release Date | {{movie?.release_date}}</p>
      <p>Vote Count | {{movie?.vote_count}}</p>
      <button  @click="goDetail(movie?.movie_id)">MORE</button>
      <hr style="margin: 5px 0;">
      <div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'CarouselItem',
  computed:{
    imgSrc(){
      return `https://image.tmdb.org/t/p/original${this.movie?.poster_path}`
    }
  },
  props:{
    movie:Object,
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    }
  }
}
</script>

<style scoped>

#carouselItem{
  display: flex;
  color: #353A40;
  transition: all 0.2s linear;
}

#carouselItem:hover{
  cursor:pointer;
}

img{
  width: 54%;
}


#carouselContent{
  width: 49%;
  padding: 15px;
}

#carouselContent p{
  font-size: 12px;
  margin: 3px 0;
}

#carouselContent h6{
  margin: 0;
  margin-left: 3px;
}

/* TEASER button */
button{
  margin: 12px 40px;
  padding: 1px;
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  color: #353A40;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #678699;
  box-shadow: 0 0 0.5px 0.5px #678699;
  transition: transform 0.2s linear;
}

button:hover{
  cursor: pointer;
  transform: scale(1.2);
  background-color:#C3DDEC;
}

hr{
  margin: 0;
}
</style>