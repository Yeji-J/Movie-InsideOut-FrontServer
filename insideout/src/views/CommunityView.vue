<template>
  <div id="community">
    <section id="board" style=" padding: 40px;">

      <div>
        <h4>Hot Reviewers</h4>
        <hr>
        <div v-for="reviewer in reviewers" :key="reviewer.id" class="sidebox">
          <div style="background-color:white; border-radius:20px">IMG</div>
          <span>{{reviewer?.genres[0]["name"]}}</span>
          <div class="numbox">{{reviewer?.vote_count}}</div>
        </div>
      </div>

      <div style="margin: 60px 0;">
        <h4>Recent Posts</h4>
        <hr>
        <div v-for="reviewer in reviewers" :key="reviewer.id" class="sidebox">
          <div style="height: 22px; width: 180px; overflow:hidden;">{{reviewer?.overview}}</div>...
          <div class="numbox">{{reviewer?.vote_count}}</div>
        </div>
      </div>
    </section>

    <section id="article" style="width:fit-content; padding-top: 70px;">
      <community-article/>
    </section>
  </div>
</template>

<script>
import CommunityArticle from "@/components/CommunityArticle.vue"

export default {
  name:'CommunityView',
  components: {
    CommunityArticle
  },
  computed:{
    // 임시 데이터 (영화)
    reviewers(){
      return this.$store.state.movies.slice(5)
    },
    // reviews(){
      
    // }
  }
}
</script>

<style scoped>
#community{
  display: flex;
  justify-content: center;
  align-items: center;
}
section{
  margin-top:80px;
  height: 100vh;
}

.sidebox{
  margin-bottom: 20px; 
  display: flex; 
  justify-content:space-between; 
}

.numbox{
  font-size: 12px;
  border: 2px solid #C3DDEC; 
  border-radius:10px; 
  width: 40px; 
  text-align: center;
  color:#C3DDEC;
  margin: 0 10px;
}
</style>