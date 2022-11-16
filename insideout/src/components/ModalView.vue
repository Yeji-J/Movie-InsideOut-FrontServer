<template>
  <div id="modalView">
    <div class="overlay"
    @click="closeModal"></div>
    <div class="modal-card">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name:'ModalView',
  methods:{
    closeModal(){
      this.$emit('close-modal')
      // modal창을 끄면 원래 있던 창으로 돌아가기
      this.$router.push({name:'home'})
    }
  }

}
</script>

<style scoped>

#modalView,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

/* .overlay {
  opacity: 0.5;
} */

.modal-card {
  border-radius: 18px;
  position:relative;
  max-width: 600px;
  margin: 100px auto;
  background-color: #ffffffe0;
  min-height: 450px;
  z-index: 10;
  opacity: 1;
}

</style>