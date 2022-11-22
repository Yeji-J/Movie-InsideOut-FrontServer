<template>
  <div>
    <div style="display:flex; justify-content:space-between; align-items: center;">
      <h2>
        <font-awesome-icon icon="fa-solid fa-pen-to-square" 
        style="color:#b39ddb; margin: 0 10px;"/>Post
      </h2>
      <div class="add-btn"><font-awesome-icon icon="fa-solid fa-plus" /> Add</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name:'MyPost',
}
</script>

<style scoped>

.add-btn{
  margin-right: 20px;
  font-size: 18px; 

  transition: transform 0.1s linear;
}
.add-btn:hover{
  cursor:pointer;
  transform: scale(1.05);
}

.add-btn:active{
  transform: translateY(2.5px);
}
  

</style>