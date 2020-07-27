<template>
  <div class="home">
    <Main></Main>
    <up-events></up-events>
    <MainContact></MainContact>
    <Services></Services>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/home/Main.vue";
import UpEvents from "@/components/home/Up-Events.vue";
import MainContact from "@/components/home/Main-contact.vue";
import Services from "@/components/home/Services.vue";

export default {
  name: "Home",
  components: { Main, UpEvents, MainContact, Services }
};
</script>
