<template>
  <div id="homeMovie">
    <img :src="imgSrc" alt="" />
    <span class="genre"
      >{{ movie.release_date.split("-")[0] }} /
      {{ movie.genres[0]["name"] }}</span
    >
    <span class="movieTitle">{{ movie.title }}</span>
  </div>
</template>

<script>
export default {
  name: "MovieRecentItem",
  data() {
    return {
      imgSrc: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`,
    }
  },
  props: {
    movie: Object,
  },
}
</script>

<style></style>
