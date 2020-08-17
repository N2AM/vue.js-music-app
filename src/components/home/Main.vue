<template>
  <!-- Hero Section Begin -->
  <section class="hero spad set-bg" data-setbg="@/assets/img/hero-bg.png">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hero__text">
            <span>Holy Quran</span>
            <h1>Feel the heart beats</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              id="launch-modal"
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="play-btn video-popup"
            >
              <i class="fa fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="linear__icon">
      <i class="fa fa-angle-double-down"></i>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <iframe
              width="727"
              height="409"
              src="https://www.youtube.com/embed/4FaDSjkUHVo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="modal-footer border-0"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Main"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.modal.in .modal-dialog {
}
.modal-content {
  background-color: transparent !important;
  border: 0 !important;
  .modal-header {
    padding-top: 0;
    padding-bottom: 0;
    .close {
      color: #fff;
    }
  }

  iframe {
    width: 100%;

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
}
</style>
