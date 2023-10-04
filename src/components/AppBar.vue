<template>
  <v-app-bar max-height="55px" color="#75aadb" dense class="navbar">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <router-link to="/home">
          <v-btn icon v-if="showHomeButton" v-on="on">
            <v-icon>mdi-home</v-icon>
            <!-- Puedes cambiar 'mdi-home' al icono que desees -->
          </v-btn>
        </router-link>
      </template>
      <!-- Contenido del tooltip -->
      <span>Ir a la página de inicio</span>
    </v-tooltip>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["showHomeButton"]),
    // showHomeButton() {
    //   return this.$store.getters.showHomeButton;
    // }
  
  },
};
</script>