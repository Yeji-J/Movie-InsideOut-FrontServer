<template>
  <form id="reviewForm" @submit.prevent="editReview(review)" style="margin-top:10px;">
    <span style="font-size: 25px; margin-right: 20px;">{{review?.movie.title}}</span>
    
    <span class="star">
      ★★★★★
      <span>★★★★★</span>
      <input type="range" @input="drawStar" v-model="vote" step="1" min="0" max="10">
    </span>
    <div>
      <textarea cols="30" rows="10" placeholder="Write your review !" v-model.trim="content"></textarea>
      <input type="submit" value="EDIT" class="review-btn" 
      style="padding: 2px 7px; margin: 10px;">
    </div>
  </form>
</template>

<script>

export default {
  name:'UpdateReviewForm',
  data(){
    return {
      vote:this.review?.vote,
      content: this.review?.content,
    }
  },
  props:{
    review:Object,
  },
  methods:{
    drawStar(event) {
      document.querySelector('.star span').style.width = `${event.target.value * 15}px`;
    },
    editReview(review){
      console.log(review.vote)
      if (!this.content){
        alert('Please write the content')
      }
      const payload = {
        type : 'PUT',
        movieId: review.movie.movie_id,
        id: review.id, 
        data:{
          content: this.content,
          vote:this.vote,
        }
      }
      this.$store.dispatch('editReview', payload)
      this.$emit('close-form')
    }
  },
  mounted(){
  document.querySelector('.star span').style.width = `${this.review.vote * 15}px`;
  }
}
</script>

<style>

</style>