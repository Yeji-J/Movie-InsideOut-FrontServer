<template>
  <div>
    <!-- 첫 번째 기사 -->
    <div style="width: 800px; height: 270px; display:flex; padding:20px; justify-content: space-between; ">

      <img :src="`https://image.tmdb.org/t/p/original${articles[0].movie.backdrop_path}`"
        style="border-radius: 20px; width: 350px; margin-right: 40px;"
        @click="$router.push({name:'postdetail', params: {id:articles[0].id}})">

      <div style="display:flex; flex-direction: column; width: 400px; overflow: hidden;">
        <span style="margin: 5px 0; font-size: 14px;">{{ articles[0].username }}</span>
        <span style="margin-bottom: 20px; color:#FFD1B8;"><h4>{{articles[0].title}}</h4></span>
        <span>{{articles[0].content}}</span>
      </div>

    </div>

    <!-- 다음 기사부터 -->
    <div style="display:flex; justify-content: center; height: 270px; overflow: hidden; margin: 40px 0;">

      <div v-for="article in articles.slice(1)" :key="article.id" 
      style="width: 230px; margin:20px; display:flex; flex-direction: column; justify-content: space-evenly">
      
        <img :src="`https://image.tmdb.org/t/p/original${article.movie.backdrop_path}`"
        @click="$router.push({name:'postdetail', params: {id:article.id}})"
        style="border-radius: 20px;">

        <span style="margin:0; font-size: 14px;">{{ article.username }}</span>
        <span style="color:#FFD1B8; margin:0;">{{article.title}}</span>

      </div>   

    </div>
  </div>
</template>

<script>
export default {
  name:'CommunityArticle',
  computed:{
    // 임시 데이터 (영화)
    articles(){
      return this.$store.state.community?.hot_post
    },
  }
}
</script>

<style scoped>
img{
  transition: transform 0.3s linear;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.205);

}

img:hover{
  cursor: pointer;
  transform: scale(1.1);
}
</style>