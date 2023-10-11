import axios from "axios";

export default {
  async fetchPresentation() {
    try {
      const response = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Lionel/presentacion.json"
      );
      return response?.data;
    } catch (error) {
      console.error("Error al obtener la presentación:", error);
    }
  },
  async fetchStats() {
    try {
      const response = await axios.get(
        "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Lionel/historico.json"
      );
      console.log(
        "🚀 ~ file: actions.js:19 ~ fetchStats ~ response:",
        response
      );
      return response?.data;
    } catch (error) {
      console.error("Error al obtener las estadísticas:", error);
    }
  },
  async submitForm(formData) {
    try {
      const response = await axios.post(
        "https://macena-2f6af-default-rtdb.firebaseio.com/contacto.json",
        formData
      );

      if (response.status === 200) {
        console.log("Formulario enviado con éxito");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  },
};
