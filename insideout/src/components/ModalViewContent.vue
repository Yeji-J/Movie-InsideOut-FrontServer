<template>
  <div id="modalViewContent">
    <div id="contentBox">
        <div id="imgDiv"><img src="#" alt=""></div>
        <div>
          <div id="formLink">
            <router-link :to="{name:'SignUpView'}">SignUp</router-link>
            <router-link :to="{name:'LoginView'}">Login</router-link>
          </div>
          <div id="formView">
            <router-view/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ModalViewContent',

}
</script>

<style scoped>
*{
  background-color: #ffffff00;
}

#modalViewContent{
  border-radius: 20px;
}

#contentBox{
  display: flex;
}

#imgDiv{
  width: 300px;
  background-color: #afbfc9da;
  border-radius: 20px 0 0 20px;
  height: 450px;
}

#formLink{
  display:flex;
  flex-direction: row-reverse;
  padding: 15px 10px 0 0;
}

a {
  color:#353A40;
  margin: 5px;
}


</style>