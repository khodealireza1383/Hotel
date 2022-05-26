<template>
  <!-- ----------- Header page room  ----------- -->
  <Header />

  <!-- Brief description about the hotel -->
  <About />

  <!-- Hotel rooms are displayed in this section -->
  <PackageRoom />

  <!-- ---------------  In this section, we write about the facilities of the rooms  --------------------- -->
  <Possibilities />

  <!-- --------------  The last part of the room page  -------------------- -->
  <Footer />
</template>

<script>
import Header from "../components/Otagh/Header.vue";
import About from "../components/Otagh/About.vue";
import PackageRoom from "../components/Otagh/PackageRoom.vue";
import Possibilities from "../components/Otagh/Possibilities.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: { Header, About, PackageRoom, Possibilities, Footer },
};
</script>

<style>
</style>