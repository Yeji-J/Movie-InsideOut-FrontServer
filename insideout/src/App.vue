<template>
  <v-app class="secondary">
      <v-tabs id="nav" class="secondary">
        <router-link :to="{name:'home'}"><v-tab class="secondary" :ripple="false"></v-tab>Home</router-link>
        <v-tab class="secondary" :ripple="false"><router-link :to="{name:'home'}">Community</router-link></v-tab>
        <v-tab class="secondary" :ripple="false"><div id="modal" @click="openModal">Login/SignUp</div></v-tab>
      </v-tabs>

      <v-spacer class="secondary"> </v-spacer>

      <v-main class="secondary">
        <ModalView v-if="isModalViewed" @close-modal="isModalViewed=false">
          <modal-view-content/>
        </ModalView>

        <router-view/>
      </v-main>
  </v-app>
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
a {
  text-decoration: none;
  color: black;

}
#app {
  text-align: center;
  color: #F8F9FA;
}
#modal:hover{
  cursor: pointer;
}

#nav {
  display: flex;
  flex-direction: row-reverse;
  padding: 30px;
}


.v-tabs-slider {
  background-color: #bbd1dfe7;
}
.v-ripple__container {
  background-color: none;
}

</style>