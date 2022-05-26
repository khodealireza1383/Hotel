<template>
  <div class="blog">
    <!-------------- Header  blog ---------->
    <Header />

    <!-------------  In this part, we see the sights of Mashhad  --------------->
    <Tourist />

    <!----------------- The last part of the blog site -------------------->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Blog/Header.vue";
import Tourist from "../components/Blog/Tourist.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  components: { Header, Tourist, Footer },
};
</script>

<style scoped>
</style>