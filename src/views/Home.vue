<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <up-events></up-events>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import UpEvents from "@/components/Up-Events.vue";
import Header from "@/components/marginals/Header.vue";
import Footer from "@/components/marginals/Footer.vue";

export default {
  name: "Home",
  components: {
    Main,
    UpEvents,
    Header,
    Footer
  }
};
</script>
