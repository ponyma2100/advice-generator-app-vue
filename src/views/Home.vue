<template>
  <Advice />
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Advice from "../components/Advice.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Advice, Footer },
};
</script>

<style scoped>
</style>

