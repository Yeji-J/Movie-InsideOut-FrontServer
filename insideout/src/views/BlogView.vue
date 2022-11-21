<template>
  <div id="blog">
    <!-- SIDEBAR -->
    <div id="sidebar">
      <span>Hello, <span style="font-size: 24px ">Username</span></span>
      <div class="profile" style="background-color:#c3ddecd0; width: 100%;">
        <div><span>123</span><span>123</span><span>123</span></div>
        <div style="font-size:10px"><span>Reviews</span><span>Followers</span><span>Following</span></div>
      </div>
      <div class="bar-item" @click="isClicked('favorites')" :class="{'is-selected': this.favorites}">
        <font-awesome-icon icon="fa-solid fa-heart" style="margin-right: 10px;"/> Favorites</div>
        
      <div class="bar-item" @click="isClicked('watchlist')" :class="{'is-selected': this.watchlist}">
        <font-awesome-icon icon="fa-solid fa-clapperboard" style="margin-right: 10px;"/>Watchlist</div>

      <div class="bar-item" @click="isClicked('reviews')" :class="{'is-selected': this.reviews}">
        <font-awesome-icon icon="fa-solid fa-comment-dots" style="margin-right: 10px;"/>My Review</div>
        
      <div class="bar-item" @click="isClicked('history')" :class="{'is-selected': this.history}">
        <font-awesome-icon icon="fa-solid fa-film" style="margin-right: 10px;"/>Movie History</div>
    </div>

    <!-- CONTENT -->
    <div id="content" style="padding: 50px 90px;">
      <my-watchlist v-if="this.watchlist"/>
      <my-review v-if="this.reviews"/>
      <my-favorites v-if="this.favorites"/>
      <my-history v-if="this.history"/>
    </div>
  </div>
</template>

<script>
import MyReview from '../components/MyReview.vue'
import MyWatchlist from '../components/MyWatchlist.vue'
import MyFavorites from '../components/MyFavorites.vue'
import MyHistory from '../components/MyHistory.vue'

export default {
  name:'BlogView',
  components:{
    MyWatchlist,
    MyReview,
    MyFavorites,
    MyHistory,
  },
  data(){
    return{
      favorites:true,
      watchlist:false,
      reviews:false,
      history: false,
    }
  },
  methods:{
    isClicked(params){
      if (params==='watchlist'){
        this.watchlist=true
        this.reviews=false
        this.favorites=false
        this.history=false
      } else if (params==='reviews'){
        this.watchlist=false
        this.reviews=true
        this.favorites=false
        this.history=false
      } else if (params==='favorites'){
        this.watchlist=false
        this.reviews=false
        this.favorites=true
        this.history=false
      } else {
        this.watchlist=false
        this.reviews=false
        this.favorites=false
        this.history=true
      }
    }
  },
  // beforeCreate(){
  //   this.$store.dispatch('getUserInfo')
  // }
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
}

#sidebar{
  font-size: 17px;
  padding-bottom: 30px;
  min-width: 200px;
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.profile {
  color: #23262b;
  height: 80px;
  padding-top: 20px;
}

#content{
  min-width: 500px;
  width: 55%;
}

.bar-item{
  transition: transform 0.2s linear;
}

.bar-item:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.bar-item:active{
  transform: translateY(10px);
}

.is-selected{
  font-size: 22px;
  font-weight: bold;
  color:#C3DDEC;
}

</style>