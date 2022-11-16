<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  
};
</script>

<style>
*{
  background-color: #353A40;
  color: #F8F9FA;
}
</style>
