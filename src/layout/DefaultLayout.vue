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
import Home from "../pages/Home/Home.vue";
export default {
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>
<style></style>