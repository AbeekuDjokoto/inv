<template>
  
  <router-view></router-view>

</template>

<script>
import HomeViewVue from './views/HomeView.vue'
import AboutViewVue from './views/AboutView.vue'
import DashboardViewVue from './views/DashboardView.vue'
export default {
  components: {
    "app-login": HomeViewVue,
    "app-signup": AboutViewVue,
    "app-dashboard": DashboardViewVue,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  
}
</style>