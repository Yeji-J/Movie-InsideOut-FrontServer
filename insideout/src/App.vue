<template>
  <v-app>
    <div id="appbar">
      <router-link :to="{name:'home'}"><img src="@/assets/logo.png" alt="logo" id="logo"/></router-link>
      <v-tabs>
        <v-tab><router-link :to="{name:'home'}">HOME</router-link></v-tab>
        <v-tab>COMMUNITY</v-tab>
        <!-- 토큰 여부에 따라 login / logout 버튼 교체 -->
        <div id="logout" v-if="this.$store.state.token">LOGOUT</div>
        <div id="login" v-else-if="!this.$store.state.token"
        @click="isModalViewed=true"
        >LOGIN/SIGNUP</div>
      </v-tabs>
    </div>

    <modal-view
    id="modalView"
    v-if="isModalViewed"
    @close-modal="isModalViewed=false">
      <modal-view-content/>
    </modal-view>
    <router-view/>
  </v-app>
</template>

<script>
import ModalViewContent from '@/components/ModalViewContent.vue'
import ModalView from '@/components/ModalView.vue'

export default {
  name: 'App',
  data(){
    return {
      isModalViewed: false,
    }
  },
  components: {
    ModalViewContent,
    ModalView
  },  
};
</script>

<style>
* {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#app{
  background-color: #23262b;
  color: #F8F9FA;
  position: relative;
}

#modalView{
  position: absolute;

}

div.v-tabs{
  margin: 20px 40px 0 0;
}

div.v-slide-group__wrapper{
  background-color: #23262b;
  color:#C3DDEC;
}

div.v-tab{
  margin-left: 5px;
}

div.v-slide-group__content{
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#logout,
#login {
  padding: 4.5px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  color: #353A40;
  width: 100px;
  height: 30px;
  background-color: #C3DDEC;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0 0 3px 3px #35383a;
  transition: transform 0.1s;
}

#login:hover{
  cursor: pointer;
  transform: scale(1.05);
}

#login:active {
  background-color: #C3DDEC;
  box-shadow: 0 5px rgb(97, 97, 97)83a;
  transform: translateY(4px);
}

#appbar{
  display:flex;
  align-items: center;
}

#logo{
  margin: 20px 0 0 40px;
  width: 170px;
}
</style>
