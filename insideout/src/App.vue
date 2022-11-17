<template>
  <v-app>
    <v-tabs>
      <v-tab>HOME</v-tab>
      <v-tab>COMMUNITY</v-tab>
      <div id="login">LOGIN/SIGNUP</div>
    </v-tabs>
    
    <v-main id="app">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  
};
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #23262b;
  color: #F8F9FA;
}

div.v-tabs{
  padding: 20px 40px 0 0;
}

div.v-slide-group__wrapper{
  background-color: #23262b;
  color:#C3DDEC;
}

div.v-slide-group__content{
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#login {
  padding: 3px;
  color: #353A40;
  height: 30px;
  background-color: #C3DDEC;
  border-radius: 10px;
}

#login:hover{
  cursor: pointer;
}

</style>
