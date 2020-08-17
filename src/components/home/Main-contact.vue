<template>
  <!-- About Section Begin -->
  <section class="about spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about__pic">
            <img src="@/assets/img/about/about.png" alt />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about__text">
            <div class="section-title">
              <h2>ABDULBASIT ABDULSAMAD</h2>
              <h1>About A Reciter</h1>
            </div>
            <p>ABDULBASIT ABDULSAMAD an Egyptian Quran reciter and is regarded as one of the best reciters of the Quran of his time. He had won three world Qira'at competitions in the early 1970s. ‘Abdus-Samad was one of the first huffaz to make commercial recordings of his recitations, and the first president of the Reciters' Union in Egypt. At 10, Abdul Basit finished learning the entire Quran by heart in his village.</p>
            <router-link class="primary-btn" to="/contact">CONTACT ME</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section End -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainContact"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about__pic {
  height: 100%;

  img {
    height: 97.5%;
  }
}
</style>
