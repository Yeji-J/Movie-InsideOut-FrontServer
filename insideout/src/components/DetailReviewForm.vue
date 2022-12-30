<template>
  <form id="reviewForm" @submit.prevent="createReview">
    <span style="font-size: 25px; margin-right: 20px">{{ movie?.title }}</span>

    <!-- RATINGS -->
    <span class="star">
      ★★★★★
      <span>★★★★★</span>
      <input
        type="range"
        @input="drawStar"
        v-model="vote"
        step="1"
        min="0"
        max="10"
      />
    </span>
    <div>
      <textarea
        cols="30"
        rows="10"
        placeholder="Write your review !"
        v-model.trim="content"
      ></textarea>
      <input
        type="submit"
        value="write"
        class="review-btn"
        style="padding: 2px 7px; margin: 10px"
      />
    </div>
  </form>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
const token = localStorage.getItem('user')

export default {
  name: 'DetailReviewForm',
  data() {
    return {
      vote: 0,
      content: null,
    }
  },
  props: {
    movie: Object,
  },
  methods: {
    drawStar(event) {
      document.querySelector('.star span').style.width = `${
        event.target.value * 15
      }px`
    },
    createReview() {
      if (!this.content) {
        alert('Please write the content')
        return false
      }

      axios({
        method: 'post',
        url: `${API_URL}/movies/${this.$route.params.id}/review_create/`,
        data: {
          content: this.content,
          vote: this.vote,
        },
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
        .then(() => {
          this.$emit('close-form')
          this.$emit('close-btn')
          this.$emit('getReviews')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
#reviewForm {
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  border: 0.5px solid #f8f9fa;
  padding: 20px 40px;
}

textarea {
  color: #f8f9fa;
  width: 80%;
  min-width: 300px;
  max-height: 60px;
  font-size: 17px;
  padding: 10px;
  margin: 20px;
  margin-right: 30px;
  border: 0;
  resize: none;
}

textarea:hover {
  border-bottom: solid 1px #f8f9fa;
}

textarea:focus {
  outline: none;
  caret-color: #f8f9fa;
}

textarea::-webkit-scrollbar {
  width: 10px;
}

textarea::-webkit-scrollbar-corner {
  display: none;
}

textarea::-webkit-scrollbar-thumb {
  background-color: #c3ddec;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
  box-shadow: inset 0 0 2px #c3ddecc5;
}

.star {
  position: relative;
  font-size: 30px;
  color: #ddd;
}

.star input {
  width: 160px;
  height: 100%;
  padding: 15px 0;
  position: absolute;
  top: 0.5px;
  left: 0;
  cursor: pointer;
  opacity: 0;
}

.star span {
  width: 0;
  position: absolute;
  left: 7px;
  color: rgb(255, 188, 4);
  overflow: hidden;
  pointer-events: none;
}

.review-btn,
.form-btn {
  border: 1px solid #f8f9fa;
  transition: transform 0.3;
  border-radius: 10px;
}

.review-btn:hover,
.form-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.review-btn:active,
.form-btn:active {
  transform: translateY(4px);
}

.form-btn {
  padding: 7px;
  font-size: 13px;
  display: inline-block;
}
</style>
