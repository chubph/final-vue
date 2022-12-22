<script>

import {defineComponent} from "vue";
import HomePage from "./views/HomePage/HomePage.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

import {useUserStore} from "@/stores/userStore";

export default defineComponent({
  components: {
    Footer,
    Navbar,
    HomePage,

  },
  setup() {
    const userStore = useUserStore();
    return {userStore};
  }
});

document.addEventListener("DOMContentLoaded", () => {
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');
    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;
    if (e.keyCode === 27) {
      closeAllModals();
    }
  });
});
</script>

<template>

  <!--  <br/>-->
  <!--  <br/>-->
  <!--  <br/>-->
  <!--  <br/>-->

  <!--  <h2>Welcome , {{ userStore.user.username }}</h2>-->

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


#colYellow {
  background-color: yellow;

}

.bg-img {
  /*background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);*/
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background: rgb(7,30,54);
  background: radial-gradient(circle, rgba(7,30,54,1) 35%, rgba(2,0,36,1) 100%, rgba(54,54,54,1) 100%);

}
#bgr {
  background-image: url("background/controllers.jpg");
  opacity: 100%;
}
/*html, body {*/
/*  height: 100vh;*/
/*}*/

/*h1 {*/
/*  color: white;*/
/*}*/

#DarkBlue {
  background-color: #041221;
}

#LightBlueTextYellow {
  background-color: #071e36;
  color: #cdc50e;
}

#DarkBlueTextYellow {
  background-color: #041221;
  color: #cdc50e;
}

#LightBlue {
  background-color: #071e36;
}

#asteraki {
  color: #cdc50e;
}

#cardCol {
  /*background-color: #363636;*/
  text-decoration-color: papayawhip;
  background: rgb(4,18,33);
  background: linear-gradient(310deg, rgba(4,18,33,1) 20%, rgba(54,54,54,1) 84%, rgba(33,39,45,1) 97%);

}

</style>
