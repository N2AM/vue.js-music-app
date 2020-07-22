<template>
  <!-- Page Preloder -->
  <div v-if="show" id="preloder">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Preloader",
  data: function() {
    return {
      show: true
    };
  },
  mounted() {
    this.showToggle();
  },

  methods: {
    showToggle: function() {
      setTimeout(() => {
        this.show = false;
      }, 1500);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
