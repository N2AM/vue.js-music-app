<template>
  <div class="home">
    <Main></Main>
    <up-events></up-events>
    <MainContact></MainContact>
    <Services></Services>
    <LatestREcords></LatestREcords>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/home/Main.vue";
import UpEvents from "@/components/home/Up-Events.vue";
import MainContact from "@/components/home/Main-contact.vue";
import Services from "@/components/home/Services.vue";
import LatestREcords from "@/components/home/Latest-Records";

export default {
  name: "Home",
  components: { Main, UpEvents, MainContact, Services, LatestREcords }
};
</script>
