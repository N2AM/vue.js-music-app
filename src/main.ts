import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/sass/style.scss";

// js
import "bootstrap";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
