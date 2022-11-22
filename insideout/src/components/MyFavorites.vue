<template>
  <div style="height:100%;">
    <h2><font-awesome-icon icon="fa-solid fa-heart"
      style="color:#ec407a; margin: 0 10px;"/>
      Favorites
    </h2>
    <hr>

    <div class=card-container>

      <div class="cardbox" @click="goDetail(favorite?.movie_id)"
      v-for="favorite in favorites" :key="favorite.id">

        <img :src="`https://image.tmdb.org/t/p/original${favorite?.poster_path}`">

          <div style="font-weight:bold; padding: 5px 0; font-size: 12px; text-align: center;">
          {{favorite?.title}}</div>

          <!-- 장르 가져오기 -->
          <!-- {{review.created_at.split('T')[0]}} -->
      </div>
    </div>



  </div>
</template>

<script>
export default {  
  name:'MyFavorites',
  props:{
    favorites:Array,
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    }
  }

}
</script>

<style scoped>
.card-container{
  height: 90%;
  overflow: scroll;
  padding: 15px;
  
  display:flex;
  flex-wrap: wrap;
  justify-content: left;
}

.card-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  }
  
.card-container::-webkit-scrollbar-corner{
  display:none;
}

.card-container::-webkit-scrollbar-thumb {
  background-color:#c3ddecd0;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
  box-shadow: inset 0 0 2px #c3ddecc5;
}

.cardbox{
  width:content-fit;
  max-width: 150px;
  display:flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 2px 2px 2px #1b1d1f;
  background-color: #2c3036;
  border-radius: 10px;
  transition: transform 0.2s linear;
}

.cardbox:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.cardbox img{
  border-radius: 10px 10px 0 0;
}

</style>