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
      <!-- <div class="row"> -->
      <div>
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </VueSlickCarousel>
      </div>
      <VueSlickCarousel class="event__slider" v-bind="settings">
        <div v-for="event in events" v-bind:key="event">
          <div class="event__item">
            <div class="event__item__pic set-bg" :data-setbg="event.img">
              <img v-bind:src="event.img" :alt="event.name" />
              <div class="tag-date">
                <span>{{ event.date }}</span>
              </div>
            </div>
            <div class="event__item__text">
              <h4>{{ event.name }}</h4>
              <p><i class="fa fa-map-marker"></i> {{ event.location }}</p>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <!-- </div> -->
    </div>
  </section>
  <!-- Event Section End -->
</template>

<script lang="ts">
import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";
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
          name: "David Guetta Miami Ultra",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-1.jpg"),
          date: "Dec 15, 2019",
        },
        {
          name: "David Guetta Miami Ultra",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-2.jpg"),
          date: "Dec 15, 2019",
        },
        {
          name: "David Guetta Miami Ultra",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-3.jpg"),
          date: "Dec 15, 2019",
        },
        {
          name: "David Guetta Miami Ultra",
          location: "Funkhaus Berlin, Berlin, Germany",
          img: require("@/assets/img/events/event-3.jpg"),
          date: "Dec 15, 2019",
        },
      ],
      settings: {
        dots: true,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        // infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // initialSlide: 0,
        focusOnSelect: false,
        rtl: true,
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
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
