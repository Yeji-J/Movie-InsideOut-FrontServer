<template>
  <div>
    <div v-for="review in reviews" :key="review?.id" style="display: flex; flex-direction: column;">
      <detail-review-list-item :review="review"/>
      <hr>
    </div>
  </div>
</template>

<script>
import DetailReviewListItem from '@/components/DetailReviewListItem.vue'

export default {
  name:'DetailReviewList',
  components:{
    DetailReviewListItem,
  },
  props:{
    reviews:Array
  },
}

</script>

<style>
.updateReview,
.deleteReview{
  transition: transform 0.2s linear;
}

.updateReview:hover,
.deleteReview:hover{
  cursor: pointer;
  transform: scale(1.2);
}

.deleteReview:hover{
  color:#f14848;
}

.updateReview:hover{
  color:#C3DDEC;
}
</style>