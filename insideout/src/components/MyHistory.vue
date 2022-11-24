<template>
  <div style="height:100%;" id="history">
    <h2><font-awesome-icon icon="fa-solid fa-film" 
      style="margin: 0 10px; color:#5d99c6;"/>
      Movie History</h2>
    <hr>
    <div class=card-container>
      <div class="cardbox" @click="goDetail(review?.movie.movie_id)"
      v-for="review in reviews" :key="review.id">
        <img :src="`https://image.tmdb.org/t/p/original${review?.movie.poster_path}`">
        <div style=" margin-left: 30px; display:flex; flex-direction: column;">
          <h4>
          {{review?.movie.title}}</h4>
          <v-rating
              style="display:inline-block; margin-bottom: 5px;"
              class="rating"
              background-color="amber"
              :value="review?.vote/2"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
            ></v-rating>
          <span>{{review?.content}}</span>{{review?.created_at.split('T')[0]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHistory",
  props:{
    reviews:Array,
  },
  methods:{
    goDetail(movieId){
      this.$router.push({name:'DetailView', params:{id:movieId}})
    }
  }
}
</script>

<style>

#history .card-container{
  height: 90%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  
}

#history .card-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  }
  
#history .card-container::-webkit-scrollbar-corner{
  display:none;
}

.card-container::-webkit-scrollbar-thumb {
  background-color:#c3ddecd0;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
  box-shadow: inset 0 0 2px #c3ddecc5;
}

#history .cardbox{
  padding: 20px;
  width: 90%;
  min-width: 500px;
  display:flex;
  background-color:#2c3036;
  color: #F8F9FA;
  border-radius: 5px;
  box-shadow: inset 0 0 1px #4b4f55;
  margin-bottom: 10px;
  max-height: 200px;
  overflow: hidden;
  transition: transform 0.2s linear;
}

#history .cardbox img{
  width: 100px;
  box-shadow: 2px 2px 2px #1c1c1c;
}

#history .cardbox:hover{
  cursor: pointer;
  transform: scale(1.05);
}


</style>