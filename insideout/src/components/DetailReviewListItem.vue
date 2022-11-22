<template>
  <div>
    <div>
      <div style="display:flex; justify-content:space-between">
            <div>
              <span class="username" @click="$router.push({name:'blog', params:{username:review?.username}})" >
                {{review?.username}}</span> | 
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
          <div v-if="review?.username === username"
          style="margin-right: 50px;">
            <font-awesome-icon icon="fa-solid fa-pen" class="updateReview" @click="updateReview(); "/>
            <font-awesome-icon icon="fa-solid fa-trash" style="margin-left: 20px;" class="deleteReview" 
            @click="editReview(review)"/>
          </div>
      </div>
      
      <div>
        {{review?.content}}
      </div>
    </div>

    <update-review-form v-if="reviewId" :review="review" @close-form="reviewId=false"/>
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
      username: localStorage.getItem('username'),
      reviewId:false,

    }
  },
  props:{
    review:Object,
  },
  methods:{
    updateReview(){
      this.reviewId = !this.reviewId;
    },
    editReview(review){
      const payload = {
        type : 'DELETE',
        movieId: review.movie.movie_id,
        id: review.id, 
        data:{
          content: this.content,
          vote:this.vote,
        }
      }
      this.$store.dispatch('editReview', payload)
    }

  },
}
</script>

<style scoped>
.username:hover{
  cursor:pointer;
}

</style>