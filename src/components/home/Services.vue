<template>
  <!-- Services Section Begin -->
  <section class="services">
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-lg-6 p-0">
          <div class="services__left set-bg" data-setbg="@/assets/img/services/service-left.jpg">
            <a
              id="launch-modal"
              type="button"
              data-toggle="modal"
              data-target="#servicesModal"
              class="play-btn video-popup"
            >
              <i class="fa fa-play"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6 p-0">
          <div class="row services__list">
            <div class="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
              <div class="service__item deep-bg">
                <img src="@/assets/img/services/service-1.png" alt />
                <h4>Wedding</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
            <div class="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
              <div class="service__item">
                <img src="@/assets/img/services/service-2.png" alt />
                <h4>Clubs and bar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
            <div class="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
              <div class="service__item deep-bg">
                <img src="@/assets/img/services/service-4.png" alt />
                <h4>DJ lessons</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
            <div class="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
              <div class="service__item">
                <img src="@/assets/img/services/service-3.png" alt />
                <h4>Corporate events</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      id="servicesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="servicesModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
              src="https://www.youtube.com/embed/kFn64z09MWA?list=PLyYVay2_zZ5-APbq_hGcMu15CuCWVMeiV"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <!-- <iframe
                src="https://m.youtube.com/embed/kFn64z09MWA&list=PLyYVay2_zZ5-APbq_hGcMu15CuCWVMeiV&index=4&t=0s"
                allow="fullscreen"
                width="400"
                height="300"
                frameborder="0"
                allowfullscreen
            ></iframe>-->
          </div>
          <div class="modal-footer border-0"></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Section End -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Services"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
