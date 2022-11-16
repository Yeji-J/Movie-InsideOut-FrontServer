<template>
  <v-app id="modalViewContent" class="secondary">
    <div id="contentBox" >
        
        <div id="imgDiv"><img src="#" alt=""></div>
        <div>
          <v-tabs id="formLink" >
            <v-tab :ripple="false"><router-link :to="{name:'SignUpView'}">SignUp</router-link></v-tab>
            <v-tab :ripple="false"><router-link :to="{name:'LoginView'}">Login</router-link></v-tab>    
          </v-tabs>
          <div id="formView" >
            <router-view/>
          </div>
        </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name:'ModalViewContent',

}
</script>

<style scoped>
*{
  background-color: #F8F9FA;
}

.v-tab {
  font-weight: bold;
  color: #bbd1dfe7;
  background-color: #F8F9FA;

}

#contentBox{
  display: flex;
  background-color: #F8F9FA;
  border-radius: 20px;

}

#imgDiv{
  width: 300px;
  background-color: #bbd1dfe7;
  border-radius: 20px 0 0 20px;
  height: 450px;
}

#formLink{
  display:flex;
  flex-direction: row-reverse;
  padding: 15px 10px 0 0;
  color:#353A40;


}

a {
  color:#353A40;
  margin: 5px;
}

.v-tabs-slider {
  background-color: #bbd1dfe7;
}


</style>