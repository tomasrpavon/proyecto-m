<template>
  <v-card class="stats">
    <v-card-title>Estadisticas</v-card-title>
    <v-card-text class="scrollable-card">
      <v-progress-linear
        indeterminate
        color="#75aadb"
        v-if="isLoading"
      ></v-progress-linear>
      <v-data-table :items="statsData" hide-default-footer>
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.club }}</td>
            <td>{{ item.division }}</td>
            <td>{{ item.temporada }}</td>
            <td>{{ item.liga }}</td>
            <td>{{ item.copas }}</td>
            <td>{{ item.internacional }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.media }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { /*mapGetters,*/ mapActions } from "vuex";

export default {
  name: "MyStats",
  data() {
    return {
      statsData: [],
      isLoading: false,
    };
  },

  methods: {
    ...mapActions(["fetchStats"]),
    async loadStats(){
      try {
        this.isLoading = true
      this.statsData = await this.fetchStats();
      } catch (error){
        console.error("Error al cargar las Stats", error);
      }
      this.isLoading = false
    }
  },
  created() {
    this.loadStats();
  },
};
</script>

<style scoped>
.stats {
  height: 100%;
}
</style>
