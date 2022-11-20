<template>
  <form @submit.prevent="login">
    <label for="username">Username </label>
    <input type="text" id="username" v-model="username" class="userInput">  <br>

    <label for="password">Password </label>
    <input type="password" id="password" v-model="password" class="userInput"> <br>

    <input type="submit" value="Login" class="login-btn">
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

      // token을 localStorage에 저장하는 시간보다
      // token 값을 불러오는 게 더 빠르기 때문에
      // 로그인에 성공해도 alert 창이 뜸 
      // => timeout 함수로 0.5초 후 해당 로직 실행으로 바꿔주기
      setTimeout(()=>{
        const userString = localStorage.getItem('user')

        if (userString){
          window.location.reload()
        } else {
          alert('login failed !')
        }
      }, 500);

    },
  }
}
</script>

<style scoped>

</style>