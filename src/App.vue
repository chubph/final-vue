<script>

import {defineComponent} from "vue";
import HomePage from "./views/HomePage/HomePage.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

import { useUserStore } from "@/stores/userStore";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    HomePage

  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
})
</script>

<template>

  <br/>
  <br/>
  <br/>
  <br/>

  <h2>Welcome , {{ userStore.user.username }}</h2>

  <div class="bg-img">
    <header>
      <Navbar></Navbar>
    </header>



    <main class="ml-4">
      <router-view></router-view>
    </main>

    <!--  <HomePage></HomePage>-->
    <Footer>

    </Footer>

  </div>
</template>

<style>


#color {
  background-color: yellow;

}

.bg-img {
  /*background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);*/
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #071e36;

}

html, body {
  height: 100vh;
}

h1 {
  color: white;
}

#DarkBlue {
  background-color: #041221;
}

#NavbarBlue {
  background-color: #071e36;
}

</style>
