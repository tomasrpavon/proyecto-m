import Vue from "vue";
import VueRouter from "vue-router";
import MyPresentation from "./components/MyPresentation.vue";
import MyStats from "./components/MyStats.vue";
import ContactMe from "./components/ContactMe.vue";
import NotFound from "./components/NotFound.vue";
import HomePage from "./components/HomePage.vue";
import MyTitles from "./components/MyTitles.vue";
import store from "./store/index.js"; // Importa el módulo Vuex con el nuevo nombre

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        // Oculta el botón cuando estamos en la ruta /home
        store.commit("setShowHomeButton", false);
        next();
      },
    },
    {
      path: "/presentation",
      component: MyPresentation,
      beforeEnter: (to, from, next) => {
        // Muestra el botón en otras rutas 
        store.commit("setShowHomeButton", true);
        next();
      },
    },
    {
      path: "/stats",
      component: MyStats,
      beforeEnter: (to, from, next) => {
        store.commit("setShowHomeButton", true);
        next();
      },
    },
    {
      path: "/contact",
      component: ContactMe,
      beforeEnter: (to, from, next) => {
        store.commit("setShowHomeButton", true);
        next();
      },
    },
    {
      path: "/titulos",
      component: MyTitles,
      beforeEnter: (to, from, next) => {
        store.commit("setShowHomeButton", true);
        next();
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      beforeEnter: (to, from, next) => {
        store.commit("setShowHomeButton", true);
        next();
      },
    },
  ],
});

export default router;
