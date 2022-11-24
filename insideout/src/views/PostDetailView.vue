<template>
  <div style="max-width:800px; margin: 100px auto; ">
    <!-- WRITER -->
    <span style="margin-left: 1em;">Writer : {{this.post?.username}}</span>
    <span style="margin-left: 36em;">{{this.post?.like_users.length}} Likes</span>

    <div class="post-title" style="border-radius:10px; height: 60px; 
      display:flex; justify-content: space-between; text-align: center;">
      <!-- MOVIE TITLE -->
      <h5>Movie : {{this.post?.movie.title}}</h5>
      <!-- LIKE -->
      
      <font-awesome-icon icon="fa-solid fa-heart" style="position:static;" @click="getLike"
      v-if="isLiked==true" class="heart-btn fa-2x"/>
      <font-awesome-icon icon="fa-regular fa-heart" style="position:static;" @click="getLike"
      v-if="isLiked==false" class='heart-btn fa-2x'/>

      
    </div>

    <!-- POST TITLE & CONTENT -->
    <div class="post-content" style="border-radius:10px;">
        Title : {{post?.title}}
        <hr style="color:#C3DDEC; ">        
      {{post?.content}}
    </div>

    <div v-if="this.post?.username === this.username"
    style="display:flex; justify-content:space-between;">
      <span @click="$router.go(-1)" class="back"><font-awesome-icon icon="fa-solid fa-left-long" /> BACK</span>
      <span>
        <font-awesome-icon icon="fa-solid fa-pen" class="updateReview" @click="goUpdate"/>
        <font-awesome-icon icon="fa-solid fa-trash" style="margin:0 15px;" class="deleteReview" 
        @click="deletePost()"/>
      </span>
    </div>

    
  </div>
</template>

<script>
export default {
  name:'PostDetailView',
  data(){
    return{
      username: localStorage.getItem('username'),
    }
  },
  computed:{
    isLiked(){
      return this.$store.state.postLike
    },
    post(){
      return this.$store.state.post
    },
  },
  created(){
    this.$store.dispatch('getPost', this.$route.params.id)
  },
  methods:{
    getLike(){
      const payload = {
        type:'post',
        id: this.$route.params.id
      }
      this.$store.dispatch('getLike', payload) 
    },
    deletePost(){
      this.$store.dispatch('deletePost', this.$route.params.id)
      this.$router.go(-1)
    },
    goUpdate(){
      this.$router.push({name:'postupdate', params:{id:this.$route.params.id}})

    }
  },
  
  
}
</script>

<style>
.heart-btn{
  position: absolute;
  color: #ec407a;
  top: 920px;
  left: 485px;
}

.heart-btn,
.back{
  transition: transform 0.2s linear;
}

.back:hover,
.heart-btn:hover{
  cursor: pointer;
  transform: scale(1.2);
}
</style>