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
export default Vue.extend({
  components: { Preloader, Header, Footer },
});
</script>
