<template>
  <main>
    <Header />
    <router-view />
    <Footer />
  </main>
</template>
<script>
import Footer from "../components/Footer/Footer.vue";
import Header from "../components/Header/Header.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>