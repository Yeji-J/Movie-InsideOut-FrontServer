<template>
  <form @submit.prevent="login">
    <label for="username">Username </label>
    <input type="text" id="username" v-model="username">  <br>

    <label for="password">Password </label>
    <input type="password" id="password" v-model="password"> <br>

    <input type="submit" value="Login" class="login-btn"
    @click="checkLogin">
  </form>
</template>

<script>
export default {
  name:'LoginView',
  data(){
    return {
      username:null,
      password:null,
    }
  },
  methods:{
    login(){
      const username = this.username;
      const password = this.password;

      const payload = {
        username,
        password,
      }

      this.$store.dispatch('login', payload)
    },
    checkLogin(){
      const userString = localStorage.getItem('user')

      if (userString){
        window.location.reload()
      } else {
        alert('login failed !')
      }
    }
  
  }
}
</script>

<style scoped>


</style>