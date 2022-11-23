<template>
  <div style="display:flex; align-items:center; flex-direction: column;
  margin-top: 100px; width: 100%">
    <h2>Create Post</h2>

    <section style="display:flex; flex-direction: column; align-items:center;">
      <div style="min-width: 300px; display:flex; justify-content: center; 
      width: 25%; align-items: center; margin: 25px 0;">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="width: 50px; color:#c3ddecd0"/>
        <input type="text" v-model="search" placeholder="Search Movie" class="search-bar">
      </div>

      <ckeditor v-model="content" :config="editorConfig"></ckeditor>
    </section>
  </div>
</template>

<script>
export default {
  name:'PostCreateView',
  data(){
    return {
      title:null,
      content:null,
      editorConfig: {
          // The configuration of the editor.
        },
    }
  }
}
</script>

<style>
.search-bar {
  padding-left: 10px;
  width: 100%;
  height: 35px;
  background-color:#2c3036;
  border-radius: 5px;
}

.search-bar:focus{
  outline: none;
  caret-color: #F8F9FA;
  color: #F8F9FA;
}

.search-bar{
  color:#F8F9FA;
}

.post-title,
.post-content {
  min-width: 700px;
  border: 1px solid #C3DDEC;
}
</style>