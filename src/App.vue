<script >

import {defineComponent} from "vue";
import HomePage from "./views/HomePage/HomePage.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    HomePage
  }
})
</script>

<template>
  <header>
  <Navbar></Navbar>
  </header>

  <main class="ml-4">
    <router-view></router-view>
  </main>

<!--  <HomePage></HomePage>-->
  <Footer></Footer>
</template>

<style >
#color{
  background-color: yellow;

}

.bg-img {
  background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;

}
html, body {
  height: 100vh;
}

h1 {
  color: white;
}
#Button {
  background-color: #333367;
}

</style>
