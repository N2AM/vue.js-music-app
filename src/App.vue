<template>
  <div id="app">
    <Header></Header>
    <Preloader></Preloader>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import Preloader from "@/components/preload/Preloader.vue";
import Header from "@/components/marginals/Header.vue";
import Footer from "@/components/marginals/Footer.vue";

import Vue from "vue";
import Axios, { AxiosResponse } from "axios";

export default Vue.extend({
  data() {
    return {
      property: "",
      info: {},
      errored: false,
      loading: true,
    };
  },
  components: { Preloader, Header, Footer },
  beforeCreate() {
    console.log("Nothing gets called before me!");
  },
  created() {
    this.property = "Example property update.";
    console.log(
      "propertyComputed will update, as this.property is now reactive."
    );
  },
  beforeMount() {
    console.log(`this.$el doesn't exist yet, but it will soon!`);
  },
  mounted() {
    Axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  beforeUpdate() {
    console.log(this.info);
  },
});
// Vue.http.interceptors.push((request, next)  => {
//   request.headers['Authorization'] = auth.getAuthHeader()
//   next((response) => {
//     if(response.status == 401 ) {
//       auth.logout();
//       router.go('/login?unauthorized=1');
//     }
//   });
// });
</script>
