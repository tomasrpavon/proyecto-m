<template>
  <v-footer class="footer" padless color="#75aadb">
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text class="d-flex justify-center">
        <div v-for="(icon, index) in icons" :key="index" class="mx-4">
          <a :href="getIconLink(index)" target="_blank">
            <v-icon size="24px" class="white--text">{{ icon }}</v-icon>
          </a>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-wikipedia"],
  }),
  methods: {
    getIconLink(index) {
      const links = [
        "https://www.facebook.com/leomessi/?locale=es_LA",
        "https://www.instagram.com/leomessi/",
        "https://es.wikipedia.org/wiki/Lionel_Messi",
      ];
      return links[index];
    },
  },
};
</script>
<style scoped></style>
