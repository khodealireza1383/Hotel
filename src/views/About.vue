<template>
  <div class="About">
    <!---------------------  The first part of the page about us  -------------------- -->
    <Header />

    <!-----------------------  This is a description of our work  -------------------------- -->
    <AboutContent />

    <!-- ------------------  The last part of the page about us  ------------------ -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/About/Header.vue";
import AboutContent from "../components/About/AboutContent.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  components: { Header, AboutContent, Footer },
};
</script>

<style>
</style>