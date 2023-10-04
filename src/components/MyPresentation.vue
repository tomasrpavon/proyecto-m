<template>
  <div class="d-flex justify center align-center">
    <v-card width="556">
      <v-progress-linear
        indeterminate
        color="#75aadb"
        v-if="isLoading"
      ></v-progress-linear>

      <v-card-title>Lionel Andres Messi</v-card-title>

      <v-card-text class="mt-4">
        <v-row align="center" class="mx-0"> </v-row>
        {{ presentationData }}
      </v-card-text>
    </v-card>

    <v-img
      class="ml-3"
      lazy-src="https://www.aljazeera.com/wp-content/uploads/2022/12/SSS10784_1.jpg?resize=1800%2C1800"
      max-width="450px"
      src="https://www.aljazeera.com/wp-content/uploads/2022/12/SSS10784_1.jpg?resize=1800%2C1800"
    ></v-img>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MyPresentation",
  computed: {
    ...mapGetters(["presentationData"]),
    isLoading() {
      return this.presentationData === null;
    },
  },
  methods: {
    ...mapActions(["fetchPresentation"]),
  },
  mounted() {
    this.fetchPresentation(); // Llama a la acción al cargar el componente
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  height: 100%;
}

.ml-3 {
  margin-left: 0.75rem;
  border-radius: 4px;
}
</style>
