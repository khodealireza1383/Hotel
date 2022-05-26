<template>
  <div class="Contact">
    <!------------------------  In this part, there is a contact page header  ----------------------- -->
    <Header />

    <!--------------------   In this section, we provide you with the method of contacting the site support team  ------------------------- -->
    <Contact />

    <!----------------- The last part of the blog site -------------------->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Contact/Header.vue";
import Contact from "../components/Contact/Contact.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  components: { Header, Contact, Footer },
};
</script>

<style scoped>
</style>