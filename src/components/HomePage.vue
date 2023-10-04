<template>
  <div class="centered-container">
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
      class="carousel"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <router-link :to="`/${slide.toLowerCase()}`">
          <v-sheet
            :style="{
              backgroundImage: `url(${slideImages[i]})`,
              backgroundSize: '100% 100%',
            }"
            height="100%"
            style="cursor: pointer; background-size: cover"
            class="fill-height"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                {{ slide }}
              </div>
            </v-row>
          </v-sheet>
        </router-link>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideImages: [
        "https://media.canalnet.tv/2019/06/14992044794351.jpg",
        "https://pbs.twimg.com/media/E5-8QIyXMAEiQwL.jpg:large",
        "https://media.tycsports.com/files/2021/12/04/367735/lionel-messi-balones-de-oro_862x485.jpg?v=1",
        "https://pbs.twimg.com/media/Eeh17F_XkBAg68P.jpg",
      ],
      slides: ["Presentation", "Stats", "Titulos", "Contact"],
    };
  },
};
</script>

<style scoped>
.carousel {
  width: 70%;
  border-radius: 20px;
}
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
