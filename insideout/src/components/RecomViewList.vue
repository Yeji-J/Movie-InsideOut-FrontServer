<template>
  <div>
    <h3 style="text-align:center;">Movie Suggesions for [ <span style="color:#C3DDEC; font-weight: bold;">{{this.feeling}}</span> ]</h3>
    
  </div>
</template>

<script>
export default {
  name: 'RecomViewList',
  props:{
    feeling:String,
  }
}
</script>

<style>

</style>