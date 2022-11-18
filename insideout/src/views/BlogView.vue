<template>
  <div id="blog">
    <div id="sidebar">
      <span>Hello, <span style="font-size: 24px ">Username</span></span>
      <div class="profile" style="background-color:#c3ddecd0; width: 100%;">
        <div><span>123</span><span>123</span><span>123</span></div>
        <div style="font-size:10px"><span>Reviews</span><span>Followers</span><span>Following</span></div>
      </div>
      <div class="bar-item" @click="isClicked('wishlist')" :class="{'is-selected': this.wishlist}">Movie Wishlist</div>
      <div class="bar-item" @click="isClicked('reviews')" :class="{'is-selected': this.reviews}">My Review</div>
      <div class="bar-item" @click="isClicked('movies')" :class="{'is-selected': this.movies}">Like Movies</div>
      <div class="bar-item" @click="isClicked('history')" :class="{'is-selected': this.history}">Movie History</div>
    </div>
    <div id="content" style="padding: 50px 90px;">
      <my-wishlist v-if="this.wishlist"/>
      <my-review v-if="this.reviews"/>
      <my-movie v-if="this.movies"/>
      <my-history v-if="this.history"/>
    </div>
  </div>
</template>

<script>
import MyReview from '../components/MyReview.vue'
import MyWishlist from '../components/MyWishlist.vue'
import MyMovie from '../components/MyMovie.vue'
import MyHistory from '../components/MyHistory.vue'

export default {
  name:'BlogView',
  components:{
    MyWishlist,
    MyReview,
    MyMovie,
    MyHistory,
  },
  data(){
    return{
      wishlist:true,
      reviews:false,
      movies:false,
      history: false,
    }
  },
  methods:{
    isClicked(params){
      if (params==='wishlist'){
        this.wishlist=true
        this.reviews=false
        this.movies=false
        this.history=false
      } else if (params==='reviews'){
        this.wishlist=false
        this.reviews=true
        this.movies=false
        this.history=false
      } else if (params==='movies'){
        this.wishlist=false
        this.reviews=false
        this.movies=true
        this.history=false
      } else {
        this.wishlist=false
        this.reviews=false
        this.movies=false
        this.history=true
      }
    }
  }
}
</script>

<style scoped>
#blog {
  display:flex;
  justify-content: center;
  margin-top: 7vh;
}

#sidebar,
#content {
  border: 3px solid #c3ddecd0;
  border-radius: 10px;
  height: 80vh;
  margin: 0 20px;
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