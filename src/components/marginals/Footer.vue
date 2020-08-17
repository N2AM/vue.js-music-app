<template>
  <!-- Footer Section Begin -->
  <footer class="footer spad set-bg" data-setbg="img/footer-bg.png">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="footer__address">
            <ul>
              <li>
                <i class="fa fa-phone"></i>
                <p>Phone</p>
                <h6>+201060767771</h6>
              </li>
              <li>
                <i class="fa fa-envelope"></i>
                <p>Email</p>
                <h6>nouranalrefaiportfolio@gmail.com</h6>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-6">
          <div class="footer__social">
            <h2>Listen To Holy Quraan</h2>
            <div class="footer__social__links">
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
        <div class="col-lg-3 offset-lg-1 col-md-6">
          <div class="footer__newslatter">
            <h4>Stay With me</h4>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit">
                <i class="fa fa-send-o"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      <div class="footer__copyright__text">
        <p>
          Copyright &copy; {{date}} All rights reserved | This Website is made with
          <i
            class="fa fa-heart"
            aria-hidden="true"
          ></i> by
          <a href="https://nouranalrefai.com" target="_blank">Nouran</a>
        </p>
      </div>
      <!-- <script>document.write(new Date().getFullYear());</script> -->
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data: function() {
    return {
      date: new Date().getFullYear()
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
