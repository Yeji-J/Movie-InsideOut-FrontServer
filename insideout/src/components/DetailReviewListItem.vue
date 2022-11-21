<template>
  <div>
    <div>
      <div style="display:flex; justify-content:space-between">
            <div>
              {{review?.username}} | 
              <v-rating
              style="display:inline-block; margin-bottom: 5px;"
              class="rating"
              background-color="amber"
              :value="review?.vote/2"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
            ></v-rating>
            <span style="margin-left: 10px; font-size: 12px;">[ {{review?.vote/2}} / 5 ]</span>
            <span style="margin-left: 20px; font-size: 10px;">{{review?.created_at.split('T')[0]}}</span>
          </div>
          <div style="margin-right: 50px;">
            <font-awesome-icon icon="fa-solid fa-pen" class="updateReview" @click="updateReview(); "/>
            <font-awesome-icon icon="fa-solid fa-trash" style="margin-left: 20px;" class="deleteReview" 
            @click="editReview({reviewId:review.id, value:'delete'})"/>
          </div>
      </div>
      
      <div>
        {{review?.content}}
      </div>
    </div>

    <update-review-form v-if="reviewId" :review="review"/>
  </div>
</template>

<script>
import UpdateReviewForm from '@/components/UpdateReviewForm.vue'

export default {
  name: 'DetailReviewListItem',
  components: {
    UpdateReviewForm,
  },
  data(){
    return {
      reviewId:false,
    }
  },
  props:{
    review:Object,
  },
  methods:{
    updateReview(){
      this.reviewId = !this.reviewId;
    }
  },
}
</script>

<style>

</style>