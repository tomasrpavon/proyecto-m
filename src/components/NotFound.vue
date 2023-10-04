<template>
  <div class="container">
    <h1>URL INCORRECTA</h1>
    <router-link to="/home">
      <v-btn text class="selected-button"> Volver a Home. </v-btn>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
