<template>
  <form>
    <!-- @submit.prevent="signUp" -->
    <label for="username">Username </label>
    <input type="text" id="username" v-model="username">  <br>

    <label for="password">Password </label>
    <input type="password" id="password" v-model="password"> <br>

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
}
</script>

<style scoped>


</style>