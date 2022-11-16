<template>
  <div id="app">
    <!-- nav bar -->
    <nav>
      <router-link :to="{name:'home'}">Home</router-link>
      <div id="modal" @click="openModal">Login/SignUp</div>        
    </nav>

    <!-- login/signup Modal -->
    <ModalView v-if="isModalViewed" @close-modal="isModalViewed=false">
      <modal-view-content/>
    </ModalView>

    <router-view/>
  </div>
</template>

<script>
import ModalView from './components/ModalView.vue';
import ModalViewContent from './components/ModalViewContent.vue';

export default {
  components:{
    ModalView,
    ModalViewContent,
  },
  data(){
    return {
      isModalViewed: false,
    }
  },
  methods:{
    openModal(){
      this.isModalViewed = true;
      this.$router.push({name:'LoginView'})
    }
  }
}
</script>

<style>

*{
  background-color:#353A40;
  color: #F8F9FA;
}

a {
  text-decoration: none;
}

#app {
  text-align: center;
}

#modal:hover{
  cursor: pointer;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #C3DDEC;
}
</style>
