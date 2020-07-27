<template>
  <!-- Header Section Begin -->
  <header class="header" :class="{ 'header--normal' : !($route.path == '/') }">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-2">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="Logo" />
            </router-link>
          </div>
        </div>
        <div class="col-lg-10 col-md-10">
          <div class="header__nav">
            <nav class="header__menu mobile-menu">
              <ul>
                <li class="active">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <a href="./discography.html">Discography</a>
                </li>
                <li>
                  <a href="./tours.html">Tours</a>
                </li>
                <li>
                  <a href="./videos.html">Videos</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="dropdown">
                    <li>
                      <a href="./about.html">About</a>
                    </li>
                    <li>
                      <a href="./blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </nav>
            <div class="header__right__social">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu-wrap"></div>
    </div>
  </header>
  <!-- Header Section End -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      // colorNav: false
    };
  },
  watch: {
    // route() {
    //   if (this.$route.path == "/") {
    //     this.colorNav = false;
    //     console.log("s");
    //   } else {
    //     this.colorNav = true;
    //   }
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
