<template>
  <div style="display:flex; align-items:center; flex-direction: column; margin-top: 100px; width: 100%">
    <h2>Create Post</h2>
    <h6>Search and click a movie you want to write about</h6>

    <!-- SEARCH BAR -->
    <div style="min-width: 300px; display:flex; justify-content: center; align-items: center; margin: 25px 0;">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="width: 30px; color:#c3ddecd0"/>
      <input type="text" v-model="searchInput" placeholder="Enter movie title" class="search-bar" @keyup.enter="searchMovie"/>
    </div>

    <!-- SEARCH RESULT -->
    <div v-if="this.showResult" style="display:flex;">
      <div v-for="searchMovie in this.searchMovies" :key="searchMovie.id" @click="selectMovie(searchMovie)">
        <search-list :movie="searchMovie" />
      </div>
    </div>
    

    <!-- POST INPUT -->
    <section style="display:flex; flex-direction: column; align-items:center; width: fit-content;">
      <!-- MOVIE TITLE -->
      <h4 v-if="this.selectedMovie">{{this.selectedMovie.title}}</h4>

      <!-- TITLE -->
      <input type="text" v-model="title" class="userInput post-title" placeholder="Title">

      <!-- CONTENT -->
      <textarea cols="30" rows="10" v-model="content" class="post-content" placeholder="Content"></textarea>

      <!-- BUTTONS -->
      <div style="display:flex; justify-content: right; width: 100%;">
        <div class="login-btn btns" @click="savePost">SUBMIT</div>
        <div class="login-btn btns" @click="$router.go(-1)">HOME</div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import SearchList from '@/components/SearchList.vue'

export default {
  name:'PostCreateView',
  components:{
    SearchList,
  },
  data(){
    return {
      searchInput:null,
      title:null,
      content:null,
      // 일단 true로 => 영화 클릭하면 닫히게 만드는 기준 값
      showResult: false,
      selectedMovie: null,
    }
  },
  computed:{
    searchMovies(){
      return this.$store.state.searchMovies
    }
  },
  methods:{
    searchMovie(){
      this.showResult = true
      this.$store.dispatch('searchMovie', this.searchInput)
    },
    selectMovie(movie){
      this.showResult = false
      this.selectedMovie = movie
    },
    savePost(){
      const API_URL = "http://127.0.0.1:8000"
      const token = localStorage.getItem('user')

      if (!this.title.trim()){
        alert('Please enter a title')
      } else if (!this.content.trim()){
        alert('Please enter a content')
      }

      axios({
        method:'post',
        url:`${API_URL}/community/${this.selectedMovie.id}/create/`,
        data:{
          movie:this.selectedMovie,
          title:this.title,
          content:this.content,
        },
        headers:{
          Authorization: `JWT ${token}`
        }
      })
        .then(()=>{
          this.$router.go(-1)
        })
        .then((err)=>{
          console.log(err)
        })

    }
  }
}
</script>

<style>
.search-bar {
  padding-left: 10px;
  min-width: 600px;
  height: 35px;
  background-color:#2c3036;
  border-radius: 5px;
}

.search-bar:focus{
  outline: none;
  caret-color: #F8F9FA;
  color: #F8F9FA;
}

.search-bar{
  color:#F8F9FA;
}

.post-title,
.post-content {
  margin: 10px auto;
  min-width:750px;
  border: 2px solid #C3DDEC;
  padding: 15px;
  border-radius: 1px;
}

.post-content{
  min-height: 350px;
}

.btns{
  font-size: 15px;
  width: 65px;
  height: 30px;
  background-color:#c3ddecd7;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  margin-left: 10px;
  color:#2c3036;
  font-weight: bold;
  
}
</style>