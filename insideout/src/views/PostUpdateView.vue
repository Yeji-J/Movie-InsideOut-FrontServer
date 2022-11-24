<template>
  <div style="display:flex; align-items:center; flex-direction: column; margin-top: 100px; width: 100%">
    <!-- POST INPUT -->
    <section style="display:flex; flex-direction: column; align-items:center; width: fit-content;">
      <!-- MOVIE TITLE -->
      <h4>{{post?.movie.title}}</h4>

      <!-- TITLE -->
      <input type="text" v-model="title" class="userInput post-title" placeholder="Title" value="this.post?.title">

      <!-- CONTENT -->
      <textarea cols="30" rows="10" v-model="content" class="post-content" placeholder="Content"></textarea>

      <!-- BUTTONS -->
      <div style="display:flex; justify-content: right; width: 100%;">
        <div class="login-btn btns" @click="savePost">UPDATE</div>
        <div class="login-btn btns" @click="$router.go(-1)">CANCEL</div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name:'PostUpdateView',

  data(){
    return {
      post:this.$store.state.post,
      title:this.$store.state.post.title,
      content:this.$store.state.post.content,
    }
  },
  methods:{
    savePost(){
      const API_URL = "http://127.0.0.1:8000"
      const token = localStorage.getItem('user')

      if (!this.title.trim()){
        alert('Please enter a title')
      } else if (!this.content.trim()){
        alert('Please enter a content')
      }

      axios({
        method:'put',
        url:`${API_URL}/community/${this.post.id}/`,
        data:{
          title:this.title,
          content:this.content,
        },
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          console.log('hi')
          this.$router.go(-1)
        })
        .then((err)=>{
          console.log(err)
        })

    }
  },
  created(){
    this.$store.dispatch('getPost', this.$route.params.id)
  },
}
</script>

<style>
</style>