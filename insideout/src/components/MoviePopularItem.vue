<template>
  <div id="homeMovie">
    <img :src="imgSrc"/>
    <span class="genre">{{movie?.release_date.split('-')[0]}} / {{movie?.genre_ids[0]}}</span>
    <span class="movieTitle">{{ movie?.title }}</span>
  </div>
</template>

<script>
export default {
  name:'MoviePopularItem',
  data(){
    return{
      imgSrc: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`,
    }
  },
  props:{
    movie:Object,
  },
  
}
</script>

<style>
#homeMovie{
  margin: 10px 20px;
  width: 130px;
  display: flex;
  flex-direction: column;
  color: #F8F9FA;
}

#homeMovie img{
  width: 100%;
  border-radius: 10px;
  transition: transform .5s;
}

#homeMovie img:hover{
  cursor: pointer;
  transform: scale(1.15);
}

#homeMovie span {
  margin-left: 10px;
}
#homeMovie .genre{
  color: #C3DDEC;
  margin-top: 10px;
  font-size: 12px;
}

#homeMovie .movieTitle{
  font-size: 14px;
  margin-bottom: 20px;
}

</style>