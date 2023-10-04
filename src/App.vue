<template>
  <v-app>
    <app-bar></app-bar>
    <router-view></router-view>   
     <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    AppFooter,
    
  },
};
</script>