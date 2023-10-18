<template>
  <v-card class="card">
    <v-data-table
      :headers="headers"
      :items="titles"
      :items-per-page="5"
      class="table"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Club",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Titulo", value: "titulo" },
        { text: "Año", value: "time" },
      ],
      titles: [
        {
          name: "F.C. Barcelona",
          titulo: "La Liga",
          time: "2005",
        },
        {
          name: "Selección Argentina",
          titulo: "Copa del Mundo",
          time: "2022",
        },
        {
          name: "Inter Miami",
          titulo: "Leagues Cup",
          time: "2023",
        },
        {
          name: "PSG",
          titulo: "Ligue 1",
          time: "2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  height: 100%;
}
.table {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 50px;
  border: 1px #000;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
</style>
