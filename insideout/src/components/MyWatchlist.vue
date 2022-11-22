<template>
  <div>
    
      <h2>
        <font-awesome-icon icon="fa-solid fa-clapperboard"
        style="color:#9ccc65; margin: 0 10px;" />
        Watchlist</h2>
      <hr>

    <section style="display:flex; justify-content: center; width: 80%;">
      <div>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
        <input type="text" v-model="search" placeholder="Search Movie" class="search-bar">
      </div>

      <div class="search-btn">Search</div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'MyWatchlist',
  data(){
    return {
      search: null,
    }
  }
}
</script>

<style scoped>

.search-bar,
.search-btn {
  height: 30px;
  border: 2px solid #c3ddecd0;
  border-radius: 10px;
}

.search-bar:focus{
  outline: none;
  caret-color: #F8F9FA;
  color: #F8F9FA;
}

.search-bar{
  color:#F8F9FA;
}

.search-btn{
  margin-left: 20px;
  padding: 0 2px;
  border: none;
  background-color:#c3ddecd0;
  color:#23262b;
  box-shadow: 0 0 2px 2px #272f35;
}

</style>