<script>import {defineComponent} from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      test: false,
      // visible: "is-hidden",
      username: "Philip"
    };
  },
  methods: {
    changeNav() {
      if (this.test === false) {
        this.test = true;
      } else {
        this.test = false;
      }
      console.log(this.test);
    }
  }
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
      <button @click="changeNav">Test</button>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">


          <!--          HIDE SIGN LOG BUTTONS WHEN LOGGED IN-->

          <!--          SIGN UP BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="test === false">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'signup' }" class="navbar-item">Sign Up</router-link>
              </span>
          </div>

          <!--          LOG IN BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="test === false">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'login' }" class="navbar-item">Log In</router-link>
              </span>
          </div>


          <!--          USER APPEARS WHEN LOGGED IN-->
          <!--         HELLO USER      -->
          <div class="navbar-item is-hoverable" v-if="test === true">
            <h1>Hello {{ username }}</h1>
          </div>

          <div class="navbar-item is-hoverable" v-if="test === true">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'homepage' }" class="navbar-item">Log Out</router-link>
              </span>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>