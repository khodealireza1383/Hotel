<template>
  <div class="Home">
    <!-- ---------- Header home page  -------------- -->
    <Header />

    <!-- ---------- about room and img room ---------- -->
    <Blog />

    <!-- In this part, there is our app and our social networks -->
    <Media />

    <!-- ----------- Description about the sights of Mashhad ---------------- -->

    <Tourist />

    <!-- --------------- Plane photos for beauty ---------- -->
    <Airplane />

    <!-- ----------------  And the last part of the home page -------------- -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Home2/Header.vue";
import Blog from "../components/Home2/Blog.vue";
import Media from "../components/Home2/Media.vue";
import Tourist from "../components/Home2/Tourist.vue";
import Airplane from "../components/Home2/Airplane.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  components: { Header, Blog, Media, Tourist, Airplane, Footer },
};
</script>

<style scoped>
</style>