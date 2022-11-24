<template>
  <div id="community">
    <section id="board" style=" padding: 40px;">

      <div>
        <h4>Hot reviewers</h4>
        <hr>
        <div v-for="(hot_follower, idx) in hot_followers" :key="idx" class="sidebox" 
        @click="$router.push({name:'blog', params: {username:hot_follower?.username}})">
          <div style="background-color:white; border-radius:20px">IMG</div>
          <span>{{hot_follower.username}}</span>
          <div class="numbox">{{hot_follower.follower.length}}</div>
        </div>
      </div>

      <div style="margin: 60px 0;">
        <h4>Recent Posts</h4>
        <hr>
        <div v-for="post in recent_posts" :key="post.id" class="sidebox"
        @click="$router.push({name:'postdetail', params: {id:post.id}})">
          <div style="height: 22px; width: 180px; overflow:hidden;">{{post.title}}</div>...
          <div class="numbox">{{post.like_users.length}}</div>
        </div>
      </div>
    </section>

    <section id="article" style="width:fit-content; padding-top: 70px;">
      <community-article/> <!-- :hot_posts="hot_posts"/> -->
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
    hot_followers(){
      return this.$store.state.community.hot_follower
    },
    recent_posts(){
      return this.$store.state.community.recent_post
    },
    // hot_posts(){
    //   return this.$store.state.community.hot_post
    // }
  },
  created(){
    this.$store.dispatch('getCommunity')
  },
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

.sidebox:hover{
  cursor: pointer;
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