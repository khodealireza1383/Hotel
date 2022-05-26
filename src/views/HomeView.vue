<template>
  <!-- ---------- Header home page  -------------- -->
  <Header />

  <!-- ---------- about room and img room ---------- -->
  <Slider />

  <!-- ----------  How to book a room ---------->
  <Rezerv />

  <!-- ----------- Description about the sights of Mashhad ---------------- -->
  <Blog />

  <!-- --------------- Plane photos for beauty ---------- -->
  <Airplane />

  <!-- ----------------  And the last part of the home page -------------- -->
  <Footer />
</template>

<script>
import Header from "../components/HomePage/Header.vue";
import Slider from "../components/HomePage/Slider.vue";
import Rezerv from "../components/HomePage/Rezerv.vue";
import Blog from "../components/HomePage/Blog.vue";
import Airplane from "../components/HomePage/Airplane.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "HomeView",
  components: { Header, Slider, Rezerv, Blog, Airplane, Footer },
};
</script>
<style scoped>
@font-face {
  font-family: "aban";
  src: url(../assets/font/W_aban.ttf);
}
</style>