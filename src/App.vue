<template>
  <div id="app">
    <Preloader></Preloader>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import Preloader from "@/components/preload/Preloader.vue";

import Vue from "vue";
export default Vue.extend({
  components: { Preloader }
});
</script>
