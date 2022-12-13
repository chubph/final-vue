<script >

import {defineComponent} from "vue";
import HomePage from "./components/HomePage/HomePage.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    HomePage
  }
})
</script>

<template>
  <Navbar></Navbar>
  <HomePage></HomePage>
  <Footer></Footer>
</template>

<style scoped>

</style>
