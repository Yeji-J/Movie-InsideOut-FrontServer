<template>
  <div id="blog">
    <!-- SIDEBAR -->
    <div id="sidebar">

      <div class="profile" style="display:flex; flex-direction: column; align-items:center">
        <span style="margin-bottom: 30px; font-size: 26px;">{{this.$route.params.username}}</span>

        <!-- FOLLOW BUTTON -->
        <div v-if="this.nowUser != this.$route.params.username">
          <h6 v-if="isFollowed==false" @click="getFollow" class="follow-btn"
          style="margin-bottom: 30px; border-radius: 10px; border: 2px solid #c3ddecd0;
          width: 90px; height: 30px; display: flex; justify-content: center; align-items: center;"
          >Following</h6>


          <h6 v-if="isFollowed==true" @click="getFollow" class="follow-btn"
          style="margin-bottom: 30px; border-radius: 10px; border: 2px solid #c3ddecd0;
          width: 90px; height: 30px; display: flex; justify-content: center; align-items: center;"
          >UnFollowing</h6>
        </div>
        


        <div style="background-color:#c3ddecd0; color:#23262b; padding: 10px 0; width: 100%;">
          <div><font-awesome-icon icon="fa-solid fa-comment-dots" class="icon" />Reviews | {{this.userInfo?.reviews.length}}</div>
          <div><font-awesome-icon icon="fa-solid fa-users" class="icon" />Follower | {{this.userInfo?.follower_count}}</div>
          <div><font-awesome-icon icon="fa-solid fa-user" class="icon" />Following | {{this.userInfo?.following_count}}</div>
        </div>
        
      </div>


      <div class="bar-item" @click="isClicked('favorites')" :class="{'is-selected': this.favorites}">
        <font-awesome-icon icon="fa-solid fa-heart" class="icon"/> Favorites</div>
        
      <div class="bar-item" @click="isClicked('watchlist')" :class="{'is-selected': this.watchlist}">
        <font-awesome-icon icon="fa-solid fa-clapperboard" class="icon"/>Watchlist</div>

      <div class="bar-item" @click="isClicked('posts')" :class="{'is-selected': this.posts}">
        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="icon"/>Post</div>
        
      <div
      class="bar-item" @click="isClicked('history')" :class="{'is-selected': this.history}">
        <font-awesome-icon icon="fa-solid fa-film" class="icon"/>Movie History</div>
    </div>

    <!-- CONTENT -->
    <div id="content" style="padding: 50px 90px;">
      <my-favorites :favorites="this.userInfo?.favorites" v-if="this.favorites"/>
      <my-watchlist v-if="this.watchlist"/>
      <my-post v-if="this.posts"/>
      <my-history v-if="this.history" :reviews="this.userInfo?.reviews"/>
    </div>
  </div>
</template>

<script>
import MyPost from '@/components/MyPost.vue'
import MyWatchlist from '../components/MyWatchlist.vue'
import MyFavorites from '../components/MyFavorites.vue'
import MyHistory from '../components/MyHistory.vue'
import axios from 'axios'

export default {
  name:'BlogView',
  components:{
    MyWatchlist,
    MyPost,
    MyFavorites,
    MyHistory,
  },
  data(){
    return{
      nowUser: localStorage.getItem('username'),
      favorites:true,
      watchlist:false,
      posts:false,
      history: false,
    }
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    },
    isFollowed(){
      return this.userInfo?.is_followed
    }
  },
  methods:{
    isClicked(params){
      if (params==='watchlist'){
        this.watchlist=true
        this.posts=false
        this.favorites=false
        this.history=false
      } else if (params==='posts'){
        this.watchlist=false
        this.posts=true
        this.favorites=false
        this.history=false
      } else if (params==='favorites'){
        this.watchlist=false
        this.posts=false
        this.favorites=true
        this.history=false
      } else {
        this.watchlist=false
        this.posts=false
        this.favorites=false
        this.history=true
      }
    },
    checkFollow(is_followed){
      const btnText = document.querySelector('.follow-btn')

      if (is_followed) {
        btnText.innerText = 'UnFollowing'
      } else {
        btnText.innerText = 'Following'
      }
    },
    // GET follow
    getFollow(){
      const API_URL = "http://127.0.0.1:8000"
      const token = localStorage.getItem('user')

      axios({
        method:'get',
        url: `${API_URL}/profile/follow/${this.$route.params.username}/`,
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          // this_followed = res.data.is_followed
          this.$store.dispatch('getUser', this.$route.params.username)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
  },
  created(){
    this.$store.dispatch('getUser', this.$route.params.username)
  },
}
</script>

<style scoped>
#blog {
  display:flex;
  justify-content: center;
  margin-top: 120px;
}

#sidebar,
#content {
  border: 3px solid #c3ddecd0;
  border-radius: 10px;
  height: 80vh;
  margin: 0 20px;
  min-width: 200px;
}

#sidebar{
  font-size: 20px;
  padding-bottom: 30px;
  min-width: 200px;
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#content{
  min-width: 500px;
  width: 55%;
}

.bar-item,
.follow-btn{
  transition: transform 0.2s;
}

.bar-item:hover,
.follow-btn:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.bar-item:active,
.follow-btn:active{
  transform: translateY(5px);
}

.is-selected{
  font-size: 23px;
  font-weight: bold;
}

.icon{
  margin-right: 10px;
  width: 15px;
}


</style>