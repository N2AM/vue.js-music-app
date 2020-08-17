<template>
  <!-- Event Section Begin -->
  <section class="event spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Upcoming Events</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <VueSlickCarousel class="event__slider" v-bind="settings">
          <!-- v-bind:key="event" -->
          <div v-for="event in events" class="p-3">
            <div class="event__item">
              <div class="event__item__pic set-bg" :data-setbg="event.img">
                <img v-bind:src="event.img" :alt="event.name" />
                <div class="tag-date">
                  <span>{{ event.date }}</span>
                </div>
              </div>
              <div class="event__item__text">
                <h4>{{ event.name }}</h4>
                <p>
                  <i class="fa fa-map-marker"></i>
                  {{ event.location }}
                </p>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
  <!-- Event Section End -->
</template>

<script lang="ts">
import Vue from "vue";
var VueSlickCarousel = require("vue-slick-carousel");
import "vue-slick-carousel/dist/vue-slick-carousel.css";

// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default Vue.extend({
  name: "Up-Events",
  components: { VueSlickCarousel },
  data() {
    return {
      events: [
        {
          name: "Holy Quraan Event",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-1.jpg"),
          date: "Dec 15, 2019"
        },
        {
          name: "Holy Quraan Event",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-2.jpg"),
          date: "Dec 15, 2019"
        },
        {
          name: "Holy Quraan Event",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-3.jpg"),
          date: "Dec 15, 2019"
        },
        {
          name: "Holy Quraan Event",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-2.jpg"),
          date: "Dec 15, 2019"
        }
      ],
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        // speed: 500,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        focusOnSelect: false,
        rtl: true
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true,
        //     },
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2,
        //     },
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     },
        //   },
        // ],
      }
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.slick-prev,
.slick-next {
  position: absolute;
  top: -40px;
  z-index: 1;
}
.slick-next {
  right: 11px;

  &::before {
    content: "\f105";
    font-family: fontawesome;
    font-size: 26px;
    color: grey;
  }
}
.slick-prev {
  right: 35px;
  left: unset;
  &::before {
    content: "\f104";
    font-family: fontawesome;
    font-size: 26px;
    color: grey;
  }
}
</style>
