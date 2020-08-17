import Vue from "vue";
import "./registerServiceWorker";
import router from "./router";
import Vuelidate from "vuelidate";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/sass/style.scss";

// js
import "bootstrap";
// import "./assets/js/jquery-3.3.1.min.js";
// import "./assets/js/jquery.jplayer.min.js";
// import "./assets/js/jplayerInit.js";
import App from "./App.vue";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
