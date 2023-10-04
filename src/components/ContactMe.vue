<template>
  <v-container class="hei">
    <v-card class="contact">
      <v-card-title> Formulario de Contacto </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitForm" v-model="formValid">
          <v-text-field
            v-model.trim="fullName"
            label="Nombre completo"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            v-model.trim="email"
            label="Email"
            :rules="emailRules"
          ></v-text-field>
          <v-textarea
            v-model.trim="detalle"
            label="Más detalles"
            required
            auto-grow
            rows="1"
            :rules="[(detalle ?? '').length <= 100]"
          >
          </v-textarea>
          <v-select
            v-model="selectedType"
            :items="types"
            label="Tipo de Contacto"
            required
          ></v-select>
          <div class="form-control">
            <h2>Hora de respuesta</h2>
            <div>
              <input
                id="time-temprano"
                name="hora"
                type="radio"
                value="Mañana"
                v-model="selectedTime"
              />
              <label for="time-temprano">Mañana</label>
            </div>
            <div>
              <input
                id="time-tarde"
                name="time"
                type="radio"
                value="Tarde"
                v-model="selectedTime"
              />
              <label for="time-tarde">Tarde</label>
            </div>
            <div>
              <input
                id="time-indiferente"
                name="time"
                type="radio"
                value="Indiferente"
                v-model="selectedTime"
              />
              <label for="time-indiferente">indiferente</label>
            </div>
          </div>
          <div>
            <v-row>
              <v-col cols="2">
                <v-btn
                  style="float: right"
                  type="submit"
                  color="primary"
                  :disabled="!(formValid && areFieldsValid)"
                  >Enviar</v-btn
                >
              </v-col>
              <v-col cols="10">
                <v-btn style="float: right" color="error" @click="resetForm">
                  <v-snackbar
                    class="alerta"
                    v-model="snackbarVisible"
                    :color="colorSnackBar"
                  >
                    {{ textSnackBar }}
                  </v-snackbar>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">mdi-cancel</v-icon>
                    </template>
                    Limpiar formulario
                  </v-tooltip>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      detalle: "",
      selectedType: "",
      selectedTime: null,
      types: ["Mensaje", "Entrevista", "Oferta"],
      nameRules: [
        (v) => !!v || "El nombre completo es requerido",
        (v) => /^[a-zA-Z\s]*$/.test(v) || "Solo se permiten letras",
        (v) =>
          (v ?? "").length > 4 || "El nombre debe tener más de 4 caracteres",
      ],
      emailRules: [
        (v) => !!v || "El correo electrónico es requerido",
        (v) =>
          /.+@.+\..+/.test(v) ||
          "El correo electrónico debe tener un formato válido",
      ],
      formValid: false,
      snackbarVisible: false,
      jsonCelular: null,
      textSnackBar: "",
      colorSnackBar: "",
    };
  },
  computed: {
    areFieldsValid() {
      return this.selectedTime !== null;
    },
  },
  created() {
    this.getCelular();
  },
  methods: {
    ...mapActions(["submitForm"]), // Mapea la acción desde Vuex
    openSnackBar(exito) {
      if (exito) {
        this.textSnackBar = "Formulario enviado con éxito!";
        this.colorSnackBar = "success";
      } else {
        this.textSnackBar = "Error al enviar el formulario.";
        this.colorSnackBar = "error";
      }
      this.snackbarVisible = true;
    },
    async getCelular() {
      {
        const response = await axios.get(
          "https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Lionel/celContacto.json"
        );
        this.jsonCelular = response.data;
      }
    },
    generateWhatsAppLink() {
      const message = `Hola, mi nombre es ${this.fullName}, mi correo es ${this.email}, y estoy interesado en ${this.selectedType}. Detalles: ${this.detalle}. Horario de respuesta preferido: ${this.selectedTime}.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://api.whatsapp.com/send?phone=${this.jsonCelular}&text=${encodedMessage}`;

      return whatsappLink;
    },
    async submitForm() {
      // Crear un objeto con los datos del formulario
      const formData = {
        fullName: this.fullName,
        email: this.email,
        detalle: this.detalle,
        selectedType: this.selectedType,
        selectedTime: this.selectedTime,
      };

      try {
        // Llamar a la acción Vuex para enviar el formulario usando this.$store.dispatch
        await this.$store.dispatch("submitForm", formData);

        // Abre el enlace de WhatsApp si es necesario
        const whatsappLink = this.generateWhatsAppLink();
        window.open(whatsappLink, "_blank");

        // Muestra el Snackbar de éxito
        this.openSnackBar(true);
      } catch (error) {
        // Manejar errores de envío del formulario aquí
        console.error("Error al enviar el formulario:", error);
        this.openSnackBar(false);
      }
      // Reiniciar el formulario
      this.resetForm();
    },
    resetForm() {
      this.fullName =
        this.email =
        this.detalle =
        this.selectedType =
        this.selectedTime =
          null;
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 50px;
  height: 100%;
}

.hei {
  height: 100%;
}

.alerta {
  margin-bottom: 15%;
}
</style>
