<template>
  <div id="modal-content">
    <h3>Login/Signup</h3>
    <login-view/>
    <signup-view/>
  </div>

</template>

<script>
import LoginView from '@/components/LoginView.vue'
import SignupView from '@/components/SignUpView.vue'

export default {
  name:'ModalViewContent',
  components: { 
    LoginView,
    SignupView,
  },

}
</script>

<style scoped>
#modal-content{
  color:#23262b;
}
a{
  text-decoration: none;
  color:#23262b;
}

</style>