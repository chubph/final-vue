<script>import {defineComponent} from "vue";
import { useUserStore } from "@/stores/userStore";

export default defineComponent({
  name: "Navbar",
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
});
</script>


<template>
  <nav class="navbar is-focused is-fixed-top" role="navigation" aria-label="main navigation" id="DarkBlue">

    <div class="navbar-start">
      <a class="navbar-item" href="../#/">
        <strong>
          <router-link :to="{ name: 'homepage' }" class="navbar-item">Home</router-link>
        </strong>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">


          <!--          HIDE SIGN LOG BUTTONS WHEN LOGGED IN-->

          <!--          SIGN UP BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="userStore.test === false">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'signup' }" class="navbar-item">Sign Up</router-link>
              </span>
          </div>

          <!--          LOG IN BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="userStore.test === false">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'login' }" class="navbar-item">Log In</router-link>
              </span>
          </div>


          <!--          USER APPEARS WHEN LOGGED IN-->
          <!--         HELLO USER      -->
          <div class="navbar-item is-hoverable" v-if="userStore.test === true">
            <h1>Hello {{ userStore.user.username }}</h1>
          </div>

          <div class="navbar-item is-hoverable" v-if="userStore.test === true">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'homepage' }" class="navbar-item" @click="userStore.changeNav()">Log Out</router-link>
              </span>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>