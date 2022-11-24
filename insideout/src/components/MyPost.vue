<template>
  <div id="history">
    <div style="display:flex; justify-content:space-between; align-items: center;">
      <h2>
        <font-awesome-icon icon="fa-solid fa-pen-to-square" 
        style="color:#b39ddb; margin: 0 10px;"/>Post
      </h2>
      <div v-if="this.username === this.$route.params.username"
      class="add-btn" @click="goCreate"><font-awesome-icon icon="fa-solid fa-plus" /> Add</div>
    </div>
    <hr>

    <!-- POST LIST -->
    <div class=card-container>
      <div class="cardbox" @click="goDetail(post.id)"
      v-for="post in posts" :key="post.id">
        <img :src="`https://image.tmdb.org/t/p/original${post?.movie.poster_path}`">
        <div style=" margin-left: 30px; display:flex; flex-direction: column;">
          <h4>
          {{post?.title}}</h4>
          <span>{{post?.content}}</span>{{post?.created_at.split('T')[0]}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'MyPost',
  data(){
    return {
      username: localStorage.getItem('username'),
    }
  },
  computed:{
    posts(){
      return this.$store.state.userInfo.posts
    },
  },
  methods:{
    goCreate(){
      this.$router.push({name:'postcreate'})
    },
    goDetail(postId){
      console.log(this.posts)
      this.$router.push({name:'postdetail', params:{id:postId}})
    }
  },
}
</script>

<style>

.add-btn{
  margin-right: 20px;
  font-size: 18px; 

  transition: transform 0.1s linear;
}
.add-btn:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.add-btn:active{
  transform: translateY(2.5px);
}
  

</style>