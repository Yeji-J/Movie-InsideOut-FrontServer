<template>
  <div style="margin-top: 100px; ">
    <h2 style="text-align:center">Pick a Feeling !</h2>
    <nav style="width: 100%; display:flex; justify-content: space-evenly; margin: 50px 0 100px 0; text-align: center;">
      <div @click="recommend('Joy')"><img src="@/assets/joy.png" style="width:75px;"><h4>Joy</h4></div>
      <div @click="recommend('Sadness')"><img src="@/assets/sad.png" style="width:110px;"><h4>Sadness</h4></div>
      <div @click="recommend('Anger')"><img src="@/assets/anger.png" style="width:120px;"><h4>Anger</h4></div>
      <div @click="recommend('Fear')"><img src="@/assets/fear.png" style="width:140px;"><h4>Fear</h4></div>
      <div @click="recommend('Disgust')"><img src="@/assets/disgust.png" style="width:120px;"><h4>Disgust</h4></div>
    </nav>

    <recom-view-list v-if="feeling" :feeling="feeling"/>
    
  </div>
</template>

<script>
import RecomViewList from '@/components/RecomViewList.vue';

export default {
  name:'RecomView',
  data(){
    return{
      feeling:null,
    }
  },
  components:{
    RecomViewList
  },
  methods:{
    recommend(feeling){
      this.feeling = feeling
    },

  }
}
</script>

<style scoped>
nav div{
  transition: transform 0.1s;
}

nav div:hover{
  cursor: pointer;
  transform: scale(1.05);
}

nav div:active{
  transform: translateY(4px);
}
</style>