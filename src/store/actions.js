import axios from "axios";

export default {
  async fetchPresentation({ commit }) {
    try {
      const response = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Lionel/presentacion.json"
      );
      commit("setPresentationData", response.data);
    } catch (error) {
      console.error("Error al obtener la presentación:", error);
    }
  },
  async fetchStats({ commit }) {
    try {
      const response = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Lionel/historico.json"
      );
      commit("setStatsData", response.data);
    } catch (error) {
      console.error("Error al obtener las estadísticas:", error);
    }
  },
  async submitForm({ commit }, formData) {
    try {
      const response = await axios.post(
        "https://macena-2f6af-default-rtdb.firebaseio.com/contacto.json",
        formData
      );

      if (response.status === 200) {
        // Realiza una mutación si es necesario
        commit("formularioEnviadoExitosamente", true);
        console.log("Formulario enviado con éxito");
      }
    } catch (error) {
      // Manejar errores de envío del formulario aquí
      console.error("Error al enviar el formulario:", error);
    }
  },
};
